import makeApiCall from "../utils/api/makeApiCall";

export const apiGetPosts = () =>
    makeApiCall({
        url: 'https://jsonplaceholder.typicode.com/posts',
        method: 'GET'
    });