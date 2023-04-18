import React from "react";
import loadable from "@loadable/component";
import type { RouteObject } from "react-router-dom";
import { Outlet, createBrowserRouter } from "react-router-dom";
import Loading from "shared/components/common/Loading";
import PrivateLayout from "shared/components/layouts/PrivateLayout";
import { PATH_URL } from "shared/constants/app";

interface ChildRouteType {
  component: React.ComponentType;
  havePrivateLayout?: boolean;
  path: string;
}

function PrivateRoute({
  component: Comp,
  havePrivateLayout,
}: Omit<ChildRouteType, "path">) {
  return havePrivateLayout ? (
    <PrivateLayout>
      <Comp />
    </PrivateLayout>
  ) : (
    <Comp />
  );
}

const routes: RouteObject[] = [
  {
    children: [
      {
        element: (
          <PrivateRoute
            component={loadable(() => import("pages"), {
              fallback: <Loading />,
            })}
            havePrivateLayout
          />
        ),
        path: PATH_URL.home,
      },
    ],
    element: <Outlet />,
    path: "/",
  },
  {
    lazy: () => import("pages/not-found-page"),
    path: "*",
  },
];

export const router = createBrowserRouter(routes);
