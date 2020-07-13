import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import styles from './Item.module.css';
import Icons from '../Icons/Icons';


class Item extends React.Component {
	render() {
		const {value , done , id, checkboxChange, onClickDelete} = this.props;	
		
		return (<>
			<input type="checkbox" name="todo" 
			className={styles.checkbox}
			checked={done}
			onChange={() => checkboxChange(id)} >
			</input>
			<label className={
				classnames({
					[styles.item]:true,
					[styles.done]:done
				})
			}>{value}</label>
			<Icons.Trash onClick={() => onClickDelete(id, done)}  styles={styles.trash}/>
		</>)
	}
}

Item.defaultProps = {
	done: false
}

Item.propTypes = {
	value: PropTypes.string,
	done: PropTypes.bool,
	id: PropTypes.number,
	checkboxChange: PropTypes.func,
	onClickDelete: PropTypes.func
};

export default Item;