import Redis from "ioredis";

const redisConnection = {
    host: process.env.REDIS_HOST,
    port: process.env.REDIS_PORT
};

const redisClient = new Redis(redisConnection);

redisClient.on("connect", () => console.log("🟢 Redis connected"));
redisClient.on("error", (err) => console.error("🔴 Redis error:", err));

export { redisConnection, redisClient };