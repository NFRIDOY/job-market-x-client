import { useParams } from "react-router-dom"
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";
import useAxios from "../../hooks/useAxios";
import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";


export default function UpdateMyPostedJobCard() {
    
    useEffect(() => {
        const routeName = location.pathname.includes('/MyPostedJobs/') ? 'Update MyPosted Job' : "";
        
        document.title = `Job Market X | ${routeName}`;
        console.log(document.title)
    }, [])

    const [updateThisJob, setUpdateThisJob] = useState({})
    const { id } = useParams()

    const { user } = useAuth()
    const axios = useAxios()

    console.log("Update This ID: ", id)

    // const { isPending, error, data: myPostedJob } = useQuery({
    //     queryKey: ['PostedJob', user],
    //     queryFn: () =>
    //         axios.get(`/myPostedJobs/${id}`).then(
    //             (res) => {
    //                 console.log(res.data)
    //                 console.log(myPostedJob)
    //                 setUpdateThisJob(res.data)
    //             },

    //         ),
    // })

    useEffect(() => {
        axios.get(`/myPostedJobs/${id}`)
        .then(res => {
            console.log(res.data)
            setUpdateThisJob(res.data)
        })
    }, [user])

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
        // alert("Update IT")
        const form = e.target;
        const email = user.email
        const jobTitleUpdate = form.JobTitle.value;
        // console.log(jobTitleUpdate)
        const deadlineUpdate = form.deadline.value;
        const descriptionUpdate = form.description.value;
        const categoryUpdate = form.category.value;
        const minPriceUpdate = parseFloat(form.MinPrice.value);
        const maxPriceUpdate = parseFloat(form.MaxPrice.value);

        const updatedJob = {
            // _id,
            email,
            jobTitle: jobTitleUpdate,
            // jobTitle: form.JobTitle.value,
            deadline: deadlineUpdate,
            // deadline: form.deadline.value,
            description: descriptionUpdate,
            // description: form.description.value,
            category: categoryUpdate,
            // category: form.category.value,
            minPrice: minPriceUpdate,
            // minPrice: parseFloat(form.MinPrice.value),
            maxPrice: maxPriceUpdate
            // maxPrice: parseFloat(form.MaxPrice.value)
        }

        // Output
        console.log(updatedJob)
        // http://localhost:5000/api/v1/addJobs
        // axios.update
        axios.put(`/myPostedJobs/${id}`, updatedJob)
            .then(res => {
                console.log(res.data)
                if (res.data.acknowledged) {
                    if(res.data?.modifiedCount>0) {
                        toast.success('Successfully Update!')
                    }
                    else if(res.data?.upsertedCount > 0 ) {
                        toast.success('Successfully Update-Insert!')
                    }
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

                        >
                            Update
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}
