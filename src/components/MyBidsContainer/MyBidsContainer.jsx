import { useState } from "react"
import useAuth from "../../hooks/useAuth"
import useAxios from "../../hooks/useAxios"
import { useQuery } from "@tanstack/react-query"
import LoadingAnimations from "../LoadingAnimations/LoadingAnimations"

export default function MyBidsContainer() {
    const [myBidJobs, setMyBidJobs] = useState([])
    const axios = useAxios()
    const { user } = useAuth()

    const { isPending, error, data: AllJobs } = useQuery({
        queryKey: ['MyBids', user],
        queryFn: () =>
            // axios.get(`/allJobs`).then(
            axios.get(`/myBids?email=${user.email}`).then(
                (res) => {
                    console.log(res.data)
                    console.log(AllJobs)
                    setMyBidJobs(res.data)
                },

            ),
    })

    // 'Loading...'
    if (isPending) return <LoadingAnimations></LoadingAnimations>

    return (
        <div>
            <h1>MyBidsContainer</h1>
            <section id="BidTable">
                <div className="overflow-x-auto">
                    <table className="table table-xs">
                        {/* T Head */}
                        <thead>
                            <tr>
                                <th></th>
                                <th>Job Title</th>
                                <th>Email (owner)</th>
                                <th>Deadline</th>
                                <th>Status</th>
                                <th>Option</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                myBidJobs?.map((bidJob, index) => <tr key={bidJob?._id}>
                                        <td>{index+1}</td>
                                        <th>{bidJob?.jobTitle}</th>
                                        <td>{bidJob?.emailOwnerForm}</td>
                                        <td>{bidJob?.deadline}</td>
                                        <td>{bidJob?.status}</td>
                                        <td>{bidJob?.status === "progress" && bidJob?.option}</td>
                                    </tr>
                                )
                            }

                        </tbody>
                        <tfoot>
                            <tr>
                                <th></th>
                                <th>Job Title</th>
                                <th>Email (owner)</th>
                                <th>Deadline</th>
                                <th>Status</th>
                                <th>Option</th>
                            </tr>
                        </tfoot>
                    </table>
                </div>
            </section>
        </div>
    )
}
