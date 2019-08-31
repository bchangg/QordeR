import React from "react";
import Restaurant from "./components/Restaurant";
import Order from "./components/Order";
import Admin from "./components/Admin";
import Menu from "./components/Menu";
import Application from "./components/Application";

const routes = {
  "/": () => <Application />,
  "/restaurant": () => <Restaurant />,
  "/order": () => <Order />,
  "/admin": () => <Admin />,
  "/menu": () => <Menu />
};

export default routes;