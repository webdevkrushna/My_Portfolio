import React from 'react'
import HeroImage from '../assets/heroImage.jpg';
import {HiArrowRight} from 'react-icons/hi';
const Home = () => {
  return (
    <div name="home" className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 ">
        <div className="max-w-screen-lg mx-auto flex flex-col
        items-center justify-center h-full px-4 md:flex-row ">
            <div className="flex flex-col justify-center h-full">
                <h2 className="text-4xl sm:text-6xl font-bold text-white">
                    I'm a Full Stack Developer
                </h2>
                <p className="text-gray-400 max-w-md my-2">
                    I have self taught experience in building web-applications.
                    Key interests in backend development using java as well as
                    frontend technologies like
                    HTML, CSS, React JS, Node JS, and Tailwind.
                </p>

                <div className="">
                    <button className="text-white w-fit px-6 py-3 my-2 flex items-center rounded-md  bg-gradient-to-r from-cyan-500 to-blue-600 cursor-pointer group">
                        Portfolio
                        <span className="group-hover:rotate-90 ml-1 duration-300">
                        <HiArrowRight/>
                        </span>
                    </button>
                </div>
            </div>
            <div >
                <img className="rounded-2xl mx-auto w-2/4 md:max-w-1/2" src={HeroImage} alt="my_Profile"/>
            </div>
        </div>
    </div>
  )
}

export default Home