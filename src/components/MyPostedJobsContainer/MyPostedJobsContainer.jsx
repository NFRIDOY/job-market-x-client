import { useQuery } from "@tanstack/react-query";
import MyPostedJobCard from "../MyPostedJobCard/MyPostedJobCard";
import useAxios from "../../hooks/useAxios";
import { useState } from "react";
import useAuth from "../../hooks/useAuth";
import LoadingAnimations from "../LoadingAnimations/LoadingAnimations";


export default function MyPostedJobsContainer() {
    const [postedJobData, setPostedJobData] = useState([])
    const axios = useAxios()
    const { user } = useAuth()

    console.log(user)

    const { isPending, error, data: myPostedJobs } = useQuery({
        queryKey: ['PostedJobs', user],
        queryFn: () =>
            axios.get(`/myPostedJobs?email=${user.email}&myJob=${true}`).then(
                (res) => {
                    console.log(res.data)
                    console.log(myPostedJobs)
                    setPostedJobData(res.data)
                },

            ),
    })

    // 'Loading...'
    if (isPending) return <LoadingAnimations></LoadingAnimations>

    // if (error) return 'An error has occurred: ' + error.message

    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 md:grid-flow-row-dense md:gap-y-8 py-10">
                {
                    postedJobData?.map(postedJob => <MyPostedJobCard key={postedJob._id} postedJob={postedJob}></MyPostedJobCard>)
                }
            </div>
        </div>
    )
}
