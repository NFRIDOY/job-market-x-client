import { useQuery } from "@tanstack/react-query";
import MyPostedJobCard from "../MyPostedJobCard/MyPostedJobCard";
import useAxios from "../../hooks/useAxios";
import { useState } from "react";
import useAuth from "../../hooks/useAuth";
import LoadingAnimations from "../LoadingAnimations/LoadingAnimations";
import JobCard from "../JobCard/JobCard";


export default function AllJobs() {
    const [postedJobData, setPostedJobData] = useState([])
    const axios = useAxios()
    const { user } = useAuth()

    const { isPending, error, data: AllJobs } = useQuery({
        queryKey: ['AllJobs'],
        queryFn: () =>
            axios.get(`/allJobs`).then(
                // axios.get(`/allJobs?email=${user.email}`).then(
                (res) => {
                    console.log(res.data)
                    console.log(AllJobs)
                    setPostedJobData(res.data)
                },

            ),
    })

    // 'Loading...'
    if (isPending) return <LoadingAnimations></LoadingAnimations>

    // if (error) return 'An error has occurred: ' + error.message

    return (
        <div className="">
            {/* <h1 className="text-center text-xl">You Can See All Your Posted Jobs</h1> */}
            <div className="mx-auto ">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:grid-flow-row-dense gap-x-4 gap-y-8 py-10 ">
                    {
                        postedJobData?.map(postedJob => <JobCard key={postedJob._id} postedJob={postedJob}></JobCard>)
                    }
                </div>
            </div>
        </div>
    )
}
