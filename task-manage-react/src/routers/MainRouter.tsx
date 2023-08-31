import Authorization from "@/components/auth/Authorization";
import MainFrame from "@/components/frames/mainFrame/MainFrame";
import RouteNotFoundPage from "@/pages/errorHandlePages/routeNotFoundPage/RouteNotFoundPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AccountRouter from "./AccountRouter";
import IndexPage from "@/pages/indexPage/IndexPage";
import AppRouter from "./AppRouter";

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
          path="app/*"
          element={
            <Authorization>
              <MainFrame>
                <AppRouter />
              </MainFrame>
            </Authorization>
          }
        />
        <Route path={"account/*"} element={<AccountRouter />} />
        <Route path="*" element={<RouteNotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default MainRouter;
