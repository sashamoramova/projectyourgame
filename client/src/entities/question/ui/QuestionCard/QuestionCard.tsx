import React from "react";
import { useState } from "react";
import { IQuestion } from "../../model";
import styles from "./QuestionCard.module.css";

//import { useAlert } from "@/features/alerts";

type Props = {
  selectedQ: IQuestion | null;
  counter: number;
  setCounter: React.Dispatch<React.SetStateAction<number>>;
  setRenderCard: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function QuestionCard({
  selectedQ,
  counter,
  setCounter,
  setRenderCard,
}: Props) {
  const [input, setInput] = useState("");

  function putAnswer(answer: string) {
    if (answer.toLowerCase() === selectedQ?.rightAnswer.toLowerCase()) {
      setCounter(counter + selectedQ?.cost);
    } else {
      setCounter(counter - selectedQ?.cost);
    }
    setInput("");
    setRenderCard(false);
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    putAnswer(input);
  };

  return (
    <div>
      <h2>{selectedQ?.body}</h2>

      <div className={styles.editCard}>
        <form onSubmit={handleSubmit} className={styles.form}>
          <input
            className={styles.input}
            type="text"
            value={input}
            onChange={handleChange}
            placeholder="введи ответ... с маленькой буквы..."
            name="title"
          />
          <button className={styles.editBtn} type="submit">
            Ответить
          </button>
        </form>
      </div>
    </div>
  );
}
