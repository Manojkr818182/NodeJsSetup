import AppError from "../utils/appError.js";
import User from "../models/user.model.js";

export const welcome = async () => {
    try {
        let a = 20;
        if (a === 20) {
            throw new AppError("Email allready exist",401);
        }
        return "Everything correct.";
    } catch (err) {
        throw (err);
    }
};

export const registerUser  = async(req_data)=>{
    return true;
}