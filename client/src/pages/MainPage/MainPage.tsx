import { JSX } from "react";
import styles from "./MainPage.module.css";
import { useNavigate } from "react-router";
import { CLIENT_ROUTES } from "@/shared/enums/clientRoutes";
import { useAppSelector } from "@/shared/hooks/reduxHooks";
import { StartGameButton } from "./StartGameButton";

export function MainPage(): JSX.Element {
  const navigate = useNavigate();
  const user = useAppSelector((state) => state.user.user);


  // const startNewgame = 
  
  return (
    <div className={styles.btnContainer}>
      {user ? (
        <StartGameButton onClick={() => navigate(CLIENT_ROUTES.GAME)} />
      ) : (
        <StartGameButton onClick={() => navigate(CLIENT_ROUTES.SIGN_IN)} />
      )}
    </div>
  );
}