import styles from './Footer.module.css';
import { JSX } from 'react';

export default function Footer(): JSX.Element {
  return <div className={styles.container}>X-Powered-By: Бобры и Бобрихи</div>;
}