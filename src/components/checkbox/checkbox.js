import React from 'react'
import './checkbox.css';

export const CheckBox = props => {

	const { 
		onClickCheckbox, 
		isChecked, 
		id, 
	} = props;

	return (
		<>
			<input 
				className="checkBox"
				onClick={onClickCheckbox} 
				type="checkbox" 
				checked={isChecked} 
				value={id} 
			/> 
			<div >{id}</div>
		</>
	)
}
