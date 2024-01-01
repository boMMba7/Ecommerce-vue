import { eCommerceApi } from "./client";

const login = (username, password) =>
  eCommerceApi.post("/auth", { username, password });

export default { login };
