import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";
import useAxios from "../../hooks/useAxios";

export default function JobCard({ postedJob }) {
    const { user } = useAuth()
    const axios = useAxios()

    const {
        _id,
        email,
        jobTitle,
        deadline,
        description,
        category,
        minPrice,
        maxPrice } = postedJob;

    // const handleUpdateJob = (e) => {
    //     e.preventDefault();
    //     alert("Update")
    //     const form = e.target;
    //     const email = user.email
    //     const jobTitle = form.JobTitle.value;
    //     const deadline = form.deadline.value;
    //     const description = form.description.value;
    //     const category = form.category.value;
    //     const minPrice = parseFloat(form.MinPrice.value);
    //     const maxPrice = parseFloat(form.MaxPrice.value);


    //     const newJob = {
    //         email,
    //         jobTitle,
    //         deadline,
    //         description,
    //         category,
    //         minPrice,
    //         maxPrice
    //     }
    //     // Output
    //     console.log(newJob)
    //     // http://localhost:5000/api/v1/addJobs
    //     axios.post("/addJobs", newJob)
    //         .then(res => {
    //             console.log(res.data)
    //             if (res.data.acknowledged) {
    //                 toast.success('Successfully Added!')
    //             } else {
    //                 toast.error('Failed To Add!')
    //             }

    //         })

    //     // fetch("http://localhost:5000/api/v1/addJobs", {
    //     //     method: "POST",
    //     //     headers: {
    //     //         "Content-Type": "application/json",
    //     //     },
    //     //     body: JSON.stringify(newJob)
    //     // })
    //     // .then(res => res.json())
    //     // .then (data => {
    //     //     console.log(data)
    //     // })

    // }
    return (
        <div>
            <div className="relative flex flex-col text-gray-700 bg-white shadow-md w-96 rounded-3xl bg-clip-border h-fit border-2">
                <div className="p-6">
                    <div>
                        <h5 className="block mb-2 font-sans text-2xl antialiased font-bold leading-snug tracking-normal text-blue-gray-900 capitalize">
                            {jobTitle}
                        </h5>
                        <h5>
                            {
                                deadline && <span> <span className="font-bold">Deadline :</span>  <span className="font-bold text-red-500">{deadline}</span> </span>
                            }
                        </h5>
                    </div>

                    <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit h-32 overflow-hidden">
                        {description}
                    </p>
                </div>
                <div className="p-6 pt-0 flex justify-between items-center">
                    <h1 className="text-xl"><span className="font-bold text-accent ">
                        ৳<span>{minPrice}</span> - ৳<span>{maxPrice}</span></span>
                    </h1>
                    <Link to={`/Jobs/${_id}`}
                        className="select-none rounded-lg bg-yellow-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-yellow-500/20 transition-all hover:shadow-lg hover:shadow-yellow-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                        type="button"
                        data-ripple-light="true"
                    >
                        Bid Now
                    </Link>
                </div>
            </div>

        </div >
    )
}
