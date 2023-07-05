import React from 'react'
import Discount from '../assets/Discount.svg'
import styles from '../style'
import robot from '../assets/robot.png'
import GetStarted from './GetStarted'


const Hero = () => {
  return (
    <section id='home' className={`flex md:flex-row flex-col ${styles.paddingY}`}>
      <div className='flex flex-col m-6 mt-9'>
     <div className=' flex bg-discount-gradient rounded-lg p-1'>
       <img src={Discount} alt="discount" />
       <p className=' text-dimWhite text-[18px]'><span className=' text-white'>20%</span> DISCOUNT FOR <span className=' text-white'>1 MONTH </span> ACCOUNT</p>
     </div>

     <div className=' flex'>
     <h1 className=' text-white mt-8 text-[72px] font-bold'>The Next <br />
      <span className='text-gradient'>Generation</span> 
     </h1>
     <div className=' ss:flex hidden mt-9 gap-5 mr-4'>
      <GetStarted />
     </div>
     </div>

     <h1 className=' text-white mt-5 text-[72px] font-bold'>Payment Method</h1>
    
     <p className=' text-dimWhite mt-8 text-[18px] leading-9'>Our team of experts uses a methodology to identify the credit cards most likely to fit your needs. 
We examine annual percentage rates, annual fees.</p>
     </div>

     <div className={`flex ${styles.flexCenter} z-10`}>
      <img className='w-[100%] h-[100%] relative z-10' src={robot} alt="robot" />

      {/* gradient starts */}

        {/* gradient end */}
     </div>

      <div className={`ss:hidden ${styles.flexCenter}`}>
        <GetStarted />
      </div>

    </section>
  )
}

export default Hero
