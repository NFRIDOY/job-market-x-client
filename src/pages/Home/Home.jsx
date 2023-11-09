import { useEffect } from "react";
import AllJobs from "../../components/AllJobs/AllJobs";
import Banner from "../../components/Banner/Banner";
import TabContainer from "../../components/TabContainer/TabContainer";


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
            {/* <div>
                <TabContainer></TabContainer>
            </div> */}
            <section className="pb-8">
                <h1 className="text-6xl py-8 text-center font-bold">Why We Are <span className="text-success">Best</span></h1>

                <ul className="flex flex-col md:flex-row">
                    <li className="px-8">
                        <h1 className="text-2xl py-4 text-center">
                            Comprehensive Job Listings:
                        </h1>
                        <p className="text-justify">
                            We boast an extensive and diverse range of job listings across various industries and sectors. From entry-level positions to executive roles, Job Market X is your one-stop destination for career opportunities
                        </p>
                    </li>
                    <li className="px-8">
                        <h1 className="text-2xl py-4 text-center">
                            Transparent Application Process
                        </h1>
                        <p className="text-justify">
                            Job seekers benefit from a transparent and streamlined application process. Easily track your applications, receive updates, and communicate directly with employers—all within the Job Market X platform.
                        </p>
                    </li>
                    <li className="px-8">
                        <h1 className="text-2xl py-4 text-center">
                            User-Friendly Interface
                        </h1>
                        <p className="text-justify">
                            Navigating Job Market X is a seamless experience. Our user-friendly interface ensures that both employers and job seekers can effortlessly browse, search, and apply for jobs or find the perfect candidate.
                        </p>
                    </li>
                </ul>

            </section>
        </div>
    );
};

export default Home;