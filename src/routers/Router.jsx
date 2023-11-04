import {
    createBrowserRouter,
} from "react-router-dom";
// import App from "../App";
import MainLayout from "../layouts/MainLayout/MainLayout";
import Home from './../pages/Home/Home';
import AddJob from "../pages/AddJob/AddJob";
import MyPostedJobs from "../pages/MyPostedJobs/MyPostedJobs";
import Registration from "../pages/Registration/Registration";
import Login from "../pages/Login/Login";
import MyBids from "../pages/MyBids/MyBids";
import BidRequests from "../pages/BidRequests/BidRequests";

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
                path: "/AddJob",
                element: <AddJob></AddJob>,
                // error// element: <Error></Error>,
            },
            {
                path: "/MyPostedJobs",
                element: <MyPostedJobs></MyPostedJobs>,
                // error// element: <Error></Error>,
            },
            {
                path: "/MyBids",
                element: <MyBids></MyBids>,
                // error// element: <Error></Error>,
            },
            {
                path: "/BidRequests",
                element: <BidRequests></BidRequests>
                // error// element: <Error></Error>,
            },
            {
                path: "/Registration",
                element: <Registration></Registration>,
                // error// element: <Error></Error>,
            },
            {
                path: "/Login",
                element: <Login></Login>,
                // error// element: <Error></Error>,
            },
            {
                path: "/profile",
                // element: <PrivateRoutes><Profile></Profile></PrivateRoutes>,
                // error// element: <Error></Error>,
            },

        ],

    },

]);

export default router;