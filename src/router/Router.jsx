import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import AddProducts from "../pages/AddProducts";
import Products from "../pages/Products";
import Register from "../pages/Register";
import Login from "../pages/Login";

const router=createBrowserRouter([
    {
        path:"/",
        element:<MainLayout></MainLayout>,
        children:[
            {
                path:'/',
                element:<Home></Home>,
                loader:()=> fetch('http://localhost:5000/products')

                
            },
            {
                path:'/addproducts',
                element:<AddProducts></AddProducts>
            },  
            {
                path:'/products/:id',
                element:<Products></Products>,
                loader:({params})=>fetch(`http://localhost:5000/products/${params.id}`)
               
            },
            {
                path:'/register',
                element:<Register></Register>
            },
            {
                path:'login',
                element:<Login></Login>
            }
        ]


    }
])
export default router