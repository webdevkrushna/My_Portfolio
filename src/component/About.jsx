import React from 'react'

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white">
        <div className="max-w-screen-lg px-4  mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-2 ">
            <p className=" text-4xl font-bold inline border-b-4 border-b-gray-500 ">About</p>
        </div>
        
        <p className='text-xl mt-14'>
            <span className='mb-2 font-bold text-xl'>Hi, I'm Krushna </span><br/>
            I'm a "Bachelor Of Computer Science" graduate currently located in Maharashtra, 
            I have 1 year of self taught experience in building web-applications.
            Checkout some of my work <a href="portfolio" className='text-blue-700 hover:underline marker:none cursor-pointer'> projects </a>.
                        
                        Key interests in backend development using java as well as
                        frontend technologies like
                        HTML5, CSS3, React JS, Node JS, and Tailwind.
        </p>
        <br/>
        <p className='text-xl '>
           I'm familiar with tools such as genkins,git,maven and concepts like CI and CD. 
           I have good knowlege and working experience with "REST APIs", and would love an opportunity to work with "REST and Microservices".
           Available for freelance as well as full time job. You can download my<a href='/resume.pdf' className='text-blue-700 hover:underline cursor-pointer' download={true}> Resume</a>.

           
        </p>
        </div>
    </div>
  )
}

export default About