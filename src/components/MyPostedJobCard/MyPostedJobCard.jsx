

export default function MyPostedJobCard({ postedJob }) {
    const { email,
        jobTitle,
        deadline,
        description,
        category,
        minPrice,
        maxPrice } = postedJob;
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
                        >
                            Update
                        </button>
                    </div>
                </div>
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