import React from 'react'
import { CheckBox } from '../checkbox';

export const CheckboxWrapper = props => {
	const { onClickCheckbox, isChecked} = props

	return (
		<>
			<CheckBox 
				onClickCheckbox={onClickCheckbox}  
				{...props} 
			/>
			{
				isChecked 
					?
				 		<p>Je suis à TRUE</p>
					: 
						<p>Je suis à FALSE</p>
			}
		</>
	)
}
