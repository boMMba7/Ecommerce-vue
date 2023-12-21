import { useContext, useEffect } from "react";
import jwtDecode from "jwt-decode";

import AuthContext from "./context";
import authStorage from "./storage";
import authApi from "../api/auth";
import { unixEpochTimeDifference } from "../functions/DaysBetween";
import { Alert } from "react-native";
import logger from "../utility/logger";
import auth from "../api/auth";
import { useDispatch } from "react-redux";

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
