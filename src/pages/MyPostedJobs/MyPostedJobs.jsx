import { useQuery } from "@tanstack/react-query"
import useAuth from "../../hooks/useAuth"
import useAxios from "../../hooks/useAxios"
import { useState } from "react"
import MyPostedJobCard from "../../components/MyPostedJobCard/MyPostedJobCard"
import MyPostedJobsContainer from "../../components/MyPostedJobsContainer/MyPostedJobsContainer"


export default function MyPostedJobs() {
    

    


    return (
        <div>
            <h1 className="text-center text-7xl py-10">My Posted Jobs</h1>
            <div>
                <MyPostedJobsContainer> </MyPostedJobsContainer>
            </div>
        </div>
    )
}
