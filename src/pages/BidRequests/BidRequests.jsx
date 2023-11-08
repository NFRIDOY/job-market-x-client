import { useEffect } from "react";
import BidReqContainer from "../../components/BidReqContainer/BidReqContainer";


export default function BidRequests() {

    useEffect(() => {
        const routeName = location.pathname === '/BidRequests' ? 'Bid Requests' : "";
        
        document.title = `Job Market X | ${routeName}`;
        console.log(document.title)
    }, [])

    return (
        <div className="pb-12">
            <h1 className="text-7xl py-10 text-center">
                Bid Requests For My Posted Jobs
            </h1>
            <BidReqContainer></BidReqContainer>
        </div>
    )
}
