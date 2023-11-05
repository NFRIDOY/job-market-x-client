import { Navigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import LoadingAnimations from '../components/LoadingAnimations/LoadingAnimations';

export default function PrivateRoute({ children }) {
    const { user, loading, setLoading } = useAuth()
    // const navigate = useNavigate();

    if (loading) {
        // setLoading(false)
        // return 
        return <LoadingAnimations></LoadingAnimations>
    }

    if (user) {
        // setLoading(false)
        return children;
    }

    // return <Navigate to={'/login'}></Navigate>
    return <Navigate state={location.pathname} to={'/login'}></Navigate>
}
