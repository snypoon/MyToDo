import React from 'react';
import styles from './About.module.css';
import { Octokit } from '@octokit/rest';
import { withStyles } from '@material-ui/core/styles';
import { CircularProgress } from '@material-ui/core';
import classnames from 'classnames';

const octokit = new Octokit();

const CssCircular = withStyles({
  root: {
    '&.MuiCircularProgress-colorPrimary': {
      'color': '#2ECFC1',
      'margin': '100px'
    },
  }
})(CircularProgress);

class About extends React.Component {
  state = {
    isLoading: true,
    repoList: [],
    userInfo: [],
    isError: false,
    ErrorMessage: {}
  }

  componentDidMount(){
    octokit.repos.listForUser({
      username: 'snypoon'
    }).then(({ data }) =>{
        this.setState({
          repoList: data,
          isLoading: false
        })
    })
    .catch(err =>{
      this.setState({
          isError: true,
          ErrorMessage: err
      })
    });
    octokit.users.getByUsername({
      username: 'snypoon'
    }).then(({ data }) =>{
      this.setState({
        userInfo: data,
        isLoading: false
      })
    })
    .catch(err =>{
      this.setState({
          isError: true,
          isLoading: false,
          ErrorMessage: err
      })
    })
  }

  render(){
    const {isLoading, repoList ,userInfo, isError, ErrorMessage} = this.state;

    return(<>
      <h1 className={styles.title}>About<span className={styles.color}>Me</span></h1>
      <div className={styles.wrapper}>
        {isError ? 
          <div className={styles.error}>
            <h2>При загрузкe произошла ошибка :(</h2>
            <span className={styles.error_text}>{ErrorMessage.message}</span>
            <span className={styles.error_num}>{ErrorMessage.status}</span>
          </div> 
          : <>
            {isLoading ? <CssCircular size={100} /> : <div className={styles.content}>
              <div className={styles.user}>
                <img src={userInfo.avatar_url} alt="avatar" className={styles.img}></img>
                <div className={styles.info}>
                  <h2 className={styles.name}>{userInfo.name}</h2>
                  <a href={userInfo.html_url} className={styles.giturl}>@{userInfo.login}</a>
                  <div className={styles.location}>
                    <svg  fill="#2ECFC1" viewBox="0 0 16 16" version="1.1" width="18" height="18"><path d="M11.536 3.464a5 5 0 010 7.072L8 14.07l-3.536-3.535a5 5 0 117.072-7.072v.001zm1.06 8.132a6.5 6.5 0 10-9.192 0l3.535 3.536a1.5 1.5 0 002.122 0l3.535-3.536zM8 9a2 2 0 100-4 2 2 0 000 4z"></path></svg>
                    {userInfo.location}
                  </div>
                </div>
                <div className={styles.works}>
                  <h2 className={styles.worksTitle}><span className={styles.color}>My</span> Works : </h2>
                  <ul className={styles.worksList}>
                    <a href="https://snypoon.github.io/Afrodita/" className={styles.worksLink}>
                      <svg className={styles.linkicon} viewBox="0 -256 1850 1850"><path d="M 1408,608 V 288 Q 1408,169 1323.5,84.5 1239,0 1120,0 H 288 Q 169,0 84.5,84.5 0,169 0,288 v 832 Q 0,1239 84.5,1323.5 169,1408 288,1408 h 704 q 14,0 23,-9 9,-9 9,-23 v -64 q 0,-14 -9,-23 -9,-9 -23,-9 H 288 q -66,0 -113,-47 -47,-47 -47,-113 V 288 q 0,-66 47,-113 47,-47 113,-47 h 832 q 66,0 113,47 47,47 47,113 v 320 q 0,14 9,23 9,9 23,9 h 64 q 14,0 23,-9 9,-9 9,-23 z m 384,864 V 960 q 0,-26 -19,-45 -19,-19 -45,-19 -26,0 -45,19 L 1507,1091 855,439 q -10,-10 -23,-10 -13,0 -23,10 L 695,553 q -10,10 -10,23 0,13 10,23 l 652,652 -176,176 q -19,19 -19,45 0,26 19,45 19,19 45,19 h 512 q 26,0 45,-19 19,-19 19,-45 z"/></svg>
                      <li className={styles.worksItem}>Afrodita - Верстка многостраничного сайта фитнес-клуба</li>
                    </a>
                    <a href="https://snypoon.github.io/Burger/" className={styles.worksLink}>
                      <svg className={styles.linkicon} viewBox="0 -256 1850 1850"><path d="M 1408,608 V 288 Q 1408,169 1323.5,84.5 1239,0 1120,0 H 288 Q 169,0 84.5,84.5 0,169 0,288 v 832 Q 0,1239 84.5,1323.5 169,1408 288,1408 h 704 q 14,0 23,-9 9,-9 9,-23 v -64 q 0,-14 -9,-23 -9,-9 -23,-9 H 288 q -66,0 -113,-47 -47,-47 -47,-113 V 288 q 0,-66 47,-113 47,-47 113,-47 h 832 q 66,0 113,47 47,47 47,113 v 320 q 0,14 9,23 9,9 23,9 h 64 q 14,0 23,-9 9,-9 9,-23 z m 384,864 V 960 q 0,-26 -19,-45 -19,-19 -45,-19 -26,0 -45,19 L 1507,1091 855,439 q -10,-10 -23,-10 -13,0 -23,10 L 695,553 q -10,10 -10,23 0,13 10,23 l 652,652 -176,176 q -19,19 -19,45 0,26 19,45 19,19 45,19 h 512 q 26,0 45,-19 19,-19 19,-45 z"/></svg>
                      <li className={styles.worksItem}>Mr.Burger - landing-page бургерной сети Санкт-Питербурга</li>
                    </a>
                    <a href="https://snypoon.github.io/Tesla/" className={styles.worksLink}>
                      <svg className={styles.linkicon} viewBox="0 -256 1850 1850"><path d="M 1408,608 V 288 Q 1408,169 1323.5,84.5 1239,0 1120,0 H 288 Q 169,0 84.5,84.5 0,169 0,288 v 832 Q 0,1239 84.5,1323.5 169,1408 288,1408 h 704 q 14,0 23,-9 9,-9 9,-23 v -64 q 0,-14 -9,-23 -9,-9 -23,-9 H 288 q -66,0 -113,-47 -47,-47 -47,-113 V 288 q 0,-66 47,-113 47,-47 113,-47 h 832 q 66,0 113,47 47,47 47,113 v 320 q 0,14 9,23 9,9 23,9 h 64 q 14,0 23,-9 9,-9 9,-23 z m 384,864 V 960 q 0,-26 -19,-45 -19,-19 -45,-19 -26,0 -45,19 L 1507,1091 855,439 q -10,-10 -23,-10 -13,0 -23,10 L 695,553 q -10,10 -10,23 0,13 10,23 l 652,652 -176,176 q -19,19 -19,45 0,26 19,45 19,19 45,19 h 512 q 26,0 45,-19 19,-19 19,-45 z"/></svg>
                      <li className={styles.worksItem}>Tesla - landing одной небезызвестной компании</li>
                    </a>
                    <a href="https://snypoon.github.io/card_game/" className={styles.worksLink}>
                      <svg className={styles.linkicon} viewBox="0 -256 1850 1850"><path d="M 1408,608 V 288 Q 1408,169 1323.5,84.5 1239,0 1120,0 H 288 Q 169,0 84.5,84.5 0,169 0,288 v 832 Q 0,1239 84.5,1323.5 169,1408 288,1408 h 704 q 14,0 23,-9 9,-9 9,-23 v -64 q 0,-14 -9,-23 -9,-9 -23,-9 H 288 q -66,0 -113,-47 -47,-47 -47,-113 V 288 q 0,-66 47,-113 47,-47 113,-47 h 832 q 66,0 113,47 47,47 47,113 v 320 q 0,14 9,23 9,9 23,9 h 64 q 14,0 23,-9 9,-9 9,-23 z m 384,864 V 960 q 0,-26 -19,-45 -19,-19 -45,-19 -26,0 -45,19 L 1507,1091 855,439 q -10,-10 -23,-10 -13,0 -23,10 L 695,553 q -10,10 -10,23 0,13 10,23 l 652,652 -176,176 q -19,19 -19,45 0,26 19,45 19,19 45,19 h 512 q 26,0 45,-19 19,-19 19,-45 z"/></svg>
                      <li className={styles.worksItem}>FindTheBug - мини-игра в которой вам предстоить найти баг в одной из карт </li>
                    </a>
                  </ul>
                </div>
              </div>
              <div className={styles.repo}>
                <h2 className={styles.repoTitle}>My Git<span className={styles.color}>Hub</span> Repositories : </h2>
                <ul className={styles.list}>
                  {repoList.map(repo => (
                  <a href={repo.html_url} key={repo.id} className={styles.link}>
                    <li className={styles.item}>
                      <span className={styles.repoName}>{repo.name}</span>
                      <span className={styles.update}>{'Updated ' +  new Date(repo.updated_at).toLocaleDateString('en-GB')}</span>
                      <span className={classnames({
                        [styles.language]: true,
                        [styles.html_language]: repo.language === 'HTML',
                        [styles.css_language]: repo.language === 'CSS',
                        [styles.js_language]: repo.language === 'JavaScript',
                        })}>
                        {repo.language}
                      </span>
                      <svg className={styles.giticon} viewBox="0 0 16 16" version="1.1"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path></svg>
                    </li>
                  </a>))}
                </ul>
              </div>
            </div>}
          </>}
        </div>
    </>)
  }
}


export default About; 