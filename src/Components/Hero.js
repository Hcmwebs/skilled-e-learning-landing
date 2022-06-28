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
				<picture>
					<source
						media='(min-width: 1440px)'
						srcSet={`${heroDesktopPng} 1440w,${heroDesktop2xPng} 2x`}
						type='image/png'
					/>

					<source
						media='(min-width:1440px)'
						srcSet={`${heroDesktopWebp} 1440w , ${heroDesktop2xWebp} 2x`}
						type='image/webp'
					/>

					<source
						media='(min-width: 768px)'
						srcSet={`${heroTabletPng} 768w,${heroTablet2xPng} 2x`}
						type='image/png'
					/>
					<source
						media='(min-width:768px)'
						srcSet={`${heroTabletWebp} 768w,${heroTablet2xWebp} 2x`}
						type='image/webp'
					/>
					<source
						srcSet={`${heroMobilePng} 375w,${heroMobile2xPng} 2x`}
						type='image/png'
					/>
					<source
						srcSet={`${heroMobileWebp},${heroMobile2xWebp} 2x`}
						type='image/webp'
					/>
					<img src={heroDesktopPng} alt='hero' className='img' />
				</picture>
			</div>
		</div>
	)
}

export default Hero
