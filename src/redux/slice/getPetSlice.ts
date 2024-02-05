// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import type { PayloadAction } from "@reduxjs/toolkit";
// import { petFinderInstance } from "../../utilities/axiosInstance/axiosInstance";
// // import { animal } from "../../helper";
// export type Photos = {
//   small: string;
//   medium: string;
//   large: string;
//   full: string;
// };
// export type address = {
//   address1: string;
//   address2: string;
//   city: string;
//   state: string;
//   country: string;
//   postcode: number;
//   status: string;
// };
// export type Contact = {
//   email: string;
//   phone: number;
//   address: address;
// };
// export type Colors = {
//   primary: string | null;
//   secondary: string | null;
//   tertiary: string | null;
// };
// export type Breeds = {
//   mixed: boolean;
//   primary: string;
//   secondary: string;
//   unknown: boolean;
// };

// export interface animal {
//   age: string;
//   gender: string;
//   name: string;
//   description: string;
//   contact: Contact;
//   photos: Photos[];
//   status: string;
//   species: string;
//   size: string;
//   type: string;
//   colors: Colors;
//   coat: string;
//   breeds: Breeds;
//   address: address;
//   url: string;
//   organization_id: string;
//   id: number;
// }

// export interface GetPetState {
//   animal: animal | null;
//   loading: boolean;
//   error: string | null;
// }
// const initialState: GetPetState = {
//   animal: null,
//   loading: false,
//   error: "",
// };

// export const getPet = createAsyncThunk("pet", async (petsId: string) => {
//   try {
//     const resp = await petFinderInstance.get(`/animals/${petsId}`);
//     const result = resp.data.animal;
//     return result;
//   } catch (error) {
//     console.log("error", error);
//   }
// });

// export const petSlice = createSlice({
//   name: "animal",
//   initialState,
//   reducers: {},
//   extraReducers(builder) {
//     builder
//       .addCase(getPet.pending, (state) => {
//         state.loading = true;
//       })
//       .addCase(getPet.fulfilled, (state, action: PayloadAction<any>) => {
//         state.loading = false;
//         state.error = null;
//         state.animal = action.payload;
//       })
//       .addCase(getPet.rejected, (state, action: PayloadAction<any>) => {
//         state.loading = false;
//         state.error = action.payload;
//         state.animal = null;
//       });
//   },
// });

// export default petSlice.reducer;
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
