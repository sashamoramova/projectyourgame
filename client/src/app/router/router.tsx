import { JSX } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router';
import {
  MainPage,
  SignInPage,
  SignUpPage,
} from '@/pages';
import { CLIENT_ROUTES } from '@/shared/enums/clientRoutes';
import Layout from '../layout/Layout';
import { ScorePage } from '@/pages/ScorePage/ScorePage';
import { GamePage } from '@/pages/GamePage/GamePage';

export default function Router(): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={CLIENT_ROUTES.MAIN} element={<Layout />}>
          <Route path={CLIENT_ROUTES.MAIN} element={<MainPage />} />
          <Route path={CLIENT_ROUTES.SIGN_IN} element={<SignInPage />} />
          <Route path={CLIENT_ROUTES.SIGN_UP} element={<SignUpPage />} />
          <Route path={CLIENT_ROUTES.SCORE} element={<ScorePage />} />
          <Route path={CLIENT_ROUTES.GAME} element={<GamePage />} />
          {/* <Route element={<TaskProviderWrapper />}>
            <Route path={CLIENT_ROUTES.TASKS} element={<TasksPage />} />
            <Route path={CLIENT_ROUTES.ONE_TASK} element={<OneTaskPage />} />
          </Route>
          <Route path={CLIENT_ROUTES.NOT_FOUND} element={<NotFoundPage />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}