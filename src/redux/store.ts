import { configureStore } from "@reduxjs/toolkit";
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  PURGE,
  REGISTER,
  REHYDRATE,
} from "redux-persist";

import authReducer from "./features/authSlice";
import globalReducer from "./features/globalSlice";
import storage from "./storage";

//! We will not do this
//! This is a global variable so we will avoid this
// const store = configureStore({});

// const persistOptions = {
//   key: "cart",
//   storage,
// };

// const persistedCart = persistReducer(persistOptions, cartReducer);

const persistedGlobal = persistReducer(
  { key: "global", storage },
  globalReducer
);
const persistedAuth = persistReducer({ key: "auth", storage }, authReducer);
// const persistedUsers = persistReducer({ key: "users", storage }, usersReducer);

export const makeStore = () => {
  return configureStore({
    reducer: {
      // cart: persistedCart,
      global: persistedGlobal,
      auth: persistedAuth,
      // users: persistedUsers,
    },
    middleware: (getDefaultMiddlewares: any) =>
      getDefaultMiddlewares({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }),
  });
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
