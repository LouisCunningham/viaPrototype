import React from 'react'
import video from '../assets/bg.mp4';

const Landing = () => {
  return (
    <>
     <section className="landing ">
        <video autoPlay loop muted className='background-video' playsInline >
            <source src={video} type='video/mp4' />
        </video>
	<div className=" text-white mb-6">
		<div className="container mr-2 md:mx-auto lg:mx-auto flex flex-col md:flex-row items-center my-12 md:my-24 w-3/4">
			<div className="flex flex-col sm:w-full w-3/4 lg:w-2/3 justify-center items-start p-8">
				<h1 className=" sm:text-sm md:text-2xl text-4xl p-2  tracking-loose uppercase">viaSolutions</h1>
				<h2 className="text-5xl sm:text-sm md:text-3xl p-2 leading-relaxed md:leading-snug mb-10 uppercase">Consulting
				</h2>
				<p className="text-lg md:text-lg text-gray-50 mb-4 w-full">Transform Your IT Operations with Expert ITSM Consulting
Achieve seamless IT service management with tailored solutions that drive efficiency and innovation. Our experienced consultants help optimize your processes, improve service delivery, and align IT with your business goals. From ITIL implementation to service automation, we're here to elevate your IT strategy.
<br />
<br />
Your IT, Our Expertise | Customized Solutions | Drive Operational Excellence.</p>
				
			</div>
		
					</div>
				</div>
</section>
    </>
  )
}

export default Landing
