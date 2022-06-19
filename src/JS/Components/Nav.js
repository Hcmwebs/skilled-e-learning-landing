import React from 'react'
import logo from '../../Assets/logo-dark.svg'

const Nav = () => {
	return (
		<nav className='nav'>
			<div className='img-container'>
				<img src={logo} alt='logo' className='img'/>
			</div>
			<button className='btn btn-primary'>get started</button>
		</nav>
	)
}

export default Nav
