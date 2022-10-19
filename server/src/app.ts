import express from "express";
import helmet from "helmet";
import path from "path";
const app = express();


app.use(helmet());
app.use(express.json());
app.use(express.static(path.join(__dirname, "..", "public")));

app.get("/*", (_, res) => {
  res.sendFile(path.join(__dirname, "..", "public", "index.html"));
});

export default app;
