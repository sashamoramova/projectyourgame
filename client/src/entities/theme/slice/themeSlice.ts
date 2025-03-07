import { createSlice } from "@reduxjs/toolkit";
import { ThemeArrayType } from "../model";

import { getAllThemesThunk } from "../api";

interface ThemeArrState {
  themes: ThemeArrayType | null;
  isLoading: boolean;
  error: string | null;
}

const initialState: ThemeArrState = {
  themes: [],
  isLoading: false,
  error: null,
};

const themeSlice = createSlice({
  name: "themes",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllThemesThunk.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getAllThemesThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.themes = action.payload.data;
      })
      .addCase(getAllThemesThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload!.error ?? "Cломалось получение тем";
        state.themes = null;
      });
  },
});

export const themeReducer = themeSlice.reducer;
