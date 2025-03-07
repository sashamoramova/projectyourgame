import {
  getAllGamesThunk,
//   IRawGameData,
//   updateGameThunk,
} from "@/entities/game";
// import { useCallback } from "react";
import { useEffect } from "react";

import { useAppDispatch, useAppSelector } from "@/shared/hooks/reduxHooks";
// import { unwrapResult } from "@reduxjs/toolkit";

export const useGameList = () => {
  const dispatch = useAppDispatch();
  const games = useAppSelector((state) => state.game.games);


//   const updateGame = useCallback(
//     async (id: number, updatedGame: IRawGameData) => {
//       const result = await dispatch(updateGameThunk({ id, updatedGame }));
//       console.log("result =====>>>", result);
//       unwrapResult(result);
//     },
//     [dispatch]
//   );

  useEffect(() => {
    dispatch(getAllGamesThunk());
  }, [dispatch]);

  return {
    games,
    
  };
};
