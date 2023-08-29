import RouteNotFoundPage from "@/pages/errorHandlePages/routeNotFoundPage/RouteNotFoundPage";
import { RouteObject } from "react-router-dom";

export const routeNotFoundPageProperty: RouteObject = {
  path: "*",
  element: <RouteNotFoundPage />,
};
