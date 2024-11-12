import { Navigate, useLocation } from "react-router-dom";
import { Loading } from "../../components/Shared/Loading";
import useAuth from "../../hooks/useAuth";

const PrivateRoute = ({ children }) => {
  const { currentUser, loading } = useAuth();
  const location = useLocation();

  if (loading) {
    return <Loading />;
  }

  if (currentUser) {
    return children;
  }
  return <Navigate to="/sign-in" state={{ from: location }} replace></Navigate>;
};

export default PrivateRoute;
