import { createSlice } from "@reduxjs/toolkit";
// import { message } from "antd";
import { ArrayGamesType } from "../model";
import { createGameThunk, getAllGamesThunk, updateGameThunk } from "../api";

type GameState = {
  games: ArrayGamesType | [];
  error: string | null;
  loading: boolean;
};

const initialState: GameState = {
  games: [],
  error: null,
  loading: false,
};

const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      //* getAllGamesThunk
      .addCase(getAllGamesThunk.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAllGamesThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.games = action.payload.data;
        state.error = null;
        // message.success(action.payload.message);
      })
      .addCase(getAllGamesThunk.rejected, (state, action) => {
        state.loading = false;
        state.games = [];
        state.error = action.payload!.error ?? "Unknown error";
        // message.error(action.payload!.error);
      })

      //* createGameThunk
      .addCase(createGameThunk.pending, (state) => {
        state.loading = true;
      })
      .addCase(createGameThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.games = [...state.games, action.payload.data];
        state.error = null;
        // message.success(action.payload.message);
      })
      .addCase(createGameThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload!.error ?? "Unknown error";
        // message.error(action.payload!.error);
      })

      //* updateGameThunk
      .addCase(updateGameThunk.pending, (state) => {
        state.loading = true;
      })
      .addCase(updateGameThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.games = state.games.map((game) =>
          game.id === action.payload.data.id ? action.payload.data : game
        );
        state.error = null;
        // message.success(action.payload.message);
      })
      .addCase(updateGameThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload!.error ?? "Unknown error";
        // message.error(action.payload!.error);
      });
  },
});

export const gameReducer = gameSlice.reducer;
