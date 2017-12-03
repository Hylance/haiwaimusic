import React from 'react';
import styles from '../scss/description.scss';

export default function ({ song, singer }) {
  return (
    <div>
      <h2 className={styles.song}>{song}</h2>
      <div className={styles.singerName}>{singer}</div>
    </div>
  );
}
