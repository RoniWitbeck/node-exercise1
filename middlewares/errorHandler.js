export const errorHandler = (err, req, res, next) => {
    console.error(err);
    res.status(err.status || 500).json({
        name: err.name || "Unkown error",
        msg: err.message || "Server error has occurred.",
    });
};