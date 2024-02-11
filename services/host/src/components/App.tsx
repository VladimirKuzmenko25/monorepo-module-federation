import React, { Suspense } from "react";
import { Link, Outlet } from "react-router-dom";
import { shopRoutes } from "@packages/shared/src/routes/shop";
import { adminRoutes } from "@packages/shared/src/routes/admin";

export const App = () => {
  return (
    <div data-testId={"App.DataTestId"}>
      <h1>HOST MODULE</h1>
      <Link to={adminRoutes.main}>about</Link>
      <br />
      <Link to={shopRoutes.main}>shop main</Link>
      <br />
      <Link to={"/"}>main</Link>
      <Suspense fallback={"Loading..."}>
        <Outlet />
      </Suspense>
    </div>
  );
};
