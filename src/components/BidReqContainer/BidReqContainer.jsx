import { useState } from "react"
import useAuth from "../../hooks/useAuth"
import useAxios from "../../hooks/useAxios"
import { useQuery } from "@tanstack/react-query"
import LoadingAnimations from "../LoadingAnimations/LoadingAnimations"
import toast from "react-hot-toast"

export default function BidReqContainer() {
    const [bidReqJobs, setBidReqJobs] = useState([])
    // const [isStatusChanged, setIsStatusChanged] = useState("")
    const [isAccepted, setIsAccepted] = useState(false)
    const [isRejected, setIsRejected] = useState(false)
    const axios = useAxios()
    const { user } = useAuth()

    const isReqTrue = 1;

    const { isPending, error, data: AllJobs } = useQuery({
        queryKey: ['MyBids', user, isAccepted, isRejected],
        queryFn: () =>
            // axios.get(`/allJobs`).then(
            axios.get(`/myBids?email=${user.email}&isReq=${isReqTrue}`).then(
                (res) => {
                    console.log(res.data)
                    console.log(AllJobs)
                    setBidReqJobs(res.data)
                },

            ),
    })

    if (isPending) return <LoadingAnimations></LoadingAnimations>

    const handleAcceptBtn = (id) => {
        console.log(id)
        // setIsAccepted(!isAccepted)
        axios.put(`/myBids/${id}`, { status: "In Progress" })
            .then(res => {
                console.log(res.data)
                toast.success("Acceped")
                toast.success("Job In Progress")
                setIsAccepted(!isAccepted)
            })
        // if (isAccepted) {

        // }
    }
    const handleRejectBtn = (id) => {
        console.log(id)
        // setIsRejected(!isRejected)
        // alert("RRR")
        axios.put(`/myBids/${id}`, { status: "Canceled" })
            .then(res => {
                console.log(res.data)
                toast.error("Rejected")
                // toast.success("Rejected")
                toast.success("Job Rejected")
                setIsAccepted(!isAccepted)
            })
        // if (isAccepted) {

        // }
    }

    return (
        <div>
            {/* <h1>
                BidReqContainer
            </h1> */}
            <section id="BidReqTable">
                <div className="overflow-x-auto">
                    <table className="table table-xs">
                        {/* T Head */}
                        <thead>
                            <tr>
                                <th></th>
                                <th>Job Title</th>
                                <th>Email</th>
                                <th>Deadline</th>
                                <th>Price</th>
                                <th>Status</th>
                                <th className="col-span-2 text-right">Option</th>
                                {/* <th>Accept</th>
                                <th>Reject</th> */}
                            </tr>
                        </thead>
                        <tbody>
                            {
                                bidReqJobs?.map((bidJob, index) => <tr key={bidJob?._id}>
                                    <td>{index + 1}</td>
                                    <th>{bidJob?.jobTitle}</th>
                                    <td>{bidJob?.emailBidForm}</td>
                                    <td>{bidJob?.deadline}</td>
                                    <td>{bidJob?.priceForm}</td>
                                    <td>{bidJob?.status}</td>
                                    {

                                    }
                                    <td>
                                        <button className="btn btn-sm btn-success text-white"
                                            onClick={() => handleAcceptBtn(bidJob._id)}>
                                            Accept
                                        </button>
                                    </td>
                                    {/* <td>{bidJob?.status === "progress" && <button onClick={handleAcceptBtn}>Accept</button></td> */}
                                    <td>
                                        <button className="btn btn-sm btn-error text-white"
                                            onClick={() => handleRejectBtn(bidJob._id)}>
                                            Reject
                                        </button></td>
                                    {/* <td>{bidJob?.status === "progress" && <button onClick={handleRejectBtn}>Reject</button></td> */}
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
                                <th>Price</th>
                                <th>Status</th>
                                {/* <th>Accept</th>
                                <th>Reject</th> */}
                            </tr>
                        </tfoot>
                    </table>
                </div>
            </section>
        </div>
    )
}
