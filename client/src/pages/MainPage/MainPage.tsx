import { JSX } from "react";
import styles from "./MainPage.module.css";
import { useNavigate } from "react-router";
import { CLIENT_ROUTES } from "@/shared/enums/clientRoutes";
import { useAppSelector } from "@/shared/hooks/reduxHooks";

export function MainPage(): JSX.Element {
  const navigate = useNavigate();
  const user = useAppSelector((state) => state.user.user);


  // const startNewgame = 
  
  return (
    <div className={styles.btnContainer}>
      {user ? (
        <button
          className={styles.btnStart}
          onClick={() => navigate(CLIENT_ROUTES.GAME)}
        >
          Начать игру
        </button>
      ) : (
        <button
          className={styles.btnStart}
          onClick={() => navigate(CLIENT_ROUTES.SIGN_IN)}
        >
          Начать игру
        </button>
      )}
    </div>
  );
}
