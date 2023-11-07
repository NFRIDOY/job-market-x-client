import { useState } from "react"
import useAuth from "../../hooks/useAuth"
import useAxios from "../../hooks/useAxios"
import { useQuery } from "@tanstack/react-query"


export default function MyBids() {
  const [postedJobData, setPostedJobData] = useState([])
  const axios = useAxios()
  const { user } = useAuth()

  const { isPending, error, data: AllJobs } = useQuery({
    queryKey: ['MyBids', user],
    queryFn: () =>
      // axios.get(`/allJobs`).then(
      axios.get(`/myBids?email=${user.email}`).then(
        (res) => {
          console.log(res.data)
          console.log(AllJobs)
          setPostedJobData(res.data)
        },

      ),
  })
  return (
    <div>MyBids</div>
  )
}
