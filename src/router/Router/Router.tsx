import { FC, Suspense } from "react";

import { Route, Routes, BrowserRouter } from "react-router-dom";

// Components
import Layout from "../../layout/Layout";
import { generalRoutes } from "./config";

const Router: FC = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Suspense fallback={<div>loading...</div>}>
          <Routes>
            {generalRoutes.map((route) => (
              <Route
                key={route.path}
                path={route.path}
                element={<route.component />}
              />
            ))}
          </Routes>
        </Suspense>
      </Layout>
    </BrowserRouter>
  );
};

Router.defaultProps = {};

export default Router;
