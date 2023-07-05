import React from 'react'
import {logo} from '../assets'
import { footerLinks, socialMedia } from '../constants'

const Footer = () => {
  return (
    <footer className=' mb-10'>
    <div className='flex flex-col sm:flex-row  m-5 mt-10'>
     <div className=' mr-44'>
      <img src={logo} alt="logo" />
      <p className=' text-dimWhite mt-8 leading-5'>A new way to make the payments easy, reliable and secure.</p>
     </div>
      <div className='flex-[1.5] w-full flex flex-row  justify-between flex-wrap   gap-20 text-white mt-8'>
    {
     footerLinks.map((footerlink) => (
      <div key={footerlink.id}>
        <h3 className=' text-[18px] leading-7   font-semibold'> {footerlink.title}</h3>
         <ul className=' list-none mt-4'>
          {
            footerlink.links.map((link, index) => (
              <li key={link.name} className=' text-[16px] font-normal gap-3 cursor-pointer'
              onClick={() => window.open(link.link)}>
                {link.name}

              </li>
            ))
          }
        </ul>
     
      </div>
     ))
    }
     </div>
    </div>

    <div className=' flex justify-between border-t-[1px] border-t-[#3F3E45] mt-5 '>
      <div className='flex justify-between mt-10 '>
        <p className='text-white '> Copyright@ 2021 HooBank. All Rights Reserved.</p>
      </div>
      <div className='flex gap-5'>
        {
          socialMedia.map((social) => (
            <img 
            key={social.id}
            src={social.icon} 
            alt={social.id}
            className='mt-10 w-[21px] h-[21px] cursor-pointer object-contain '
            onClick={() =>window.open(social.link) }
            />
            
          ))
        }
      </div>
    </div>
    </footer>
  )
}

export default Footer
