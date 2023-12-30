import { eCommerceApi } from "./client";

const getProducts = (productsIds) => {
  const query = {
    productsIds: productsIds,
  };
  // apisource.get sends params as query  on second argument
  return eCommerceApi.get(`/products`, query);
};

const findProducts = (filter) => {
  const query = {
    filter,
  };

  return eCommerceApi.get("/products/find", query);
};

const getTopProducts = (limit, categoryId) =>
  eCommerceApi.get("/order-items/top-sold", { limit, categoryId });

export default {
  getProducts,
  getTopProducts,
  findProducts,
};
