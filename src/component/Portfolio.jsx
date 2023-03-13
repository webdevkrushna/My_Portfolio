import React from 'react'
import my_portfolio from '../assets/portfolio/my_portfolio.png';
import BlogTempImg from '../assets/portfolio/BlogTempImg.jpg';
const Portfolio = () => {
  
  const handleClick=(link)=>{
    window.open(link,'_blank');
  }

  const portfolios =[
    {
      id:1,
      src:my_portfolio,
      href:"https://github.com/webdevkrushna/My_Portfolio"
    },
    {
      id:2,
      src:BlogTempImg,
      href:"https://github.com/silentwolf65/Blog-User-Api"
    },
  ]

  return (

    <div name="portfolio" className="bg-gradient-to-b pb-6 from-black to-gray-800  w-full text-white h-screen md:h-screen">
        <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
          
          <div className="pb-8">
            <p className="text-white font-bold text-4xl inline border-b-4 border-gray-500">Portfolio</p>
            <p className="py-6">Check out some some of my work</p>
          </div>

          <div  className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0 cursor-pointer ">
          {
            portfolios.map(({id,src,href})=>(
            <div key={id} className=" shadow-md shadow-gray-600 rounded-lg">
              <img src={src} alt="project snapshot" className=" rounded-md hover:scale-105 w-full h-2/3 duration-200"/>
                <div className="flex items-center justify-center">
                  <button onClick={()=>{
                    handleClick(href)
                  }} className="w-1/2 py-2 m-3 hover:scale-105 duration-200">code</button>
                </div>
            </div>
          
           ))
          }
        </div>
        </div>
    </div>
  )
}

export default Portfolio