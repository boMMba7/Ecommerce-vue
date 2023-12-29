export const useBaseUrl = () => {
  const baseURL = import.meta.env.PROD
    ? (baseURL = import.meta.env.VITE_BASE_URL)
    : "http://localhost:3001";

  const imageUrl = (parcialUrl) => {
    const fullUrl = baseURL + parcialUrl;
    return fullUrl;
  };

  return { imageUrl, baseURL };
};
