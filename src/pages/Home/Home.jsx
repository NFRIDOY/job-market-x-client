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
            <section>
                <h1>Why We Are Best</h1>
                <p>
                    
                </p>
            </section>
        </div>
    );
};

export default Home;