import { IGame } from '@/entities/game/model';
import styles from './GameCard.module.css';

interface GameCardProps {
  game: IGame;
}

export function GameCard({ game }: GameCardProps) {

  // console.log(task);
  return (
    <div className={styles.oneElement}>
      <div className={styles.username}>{game.User.username}</div>
      <div className={styles.score}>{game.score}</div>
    </div>
  );
}