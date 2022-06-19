import React from 'react'
import Hero from './Hero'
import Nav from './Nav'

const Header = () => {
	return (
		<header className='header'>
			<Nav />
			<Hero />
		</header>
	)
}

export default Header
