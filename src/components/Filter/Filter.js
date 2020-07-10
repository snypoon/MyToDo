import React from 'react';
import style from './Filter.module.css'

const Filter = ({filter, changeFilter }) => (<ul className={style.list}>
  <li className={filter === 'Все' ? style.active : style.item}
      onClick={() => changeFilter('Все')}>
      Все
  </li>
  <li className={filter === 'Активные' ? style.active : style.item}
      onClick={() => changeFilter('Активные')}>
      Активные
  </li>
  <li className={filter === 'Выполненые' ? style.active : style.item}
      onClick={() => changeFilter('Выполненые')}>
      Выполненые
  </li>
</ul>)

export default Filter;