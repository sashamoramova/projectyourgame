

import { questionReducer } from '@/entities/question';
import { themeReducer } from '@/entities/theme';

import { gameReducer } from '@/entities/game/slice/gameSlice';

import { userReducer } from '@/entities/user';
import { configureStore } from '@reduxjs/toolkit';


const store = configureStore({
  reducer: {
    user: userReducer,


    theme: themeReducer,
    question: questionReducer,

    game: gameReducer,
    // task: taskReducer,

  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
