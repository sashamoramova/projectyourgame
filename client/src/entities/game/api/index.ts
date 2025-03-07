import { axiosInstance } from '@/shared/lib/axiosInstance';
// import { IApiResponseReject, IApiResponseSuccess } from '@/shared/types';
import { IServerResponse } from "@/shared/types";
import { createAsyncThunk } from '@reduxjs/toolkit';
import { ArrayGamesType, IRawGameData, IGame } from '../model';
import { AxiosError } from 'axios';

// enum TASK_THUNKS_TYPES {
//   GET_ALL = 'task/getAll',
//   CREATE = 'task/create',
//   DELETE = 'task/delete',
//   UPDATE = 'task/update',
// }
enum GAME_THUNKS_TYPES {
    GET_ALL = 'game/getAll',
    CREATE = 'game/create',
    UPDATE = 'game/update',
  }

export const getAllGamesThunk = createAsyncThunk<
IServerResponse<ArrayGamesType>,
  void,
  { rejectValue: IServerResponse }
>(GAME_THUNKS_TYPES.GET_ALL, async (_, { rejectWithValue }) => {
  try {
    const { data } = await axiosInstance.get<
    IServerResponse<ArrayGamesType>
    >('/games');

    return data;
  } catch (error) {
    const err = error as AxiosError<IServerResponse>;
    return rejectWithValue(err.response!.data);
  }
});

export const createGameThunk = createAsyncThunk<
IServerResponse<IGame>,
IRawGameData,
  { rejectValue: IServerResponse }
>(GAME_THUNKS_TYPES.CREATE, async (newGame, { rejectWithValue }) => {
  try {
    const { data } = await axiosInstance.post<IServerResponse<IGame>>(
      '/games',
      newGame
    );

    return data;
  } catch (error) {
    const err = error as AxiosError<IServerResponse>;
    return rejectWithValue(err.response!.data);
  }
});

export const updateGameThunk = createAsyncThunk<
IServerResponse<IGame>,
  { id: number; updatedGame: IRawGameData },
  { rejectValue: IServerResponse }
>(
  GAME_THUNKS_TYPES.UPDATE,
  async ({ id, updatedGame }, { rejectWithValue }) => {
    try {
      const { data } = await axiosInstance.put<IServerResponse<IGame>>(
        `/games/${id}`,
        updatedGame
      );

      return data;
    } catch (error) {
      const err = error as AxiosError<IServerResponse>;
      return rejectWithValue(err.response!.data);
    }
  }
);