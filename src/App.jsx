import Product from "./features/product/Product";
import Header from "./comman/Header";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Productdetail from "./features/product/ProductDetail";
import Cart from "./features/cart/Cart";
import Register from "./comman/Register";
import Login from "./comman/Login";

export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Header></Header>,

      children: [
        {
          path: "/product",
          element: <Product></Product>,
        },
        {
          path: "product/:id",
          element: <Productdetail></Productdetail>,
        },
        {
          path: "/cart",
          element: <Cart></Cart>,
        },
        {
          path: "/register",
          element: <Register></Register>,
        },
        {
          path: "/login",
          element: <Login></Login>,
        },
      ],
    },
  ]);

  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}
