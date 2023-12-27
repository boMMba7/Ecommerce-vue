import { create } from "apisauce";
import { useBaseUrl } from "@/compositionFunctions/useBaseUrl";

const eCommerceApi = create({
  baseURL: useBaseUrl().baseURL,
  headers: { apitoken: import.meta.env.VITE_API_KEY },
});

export { eCommerceApi };
