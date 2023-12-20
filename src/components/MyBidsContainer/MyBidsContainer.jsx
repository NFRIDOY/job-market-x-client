import { useState } from "react"
import useAuth from "../../hooks/useAuth"
import useAxios from "../../hooks/useAxios"
import { useQuery } from "@tanstack/react-query"
import LoadingAnimations from "../LoadingAnimations/LoadingAnimations"
import toast from "react-hot-toast"
import { faL } from "@fortawesome/free-solid-svg-icons"

export default function MyBidsContainer() {
    const [myBidJobs, setMyBidJobs] = useState([])
    const [isComplete, setIsComplete] = useState(false)
    const axios = useAxios()
    const { user } = useAuth()

    const handleComplete = (id) => {
        axios.put(`/myBids/${id}`, { status: "Complete" })
            .then(res => {
                console.log(res.data)
                toast.success("Complete")
                // toast.success("Rejected")
                toast.success("Job Completed")
                setIsComplete(!isComplete)
            })
    }
    // const handleDelete = (id) => {
    //     axios.put(`/myBids/${id}`, { status: "Complete" })
    //     .then(res => {
    //         console.log(res.data)
    //         toast.success("Delete Succesfull")
    //         // toast.success("Rejected")
    //         toast.success("Job Completed")
    //         setIsComplete(!isComplete)
    //     })

    // }

    const handleUnpaid = () => {
        toast.success("Unpaid, request For Pyment")
    }

    const isReqTrue = 0;

    const { isPending, error, data: AllJobs } = useQuery({
        queryKey: ['MyBids', user, isComplete],
        queryFn: () =>
            // axios.get(`/allJobs`).then(
            axios.get(`/myBids?email=${user.email}&isReq=${isReqTrue}`).then(
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
            {/* <h1>My Bids Container</h1> */}
            {
                myBidJobs.length ? <section id="BidTable">
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
                                        <td>{index + 1}</td>
                                        <th>{bidJob?.jobTitle}</th>
                                        <td>{bidJob?.emailOwnerForm}</td>
                                        <td>{bidJob?.deadline}</td>
                                        <td>{bidJob?.status}</td>
                                        {
                                            (bidJob?.status !== "Complete") ? <td>
                                                {
                                                    bidJob?.status === "In Progress" ? <button
                                                        className="btn btn-sm px- btn-success text-white"
                                                        onClick={() => handleComplete(bidJob._id)}>
                                                        Complete
                                                    </button> : (bidJob?.status === "Paid") ? <button
                                                        disabled
                                                        className="btn btn-sm btn-neutral">
                                                        Paid
                                                    </button> : (bidJob?.status === "Pending") ? <button
                                                        disabled
                                                        className="btn btn-sm btn-neutral">
                                                        Wait For Accept
                                                    </button> : <button
                                                        disabled
                                                        className="btn btn-sm btn-neutral">
                                                        Uncomplete
                                                    </button>
                                                }

                                            </td> : <td>
                                                {
                                                    bidJob?.status === "Complete" ? <button
                                                        className="btn btn-sm px- btn-success text-white"
                                                        onClick={() => handleUnpaid(bidJob._id)}>
                                                        Unpaid
                                                    </button> : (bidJob?.status === "Paid") ? <button
                                                        disabled
                                                        className="btn btn-sm btn-neutral">
                                                        Paid
                                                    </button> : <button
                                                        disabled
                                                        className="btn btn-sm btn-neutral">
                                                        You Have Issues
                                                    </button>
                                                }

                                            </td>
                                        }
                                        {/* <td>
                                            {
                                                bidJob?.status === "In Progress" ? <button
                                                    className="btn btn-sm px- btn-success text-white"
                                                    onClick={() => handleComplete(bidJob._id)}>
                                                    Complete
                                                </button> : bidJob?.status === "Canceled" ? <button
                                                    // onClick={() => handleDelete(bidJob?._id)}
                                                >Delete</button> :
                                                    <button disabled className="btn btn-sm btn-neutral">
                                                        Uncomplete
                                                    </button>
                                            }
                                        </td> */}
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
                </section> : <h1 className="text-5xl text-center">No Data Found!!!</h1>
            }
        </div>
    )
}
