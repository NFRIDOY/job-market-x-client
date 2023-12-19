import { useEffect } from "react";
import useAuth from "../../hooks/useAuth"


export default function Profile() {

    useEffect(() => {
        const routeName = location.pathname === '/profile' ? 'Profile' : "";
        
        document.title = `Job Market X | ${routeName}`;
        console.log(document.title)
    }, [])

    const { user, setUser, updateUser } = useAuth()

    const handleProfileUpdate = (e) => {
        e.preventDefault();
        const form = e.target;
        // const email = user.email
        const name = form.name.value;
        const photoURL = form.photoURL.value;

        updateUser(name, photoURL) 
        
    }

    return (
        <div className="pb-20">
            {/* <h1 className="text-7xl text-center py-10">My Profile</h1> */}
            <div className="flex">
                <div className="w-1/2 flex justify-center items-center">
                    <div className="">
                        <img className="border-2 p-1 rounded-full object-cover w-60" src={user.photoURL} alt="" />
                    </div>
                </div>
                <div className="w-1/2 py-6 pr-60">

                    <form className="w-full space-y-3" onSubmit={handleProfileUpdate}>
                        <div className="w-full">
                            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Email <span>(Read Only)</span></label>
                            <input disabled defaultValue={user.email} type="email" name="email" id="email" className=" bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-success focus:border-success block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder={user.email} required="" />
                        </div>
                        <div className="w-full">
                            <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
                            <input type="text" name="name" id="name" className=" bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-success focus:border-success block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" defaultValue={user?.displayName} placeholder="name" required="" />
                        </div>
                        <div className="w-full">
                            <label htmlFor="photoURL" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Photo URL</label>
                            <input type="text" name="photoURL" id="photoURL" className=" bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-success focus:border-success block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" defaultValue={user?.photoURL} placeholder="photoURL" required="" />
                        </div>

                        <div className="w-full">
                            {/* <label htmlFor="yyyyy" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Job Title</label> */}
                            {/* <input  /> */}
                            <button type="submit" name="submit" id="submit" className="w-full text-white bg-success hover:bg-success focus:ring-4 focus:outline-none focus:ring-success-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-success dark:hover:bg-success dark:focus:ring-success-800" placeholder="Job Title" required="">
                                Profile Update
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
