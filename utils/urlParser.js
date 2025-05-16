export const extractIdFromUrl = (url) => {
    const urlParts = url.split("/");

    console.log("URL Parts:", urlParts);

    const id = urlParts[urlParts.length - 1];
    return id;
}