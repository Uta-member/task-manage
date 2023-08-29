import Authorization from "@/components/auth/Authorization";
import MainFrame from "@/components/frames/mainFrame/MainFrame";
import RouteNotFoundPage from "@/pages/errorHandlePages/routeNotFoundPage/RouteNotFoundPage";
import TopPage from "@/pages/appPages/topPage/TopPage";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import AccountRouter from "./AccountRouter";
import IndexPage from "@/pages/indexPage/IndexPage";

/**
 * ルータの起点
 * @returns
 */
const MainRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<IndexPage />} />
        <Route
          path="app/"
          element={
            <Authorization>
              <MainFrame>
                <Outlet />
              </MainFrame>
            </Authorization>
          }
        >
          <Route index element={<TopPage />} />
        </Route>
        <Route path={"account/*"} element={<AccountRouter />}></Route>
        <Route path="*" element={<RouteNotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default MainRouter;
