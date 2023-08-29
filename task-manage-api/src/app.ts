import cors from "cors";
import express from "express";
import { createServer } from "http";
import socketio from "socket.io";
import mainRouter from "./routers/mainRouter";
import { mainSocket } from "./sockets/mainSocket";
import { config } from "dotenv";

config();
const app = express();
const server = createServer(app);
const corsOptions = {
  origin: "*",
  methods: ["GET", "POST"],
  credentials: true,
  optionsSuccessStatus: 200,
};

export const io = new socketio.Server(server, { cors: corsOptions });

io.on("connection", mainSocket);

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(mainRouter);

try {
  const port = process.env.PORT_NO;
  server.listen(port, () => {
    console.log(`開発サーバ起動: http://localhost:${port}/`);
  });
} catch (e) {
  if (e instanceof Error) {
    console.error(e.message);
  }
}

export default app;
