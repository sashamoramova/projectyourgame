import { gameReducer } from '@/entities/game/slice/gameSlice';
import { userReducer } from '@/entities/user';
import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
  reducer: {
    user: userReducer,
    game: gameReducer,
    // task: taskReducer,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;