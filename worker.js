import { Worker } from "bullmq";
import { redisConnection } from "./src/config/redisCon.js";


const emailWorker = new Worker(
    "emailQueue",
    async (job) => {
        console.log(`📨 Processing job ${job.id}: Sending email to ${job.data.toEmail}`);
    },
    { connection: redisConnection }
);

emailWorker.on("completed", (job) =>
    console.log(`✅ Job ${job.id} completed successfully`)
);
emailWorker.on("failed", (job, err) =>
    console.log(`❌ Job ${job.id} failed:`, err)
);
