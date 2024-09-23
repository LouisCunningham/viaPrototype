import React from 'react'

const Services = () => {
  return (
    <>
      <section className="bg-custom
      ">
    <div className="container px-6 py-10 mx-auto">
    <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-gray-300"></h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Capabilities
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-300">
          At viaSolutions we also believe in empowering our clients with the knowledge to make informed decisions.  ​As proven problem solvers, we strive to get to the root of our client’s toughest challenges.  Our recipe for success lies in our ability to understand our clients' needs, leverage a number of best practices, leverage past experiences and develop sustainable solutions. These solutions encourage our clients to maintain their service offerings without ongoing consulting. 
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-4 mb-20 card-group-service">
        <div className="w-full service-cards">
                  <div className="w-full max-w-xs overflow-hidden bg-white rounded-lg shadow-lg ">
                    <div className="bg-pink-500 object-cover w-full h-56">
                      <p className='text-white text-center px-6 py-10'>We provide ITSM consulting backed by industry best practice and standards.</p>
                    </div>

                    <div className="py-5 text-center">
                      <a
                        href="#"
                        className="block text-xl font-bold text-gray-800 "
                        tabIndex="0"
                        role="link"
                      >
                        Consulting
                      </a>
                     
                    </div>
                  </div>
                </div>

                <div className="w-full service-cards">
                  <div className="w-full max-w-xs overflow-hidden bg-white rounded-lg shadow-lg ">
                    <div className="bg-pink-500 object-cover w-full h-56">
                      <p className='text-white text-center px-6 py-10'>We offer a variety of trainings that can be taken at your own pace, or classroom style.</p>
                    </div>

                    <div className="py-5 text-center">
                      <a
                        href="#"
                        className="block text-xl font-bold text-gray-800 "
                        tabIndex="0"
                        role="link"
                      >
                       Training
                      </a>
                      
                    </div>
                  </div>
                </div>

           <div className="w-full service-cards">
                  <div className="w-full max-w-xs overflow-hidden bg-white rounded-lg shadow-lg ">
                    <div className="bg-pink-500 object-cover w-full h-56">
                      <p className='text-white text-center px-6 py-10'>We offer process development and impelementation support.</p>
                    </div>

                    <div className="py-5 text-center">
                      <a
                        href="#"
                        className="block text-xl font-bold text-gray-800 "
                        tabIndex="0"
                        role="link"
                      >
                        Process Reengineering
                      </a>
                      
                    </div>
                  </div>
                </div>

                <div className="w-full service-cards">
                  <div className="w-full max-w-xs overflow-hidden bg-white rounded-lg shadow-lg ">
                    <div className="bg-pink-500 object-cover w-full h-56">
                      <p className='text-white text-center px-6 py-10'>We offer appraisal and auditing services for both internal and external benefits.</p>
                    </div>

                    <div className="py-5 text-center">
                      <a
                        href="#"
                        className="block text-xl font-bold text-gray-800 "
                        tabIndex="0"
                        role="link"
                      >
                        Compliance
                      </a>
                      
                    </div>
                  </div>
                </div>
        </div>
    </div>
</section>
    </>
  )
}

export default Services;
