import {
  RouteObject,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import App from "../App";
import * as Pages from "../pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      ...Object.entries(Pages).map(
        ([key, Component]) =>
          ({
            path: Component.path ?? key,
            element: <Component />,
          } as RouteObject)
      ),
    ],
  },
]);

const Routes = () => {
  return <RouterProvider router={router} />;
};

export default Routes;
