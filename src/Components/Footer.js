import React from 'react'
import logo from '../Assets/logo-light.svg'

const Footer = () => {
	return (
		<footer className='footer'>
			<div className='container'>
				<img src={logo} alt='logo' className='img' />
				<button className='btn btn-footer'>Get started</button>
			</div>
		</footer>
	)
}

export default Footer
