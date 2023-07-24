import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";

import { PUBLIC_ROUTES } from "./config/router";

export const AppRouter = () => {
  return (
    <>
      <Suspense fallback={<span>Loading...</span>}>
        <Routes>
          {PUBLIC_ROUTES.map((route) => {
            return <Route path={route.path} key={route.path} element={route.element} />;
          })}
        </Routes>
      </Suspense>
    </>
  );
};
