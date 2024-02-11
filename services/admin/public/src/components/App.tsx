import React, { Suspense } from "react";
import { Link, Outlet } from "react-router-dom";

export const App = () => {
  return (
    <div data-testId={"App.DataTestId"}>
      <h1>Page</h1>
      <Link to={"/about"}>about</Link>
      <br />
      <Link to={"/shop"}>shop</Link>
      <br />
      <Link to={"/"}>main</Link>
      <Suspense fallback={"Loading..."}>
        <Outlet />
      </Suspense>
    </div>
  );
};
