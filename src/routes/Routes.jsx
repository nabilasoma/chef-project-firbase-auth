import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home";
import Registration from "../pages/registratoin/Registration";
import Login from "../pages/login/Login";
import Blog from "../pages/blog/Blog";
import Details from "../layouts/details/Details";
import InfoPage from "../pages/infoPage/InfoPage";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: ({params}) => fetch(`http://localhost:5000/allChef/${params.id}`)
                
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
    {
        path: '/chefInfo/:id',
        element: <Details></Details>,
        loader: ({params}) => fetch(`http://localhost:5000/chefInfo/${params.id}`)
        // children: [
        //     {
        //         path: ':id',
        //         element: <InfoPage></InfoPage>,
                
               
        //     }
        // ]
    }
    

])

export default router;