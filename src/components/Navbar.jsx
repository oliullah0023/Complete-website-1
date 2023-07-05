
import { useState } from 'react'
import Logo from '../assets/logo.svg'
import { navLinks } from '../constants'
import {menu, close} from '../assets'


const Navbar = () => {

  const [active, setActive]=useState('Home')
  const [toggle, setToggle]=useState(false)
  
  return (
    <div className=' w-full flex justify-between items-center'>
      
        <img 
        src={Logo} alt="logo"
        className=' w-[140px] h-[100px]'
        />
       
        <ul className='flex list-none gap-3'>
          {
            navLinks.map((nav)=>(
              <li 
               key={nav.id}
               className={`ss:flex hidden ${active === nav.title ? 'text-white' : 'text-dimWhite'}`}
               onClick={() => setActive(nav.title)}
              

              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))
          }
        </ul>

        <div className=' ss:hidden flex flex-col right-4 '>
          <img src={toggle ? close : menu} alt="menu" 
          className="w-[28px] h-[28px] object-contain"
          onClick={() => setToggle(!toggle)}
          />
          <div 
          className={` ${!toggle ? 'hidden' : 'flex'} bg-slate-600 p-5 rounded-xl sidebar top-16 right-0 absolute mx-2 my-2`}
          >
             <ul className='flex flex-col list-none gap-3'>
          {
            navLinks.map((nav)=>(
              <li 
               key={nav.id}
               className={`ss:hidden ${active === nav.title ? 'text-white' : 'text-dimWhite'}`}
               onClick={() => setActive(nav.title)}
              

              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))
          }
        </ul>
          </div>

        </div>
      
    </div>
  )
}

export default Navbar
