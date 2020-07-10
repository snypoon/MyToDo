import React from 'react';
import {NavLink} from 'react-router-dom';
import styles from './Links.module.css';

const Links = () => (<>
  <NavLink className={styles.link} activeClassName={styles.active} to='/about'>About Me</NavLink>
  <NavLink className={styles.link} exact activeClassName={styles.active} to='/'>MyToDo</NavLink>
  <NavLink className={styles.link} activeClassName={styles.active} to='/contacts'>Contacts</NavLink>
</>)

export default Links;