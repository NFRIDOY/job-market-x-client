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
import Error from "../components/Error/Error";

// const axios = useAxios()
const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        errorElement: <Error></Error>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                errorElement: <Error></Error>,
                children: [
                    {
                        path: "/",
                        // element: 
                    }
                ]
            },
            {
                path: "/Jobs/:id",
                // loader: ({ params }) => fetch(`http://localhost:5000/api/v1/allJobs/${params.id}`),
                // loader: ({ params }) => fetch(`https://job-market-x-server-ctgu3d28z-nfridoy.vercel.app/api/v1/allJobs/${params.id}`),
                // loader: ({ params }) => axios.get(`/allJobs/${params.id}`),
                element: <PrivateRoute><JobDetails></JobDetails></PrivateRoute>,
                errorElement: <Error></Error>,
            },
            {
                path: "/AddJob",
                element: <PrivateRoute><AddJob></AddJob></PrivateRoute>,
                errorElement: <Error></Error>,
            },
            {
                path: "/MyPostedJobs",
                element: <PrivateRoute><MyPostedJobs></MyPostedJobs></PrivateRoute>,
                errorElement: <Error></Error>,
            },
            {
                path: "/MyPostedJobs/:id",
                // loader: fetch(`/MyPostedJobs/${prams.id}`),
                element: <PrivateRoute><UpdateMyPostedJobCard></UpdateMyPostedJobCard></PrivateRoute>,
                errorElement: <Error></Error>,
            },
            {
                path: "/MyBids",
                element: <PrivateRoute><MyBids></MyBids></PrivateRoute>,
                errorElement: <Error></Error>,
            },
            {
                path: "/BidRequests",
                element: <PrivateRoute><BidRequests></BidRequests></PrivateRoute>,
                errorElement: <Error></Error>,
            },
            {
                path: "/Registration",
                element: <Registration></Registration>,
                errorElement: <Error></Error>,
            },
            {
                path: "/Login",
                element: <Login></Login>,
                errorElement: <Error></Error>,
            },
            {
                path: "/profile",
                element: <PrivateRoute><Profile></Profile></PrivateRoute>,
                errorElement: <Error></Error>,
            },

        ],

    },

]);

export default router;