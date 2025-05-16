import { TodoService } from "../services/TodoService.js";
import { parseBody } from "../utils/parseBody.js";

const service = new TodoService();

export class TodoController {

    static async getAll(req, res) {
        try {
            const todos = await service.getTodos();
            res.writeHead(200, { "Content-Type": "application/json" });
            res.end(JSON.stringify(todos));
        } catch (error) {
            TodoController.handleError(res, error);
        }
    }

    static async create(req, res) {
        try {
            const body = await parseBody(req);
            const { title } = body;

            if (!title) {
                res.writeHead(400, { "Content-Type": "application/json" });
                res.end(JSON.stringify({ error: "Title is required" }));
                return;
            }

            const todo = await service.addTodo(title);
            res.writeHead(201, { "Content-Type": "application/json" });
            res.end(JSON.stringify(todo));
        } catch (error) {
            TodoController.handleError(res, error);
        }
    }

    static async update(req, res, id) {
        try {
            const body = await parseBody(req);
            const update = body;

            if (!id) {
                res.writeHead(400, { "Content-Type": "application/json" });
                res.end(JSON.stringify({ error: "ID is required" }));
                return;
            }

            const todo = await service.updateTodo(update, id);
            res.writeHead(200, { "Content-Type": "application/json" });
            res.end(JSON.stringify(todo));
        } catch (error) {
            TodoController.handleError(res, error);
        }
    }

    static async delete(req, res, id) {
        try {
            if (!id) {
                res.writeHead(400, { "Content-Type": "application/json" });
                res.end(JSON.stringify({ error: "ID is required" }));
                return;
            }

            const todo = await service.deleteTodo(id);
            res.writeHead(200, { "Content-Type": "application/json" });
            res.end(JSON.stringify(todo));
        } catch (error) {
            TodoController.handleError(res, error);
        }
    }

    static handleError(res, error) {
        console.error("Error:", error);
        res.writeHead(500, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ error: error.message }));
    }
}