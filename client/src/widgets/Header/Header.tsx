import { CLIENT_ROUTES } from "@/shared/enums/clientRoutes";
import { NavLink, useNavigate } from "react-router";
import styles from "./Header.module.css";
import { UserAvatar } from "@/entities/user/ui/UserAvatar/UserAvatar";
import { signOutThunk } from "@/entities/user/api";
import { JSX } from "react";
import { useAppDispatch, useAppSelector } from "@/shared/hooks/reduxHooks";
// import { useAlert } from "@/features/alerts";

export default function Header(): JSX.Element {
  const navigate = useNavigate();
  const user = useAppSelector((state) => state.user.user);
  const dispatch = useAppDispatch();
  // const { showAlert } = useAlert();

  const onSignOutHandler = async () => {
    dispatch(signOutThunk());
    // showAlert("Вы успешно вышли из системы", "success");
    navigate(CLIENT_ROUTES.SIGN_IN);
  };

  return (
    <nav className={styles.container}>
      <NavLink
        to={CLIENT_ROUTES.MAIN}
        className={({ isActive }) => (isActive ? styles.active : "")}
      >
        Главная
      </NavLink>
      {user && (
        <>
          <NavLink
            to={CLIENT_ROUTES.SCORE}
            className={({ isActive }) => (isActive ? styles.active : "")}
          >
            Счёт
          </NavLink>
          <UserAvatar user={user} />
          <button onClick={onSignOutHandler}>Выйти</button>
        </>
      )}
      {!user && (
        <>
          <NavLink
            to={CLIENT_ROUTES.SIGN_IN}
            className={({ isActive }) => (isActive ? styles.active : "")}
          >
            Вход
          </NavLink>
          <NavLink
            to={CLIENT_ROUTES.SIGN_UP}
            className={({ isActive }) => (isActive ? styles.active : "")}
          >
            Регистрация
          </NavLink>
        </>
      )}
    </nav>
  );
}
