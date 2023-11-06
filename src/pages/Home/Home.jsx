import AllJobs from "../../components/AllJobs/AllJobs";
import Banner from "../../components/Banner/Banner";


const Home = () => {
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