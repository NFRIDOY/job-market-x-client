import useAuth from "../../hooks/useAuth";


export default function MyPostedJobCard({ postedJob }) {
    const { user } = useAuth()

    const { email,
        jobTitle,
        deadline,
        description,
        category,
        minPrice,
        maxPrice } = postedJob;

    const handleUpdateJob = (e) => {
        e.preventDefault();
        alert("Update")
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
        <div>
            <div className="relative flex flex-col text-gray-700 bg-white shadow-md w-[600px] rounded-xl bg-clip-border space-y-4 border-2 ">
                <div className="p-6 space-y-4">
                    <div className="flex justify-between items-center space-y-4">
                        <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900 uppercase">
                            {jobTitle}
                        </h5>
                        <div className="w-2/5">
                            <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900 outline uppercase rounded-lg p-2 text-center">
                                {category}
                            </h5>
                        </div>
                    </div>
                    <div className="flex justify-between">

                        <h5>
                            {
                                deadline && <span> Deadline : <span className="font-bold text-warning">{deadline}</span> </span>
                            }
                        </h5>
                        <h5>
                            Posted By: <span className="font-medium italic underline">{email}</span>
                        </h5>
                    </div>
                    <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit text-justify text-zinc-500">
                        {description}
                    </p>
                </div>
                <div className="p-6 pt-0 gap-x-4 w-full flex justify-between items-center">
                    <div>
                        <h1 className="text-xl">Salary Range: <span className="font-bold text-accent ">৳<span>{minPrice}</span> - ৳<span>{maxPrice}</span></span>
                        </h1>
                    </div>
                    <div className=" flex gap-x-4 justify-end">
                        <button
                            className="select-none rounded-lg bg-pink-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                            type="button"
                            data-ripple-light="true"
                        >
                            Delete
                        </button>
                        <button
                            className="select-none rounded-lg bg-green-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-green-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                            type="button"
                            data-ripple-light="true"
                            onClick={() => document.getElementById('my_modal_5').showModal()}
                        >
                            Update
                        </button>
                        <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                            <div className="modal-box h-fit ">

                                {/* Edit Starts */}

                                <form className="w-full space-y-3 " onSubmit={handleUpdateJob}>
                                    <div className="w-full">
                                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Email <span>(Read Only)</span></label>
                                        <input disabled defaultValue={user.email} type="email" name="email" id="email" className=" bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder={user.email}  />
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

                                {/* Edit Ends */}
                                <div className="modal-action">
                                    <form method="dialog">
                                        {/* if there is a button in form, it will close the modal */}
                                        <button className="btn">Close</button>
                                    </form>
                                </div>
                            </div>
                        </dialog>
                    </div>
                </div>
                {/* Open the modal using document.getElementById('ID').showModal() method */}
                {/* <button className="btn" onClick={() => document.getElementById('my_modal_5').showModal()}>open modal</button> */}

            </div>

            {/* <div className="card w-96 bg-white shadow-2xl text-black">
                <div className="card-body items-center text-center">
                    <h2 className="card-title text-left">{email}</h2>
                    <h2 className="card-title text-left">{jobTitle}</h2>
                    <h2 className="card-title text-left">{deadline}</h2>
                    <h2 className="card-title text-left">{jobTitle}</h2>
                    <p>We are using cookies for no reason.</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-success">Update</button>
                        <button className="btn btn-error">Delete</button>
                    </div>
                </div>
            </div> */}
        </div >
    )
}
