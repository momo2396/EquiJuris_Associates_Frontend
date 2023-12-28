import { useContext } from "react";
import { Navigate } from "react-router-dom";
// import useGetData from "../../routes/UseGetData";
import { AuthContext } from "./AuthProviders";
import Loading from "../shared/Loading/Loading";

const RoleCheck = ({ children, role }) => {
  const { user, loading } = useContext(AuthContext);
  // const { data, isLoading } = useGetData(`users/all-users/${user?.userEmail}`);
  if (loading) {
    return (
      // <progress className="progress w-56 flex justify-center items-center"></progress>
      <Loading />
    );
  }
  if (user?.role === role) {
    return children;
  }
  return <Navigate to="/dashboard"></Navigate>;
};

export default RoleCheck;
