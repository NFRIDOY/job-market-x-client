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
import PrivateRoute from "./PrivateRoute";
import UpdateMyPostedJobCard from "../components/UpdateMyPostedJobCard/UpdateMyPostedJobCard";
import useAxios from "../hooks/useAxios";
import JobDetails from "../components/JobDetails/JobDetails";
import Profile from "../pages/Profile/Profile";

// const axios = useAxios()
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
                path: "/Jobs/:id",
                // loader: ({ params }) => fetch(`http://localhost:5000/api/v1/allJobs/${params.id}`),
                loader: ({ params }) => fetch(`https://job-market-x-server-ctgu3d28z-nfridoy.vercel.app/api/v1/allJobs/${params.id}`),
                // loader: ({ params }) => axios.get(`/allJobs/${params.id}`),
                element: <JobDetails></JobDetails>,
                // error// element: <Error></Error>,
            },
            {
                path: "/AddJob",
                element: <PrivateRoute><AddJob></AddJob></PrivateRoute>,
                // error// element: <Error></Error>,
            },
            {
                path: "/MyPostedJobs",
                element: <PrivateRoute><MyPostedJobs></MyPostedJobs></PrivateRoute>,
                // error// element: <Error></Error>,
            },
            {
                path: "/MyPostedJobs/:id",
                // loader: fetch(`/MyPostedJobs/${prams.id}`),
                element: <PrivateRoute><UpdateMyPostedJobCard></UpdateMyPostedJobCard></PrivateRoute>,
                // error// element: <Error></Error>,
            },
            {
                path: "/MyBids",
                element: <PrivateRoute><MyBids></MyBids></PrivateRoute>,
                // error// element: <Error></Error>,
            },
            {
                path: "/BidRequests",
                element: <PrivateRoute><BidRequests></BidRequests></PrivateRoute>,
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
                element: <PrivateRoute><Profile></Profile></PrivateRoute>,
                // error// element: <Error></Error>,
            },

        ],

    },

]);

export default router;