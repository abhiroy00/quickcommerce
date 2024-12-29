import Product from "./features/product/Product";
import Header from "./comman/Header";
import { createBrowserRouter, RouterProvider,Outlet } from "react-router-dom";


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
