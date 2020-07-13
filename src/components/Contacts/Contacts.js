import React from 'react';
import styles from './Contacts.module.css';
import Icons from '../Icons/Icons';

const Contacts = () => (<>
  <h1 className={styles.title}><span className={styles.title_color}>C</span>ontacts</h1>
  <div className={styles.content}>
    <ul className={styles.list}>
      <li className={styles.item}>
        <a className={styles.link} href='https://vk.com/snypoon'>
          <Icons.Vk styles={styles.icon}/>
        </a>
      </li >
      <li className={styles.item}>
        <a className={styles.link} href='https://github.com/snypoon'>
          <Icons.GitHub styles={styles.icon}/>
        </a>
      </li>
      <li className={styles.item}>
        <a className={styles.link} href='https://www.linkedin.com/in/snypoon/'>
          <Icons.LinkedIn styles={styles.icon}/>
        </a>
      </li>
      <li className={styles.item}>
        <a className={styles.link} href='https://t.me/snypoon'>
          <Icons.Telegram styles={styles.icon}/>
        </a>
      </li>
      <li className={styles.item}>
        <a className={styles.link} href='mailto:snypoon2202@gmail.com'>
          <Icons.Mail styles={styles.icon}/>
        </a>
      </li>
    </ul>
  </div>
</>)

export default Contacts; 