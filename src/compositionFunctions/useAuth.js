import jwtDecode from "jwt-decode";

import authStorage from "./storage";

import logger from "../utility/logger";
import auth from "../api/auth";

export default useAuth = () => {
  const logIn = (authToken) => {
    try {
      const user = jwtDecode(authToken.access);

      authStorage.storeToken(authToken);
    } catch (error) {
      logger.log(error);
    }
  };

  const logOut = async () => {
    authStorage.removeToken();
    await auth.logOut();
  };

  return { logIn, logOut };
};
