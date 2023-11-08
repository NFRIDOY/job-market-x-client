import { useEffect } from "react";
import AllJobs from "../../components/AllJobs/AllJobs";
import Banner from "../../components/Banner/Banner";


const Home = () => {

    useEffect(() => {
        const routeName = location.pathname === '/' ? 'Home' : "";
        
        document.title = `Job Market X | ${routeName}`;
        console.log(document.title)
    }, [])

    return (
        <div>
            <section>
                <Banner></Banner>
            </section>
            <section >
                <AllJobs></AllJobs>
            </section>
        </div>
    );
};

export default Home;