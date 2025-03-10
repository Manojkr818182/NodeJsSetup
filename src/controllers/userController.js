import { registerUser, welcome } from "../services/useServices.js";
import { addEmailToQueue } from "../jobs/redisQueue.js";

export const hello = async (req, res, next) => {
    try {
        const data = await welcome();
        res.json({
            status: true,
            message: 'Hellooo...',
            data: data
        });
    } catch (err) {
        next(err);
    }
};

export const register = async (req, res, next) => {
    try {
        const data = await registerUser(req.body)
        await addEmailToQueue(req.body.email, req.body.name);
        res.json({
            status: true,
            message: 'Hellooo...',
            data: data
        });
    } catch (err) {
        next(err);
    }
};