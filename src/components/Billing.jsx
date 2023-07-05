import React from 'react'
import { bill,apple, google } from '../assets'

const Billing = () => {
  return (
    <div className='flex flex-col sm:flex-row justify-between mt-14'>
      <div>
        <img src={bill} alt="bill" />
      </div>

      <div className='flex flex-col mt-5 sm:mt-20'>
        <h1 className=' font-poppins text-[48px] leading-[72px] mb-8 font-semibold text-white '>Easily control your billing & invoicing.</h1>
        <p className=' font-poppins font-normal text-[18px] text-dimWhite'>Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea placerat.</p>

        <div className='flex mt-9 justify-center gap-6 '>
          <img className=' w-[144px] h-[43px]' src={apple} alt="google" />
          <img className=' w-[144px] h-[43px]' src={google}alt="google" />
        </div>
      </div>
    </div>
  )
}

export default Billing
