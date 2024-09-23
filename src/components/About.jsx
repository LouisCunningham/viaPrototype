import React from 'react'
import video from '../assets/blob3.gif';

const About = () => {
  return (
    <>
      <section className="bg-custom about flex content-center justify-center min-h-screen">
    <div className="container px-10 py-20 mx-auto  min-h-full">
        

        <div className="md:mt-20 lg:mt-20 lg:-mx-6 lg:flex lg:items-center">
            <img className="blob-1 object-cover sm:w-full lg:mx-2 lg:ml-4 lg:w-1/2 rounded-xl h-72 lg:h-96" src={video} alt="" />

            <div className="mt-6 lg:w-1/2 lg:mt-0 lg:mx-6 ">
            <h1 className="text-5xl font-semibold text-white capitalize lg:text-6xl dark:text-white">About</h1>
                

                <a href="#" className="block mt-4 text-4xl font-semibold text-white hover:underline dark:text-white">
                    Digital Consulting
                </a>

                <p className="mt-3 text-lg text-gray-200 dark:text-gray-300 md:text-lg leading-normal">
                viaSolutions is a solutions-oriented business consulting and ITSM training organization aimed at providing viable solutions to organizations and individuals alike.
                <br />
                <br />
                viaSolutions was started because we want to offer a more modern, comprehensive way to solve business problems. We know that our clients' profiles are unique, so it only makes sense that their solutions be unique, which is why we offer customized services to meet every client's needs.  Using this approach, our clients save time and money because they only pay for what they actually need.
                </p>

                <a href="#" className="inline-block mt-2 text-white hover:text-blue-400">Read more</a>

                <div className="flex items-center mt-6">
                    <img className="object-cover object-center w-10 h-10 rounded-full" src="https://images.unsplash.com/photo-1531590878845-12627191e687?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80" alt="" />

                    <div className="mx-4">
                        <h1 className="text-sm text-gray-200 dark:text-gray-200"> Tiffany Hunt</h1>
                        <p className="text-sm text-gray-500 dark:text-gray-400">Your Title Here</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
    </>
  )
}

export default About
