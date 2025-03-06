import {
  refreshTokensThunk,
  signInThunk,
  signUpThunk,
  signOutThunk,
} from "../api";

import { IUser } from "../model";
import { createSlice } from "@reduxjs/toolkit";

type UserState = {
  user: IUser | null;
  error: string | null;
  isLoading: boolean;
};

const initialState: UserState = {
  user: null,
  error: null,
  isLoading: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  ///* синхронные обработчики:
  reducers: {},
  ///* асинхронные обработчики:
  extraReducers: (builder) => {
    builder
      ///* обрабатываем refresh токены:
      .addCase(refreshTokensThunk.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(refreshTokensThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.user = action.payload.data.user;
      })
      .addCase(refreshTokensThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload!.error ?? "Unknown error";
        state.user = null;
      })

      ///* обрабатываем signInThunk:
      .addCase(signInThunk.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(signInThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.user = action.payload.data.user;
      })
      .addCase(signInThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload!.error ?? "Unknown error";
        state.user = null;
      })

      ///* обрабатываем signUpThunk:
      .addCase(signUpThunk.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(signUpThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.user = action.payload.data.user;
      })
      .addCase(signUpThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload!.error ?? "Unknown error";
        state.user = null;
      })

      ///* обрабатываем signOutThunk:
      .addCase(signOutThunk.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(signOutThunk.fulfilled, (state) => {
        state.isLoading = false;
        state.error = null;
        state.user = null;
      })
      .addCase(signOutThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload!.error ?? "Unknown error";
        state.user = null;
      });
  },
});

export const userReducer = userSlice.reducer;
