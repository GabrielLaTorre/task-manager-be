export const extractIdFromUrl = (url) => {
    const urlParts = url.split("/");

    const id = urlParts[urlParts.length - 1];
    return id;
}