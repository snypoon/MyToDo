import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import styles from './Input.module.css';
import Icons from '../Icons/Icons';

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
        <Icons.InputButton styles={styles.icon}/>
      </button>
      
    </div>)
  }
}

export default Input;