import React, { useContext, useState, useEffect } from "react";
import { useNavigate, Outlet } from "react-router-dom";
import { AuthContext } from "../../context/auth";
import LoadingToRedirect from "../LoadingToRedirect";
const PrivateRoute = () => {
  const [auth, setAuth] = useContext(AuthContext);

  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    if (!auth) {
      setLoading(true);
    } else {
      setLoading(false);
    }
  }, [auth]);

  return loading ? <LoadingToRedirect/> : <Outlet />;
};

export default PrivateRoute;
