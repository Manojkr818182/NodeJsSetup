import { welcome } from "../services/useServices.js";

export const hello = async (req, res, next) => {
    try {
        const data = await welcome();
        res.json({
            status: true,
            message: 'Hellooo...',
            data:data
        });
    } catch (err) {
        next(err);
    }
};