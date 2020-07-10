import React from 'react';
import PropTypes from 'prop-types';
import styles from './Left.module.css';

const Left = ({count}) => (
  <div>Осталось выполнить : <span className={styles.num}>{count}</span></div>
);

Left.defaultProps = {
  count: 0
};

Left.propTypes = {
  count: PropTypes.number
};

export default Left;