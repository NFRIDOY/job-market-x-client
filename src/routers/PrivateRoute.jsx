import { Navigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

export default function PrivateRoute({children}) {
    const { user, loading, setLoading } = useAuth()
    // const navigate = useNavigate();

    // if (loading) {
    //     return <div className='mx-auto w-fit'><span className="loading loading-ring loading-lg text-center "></span></div>
    // }

    if (user) {
        // setLoading(false)
        return children;
    }

    // return <Navigate to={'/login'}></Navigate>
    return <Navigate state={location.pathname} to={'/login'}></Navigate>
}
