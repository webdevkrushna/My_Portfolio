import React from 'react'

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white">
        <div className="max-w-screen-lg px-4  mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8 ">
            <p className="text-4xl font-bold inline border-b-4 border-b-gray-500 ">About</p>
        </div>
        
        <p className='text-xl mt-20'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum, 
            enim dolore unde similique laborum quia dolores harum tenetur numquam voluptas repudiandae ducimus tempora 
            labore praesentium excepturi in animi incidunt quaerat velit, recusandae at! Labore, blanditiis dolorum rem dolores 
            fuga non nulla suscipit eos mollitia facilis aut, quibusdam assumenda accusantium doloribus!
        </p>
        <br/>
        <p className='text-xl '>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum, 
            enim dolore unde similique laborum quia dolores harum tenetur numquam voluptas repudiandae ducimus tempora 
            labore praesentium excepturi in animi incidunt quaerat velit, recusandae at! Labore, blanditiis dolorum rem dolores 
            fuga non nulla suscipit eos mollitia facilis aut, quibusdam assumenda accusantium doloribus!
        </p>
        </div>
    </div>
  )
}

export default About