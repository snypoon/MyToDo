import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import styles from './Item.module.css';


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
		<svg onClick={() => onClickDelete(id, done)} className={styles.trash} viewBox="0 0 716.803 716.803" xmlns="http://www.w3.org/2000/svg">
			<path d="M628.14,99.933c-15.133,5.2-33.713,9.847-55.486,13.863c-56.24,10.373-130.529,16.085-209.18,16.085
					c-78.652,0-152.941-5.712-209.181-16.085c-20.247-3.734-48.995-12.99-65.612-18.794c-6.042-2.111-12.197,2.843-11.432,9.197
					l65.743,546.678c1.638,12.346,8.841,22.738,18.883,28.789c29.562,21.678,106.558,37.137,196.893,37.137
					c85.955,0,159.822-13.996,192.253-34.029c11.77-5.613,20.438-16.871,22.277-30.547l66.256-543.08
					C640.327,102.794,634.19,97.853,628.14,99.933z"/>
			<path d="M644.378,52.742c0-1.35-0.277-2.688-0.816-4.012C632.444,21.476,509.022,0,358.402,0
					C200.461,0,72.425,23.614,72.425,52.743c0,29.129,128.036,52.742,285.977,52.742c146.24,0,266.826-20.245,283.892-46.368
					C643.659,57.027,644.378,54.9,644.378,52.742z"/>
		</svg>
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