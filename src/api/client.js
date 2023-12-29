import { create } from "apisauce";

const eCommerceApi = create({
  // baseURL: "http://localhost:3001",
  baseURL: import.meta.env.VITE_API_URL,
  headers: { apitoken: import.meta.env.VITE_API_KEY },
});

export { eCommerceApi };
