import React from 'react'
import styles from '../style'
import arrow from '../assets/arrow-up.svg'

const GetStarted = () => {
  return (
    <div className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full bg-blue-gradient p-[2px] cursor-pointer`}>
     <div className={`${styles.flexCenter} flex-col bg-primary w-[100%] h-[100%] rounded-full`}>
       <div className='flex justify-start items-start '>
         <p className=' font-poppins text-gradient'>Get</p>
         <img src={arrow} alt="" />
       </div>
       <p className=' font-poppins text-gradient'>started</p>
     </div>
    </div>
  )
}

export default GetStarted
