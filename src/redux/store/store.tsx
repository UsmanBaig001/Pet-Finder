import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../slice/userSlice";
import petsReducer from "../slice/getPetSlice";
import organizationReducer from "../slice/petOrganizationSlice";
export const store = configureStore({
  reducer: {
    users: userReducer,
    pets: petsReducer,
    organization: organizationReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
