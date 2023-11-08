import { useQuery } from "@tanstack/react-query";
import MyPostedJobCard from "../MyPostedJobCard/MyPostedJobCard";
import useAxios from "../../hooks/useAxios";
import { useState } from "react";
import useAuth from "../../hooks/useAuth";
import LoadingAnimations from "../LoadingAnimations/LoadingAnimations";
import toast from "react-hot-toast";
import swal from "sweetalert";


export default function MyPostedJobsContainer() {
    const [postedJobData, setPostedJobData] = useState([])
    const axios = useAxios()
    const { user } = useAuth()
    // const [postedJobData, setPostedJobData] = useState([])


    console.log(user)

    const handleDelete = (id) => {

        //  Confimation 
        // swal({
        //     title: "Are you sure?",
        //     text: "You will not be able to recover this imaginary file!",
        //     type: "warning",
        //     showCancelButton: true,
        //     confirmButtonColor: "#DD6B55",
        //     confirmButtonText: "Yes, delete it!",
        //     closeOnConfirm: false
        // },
        //     function () {
        //         swal("Deleted!", "Your imaginary file has been deleted.", "success");
        //     });

        axios.delete(`/myPostedJobs/${id}`)
            .then((res) => {
                console.log(res?.data)
                console.log(myPostedJobs)
                if (res?.data?.deletedCount) {
                    toast.success("Deleted")
                    const remaining = postedJobData.filter(postedJob => postedJob._id !== id)
                    setPostedJobData(...remaining)
                } else {
                    toast.error("Delete Failed")
                }
                // setPostedJobData(res.data)
            })
    }

    const { isPending, error, data: myPostedJobs } = useQuery({
        queryKey: ['PostedJobs', user, postedJobData],
        queryFn: () =>
        // axios.get(`/myPostedJobs?email=${user.email}`).then(
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
            <div className="mx-auto md:w-fit lg:w-auto">

                <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-flow-row-dense gap-y-8 py-10">
                    {
                        postedJobData?.map(postedJob => <MyPostedJobCard key={postedJob._id} postedJob={postedJob} handleDelete={handleDelete}></MyPostedJobCard>)
                    }
                </div>
            </div>
        </div>
    )
}
