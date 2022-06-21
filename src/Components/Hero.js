import React from 'react'
import heroMobilePng from '../Assets/image-hero-mobile.png'
import heroMobileWebp from '../Assets/image-hero-mobile.webp'
import heroMobile2xPng from '../Assets/image-hero-mobile@2x.png'
import heroMobile2xWebp from '../Assets/image-hero-mobile@2x.webp'

import heroTabletPng from '../Assets/image-hero-tablet.png'
import heroTabletWebp from '../Assets/image-hero-tablet.webp'
import heroTablet2xPng from '../Assets/image-hero-tablet@2x.png'
import heroTablet2xWebp from '../Assets/image-hero-tablet@2x.webp'

import heroDesktopPng from '../Assets/image-hero-desktop.png'
import heroDesktopWebp from '../Assets/image-hero-desktop.webp'
import heroDesktop2xPng from '../Assets/image-hero-desktop@2x.png'
import heroDesktop2xWebp from '../Assets/image-hero-desktop@2x.webp'

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
						<source
							media='(min-width: 1440px)'
							srcSet={`${heroDesktopPng}, ${heroDesktop2xPng},${heroDesktopWebp},${heroDesktop2xWebp}`}
						/>
						<source
							media='(min-width: 768px)'
							srcSet={`${heroTabletPng},${heroTablet2xPng},${heroTabletWebp},${heroTablet2xWebp}`}
						/>
						<source
							srcSet={`${heroMobilePng},${heroMobile2xPng},${heroMobileWebp},${heroMobile2xWebp}`}
						/>
					</picture>
					<img src={heroMobilePng} alt='hero' className='img' />
				</div>
			</div>
		</div>
	)
}

export default Hero
