import { ref } from "vue";
// import useAuth from "../auth/useAuth";

export const useApi = (apiFunc) => {
  const data = ref([]);
  const error = ref(false);
  const loading = ref(false);

  const request = async (...args) => {
    loading.value = true;
    const response = await apiFunc(...args);

    loading.value = false;
    error.value = !response.ok;
    data.value = response.data;
    // printResponse(response);
    return response;
  };

  return { data, error, loading, request };
};

const printResponse = (response) => {
  console.log(`\n\n*******************************************`);
  console.log(`OK: ${response.ok}`);
  console.log(`STATUS: ${response.status}`);
  console.log(`DATA: ${JSON.stringify(response.data, null, 4)}`);

  // console.log(JSON.stringify(response, null, 2));
  console.log(`--------------------------------------------\n\n`);
};
