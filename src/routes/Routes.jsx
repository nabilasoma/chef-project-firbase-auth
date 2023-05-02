import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home";
import Registration from "../pages/registratoin/Registration";
import Login from "../pages/login/Login";
import Blog from "../pages/blog/Blog";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
                
            },
            {
                path: '/login',
                element:<Login></Login>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            }
        ]
    
    },
    {
        path: '/registration',
        element: <Registration></Registration>
    },
])

export default router;