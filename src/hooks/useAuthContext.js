import { useContext } from "react";

import { AuthContext } from "../Context/AuthContext";

export default function () {
  const authContext = useContext(AuthContext);

  return authContext;
}
