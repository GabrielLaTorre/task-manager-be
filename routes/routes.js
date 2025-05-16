import { TodoController } from "../controllers/TodoController.js";
import { extractIdFromUrl } from "../utils/urlParser.js";

const routes = {
    GET: {
        "/todos": TodoController.getAll,
    },
    POST: {
        "/todos": TodoController.create,
    },
    PUT: {
        "/todos/:id": TodoController.update,
    },
    DELETE: {
        "/todos/:id": TodoController.delete,
    },
}

export const router = async (req, res) => {
    const { method, url } = req;

    if (routes[method]?.[url]) {
        const routeHandler = routes[method][url];
        return routeHandler(req, res);
    }

    const dynamicRoute = Object.keys(routes[method] || {}).find(route => {
        route.includes("/:id") && url.starsWith(route.split("/:id")[0])
    });

    if (dynamicRoute) {
        const id = extractIdFromUrl(url);
        const routeHandler = routes[method][dynamicRoute];

        return routeHandler(req, res, id);
    }

    res.writeHead(404, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ error: "Route not found" }));
}