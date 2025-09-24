import React from 'react';
import styles from './RecordCard.module.css';

interface RecordCardProps {
  date: string;
  things: string[];
}

const RecordCard = (props: RecordCardProps) => {
  return (
    <div className={styles.card}>
      <h3 className={styles.dateHeader}>{props.date}</h3>
      <ul className={styles.thingList}>
        {props.things.map((thing, i) => (
          <li key={i} className={styles.thingItem}>{thing}</li>
        ))}
      </ul>
    </div>
  );
};

export default RecordCard;