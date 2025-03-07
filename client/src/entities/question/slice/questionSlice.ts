import { createSlice } from "@reduxjs/toolkit";
import { QuestionArrayType } from "../model"
import { getAllQuestionsByIdThunk, getAllQuestionsThunk } from "../api";


type QuestionArrayTypeState = {
  questions:QuestionArrayType | null
  error: string | null;
  isLoading: boolean;
}
const initialState: QuestionArrayTypeState={
  questions:[],
  error: null,
  isLoading: false
}

const questionSlice = createSlice({
  name:"questions",
  initialState,
  reducers:{},
  extraReducers:(builder)=>{
    builder
    .addCase(getAllQuestionsThunk.pending,(state)=>{
      state.isLoading = true;
        state.error = null;
    })
    .addCase(getAllQuestionsThunk.fulfilled,(state,action)=>{
      state.isLoading = false;
        state.error = null;
        state.questions = action.payload.data;
    })
    .addCase(getAllQuestionsThunk.rejected,(state, action)=>{
      state.isLoading = false;
      state.error = action.payload!.error ?? "не получается достать вопросы";
      state.questions= null
    })
    .addCase(getAllQuestionsByIdThunk.pending,(state)=>{
      state.isLoading = true;
        state.error = null;
    })
    .addCase(getAllQuestionsByIdThunk.fulfilled,(state, action)=>{
      state.isLoading = false;
      state.error = null
      state.questions = action.payload.data
    })
    .addCase(getAllQuestionsByIdThunk.rejected,(state,action)=>{
      state.isLoading = false
      state.error = action.payload!.error ?? "не работает получение вопросов по id"
    })
  }
})

export const questionReducer = questionSlice.reducer