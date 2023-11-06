import { useLoaderData } from "react-router-dom"
import useAuth from "../../hooks/useAuth"
import useAxios from "../../hooks/useAxios"
import toast from "react-hot-toast"


export default function JobDetails() {
    const axios = useAxios()
    const { user } = useAuth()

    const jobloaderData = useLoaderData()

    // const []

    const {
        _id,
        email,
        jobTitle,
        deadline,
        description,
        category,
        minPrice,
        maxPrice } = jobloaderData

    const handleAddJob = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = user.email
        const jobTitle = form.JobTitle.value;
        const deadline = form.deadline.value;
        const description = form.description.value;
        const category = form.category.value;
        const minPrice = parseFloat(form.MinPrice.value);
        const maxPrice = parseFloat(form.MaxPrice.value);


        const newJob = {
            email,
            jobTitle,
            deadline,
            description,
            category,
            minPrice,
            maxPrice
        }
        // Output
        console.log(newJob)
        // http://localhost:5000/api/v1/addJobs
        axios.post("http://localhost:5000/api/v1/addJobs", newJob)
            .then(res => {
                console.log(res.data)
                if (res.data.acknowledged) {
                    toast.success('Successfully Added!')
                } else {
                    toast.error('Failed To Add!')
                }

            })

    }

    console.log(jobTitle)

    // const { isPending, error, data: AllJobs } = useQuery({
    //     queryKey: ['AllJobs', user],
    //     queryFn: () =>
    //         // axios.get(`/allJobs`).then(
    //         axios.get(`/allJobs/${}`).then(
    //             (res) => {
    //                 console.log(res.data)
    //                 console.log(AllJobs)
    //                 setPostedJobData(res.data)
    //             },

    //         ),
    // })

    return (
        <div>
            <h1 className="flex justify-between">
                <h1 className="text-left text-6xl font-semibold py-6">Job Details</h1>
                <h1 className="text-left text-6xl font-semibold py-6">Place Your Bid</h1>
            </h1>
            <div className="w-1/2">
                <div className="relative flex w-full px-4 flex-col rounded-xl bg-gradient-to-tr from-orange-600 to-orange-400 bg-clip-border p-8 text-white shadow-md shadow-orange-500/40">
                    <div className="relative pb-8 m-0 mb-8 overflow-hidden text-center text-gray-700 bg-transparent border-b rounded-none shadow-none border-white/10 bg-clip-border">
                        <p className="block font-sans text-sm antialiased font-normal leading-normal text-white uppercase">
                            {category}
                        </p>
                        <h1 className="flex justify-center gap-1 mt-6 font-sans antialiased font-normal tracking-normal text-white text-4xl uppercase">
                            <span className="mt-2 text-4xl"></span>{jobTitle}
                            <span className="self-end text-4xl"></span>
                        </h1>
                    </div>
                    <div className="p-0">
                        <ul className="flex flex-col gap-4">
                            <li className="flex items-center gap-4">
                                <span className="p-1 border rounded-full border-white/20 bg-white/20">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="2"
                                        stroke="currentColor"
                                        aria-hidden="true"
                                        className="w-3 h-3"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M4.5 12.75l6 6 9-13.5"
                                        ></path>
                                    </svg>
                                </span>
                                <p className="block font-sans text-base antialiased font-normal leading-relaxed text-inherit">
                                    Deadline: {deadline}
                                </p>
                            </li>
                            <li className="flex items-center gap-4">
                                <span className="p-1 border rounded-full border-white/20 bg-white/20">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="2"
                                        stroke="currentColor"
                                        aria-hidden="true"
                                        className="w-3 h-3"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M4.5 12.75l6 6 9-13.5"
                                        ></path>
                                    </svg>
                                </span>
                                <p className="block font-sans text-base antialiased font-normal leading-relaxed text-inherit">
                                    Salary Range: {minPrice} - {maxPrice}
                                </p>
                            </li>
                            {/* <li className="flex items-center gap-4">
                                <span className="p-1 border rounded-full border-white/20 bg-white/20">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="2"
                                        stroke="currentColor"
                                        aria-hidden="true"
                                        className="w-3 h-3"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M4.5 12.75l6 6 9-13.5"
                                        ></path>
                                    </svg>
                                </span>
                                <p className="block font-sans text-base antialiased font-normal leading-relaxed text-inherit">
                                    
                                    {description}
                                </p>
                            </li>
                            <li className="flex items-center gap-4">
                                <span className="p-1 border rounded-full border-white/20 bg-white/20">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="2"
                                        stroke="currentColor"
                                        aria-hidden="true"
                                        className="w-3 h-3"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M4.5 12.75l6 6 9-13.5"
                                        ></path>
                                    </svg>
                                </span>
                                <p className="block font-sans text-base antialiased font-normal leading-relaxed text-inherit">
                                    1 year free updates
                                </p>
                            </li>
                            <li className="flex items-center gap-4">
                                <span className="p-1 border rounded-full border-white/20 bg-white/20">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="2"
                                        stroke="currentColor"
                                        aria-hidden="true"
                                        className="w-3 h-3"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M4.5 12.75l6 6 9-13.5"
                                        ></path>
                                    </svg>
                                </span>
                                <p className="block font-sans text-base antialiased font-normal leading-relaxed text-inherit">
                                    Life time technical support
                                </p>
                            </li> */}
                        </ul>
                    </div>
                    <div className="p-0 mt-12">
                        <details>
                            <summary>Description</summary>
                            <p className="block font-sans text-base antialiased font-normal leading-relaxed text-inherit">
                                {description}
                            </p>
                        </details>
                        {/* <button
                            className="block w-full select-none rounded-lg bg-white py-3.5 px-7 text-center align-middle font-sans text-sm font-bold uppercase text-orange-500 shadow-md shadow-blue-gray-500/10 transition-all hover:scale-[1.02] hover:shadow-lg hover:shadow-blue-gray-500/20 focus:scale-[1.02] focus:opacity-[0.85] focus:shadow-none active:scale-100 active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                            type="button"
                            data-ripple-dark="true"
                        >
                            Buy Now
                        </button> */}
                    </div>
                </div>
            </div>
            <div className="w-1/2">
                <form className="w-full space-y-3" onSubmit={handlePlaceBid}>
                    <div className="w-full">
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Email <span>(Read Only)</span></label>
                        <input disabled defaultValue={user.email} type="email" name="email" id="email" className=" bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder={user.email} required="" />
                    </div>
                    <div className="w-full">
                        <label htmlFor="JobTitle" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Job Title</label>
                        <input type="text" name="JobTitle" id="JobTitle" className=" bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Job Title" required="" />
                    </div>
                    <div className="w-full">
                        <label htmlFor="deadline" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Deadline</label>
                        <input type="date" name="deadline" id="deadline" className=" bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Job Title" required="" />
                    </div>
                    <div className="w-full">
                        <label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description</label>
                        <textarea name="description" id="description" cols="30" rows="3" className=" bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Description" required=""></textarea>
                        {/* <input type="text" name="description" id="description" className=" bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Job Title" required="" /> */}
                    </div>
                    <div className="w-full">
                        <label htmlFor="category" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Category</label>
                        {/* <input type="text" name="yyyyy" id="yyyyy" className=" bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Job Title" required="" /> */}
                        <select name="category" id="category" className=" bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Job Title" required="">
                            <option className="cursor-wait" value="">
                                Choose Your Category
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
                            <input type="text" name="MinPrice" id="MinPrice" className=" bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Minimum Price" required="" />
                        </div>
                        <div className="w-1/2">
                            <label htmlFor="Maximum Price" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Minimum Price</label>
                            <input type="text" name="MaxPrice" id="MaxPrice" className=" bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Maximum Price" required="" />
                        </div>
                    </div>
                    <div className="w-full">
                        {/* <label htmlFor="yyyyy" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Job Title</label> */}
                        <input type="submit" name="submit" id="submit" className="w-full text-white bg-primary hover:bg-primary focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary dark:hover:bg-primary dark:focus:ring-primary-800" placeholder="Job Title" required="" />
                    </div>
                </form>
            </div>
        </div>
    )
}
