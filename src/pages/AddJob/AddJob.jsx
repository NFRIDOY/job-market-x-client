import useAuth from "../../hooks/useAuth"


export default function AddJob() {

    const { user, loading, setLoading } = useAuth()

    const handleAddJob = (e) => {
        e.preventDefault();
    }

    console.log("AddJob",user)
    // if(user) {
    //     setLoading(false)
    // }
    return (
        <div className="py-7 flex ">
            <div className="w-1/2 space-y-6">
                <h1 className="text-7xl font-semibold">You Can <span className="text-orange-600"> Post</span> Your <span className="text-green-500">Job</span> Here</h1>
                <h2 className="text-2xl font-thin">Your Employers are Waiting</h2>
            </div>
            <div className="w-1/2">
                <form className="w-full space-y-3" onSubmit={handleAddJob}>
                    <div className="w-full">
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Email <span>(Read Only)</span></label>
                        <input disabled type="email" name="email" id="email" className=" bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder={user.email} required="" />
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
                        <textarea name="description" id="description" cols="30" rows="3" className=" bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Job Title" required=""></textarea>
                        {/* <input type="text" name="description" id="description" className=" bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Job Title" required="" /> */}
                    </div>
                    <div className="w-full">
                        <label htmlFor="category" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Job Category</label>
                        {/* <input type="text" name="yyyyy" id="yyyyy" className=" bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Job Title" required="" /> */}
                        <select name="category" id="category" className=" bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Job Title" required="">
                            <option disabled value="">
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
                            <input type="text" name="MinPrice" id="MinPrice" className=" bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Job Title" required="" />
                        </div>
                        <div className="w-1/2">
                            <label htmlFor="Maximum Price" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Minimum Price</label>
                            <input type="text" name="MaxPrice" id="MaxPrice" className=" bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Job Title" required="" />
                        </div>
                    </div>
                    <div className="w-full">
                        {/* <label htmlFor="yyyyy" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Job Title</label> */}
                        <input type="submit" name="yyyyy" id="yyyyy" className="w-full text-white bg-primary hover:bg-primary focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary dark:hover:bg-primary dark:focus:ring-primary-800" placeholder="Job Title" required="" />
                    </div>
                </form>
            </div>
        </div>
    )
}
