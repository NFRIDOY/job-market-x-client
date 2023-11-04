import { Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";


export default function MainLayout() {
    return (
        <div className="mx-auto max-w-7xl">
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    )
}
