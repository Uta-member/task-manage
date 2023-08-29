import axios from "axios";
import { io } from "socket.io-client";

//#region バックエンドのアドレスの設定
const apiUrl = import.meta.env.VITE_REST_API_END_POINT;
//#endregion

//#region socketの設定
export const socket = io(apiUrl);

export const connectSocket = () => {
  // バックとフロントでsocket.on("connection")を実行すると接続できる
  socket.on("connection", () => {});
};
//#endregion

//#region axiosの設定
export const server = axios.create({
  baseURL: apiUrl,
});
//#endregion
