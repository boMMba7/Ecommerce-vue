import { eCommerceApi } from "./client";

const registOrder = (order) => {
  const body = { order: order };

  return eCommerceApi.post("/order", body);
};

const findOrder = (filter) => {
  const body = { filter: filter };
  return eCommerceApi.get("/order", body);
};

const addItemsToOrder = (collectionOrderItems) => {
  const body = { collectionOrderItems };
  return eCommerceApi.post("/order-items", body);
};

const getOrderDetails = (orderId) =>
  eCommerceApi.get("/order/details", { orderId: orderId });

export default {
  registOrder,
  findOrder,
  addItemsToOrder,
  getOrderDetails,
};
