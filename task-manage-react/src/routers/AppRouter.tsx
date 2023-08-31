import { Outlet, RouteObject, useRoutes } from "react-router-dom";
import { routeNotFoundPageProperty } from "./commonPageProperty";
import ProjectTaskBoardPage from "@/pages/appPages/projectPages/projectBoardPage/ProjectTaskBoardPage";
import TopPage from "@/pages/appPages/topPage/TopPage";

const topPage: RouteObject = {
  index: true,
  element: <TopPage />,
};

const projectTaskBoardPage: RouteObject = {
  path: "board",
  element: <ProjectTaskBoardPage />,
};

const projectPage: RouteObject = {
  path: "project/:projectId",
  element: <Outlet />,
  children: [projectTaskBoardPage, routeNotFoundPageProperty],
};

const appPageProperties = {
  topPage,
  projectPage,

  routeNotFoundPageProperty,
};

const appPageProperyList = Object.values(appPageProperties);

/**
 * アカウントのログインや認証に関するページのルータ
 * @returns
 */
const AppRouter = () => {
  const router = useRoutes(appPageProperyList);
  return <>{router}</>;
};

export default AppRouter;
