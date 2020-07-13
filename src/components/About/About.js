import React from 'react';
import styles from './About.module.css';
import { Octokit } from '@octokit/rest';
import { withStyles } from '@material-ui/core/styles';
import { CircularProgress } from '@material-ui/core';
import classnames from 'classnames';
import Icons from '../Icons/Icons';

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
                    <Icons.Location/>
                    {userInfo.location}
                  </div>
                </div>
                <div className={styles.works}>
                  <h2 className={styles.worksTitle}><span className={styles.color}>My</span> Works : </h2>
                  <ul className={styles.worksList}>
                    <a href="https://snypoon.github.io/Afrodita/" className={styles.worksLink}>
                      <Icons.Link styles={styles.linkicon}/>
                      <li className={styles.worksItem}>Afrodita - Верстка многостраничного сайта фитнес-клуба</li>
                    </a>
                    <a href="https://snypoon.github.io/Burger/" className={styles.worksLink}>
                      <Icons.Link styles={styles.linkicon}/>
                      <li className={styles.worksItem}>Mr.Burger - landing-page бургерной сети Санкт-Питербурга</li>
                    </a>
                    <a href="https://snypoon.github.io/Tesla/" className={styles.worksLink}>
                      <Icons.Link styles={styles.linkicon}/>
                      <li className={styles.worksItem}>Tesla - landing одной небезызвестной компании</li>
                    </a>
                    <a href="https://snypoon.github.io/card_game/" className={styles.worksLink}>
                      <Icons.Link styles={styles.linkicon}/>
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
                      <Icons.GitHub styles={styles.giticon}/>
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