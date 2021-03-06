import React from 'react';
import {HashRouter as Router, Route} from 'react-router-dom';
import styles from './App.module.css';
import Links from '../Links/Links';
import Todo from '../Todo/Todo';
import Contacts from '../Contacts/Contacts';
import About from '../About/About';

const App = () => {
  return(
    <Router>
      <nav className={styles.nav}>
        <Links></Links>
      </nav>
      <div className={styles.card}>
        <Route path='/about' component={About}></Route>
        <Route path='/' exact component={Todo}></Route>
        <Route path='/contacts' component={Contacts}></Route>
      </div>
    </Router>
  )
};

export default App;