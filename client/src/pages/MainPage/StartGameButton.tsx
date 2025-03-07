import React from 'react';
import styles from './MainPage.module.css';

type StartGameButtonProps = {
  onClick: () => void;
};

export const StartGameButton: React.FC<StartGameButtonProps> = ({ onClick }) => {
  return (
    <div className={styles.buttons}>
      <button className={styles.blobBtn} onClick={onClick}>
        Начать игру
        <span className={styles.blobBtn__inner}>
          <span className={styles.blobBtn__blobs}>
            <span className={styles.blobBtn__blob}></span>
            <span className={styles.blobBtn__blob}></span>
            <span className={styles.blobBtn__blob}></span>
            <span className={styles.blobBtn__blob}></span>
          </span>
        </span>
      </button>
    </div>
  );
};
