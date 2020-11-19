export const getBearer = () => {
    try {
        return window.localStorage.token;
    } catch (e) {
        return false;
    }
};