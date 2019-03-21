import React from 'react';
import Tilt from 'react-tilt';
import brain from './brain.png';
import './Logo.css';

const Logo = () => {
	return(
		<div className='ma4 nt0'>
			<Tilt className="Tilt br2 shadow-2" options={{ max : 55 }} style={{ height: 100, width: 100 }} >
			 <div className="Tilt-inner">
			 	<img style={{paddingTop: '25px'}} alt='logo' src={brain} /> 
			</div>
			</Tilt>
		</div>
	);
}

export default Logo;