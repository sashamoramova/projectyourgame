import styles from "./UserAvatar.module.css";
import { JSX } from "react";
import { IUser } from "../../model";

type Props = {
  user: IUser;
};

export function UserAvatar({ user }: Props): JSX.Element {
  return (
    <div className={styles.container}>
      <div className={styles.circle}>
        <img
          className={styles.avatar}
          src="https://s.ura.news/images/news/upload/articles/281/151/1036281151/353087_Deny_meteorita_v_Gosudarstvennom_istoricheskom_muzee_Yuzhnogo_Urala_Chelyabinsk_muzey_bober_bobr_chuchelo_bobra_760x0_3967.2645.0.0.jpg"
          alt={user.username}
        />
      </div>
      <span>{user.username}</span>
    </div>
  );
}
