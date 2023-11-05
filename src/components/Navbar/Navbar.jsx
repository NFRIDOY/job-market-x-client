import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";
import useAuth from "../../hooks/useAuth";


export default function Navbar() {
    const { user, logOut } = useAuth()

    const handleLogOut = () => {
        logOut()

    }
    return (
        <div>
            <div className="navbar bg-base-300 rounded-b-3xl px-10">
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
                    <FontAwesomeIcon icon="fa-brands fa-phoenix-framework" style={{ color: "#344f7f", }} />
                    {/* <FontAwesomeIcon icon={solid("phoenix-framework")} style={{color: "#344f7f",}} /> */}
                    <a className="normal-case text-xl">
                        Job Market X
                    </a>

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
                        <div className="dropdown dropdown-end">
                            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 mask mask-squircle">
                                    <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                </div>
                            </label>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                {
                                    user && <li>
                                        <a>
                                            {user.displayName ? user.displayName : user.email }
                                        </a>
                                    </li>
                                }
                                <li>
                                    <a className="justify-between">
                                        Profile
                                        {/* <span className="badge">New</span> */}

                                    </a>

                                </li>


                                <li className="text-red-500 hover:text-red-700">
                                    <a onClick={handleLogOut}>
                                        Logout
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
