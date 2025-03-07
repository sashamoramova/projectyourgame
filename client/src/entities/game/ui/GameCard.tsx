import { IGame } from '@/entities/game/model';
import styles from './GameCard.module.css';

interface GameCardProps {
  game: IGame;
}

export function GameCard({ game }: GameCardProps) {

  console.log(game);
  return (
    <div className={styles.oneElement}>
      <div className={styles.username}>{game.user.username}</div>
      {/* <div className={styles.username}>{game.userId}</div> */}
      <div className={styles.score}>{game.score}</div>
    </div>
  );
}