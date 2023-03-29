module.exports = {
    success: (res, message, status, data) => {
        res.status(status).send({
            message,
            status,
            data,
        });
    },
    error: (res, status, err) => {
        res.status(status).send({
            message: "Error Network",
            status,
            err,
        });
    },
};