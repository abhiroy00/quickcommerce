import Product from "./features/product/Product";
import Header from "./comman/Header";
import { createBrowserRouter, RouterProvider,Outlet } from "react-router-dom";
import Productdetail from "./features/product/ProductDetail";


export default function App() {
  const router=createBrowserRouter([
    {
      path:"/",
      element:<Header>
      </Header>
      
      ,
      children:[
        {
          path:"/product",
          element:<Product></Product>
        },
        {
          path:"product/:id",
          element:<Productdetail ></Productdetail >
        }

      ]


    },

  ])
 


  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
     
      
    </div>
  )
}
