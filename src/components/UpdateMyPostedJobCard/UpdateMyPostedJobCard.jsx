import { useParams } from "react-router-dom"
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";
import useAxios from "../../hooks/useAxios";
import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";


export default function UpdateMyPostedJobCard() {
    const [updateThisJob, setUpdateThisJob] = useState({})
    const id = useParams()

    const { user } = useAuth()
    const axios = useAxios()

    // console.log(id)

    // const { isPending, error, data: myPostedJob } = useQuery({
    //     queryKey: ['PostedJob', user],
    //     queryFn: () =>
    //         axios.get(`/myPostedJobs/${id}`).then(
    //             (res) => {
    //                 console.log(res.data)
    //                 console.log(myPostedJob)
    //                 setUpdateThisJob(myPostedJob)
    //             },

    //         ),
    // })

    useEffect(() => {
        axios.get(`/myPostedJobs/${id}`)
        .then(res => {
            console.log(res.data)
            setUpdateThisJob(res.data)
        })
    }, [])

    // axios.get(`/MyPostedJobs/${id}`)
    //     .then(res => {
    //         console.log(res.data)
    //     })

    const {
        _id,
        email,
        jobTitle,
        deadline,
        description,
        category,
        minPrice,
        maxPrice
    } = updateThisJob

    // console.log("updateThisJob", updateThisJob)

    const handleUpdateJob = (e) => {
        e.preventDefault();
        alert("Update")
        const form = e.target;
        // email = user.email
        // jobTitle = form.JobTitle.value;
        // deadline = form.deadline.value;
        // description = form.description.value;
        // category = form.category.value;
        // minPrice = parseFloat(form.MinPrice.value);
        // maxPrice = parseFloat(form.MaxPrice.value);

        const updatedJob = {
            _id,
            email,
            jobTitle: form.JobTitle.value,
            deadline: form.deadline.value,
            description: form.description.value,
            category: form.category.value,
            minPrice: parseFloat(form.MinPrice.value),
            maxPrice: parseFloat(form.MaxPrice.value)
        }

        // Output
        console.log(updateThisJob)
        // http://localhost:5000/api/v1/addJobs
        axios.update("/addJobs", updatedJob)
            .then(res => {
                console.log(res.data)
                if (res.data.acknowledged) {
                    toast.success('Successfully Added!')
                } else {
                    toast.error('Failed To Add!')
                }

            })

        // fetch("http://localhost:5000/api/v1/addJobs", {
        //     method: "POST",
        //     headers: {
        //         "Content-Type": "application/json",
        //     },
        //     body: JSON.stringify(newJob)
        // })
        // .then(res => res.json())
        // .then (data => {
        //     console.log(data)
        // })

    }
    return (
        <div>UpdateMyPostedJobCard
            <div>

            </div>
            <div>
                <form className="w-full space-y-3 " onSubmit={handleUpdateJob}>
                    <div className="w-full">
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Email <span>(Read Only)</span></label>
                        <input disabled defaultValue={user.email} type="email" name="email" id="email" className=" bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder={user.email} />
                    </div>
                    <div className="w-full">
                        <label htmlFor="JobTitle" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Job Title</label>
                        <input type="text" name="JobTitle" id="JobTitle" className=" bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Job Title" defaultValue={jobTitle} />
                    </div>
                    <div className="w-full">
                        <label htmlFor="deadline" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Deadline</label>
                        <input type="date" name="deadline" id="deadline" className=" bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Job Title" defaultValue={deadline} />
                    </div>
                    <div className="w-full">
                        <label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description</label>
                        <textarea name="description" id="description" cols="30" rows="3" className=" bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Description" defaultValue={description}></textarea>

                    </div>
                    <div className="w-full">
                        <label htmlFor="category" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Category</label>

                        <select name="category" id="category" className=" bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Job Title" defaultValue={category}>
                            <option className="cursor-wait" value={category}>
                                You Choosed Your Category {category}
                            </option>
                            <option value="Web Development">
                                Web Development
                            </option>
                            <option value="Digital Marketing">
                                Digital Marketing
                            </option>
                            <option value="Graphics Design">
                                Graphics Design
                            </option>
                        </select>
                    </div>
                    <div className="flex gap-4">
                        <div className="w-1/2">
                            <label htmlFor="Minimum Price" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Minimum Price</label>
                            <input type="text" name="MinPrice" id="MinPrice" className=" bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Minimum Price" defaultValue={minPrice} />
                        </div>
                        <div className="w-1/2">
                            <label htmlFor="Maximum Price" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Minimum Price</label>
                            <input type="text" name="MaxPrice" id="MaxPrice" className=" bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Maximum Price" defaultValue={maxPrice} />
                        </div>
                    </div>
                    <div className="w-full">
                        {/* <label htmlFor="yyyyy" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Job Title</label> */}
                        {/* <input type="submit" name="submit" id="submit" className="w-full text-white bg-primary hover:bg-primary focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary dark:hover:bg-primary dark:focus:ring-primary-800" placeholder="Job Title" defaultValue={} /> */}
                        <button
                            className="select-none rounded-lg bg-green-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-green-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none w-full"
                            type="submit"
                            data-ripple-light="true"
                        // onClick={handleUpdateJob}

                        >
                            Update
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}
