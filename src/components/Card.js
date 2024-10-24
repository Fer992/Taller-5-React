import React from 'react';
import styles from '../styles/Card.module.css';

const Card = ({ title, description, buttonText }) => {
  return (
    <div className={styles.card}>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.description}>{description}</p>
      <button className={styles.button}>{buttonText}</button>
    </div>
  );
};

export default Card;
