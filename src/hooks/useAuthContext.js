import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";

const useAuthContext = () => {
  const authContext = useContext(AuthContext);

  return authContext;
};

export { useAuthContext };
