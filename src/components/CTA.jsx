import React from 'react'
import Button from './Button'

const CTA = () => {
  return (
    <div className='flex flex-col sm:flex-row justify-between items-center bg-slate-800 p-5 m-6 rounded-lg'>
      <div>
        <h1 className=' font-poppins text-white text-[48px] font-semibold'>Let’s try our service now!</h1>
        <p className=' font-poppins text-[18px] text-dimWhite leading-10 mb-7'>Everything you need to accept card payments and grow your business anywhere on the planet.</p>
      </div>
      <Button />
    </div>
  )
}

export default CTA
