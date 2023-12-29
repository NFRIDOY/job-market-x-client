import { useState } from "react"
import useAuth from "../../hooks/useAuth"
import useAxios from "../../hooks/useAxios"
import { useQuery } from "@tanstack/react-query"
import LoadingAnimations from "../LoadingAnimations/LoadingAnimations"
import toast from "react-hot-toast"
import BidReqTr from '../BidReqTr/BidReqTr';

export default function BidReqContainer() {
    const [bidReqJobs, setBidReqJobs] = useState([])
    // const [isStatusChanged, setIsStatusChanged] = useState("")
    const [isAccepted, setIsAccepted] = useState(false)
    const [isRejected, setIsRejected] = useState(false)
    
    const [isPayment, setIsPayment] = useState(false)
    const [isComplain, setIsComplain] = useState(false)

    const axios = useAxios()
    const { user } = useAuth()

    const isReqTrue = 1;

    const { isPending, error, data: AllJobs } = useQuery({
        queryKey: ['MyBids', user, isAccepted, isRejected, isPayment, isComplain ],
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

    const handlePayment = (id) => {
        console.log("Payment")
        toast.success("Payment")

        console.log(id)
        setIsComplain(false)
        axios.put(`/myBids/${id}`, { status: "Paid" })
            .then(res => {
                console.log(res.data)
                toast.success("Payment Successful")
                setIsPayment(!isPayment)
                setIsComplain(false)
            })
    }
    const handleComplain = (id) => {
        toast.success("Complained")

        console.log(id)
        setIsPayment(false)
        axios.put(`/myBids/${id}`, { status: "Complained" })
            .then(res => {
                console.log(res.data)
                toast.success("Payment Successful")
                setIsComplain(!isComplain)
                setIsPayment(false)
            })
    }

    return (
        <div>
            {/* <h1>
                BidReqContainer
            </h1> */}
            {
                bidReqJobs.length ? <section id="BidReqTable">
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
                                    <th className="col-span-2 text-center w-20">Option</th>
                                    {/* <th>Accept</th>
                                <th>Reject</th> */}
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    bidReqJobs?.map((bidJob, index) => <BidReqTr key={index} bidJob={bidJob} index={index} handlePayment={handlePayment} handleAcceptBtn={handleAcceptBtn} handleComplain={handleComplain} handleRejectBtn={handleRejectBtn} ></BidReqTr>)
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
                </section> : <h1 className="text-5xl text-center">No Data Found!!!</h1>
            }

        </div>
    )
}
