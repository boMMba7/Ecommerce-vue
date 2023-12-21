import { eCommerceApi } from "./client";

const getCategories = () => eCommerceApi.get("/category");

export default {
  getCategories,
};
