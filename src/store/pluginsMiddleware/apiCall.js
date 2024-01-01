import { apiCallBegan } from "../actions/api";

export const apiPlugin = (store) => {
  // Called every time an action is dispatched
  store.subscribeAction(async (action, state) => {
    if (action.type === apiCallBegan) {
      try {
        const { dispatch, commit } = store;
        const { apiName, funcName, args, onStart, onSuccess, onError } =
          action.payload;

        //***commit calls the mutations wile dispatch calls the actions
        if (onStart) commit(onStart);

        // loading the respective Api Module
        const api = await dynamicApiFunc(apiName);
        console.log(args);
        // caling the api with respective arguments
        const result = await api[funcName](args);

        if (result.ok) {
          // dispatching data in case request success
          if (onSuccess) dispatch(onSuccess, result.data);
        } else {
          //dispatching data case request fail
          dispatch(onError, result.data);
        }
      } catch (error) {
        console.error("Unexpected error", error);
      }
    }
  });
};

const dynamicApiFunc = async (apiName) => {
  const apiModules = {
    auth: () => import("@/api/auth"),
    userApi: () => import("@/api/user"),
  };

  const moduleImport = apiModules[apiName];
  if (!moduleImport) {
    throw new Error(`Function '${apiName}' not found.`);
  }

  try {
    const module = await moduleImport();
    return module.default;
  } catch (error) {
    throw new Error(
      `Error trying to import API function dynamically:\n\n ${error}`
    );
  }
};
