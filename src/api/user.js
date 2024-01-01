import { eCommerceApi } from "./client";

const register = (userInfo) => eCommerceApi.post("/register", userInfo);

export default {
  register,
};
