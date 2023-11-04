import {
    createBrowserRouter,
} from "react-router-dom";
// import App from "../App";
import MainLayout from "../layouts/MainLayout/MainLayout";
import Home from './../pages/Home/Home';

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        // error// element: <Error></Error>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                // error// element: <Error></Error>,
            },
            {
                path: "/events",
                loader: () => fetch('/eventData.json'),
                // element: <Events></Events>,
                // error// element: <Error></Error>,
            },
            {
                path: "/registration",
                // element: <Registration></Registration>,
                // error// element: <Error></Error>,
            },
            {
                path: "/login",
                // element: <Login></Login>,
                // error// element: <Error></Error>,
            },
            {
                path: "/wishlist",
                loader: () => fetch('/eventData.json'),
                // element: <PrivateRoutes><Wishlist></Wishlist></PrivateRoutes>,
                // error// element: <Error></Error>,
            },
            {
                path: "/orders",
                loader: () => fetch('/eventData.json'),
                // element: <PrivateRoutes><Orders></Orders></PrivateRoutes>,
                // error// element: <Error></Error>,
            },
            {
                path: "/profile",
                // element: <PrivateRoutes><Profile></Profile></PrivateRoutes>,
                // error// element: <Error></Error>,
            },
            {
                path: "/eventDetailsCard/:id",
                loader: () => fetch("/eventData.json"),
                // element: <PrivateRoutes><EventDetailsCard></EventDetailsCard></PrivateRoutes>,
                // error// element: <Error></Error>,
            },

        ],

    },
    
]);

export default router;