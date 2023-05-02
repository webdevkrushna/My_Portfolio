import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail} from 'react-icons/hi';
import {BsFillPersonLinesFill} from 'react-icons/bs';
const SocialLinks = () => {
    
  const links = [
      {
        id : 1,
        child: (
              <>
              LinkedIn <FaLinkedin size={30} />
          </> 
        ),
        href: 'https://linkedin.com/in/krushna-kale-1370061a1',
        style:'rounded-tr-md'
      },
      {
        id : 2,
        child: (
              <>
              Github <FaGithub size={30} />
          </> 
        ),
        href: 'https://github.com/webdevkrushna',
      },
      {
        id : 3,
        child: (
              <>
              Mail <HiOutlineMail size={30} />
          </> 
        ),
        href: 'mailto:itskrushnakale@gmail.com',
      },
      {
        id : 4,
        child: (
              <>
              Resume <BsFillPersonLinesFill size={30} />
          </> 
        ),
        href: '/Resume.pdf',
        style:'rounded-br-md',
        download: true,
      },
    ]
  
  return (

    <div className="hidden lg:flex flex-col top-[35%] left-0  fixed ">
        <ul>

          {links.map(({id,child,href,style,download})=>(
          <li key={id} className={" flex justify-between items-center h-14 w-40 px-4 bg-gray-500 ml-[-100px] hover:rounded-md hover:ml-[-10px] duration-300 "+" "+style}>
            <a href={href} className="flex justify-between items-center w-full text-white"
            download={download}
            target='_blank'
            rel='noreferrer'>
            {child}
            </a>
          </li>
          ))}
        </ul>
    </div>
  )
}

export default SocialLinks
