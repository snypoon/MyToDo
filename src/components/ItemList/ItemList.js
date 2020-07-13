import React from 'react';
import PropTypes from 'prop-types';
import Item from '../Item/Item';
import styles from './ItemList.module.css';
import Icons from '../Icons/Icons';

const ItemList = ({filterItems, checkboxChange, onClickDelete, todoItems}) => (<>
  {todoItems.length === 0 ? (
    <div className={styles.noworkInfo}>
      <Icons.NoWork styles={styles.icon} pathStyles={styles.color}/>
      <span className={styles.noworkTitle}>Новых дел пока нет,<span className={styles.color}> но </span>их можно добавить!</span>
    </div>) : (
      <ul className={styles.list}>
      {filterItems().map((item, key) => <li key={key} className={styles.item}>
        <Item value={item.value}
              done={item.done}
              id={item.id}
              checkboxChange={checkboxChange}
              onClickDelete={onClickDelete}
        />
      </li>)}
    </ul>
  )}
</>);

Item.propTypes = {
	value: PropTypes.string,
	done: PropTypes.bool,
	id: PropTypes.number,
	checkboxChange: PropTypes.func,
	onClickDelete: PropTypes.func
};

export default ItemList;


