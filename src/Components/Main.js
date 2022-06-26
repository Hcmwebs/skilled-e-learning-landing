import React from 'react'
import animation from '../Assets/icon-animation.svg'
import photography from '../Assets/icon-photography.svg'
import design from '../Assets/icon-design.svg'
import crypto from '../Assets/icon-crypto.svg'
import business from '../Assets/icon-business.svg'

const Main = () => {
	return (
		<main className='main'>
			<div className='container'>
				<div className='card card-one'>
					<h2>Check out our most popular courses!</h2>
				</div>
				<div className='card '>
					<img src={animation} alt='animation' className='icon' />
					<h3 className='title'>animation</h3>
					<p className='body'>
						Learn the latest animation techniques to create stunning motion
						design and captivate your audience.
					</p>
					<button className='btn btn-card'>Get Started</button>
				</div>

				<div className='card '>
					<img src={design} alt='design' className='icon' />
					<h3 className='title'>Design</h3>
					<p className='body'>
						Create beautiful, usable interfaces to help shape the future of how
						the web looks.
					</p>
					<button className='btn btn-card'>Get started</button>
				</div>
				<div className='card'>
					<img src={photography} alt='Photography' className='icon' />
					<h3 className='title'>Photography</h3>
					<p className='body'>
						Explore critical fundamentals like lighting, composition, and focus
						to capture exceptional photos.
					</p>
					<button className='btn btn-card'>Get Started</button>
				</div>
				<div className='card'>
					<img src={crypto} alt='crypto' className='icon' />
					<h3 className='title'>Crypto</h3>
					<p className='body'>
						All you need to know to get started investing in crypto. Go from
						beginner to advanced with this 54 hour course.
					</p>
					<button className='btn btn-card'>Get Started</button>
				</div>
				<div className='card'>
					<img src={business} alt='Business' className='icon' />
					<h3 className='title'>Business</h3>
					<p className='body'>
						A step-by-step playbook to help you start, scale, and sustain your
						business without outside investment.
					</p>
					<button className='btn btn-card'>Get Started</button>
				</div>
			</div>
		</main>
	)
}

export default Main
