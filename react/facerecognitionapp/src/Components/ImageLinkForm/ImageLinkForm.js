import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => {
	return(
		<div>
			<p className='f3'>
				{'This magic Brain will detect faces in your pictures. Give it a try'}
			</p>
			<div className='center'>
				<div className='form center pa3 br3 shadow-3'>
					<input className='f4 ma1 pa3 w-70' type='text' onChange={onInputChange}/>
					<button className='w-30 grow ma1 pa4 f4  link ph3 pv2 dib white bg-light-purple' onClick={onButtonSubmit}>Detect</button>
				</div>
			</div>
		</div>
	);
}

export default ImageLinkForm;