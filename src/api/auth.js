import { eCommerceApi } from "./client";

const login = (body) => {
  console.log("BODY", body);
  return eCommerceApi.post("/auth", body);
};

export default { login };
