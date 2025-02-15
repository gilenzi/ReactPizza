import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import { Layout } from "./layout/layout";
import Home from "./pages/home/home";
import { getMenu } from "./services/api-restaurant";
import { Cart } from "./pages/cart/cart";
import { Order } from "./pages/order/order";
import { createOrder } from "./ui/order-form/order-form";
import Menu from "./pages/menu/menu";
import {
  loader as LoadOrderDetails,
  OrderDetails,
} from "./pages/order-details/order-details";
import { ProtectedRoute } from "./components/protected-route/protected-route";

const router = createBrowserRouter([
  {
    element: <Layout />,
    errorElement: <h1>Not found...</h1>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        element: <ProtectedRoute />,
        children: [
          {
            path: "menu",
            element: <Menu />,
            loader: getMenu,
          },
          {
            path: "cart",
            element: <Cart />,
          },
          {
            path: "order",
            children: [
              {
                path: "new",
                element: <Order />,
                action: createOrder,
              },
              {
                path: ":id",
                element: <OrderDetails />,
                loader: LoadOrderDetails,
              },
            ],
          },
        ],
      },
      {
        path: "*",
        element: <h1>404 - Page Not Found</h1>,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
