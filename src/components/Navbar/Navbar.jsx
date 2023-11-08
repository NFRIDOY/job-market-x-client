// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, NavLink } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";


export default function Navbar() {
    const { user, setUser, logOut } = useAuth()

    // console.log(user)
    // console.log(user?.photoURL)
    const handleLogOut = () => {

        logOut()
            .then(() => {
                // Sign-out successful.
                toast.success("Sign-out successful.")
            }).catch((error) => {
                // An error happened.
                toast.error("Sign-out Failes. Error")
                console.log(error)
            });

    }
    return (
        <div>
            <div className="navbar bg-white rounded-b-3xl px-10">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li>
                                <NavLink
                                    to="/"
                                    className={({ isActive, isPending }) =>
                                        isPending ? "pending" : isActive ? "active" : ""
                                    }
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li className="w-fit">
                                <NavLink
                                    to="/AddJob"
                                    className={({ isActive, isPending }) =>
                                        isPending ? "pending" : isActive ? "active" : ""
                                    }
                                >
                                    Add Job
                                </NavLink>
                            </li>
                            <li className="w-fit">
                                <NavLink
                                    to="/MyPostedJobs"
                                    className={({ isActive, isPending }) =>
                                        isPending ? "pending" : isActive ? "active" : ""
                                    }
                                >
                                    My Posted Jobs
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/MyBids"
                                    className={({ isActive, isPending }) =>
                                        isPending ? "pending" : isActive ? "active" : ""
                                    }
                                >
                                    My Bids
                                </NavLink>
                            </li>
                            <li className="w-fit">
                                <NavLink
                                    to="/BidRequests"
                                    className={({ isActive, isPending }) =>
                                        isPending ? "pending" : isActive ? "active" : ""
                                    }
                                >
                                    Bid Requests
                                </NavLink>
                            </li>

                            <li>
                                <NavLink
                                    to="/Registration"
                                    className={({ isActive, isPending }) =>
                                        isPending ? "pending" : isActive ? "active" : ""
                                    }
                                >
                                    Registration
                                </NavLink>

                            </li>
                            <li>
                                <NavLink
                                    to="/Login"
                                    className={({ isActive, isPending }) =>
                                        isPending ? "pending" : isActive ? "active" : ""
                                    }
                                >
                                    Login
                                </NavLink>
                                {/* <a>
                                
                            </a> */}
                            </li>
                        </ul>
                    </div>
                    {/* <FontAwesomeIcon icon="fa-brands fa-phoenix-framework" style={{ color: "#344f7f", }} /> */}
                    {/* <FontAwesomeIcon icon={solid("phoenix-framework")} style={{color: "#344f7f",}} /> */}
                    <div className="flex items-center gap-3">
                        <div className="hidden md:block">
                            <svg width="50" height="50" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd" className="fill-current"><path d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"></path></svg>
                        </div>
                        {/* <div className="hidden">
                            <svg width="50" height="50" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd" className="fill-current"><path d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"></path></svg>
                        </div> */}
                        <a className="normal-case text-2xl font-extrabold">
                            Job Market X
                        </a>
                    </div>

                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li>
                            <NavLink
                                to="/"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "active" : ""
                                }
                            >
                                Home
                            </NavLink>
                        </li>
                        <li className="w-fit">
                            <NavLink
                                to="/AddJob"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "active" : ""
                                }
                            >
                                Add Job
                            </NavLink>
                        </li>
                        <li className="w-fit">
                            <NavLink
                                to="/MyPostedJobs"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "active" : ""
                                }
                            >
                                My Posted Jobs
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/MyBids"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "active" : ""
                                }
                            >
                                My Bids
                            </NavLink>
                        </li>
                        <li className="w-fit">
                            <NavLink
                                to="/BidRequests"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "active" : ""
                                }
                            >
                                Bid Requests
                            </NavLink>
                        </li>

                        <li>
                            <NavLink
                                to="/Registration"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "active" : ""
                                }
                            >
                                Registration
                            </NavLink>

                        </li>
                        <li>
                            <NavLink
                                to="/Login"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "active" : ""
                                }
                            >
                                Login
                            </NavLink>
                            {/* <a>
                                
                            </a> */}
                        </li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <div className="flex">
                        {/* <div className="dropdown dropdown-end">
                            <label tabIndex={0} className="btn btn-ghost btn-circle">
                                <div className="indicator">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                                    <span className="badge badge-sm indicator-item">8</span>
                                </div>
                            </label>
                            <div tabIndex={0} className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow">
                                <div className="card-body">
                                    <span className="font-bold text-lg">8 Items</span>
                                    <span className="text-info">Subtotal: $999</span>
                                    <div className="card-actions">
                                        <button className="btn btn-primary btn-block">View cart</button>
                                    </div>
                                </div>
                            </div>
                        </div> */}
                        {
                            user && <div className="dropdown dropdown-end">
                                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                    <div className="w-10 mask mask-squircle">
                                        {/* user?.photoURL ? <img src="https://lh3.googleusercontent.com/a/ACg8ocLeYK4kLXcUBp6rjviW64Wvd_e9SNWQOJZiFeInmq4QS3a4=s96-c" /> : null */}
                                        {
                                            user?.photoURL && <img src={user?.photoURL} />
                                        }
                                    </div>
                                </label>
                                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                    {
                                        user && <li title={user.email}>
                                            <a>
                                                {user.displayName ? user.displayName : user.email}
                                            </a>
                                        </li>
                                    }
                                    <li>
                                        <Link to={'/profile'} className="justify-between">
                                            Profile Setting
                                            {/* <span className="badge">New</span> */}

                                        </Link>

                                    </li>


                                    <li className="text-red-500 hover:text-red-700" title="Click To Logout">
                                        <a onClick={handleLogOut}>
                                            Logout
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
