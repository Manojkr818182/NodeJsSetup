import AppError from "../utils/appError.js";

export const errorHandler = async (error, req, res, next) => {
    if (error instanceof AppError) {
        return res.status(error.statusCode).json({ status: error.statusCode, message: error.message });
    }
    console.log("ERROR", error);
    return res.status(500).json({ status: 500, message: "Internal Server Error" });
};