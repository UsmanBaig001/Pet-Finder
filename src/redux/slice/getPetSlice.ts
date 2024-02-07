import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { petFinderInstance } from "../../utilities/axiosInstance/axiosInstance";
import { animal } from "../../helper";

export interface GetPetState {
  animal: animal | null;
  loading: boolean;
  error: string | null;
}

const initialState: GetPetState = {
  animal: null,
  loading: false,
  error: "",
};

export const getPet = createAsyncThunk("pet", async (petsId: string) => {
  try {
    const resp = await petFinderInstance.get(`/animals/${petsId}`);
    const result = resp.data.animal;
    return result;
  } catch (error) {
    console.log("error", error);
  }
});

export const petSlice = createSlice({
  name: "animal",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getPet.pending, (state) => {
        state.loading = true;
      })
      .addCase(getPet.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.animal = action.payload;
      })
      .addCase(getPet.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string | null;
        state.animal = null;
      });
  },
});

export default petSlice.reducer;
