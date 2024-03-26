import { useQuery } from "@tanstack/react-query";
import MyPostedJobCard from "../MyPostedJobCard/MyPostedJobCard";
import useAxios from "../../hooks/useAxios";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import LoadingAnimations from "../LoadingAnimations/LoadingAnimations";
import JobCard from "../JobCard/JobCard";
import TabContainer from "../TabContainer/TabContainer";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";


export default function AllJobs() {
    const [postedJobData, setPostedJobData] = useState([])
    const axios = useAxios()
    const { user } = useAuth()
    // const [cat, setCat] = useState("Web Development")
    const [cat, setCat] = useState("")
    const [postedJobDataWeb, setPostedJobDataWeb] = useState([])
    // const [postedJobDataDigital, setPostedJobDataDigital] = useState([])
    // const [postedJobDataGraphics, setPostedJobDataGraphics] = useState([])

    // const handleWebDev = (catagory) => {
    //     setCat(catagory)
    //     // console.log(catagory)
    //     const catData = postedJobData.filter(job => job.category === cat)
    //     setPostedJobDataWeb(catData)
    // }

    // const handleDigital = () => {
    //     setCat("Digital Marketing")
    //     const catData = postedJobData.filter(job => job.category === "Digital Marketing")
    //     setPostedJobDataWeb(catData)
    // }
    // const handleGraphics = () => {
    //     setCat("Graphics Design")
    //     const catData = postedJobData.filter(job => job.category === "Graphics Design")
    //     setPostedJobDataWeb(catData)
    // }

    useEffect(() => {
        console.log("UseEffect C")
        // handleWebDev()
        // setCat(catagory)
        console.log(cat)
        const catData = postedJobData.filter(job => job.category === cat)
        setPostedJobDataWeb(catData)
    }, [cat])

    const { isPending, error, data: AllJobs } = useQuery({
        queryKey: ['AllJobs'],
        queryFn: () =>
            // axios.get(`/allJobs?cat=${cat}`).then(
            // axios.get(`/allJobs?email=${user.email}`).then(
            // axios.get(`/allJobs?cat=${}`).then(
            axios.get(`/allJobs`).then(
                (res) => {
                    console.log(res.data)
                    console.log(AllJobs)
                    setPostedJobData(res.data)
                    // const initData = postedJobData.filter(job => job.category === "Web Development")
                    // setPostedJobDataWeb(initData)
                    // handleWebDev()
                },

            ),
    })

    // useEffect(() => {
    //     axios.get(`/allJobs?cat=${cat}`).then(
    //         // axios.get(`/allJobs?email=${user.email}`).then(
    //         (res) => {
    //             console.log(res.data)
    //             console.log(AllJobs)
    //             setPostedJobData(res.data)
    //         },

    //     )
    // }, [cat, user])



    // 'Loading...'
    // if (isPending) return <LoadingAnimations></LoadingAnimations>

    // if (error) return 'An error has occurred: ' + error.message




    // handleWebDev()



    return (
        <div className="py-12">
            {/* <h1 className="text-center text-xl">You Can See All Your Posted Jobs</h1> */}
            <div className="mx-auto ">
                <h1 className="text-6xl font-bold pb-8 text-center">
                    <span className="text-warning">Job</span> Categories</h1>
                <div className="">
                    <Tabs>
                        <TabList className={""}>
                            <div className="flex flex-col md:flex-row mx-auto w-1/2 lg:w-[500px] lg:justify-between gap-x-0 lg:gap-x-6 gap-y-2">
                                <Tab className={"cursor-pointer px-3 lg:px-9 border-2 bg-base-200 text-center rounded-full "} onClick={() => setCat("Web Development")}>Web Development</Tab>
                                <Tab className={"cursor-pointer px-3 lg:px-9 border-2 bg-base-200 text-center rounded-full "} onClick={() => setCat("Digital Marketing")}>Digital Marketing</Tab>
                                <Tab className={"cursor-pointer px-3 lg:px-9 border-2 bg-base-200 text-center rounded-full "} onClick={() => setCat("Graphics Design")}>Graphics Design</Tab>
                                {/* <Tab className={"cursor-pointer px-9 border-2 bg-base-200 text-center"} onClick={() => handleWebDev("Web Development")}>Web Development</Tab> */}
                                {/* <Tab className={"cursor-pointer px-9 border-2 bg-base-200 text-center"} onClick={() => handleWebDev("Digital Marketing")}>Digital Marketing</Tab> */}
                                {/* <Tab className={"cursor-pointer px-9 border-2 bg-base-200 text-center"} onClick={() => handleWebDev("Graphics Design")}>Graphics Design</Tab> */}
                            </div>
                        </TabList>

                        <div className="text-center w-fit mx-auto">
                            <TabPanel >
                                <div>
                                    {() => setCat("Web Development")}
                                    {/* Any content 1 */}
                                    <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 md:grid-flow-row-dense gap-x-4 gap-y-8 py-10 ">
                                        {
                                            postedJobDataWeb?.map(postedJob => <JobCard key={postedJob._id} postedJob={postedJob}></JobCard>)
                                        }
                                    </div>
                                </div>
                            </TabPanel>
                            <TabPanel>
                                <div>
                                    {/* Any content 2 */}
                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:grid-flow-row-dense gap-x-4 gap-y-8 py-10 ">
                                        {
                                            postedJobDataWeb?.map(postedJob => <JobCard key={postedJob._id} postedJob={postedJob}></JobCard>)
                                        }
                                    </div>
                                </div>
                            </TabPanel>
                            <TabPanel>
                                <div>
                                    {/* Any content 3 */}
                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:grid-flow-row-dense gap-x-4 gap-y-8 py-10 ">
                                        {
                                            postedJobDataWeb?.map(postedJob => <JobCard key={postedJob._id} postedJob={postedJob}></JobCard>)
                                        }
                                    </div>
                                </div>
                            </TabPanel>
                        </div>
                    </Tabs>
                </div>
                {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:grid-flow-row-dense gap-x-4 gap-y-8 py-10 ">
                    {

                        postedJobData?.map(postedJob => <JobCard key={postedJob._id} postedJob={postedJob}></JobCard>)
                    }
                </div> */}
                <div>
                    {/* <TabContainer></TabContainer> */}
                </div>
                {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:grid-flow-row-dense gap-x-4 gap-y-8 py-10 ">
                    {
                        postedJobData?.map(postedJob => <JobCard key={postedJob._id} postedJob={postedJob}></JobCard>)
                    }
                </div> */}
            </div>
        </div>
    )
}
