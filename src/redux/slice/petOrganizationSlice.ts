import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import {
  addAuthorizationHeader,
  petFinderInstance,
} from "../../utilities/axiosInstance/axiosInstance";
import { Photos } from "../../helper";

export type organization = {
  organization_id: string;
  id: string;
  photos: Photos[] | null;
};

export interface CounterState {
  organization: [];
  loading: boolean;
  error: string | null;
}

const initialState: CounterState = {
  organization: [],
  loading: false,
  error: "",
};

export const getOrganization = createAsyncThunk(
  "organization",
  async (organization_id: string, thunkAPI) => {
    try {
      const resp = await petFinderInstance.get(
        `/animals?organization=${organization_id}`
      );
      await addAuthorizationHeader();
      const result = resp.data.animals;
      return result;
    } catch (error) {
      console.log("Error fetching organization_id:", error);
    }
  }
);

export const petOrganization = createSlice({
  name: "organization",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getOrganization.pending, (state) => {
        state.loading = true;
      })
      .addCase(getOrganization.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.organization = action.payload;
      })
      .addCase(getOrganization.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string | null;
        state.organization = [];
      });
  },
});

export default petOrganization.reducer;
