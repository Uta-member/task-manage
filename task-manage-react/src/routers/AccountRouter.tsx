import { RouteObject, useRoutes } from "react-router-dom";
import { routeNotFoundPageProperty } from "./commonPageProperty";
import LoginPage from "@/pages/accountPages/loginPage/LoginPage";
import RegisterUserPage from "@/pages/accountPages/registerUserPage/RegisterUserPage";
import AuthUserPage from "@/pages/accountPages/authUserPage/AuthUserPage";

const loginPage: RouteObject = {
  path: "login",
  element: <LoginPage />,
};

const registerUserPage: RouteObject = {
  path: "register_user",
  element: <RegisterUserPage />,
};

const authUserPage: RouteObject = {
  path: "auth/:id",
  element: <AuthUserPage />,
};

const accountPageProperties = {
  loginPage,
  registerUserPage,
  routeNotFoundPageProperty,
  authUserPage,
};

const accountPageProperyList = Object.values(accountPageProperties);

/**
 * アカウントのログインや認証に関するページのルータ
 * @returns
 */
const AccountRouter = () => {
  const router = useRoutes(accountPageProperyList);
  return <>{router}</>;
};

export default AccountRouter;
