import React, { useEffect } from "react";
import styles from "./Game.module.css";

export function GameField() {
  const dispatch = useAppDispatch();
  useEffect(() => {}, [dispatch]);

  return (
    <div>
      <table>
        <tbody>
          <tr>
            <td>Тема 1</td>
            <td>
              <div className="question-value">100</div>
            </td>
            <td>
              <div className="question-value">200</div>
            </td>
            <td>
              <div className="question-value">300</div>
            </td>
            <td>
              <div className="question-value">400</div>
            </td>
            <td>
              <div className="question-value">500</div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
