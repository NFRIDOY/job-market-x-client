import { useQuery } from "@tanstack/react-query"
import useAuth from "../../hooks/useAuth"
import useAxios from "../../hooks/useAxios"
import { useEffect, useState } from "react"
import MyPostedJobCard from "../../components/MyPostedJobCard/MyPostedJobCard"
import MyPostedJobsContainer from "../../components/MyPostedJobsContainer/MyPostedJobsContainer"



export default function MyPostedJobs() {

    useEffect(() => {
        const routeName = location.pathname === '/MyPostedJobs' ? 'My Posted Jobs' : "";

        document.title = `Job Market X | ${routeName}`;
        console.log(document.title)
    }, [])



    return (
        <div>
            {/* <h1 className="text-center text-7xl py-10">My Posted Jobs</h1> */}
            {/* <h1 className="text-center text-xl">You Can See All Your Posted Jobs</h1> */}
            <div>
                <MyPostedJobsContainer> </MyPostedJobsContainer>
            </div>
        </div>
    )
}
