export const reponseSuscess = ({ status = 200, message = "success", data = {} }) => {
    return {
        status,
        message,
        data,
        success: true
    };
};

export const reponseError = ({ status = 400, message = "error", data = {} }) => {
    return {
        status,
        message,
        data,
        success: false
    };
};
