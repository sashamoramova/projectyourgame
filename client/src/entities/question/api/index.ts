import { axiosInstance } from '@/shared/lib/axiosInstance';
import { IServerResponse } from '@/shared/types';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';

enum QUESTION_API_ENDPOINTS {
  GET_ALL_QUESTION = '/question',
  GET_QUESTION_BY_THEME_ID = '/question/byTheme/:id',
}

enum QUESTION_THUNK_TYPES {
  GET_ALL_QUESTION = '/question/getAll',
  GET_QUESTION_BY_THEME_ID = '/question/getQuestionsByThemeId',
}

export const getAllQuestionsThunk = createAsyncThunk<
  IServerResponse,
  void,
  { rejectValue: IServerResponse }
>(QUESTION_THUNK_TYPES.GET_ALL_QUESTION, async (_, { rejectWithValue }) => {
  try {
    const { data } = await axiosInstance.get(QUESTION_API_ENDPOINTS.GET_ALL_QUESTION);
    return data;
  } catch (error) {
    const err = error as AxiosError<IServerResponse>;
    return rejectWithValue(err.response!.data);
  }
});

export const getAllQuestionsByIdThunk = createAsyncThunk<
  IServerResponse,
  number,
  { rejectValue: IServerResponse }
>(
  QUESTION_THUNK_TYPES.GET_QUESTION_BY_THEME_ID,
  async (id: number, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get(
        QUESTION_API_ENDPOINTS.GET_QUESTION_BY_THEME_ID.replace(':id', String(id)),
      );
      const data = response.data;
      return data;
    } catch (error) {
      const err = error as AxiosError<IServerResponse>;
      return rejectWithValue(err.response!.data);
    }
  },
);

// .get("/", QuestionController.getAllQuestions)

// .get("/:id/byTheme", QuestionController.getQuestionsByThemeId);
