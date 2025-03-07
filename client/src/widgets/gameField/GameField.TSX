import React, { useEffect, useState } from 'react';
import styles from './Game.module.css';
import { useAppDispatch } from '@/shared/hooks/reduxHooks';
import { getAllThemesThunk, ThemeArrayType } from '@/entities/theme';
import {
  getAllQuestionsByIdThunk,
  getAllQuestionsThunk,
  IQuestion,
  QuestionArrayType,
} from '@/entities/question';
import QuestionCard from '@/entities/question/ui/QuestionCard/QuestionCard';

export function GameField() {
  const [themes, setThemes] = useState<ThemeArrayType | null>(null);
  const [questions, setQuestions] = useState<QuestionArrayType | null>(null);
  const [counter, setCounter] = useState(0);
  const [selectedQ, setSelectedQ] = useState<IQuestion | null>(null);
  const [renderCard, setRenderCard] = useState(false);
  // const [arrOfQuestions, setArrOfQuestions] = useState([]);

  const dispatch = useAppDispatch();

  useEffect(() => {
    const fetchThemes = async () => {
      try {
        const result = await dispatch(getAllThemesThunk()).unwrap();
        console.log(result);
        if (result && result.data) {
          setThemes(result.data as ThemeArrayType);
        } else {
          console.error('Ошибка при получении тем: данные отсутствуют');
        }
      } catch (error) {
        console.error('Ошибка при получении тем:', error);
      }
    };

    const fetchQuestions = async (id: number) => {
      try {
        const result = await dispatch(getAllQuestionsByIdThunk(id)).unwrap();
        console.log(result);
        if (result && result.data) {
          return result.data as QuestionArrayType;
        } else {
          console.error('Ошибка при получении тем: данные отсутствуют');
        }
      } catch (error) {
        console.error('Ошибка при получении тем:', error);
      }
    };

    const fetchAllQuestions = async () => {
      try {
        const result = await dispatch(getAllQuestionsThunk()).unwrap();
        console.log(result);
        if (result && result.data) {
          setQuestions(result.data as QuestionArrayType);
        } else {
          console.error('Ошибка при получении тем: данные отсутствуют');
        }
      } catch (error) {
        console.error('Ошибка при получении тем:', error);
      }
    };

    fetchThemes();
    fetchQuestions(1);
    fetchAllQuestions();
  }, [dispatch]);

  function openCard(question: IQuestion | null) {
    setSelectedQ(question);
    setRenderCard(true);
  }

  return (
    <>
      <div>Очков набрано:{counter}</div>
      <div className={styles.main}>
      <div className={styles.field}>
        {themes?.map((theme) => (
          <div className={styles.themeRow} key={theme.id}>
            {/* Блок с темой */}
            <div className={styles.themeCard}>{theme.themeName}</div>
            {/* Блок с вопросами для этой темы */}
            <div className={styles.questionsRow}>
              {questions
                ?.filter((question) => question.themeId === theme.id) // Фильтруем вопросы по теме
                .map((question) => (
                  <div
                    className={styles.questionsCard}
                    key={question.id}
                    onClick={() => openCard(question)}
                  >
                    {question.cost}
                  </div>
                ))}
            </div>
          </div>
        ))}
      </div>
      <div>
      {renderCard && selectedQ && (
        <QuestionCard
          selectedQ={selectedQ}
          counter={counter}
          setCounter={setCounter}
          setRenderCard={setRenderCard}
        />
      )}
      </div>
      </div>
    </>
  );
}
<div className={styles.questionsCard}></div>;
