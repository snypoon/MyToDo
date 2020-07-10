import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import styles from './Input.module.css';

// style for input
const CssTextField = withStyles({
  root: {
    'width': '100%',
    '& .MuiFormLabel-root': {
      'font-family': 'Ubuntu'
    },
    '& .MuiFormLabel-root.Mui-focused': {
      'color': '#2ECFC1'
    },
    '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
      'border-color': '#2ECFC1'
    },
    '& .MuiFormLabel-root.Mui-error': {
      'color': '#f44336'
    },
    '& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline':{
      'border-color': '#2ECFC1'
    },
    '& .MuiInputLabel-animated':{
      'transition': 'color .4s cubic-bezier(0.0, 0, 0.2, 1) 0ms,transform .4s cubic-bezier(0.0, 0, 0.2, 1) 0ms'
    }
  },
})(TextField);


class Input extends React.Component{
  state = {
    value: '',
    error: false,
    helperText: ''
  };


  valueValidate = () => {
    if(this.props.todoItems.find(item => this.state.value === item.value)){
      this.setState({error: true , helperText: 'ТАКОЕ ДЕЛО УЖЕ ЕСТЬ'});
    }
    else if(this.state.value === ''){
      this.setState({error: true , helperText: 'ВВЕДИТЕ ТЕКСТ'});
    }else{
      this.props.addNewTodo(this.state.value);
      this.setState({value: '', error: false ,helperText:''});
    }
  }

  onKeyDownAction = (e) => {
    if(e.key === 'Enter'){
      this.valueValidate();
    }
  }

  onClickAction = () => {
    this.valueValidate();
  }

  render() {
    return (<div className={styles.input}>
      <CssTextField
        id="outlined-basic" 
        label="новое дело" 
        variant="outlined"
        value={this.state.value}
        error={this.state.error} 
        helperText={this.state.helperText}
        onChange={event => this.setState({ value: event.target.value })}
        onKeyPress={this.onKeyDownAction}
      />
      <button className={styles.btn} onClick={this.onClickAction}>
        <svg className={styles.icon} viewBox="0 0 384 384">
          <g><g>
          <path d="M341.333,0H42.667C19.093,0,0,19.093,0,42.667v298.667C0,364.907,19.093,384,42.667,384h298.667
              C364.907,384,384,364.907,384,341.333V42.667C384,19.093,364.907,0,341.333,0z M298.667,213.333h-85.333v85.333h-42.667v-85.333
              H85.333v-42.667h85.333V85.333h42.667v85.333h85.333V213.333z"/>
          </g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g>
        </svg>
      </button>
      
    </div>)
  }
}

export default Input;