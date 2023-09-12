import { createBrowserRouter } from "react-router-dom";
import BasketPage from "../components/BasketPage";
import ShowCarts from "../components/ShowCarts";

const router = createBrowserRouter([
  {
    path: "/",
    element: <ShowCarts />,
  },
  {
    path: "/Basket",
    element: <BasketPage />,
  },
]);

export default router;
