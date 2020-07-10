import React from 'react';
import styles from './Clear.module.css'

const Clear = ({onClickDeleteComplete}) => (
  <span className={styles.item}
        onClick={onClickDeleteComplete}>
    Удалить выполненные
  </span>
)

export default Clear;