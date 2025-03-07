import styles from './GameList.module.css';
import React, { JSX, useMemo } from "react";
import { GameCard } from "@/entities/game";
import { useGameList } from "../useGameList";

export function GameList(): JSX.Element {
  const { games } = useGameList();

  // const totalGames = useMemo(() => {
  //   console.log("Calculating games count....");
  //   return games.length;
  // }, [games.length]);

  return (
    <div className={styles.bobr} >
      {/* <div>Сыграно {totalGames}</div> */}
      <div>Лучшие бобрята</div>
      {games.length > 0 ? (
        games.map((el) => (
          <GameCard
            game={el}
            key={el.id}
            // onUpdate={(updatedTask) => updateTask(el.id, updatedTask)}
          />
        ))
      ) : (
        <h1>Игр пока не обнаружено</h1>
      )}
    </div>
  );
}

export const memorizedTaskList = React.memo(GameList);
