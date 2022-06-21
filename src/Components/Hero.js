import React from 'react'
import heroMobilePng from '../Assets/image-hero-mobile.png';
import heroMobileWebp from '../Assets/image-hero-mobile.webp'

const Hero = () => {
	return (
		<div className='hero'>
			<div className='hero-text'>
				<h1> Maximize skill, minimize budget</h1>
				<p>
					Our modern courses across a range of in-demand skills will give you
					the knowledge you need to live the life you want.
				</p>
				<button className='btn btn-hero'> Get Started</button>
			</div>
			<div className='hero-img'>
				<div className='img-container'>
					<picture>
						<source  media ='(min-width: 768px)' srcSet ={heroMobilePng} type={heroMobilePng} />
					</picture>
					<img src={heroMobilePng} alt='hero' className='img' />
				</div>
			</div>
		</div>
	)
}

export default Hero
