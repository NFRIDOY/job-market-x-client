import { useEffect } from "react";
import MyBidsContainer from "../../components/MyBidsContainer/MyBidsContainer";



export default function MyBids() {

  useEffect(() => {
    const routeName = location.pathname === '/MyBids' ? 'My Bids' : "";
    
    document.title = `Job Market X | ${routeName}`;
    console.log(document.title)
}, [])

  return (
    <div>
      <h1 className="text-7xl py-8 text-center">My Bids</h1>
      <MyBidsContainer></MyBidsContainer>
    </div>
  )
}
