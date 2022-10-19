import http from "http";
import app from "./app";
import { PORT } from "./constant";
import { Client } from "pg";

const server = http.createServer(app);
const client = new Client({
  host: "postgres",
  user: "root",
  password: "root",
});
(async () => {
  await client.connect();
  server.listen(PORT, () => {
    console.log(`server is runing on port ${PORT}`);
  });
})();
