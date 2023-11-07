import { useState } from "react"
import useAuth from "../../hooks/useAuth"
import useAxios from "../../hooks/useAxios"
import { useQuery } from "@tanstack/react-query"

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
                                // myBidJobs?.map()
                            }
                            <tr>
                                <th>1</th>
                                <td>Cy Ganderton</td>
                                <td>Quality Control Specialist</td>
                                <td>Littel, Schaden and Vandervort</td>
                                <td>Canada</td>
                                <td>12/16/2020</td>
                            </tr>
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
