import { Queue } from "bullmq";
import { redisClient } from "../config/redisCon.js";

const emailQueue = new Queue(
    "emailQueue",
    { connection: redisClient }
);

const addEmailToQueue = async (toEmail, name) => {
    let subject = `Hey ${name} your account is created!`;
    let text = "your account is created successfully."
    await emailQueue.add(
        "sendEmail",
        { toEmail: toEmail, subject: subject, text: text },
        { attempts: 3 }
    );
    console.log(`📩 Email job added for ${toEmail}`);
};

export { emailQueue, addEmailToQueue };
