import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  addAuthorizationHeader,
  petFinderInstance,
} from "../../utilities/axiosInstance/axiosInstance";

export interface CounterState {
  Pet: [];
  loading: boolean;
  error: string | null;
}

const initialState: CounterState = {
  Pet: [],
  loading: false,
  error: "",
};
export const getUsers = createAsyncThunk("user", async (_, thunkAPI) => {
  try {
    await addAuthorizationHeader();

    const resp = await petFinderInstance.get("/animals");

    return resp.data.animals;
  } catch (error) {
    console.error("Error fetching users:", error);
    throw error;
  }
});

export const userSlice = createSlice({
  name: "petsId",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getUsers.pending, (state) => {
        state.loading = true;
      })
      .addCase(getUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.Pet = action.payload;
      })
      .addCase(getUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string | null;
        state.Pet = [];
      });
  },
});

export default userSlice.reducer;
