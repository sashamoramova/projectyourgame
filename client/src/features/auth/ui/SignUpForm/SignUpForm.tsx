import { useState } from 'react';
import { useNavigate } from 'react-router';
import UserValidator from '../../validation/UserValidator';
import { IUserSignUpData, signUpThunk } from '@/entities/user';
import { CLIENT_ROUTES } from '@/shared/enums/clientRoutes';
import { useAppDispatch, useAppSelector } from '@/shared/hooks/reduxHooks';
import styles from './SignUpForm.module.css';
// import { useAlert } from '@/features/alerts';

const INITIAL_INPUTS_DATA = {
  username: '',
  email: '',
  password: '',
  repeatPassword: '',
};

export default function SignUpForm() {
  const [inputs, setInputs] = useState<
    IUserSignUpData & { repeatPassword: string }
  >(INITIAL_INPUTS_DATA);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  // const { showAlert } = useAlert();
  const globalError = useAppSelector((state) => state.user.error);

  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputs((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  };

  const onSubmitHandler = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const { isValid, error } = UserValidator.validateSignUp(inputs);

    if (!isValid) return alert(error);

    try {
      await dispatch(signUpThunk(inputs));
      if (globalError) {
        // showAlert(globalError, 'error');
        return;
      }
      // showAlert('Вы успешно вошли в систему', 'success');
      setInputs(INITIAL_INPUTS_DATA);
      navigate(CLIENT_ROUTES.MAIN);
    } catch (error) {
      console.log(error);
    }
  };

  const { username, email, password, repeatPassword } = inputs;

  return (
    <div className={styles.formWrapper}>
    <form onSubmit={onSubmitHandler} className={styles.formContainer}>
      <h2 className={styles.formTitle}>Регистрация</h2>
      <input
        type='text'
        name='username'
        placeholder='введите ваше имя'
        autoFocus
        onChange={onChangeHandler}
        value={username}
        className={styles.inputField}
      />

      <input
        type='email'
        name='email'
        placeholder='введите ваш email'
        onChange={onChangeHandler}
        value={email}
        className={styles.inputField}
      />

      <input
        type='password'
        name='password'
        placeholder='введите ваш пароль'
        onChange={onChangeHandler}
        value={password}
        className={styles.inputField}
      />

      <input
        type='password'
        name='repeatPassword'
        placeholder='повторите ваш пароль'
        onChange={onChangeHandler}
        value={repeatPassword}
        className={styles.inputField}
      />

      <button type='submit' className={styles.submitButton}>Зарегистрироваться</button>
    </form>
    </div>
  );
}