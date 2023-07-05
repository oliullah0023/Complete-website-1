import React from 'react'
import card from '../assets/card.png'
import Button from './Button'

const CardDeal = () => {
  return (
    <div className='flex flex-col sm:flex-row   justify-between mt-14'>
   

    <div className='flex flex-col mt-5 sm:mt-20'>
      <h1 className=' font-poppins text-[48px] leading-[72px] mb-8 font-semibold text-white '>Easily control your billing & invoicing.</h1>
      <p className=' font-poppins font-normal text-[18px] text-dimWhite mb-10'>Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea placerat.</p>

      <Button />
      </div>

      <div>
      <img src={card} alt="card" />
    </div>
  </div>
  )
}

export default CardDeal
