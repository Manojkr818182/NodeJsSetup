FROM node:18-alpine
WORKDIR /app
COPY . .
RUN npm install
ENV PORT 6060
CMD ["node", "server.js"]