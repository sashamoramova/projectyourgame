import { axiosInstance } from "@/shared/lib/axiosInstance";
import { IServerResponse } from "@/shared/types";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosError } from "axios";

enum THEME_API_ENDPOINTS {
  GET_ALL_THEMES = "/theme",
  GET_THEME_BY_ID = "/theme/:id",
}

enum THEME_THUNK_TYPES {
  GET_ALL_THEMES = "/theme/getAll",
  GET_THEME_BY_ID = "/theme/getById",
}

export const getAllThemesThunk = createAsyncThunk<
  IServerResponse,
  void,
  { rejectValue: IServerResponse }
>(THEME_THUNK_TYPES.GET_ALL_THEMES, async (_, { rejectWithValue }) => {
  try {
    const {response} = await axiosInstance.get(
      THEME_API_ENDPOINTS.GET_ALL_THEMES
    );
    const serverResponce: IServerResponse = response {
        statusCode: response.status,
        message: "Темы успешно получены",
        data: response.data,
      };
     return serverResponce;
    }

   catch (error) {
    const err = error as AxiosError<IServerResponse>;
    return rejectWithValue(err.response!.data);
  }
});

export const getAllThemeByIdThunk = createAsyncThunk<
  IServerResponse,
  number,
  { rejectValue: IServerResponse }
>(
  THEME_THUNK_TYPES.GET_THEME_BY_ID,
  async (id: number, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get(
        `THEME_API_ENDPOINTS.GET_THEME_BY_ID.replace/${id}`,
      );

      const data = response.data;
      return data;
    } catch (error) {
      const err = error as AxiosError<IServerResponse>;
      return rejectWithValue(err.response!.data);
    }
  }
);
