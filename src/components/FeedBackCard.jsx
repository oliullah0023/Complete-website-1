import React from 'react'
import quotes from '../assets/quotes.svg'

const FeedBackCard = ({id, content, name, title, img}) => {
  return (
    <div className='flex flex-col sm:flex-row hover:bg-zinc-800 p-4 rounded-lg'>
      <div >
      <img className='  w-[42.6px] h-[27.6px]' src={quotes} alt="quotes" />
      </div>
      <div>
      <p className=' text-white text-[16px] mt-5'>{content}</p>
      <div className='flex justify-start items-center gap-5'>
         <img className='w-[48px] h-[48px] mt-5' src={img} alt="" />

         <div className=' mt-5'>
         <h3 className=' font-poppins font-semibold text-white items-center'>{name}</h3>
         <h5 className=' font-poppins text-dimWhite font-normal'>{title} </h5>
         </div>
         </div>
      </div>
      
    </div>
  )
}

export default FeedBackCard
