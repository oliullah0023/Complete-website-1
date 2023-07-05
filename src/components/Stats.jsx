import React from 'react'
import styles from '../style'
import { stats } from '../constants'

const Stats = () => {
  return (
    <div className={`${styles.flexCenter} flex  flex-row flex-wrap justify-between `}>

     <div className=' bg-dimWhite w-[1px] h[2px]'/>

      {
        stats.map((stat) => (
          <div key={stat.id} className='flex-1 flex  justify-start items-center flex-row gap-3'>
            <h4 className=' font-poppins font-semibold text-white xs:text-[40.89px] text-[30.89]'> {stat.value}</h4>
             <p className=' font-poppins font-semibold text-gradient xs:text-[20.89px] text-[15.89]  uppercase'>{stat.title}</p>
          </div>
        ))
      }
    </div>
  )
}

export default Stats
