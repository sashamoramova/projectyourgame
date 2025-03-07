import { questionReducer } from '@/entities/question';
import { themeReducer } from '@/entities/theme';
import { userReducer } from '@/entities/user';
import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
  reducer: {
    user: userReducer,
   
    theme: themeReducer,
    question: questionReducer,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;