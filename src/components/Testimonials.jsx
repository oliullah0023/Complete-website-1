import React from 'react'
import { feedback } from '../constants'
import FeedBackCard from './FeedBackCard'

const Testimonials = () => {
  return (
    <div className=' flex flex-col  m-5 pt-10'>
       <div className='flex flex-col sm:flex-row justify-between'>
        <h1 className=' font-poppins font-semibold text-[48px] text-white leading-[70px] mb-9'>What people are saying about us</h1>
        <p className=' font-poppins font-normal text-[18px] text-dimWhite leading-[40px]'>Everything you need to accept card payments and grow your business anywhere on the planet.</p>
       </div>

       <div className='flex flex-col sm:flex-row gap-4'>
          {
            feedback.map((feed) => (
              <FeedBackCard key={feed.id} {...feed} />
            ))
          }
       </div>
    </div>
  )
}

export default Testimonials
