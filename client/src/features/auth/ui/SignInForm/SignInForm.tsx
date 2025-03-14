import { useState } from 'react';
import { useNavigate } from 'react-router';
import UserValidator from '../../validation/UserValidator';
import { IUserSignInData, signInThunk } from '@/entities/user';
import { CLIENT_ROUTES } from '@/shared/enums/clientRoutes';
import { useAppDispatch, useAppSelector } from '@/shared/hooks/reduxHooks';
import styles from './SignInForm.module.css'
// import { useAlert } from '@/features/alerts';

const INITIAL_INPUTS_DATA = {
  email: '',
  password: '',
};

export default function SignInForm() {
  const [inputs, setInputs] = useState<IUserSignInData>(INITIAL_INPUTS_DATA);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  // const { showAlert } = useAlert();
  const isLoading = useAppSelector((state) => state.user.isLoading);

  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputs((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  };

  const onSubmitHandler = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const { isValid, error } = UserValidator.validateSignIn(inputs);

    if (!isValid) return alert(error);

    try {
      const resultAction = await dispatch(signInThunk(inputs));
      if (resultAction.payload?.error) {
        // showAlert(resultAction.payload?.error, 'error');
        return;
      }
      // showAlert('Вы успешно вошли в систему', 'success');
      setInputs(INITIAL_INPUTS_DATA);
      navigate(CLIENT_ROUTES.MAIN);
    } catch (error) {
      console.log(error);
    }
  };

  const { email, password } = inputs;

  return (
    <div className={styles.formWrapper}>
    <form onSubmit={onSubmitHandler} className={styles.formContainer}>
      <h2 className={styles.formTitle}>Вход</h2>
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
      <button type='submit' className={styles.submitButton} disabled={isLoading}>
        {isLoading ? 'Загрузка...' : 'войти'}
      </button>
    </form>
    </div>
  );
}