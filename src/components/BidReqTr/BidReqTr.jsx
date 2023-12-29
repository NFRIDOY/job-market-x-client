

export default function BidReqTr({ bidJob, index, handlePayment, handleAcceptBtn, handleComplain, handleRejectBtn }) {
    return (
        // <tr key={bidJob?._id}>
        <tr >
            <td>{index + 1}</td>
            <th>{bidJob?.jobTitle}</th>
            <td>{bidJob?.emailBidForm}</td>
            <td>{bidJob?.deadline}</td>
            <td>{bidJob?.priceForm}</td>
            <td>{bidJob?.status}</td>
            {
                !(bidJob?.status !== "Complete") ? <td className="col-span-2">

                    <button className="btn btn-sm w-24 btn-warning text-white "
                        onClick={() => handlePayment(bidJob._id)}>
                        Payment
                    </button>
                </td> : (bidJob?.status !== "Paid") && <td>
                    <button className="btn btn-sm w-24 btn-success text-white"
                        onClick={() => handleAcceptBtn(bidJob._id)}>
                        Accept
                    </button>
                </td>
            }

            {/* <td>{bidJob?.status === "progress" && <button onClick={handleAcceptBtn}>Accept</button></td> */}
            {
                !(bidJob?.status !== "Complete") ? <td className="col-span-2 mx-auto">

                    <button className="btn btn-sm w-24 btn-error text-white "
                        onClick={() => handleComplain(bidJob._id)}>
                        Complain
                    </button>
                </td> : (bidJob?.status !== "Paid") && <td>
                    <button className="btn btn-sm w-24 btn-error text-white"
                        onClick={() => handleRejectBtn(bidJob._id)}>
                        Reject
                    </button>
                </td>

            }
            {
                !(bidJob?.status !== "Paid") ? <td className="col-span-2 mx-auto">

                    <button className="btn btn-sm w-24 btn-neutral text-white "
                        onClick={() => handlePayment(bidJob._id)}>
                        Paid
                    </button>
                </td> : <td>

                </td>

            }

            {/* <td>{bidJob?.status === "progress" && <button onClick={handleRejectBtn}>Reject</button></td> */}
        </tr>

    )
}
