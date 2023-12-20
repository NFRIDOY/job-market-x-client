import { useEffect } from "react";
import MyBidsContainer from "../../components/MyBidsContainer/MyBidsContainer";



export default function MyBids() {

  useEffect(() => {
    const routeName = location.pathname === '/MyBids' ? 'My Bids' : "";
    
    document.title = `Job Market X | ${routeName}`;
    console.log(document.title)
}, [])

  return (
    <div className="pb-12">
      {/* <h1 className="text-6xl font-bold py-8 text-center">My Bids</h1> */}
      <MyBidsContainer></MyBidsContainer>
    </div>
  )
}
