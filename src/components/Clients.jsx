import React from 'react'
import { clients } from '../constants'

const Clients = () => {
  return (
    <div className='flex m-7 sm:m-24 justify-center items-center gap-4 sm:gap-10 '>
      {
        clients.map((client) => (
          <div key={client.id} className=''>
           
            <img className='gap-2 w-[140px] h-[60px]' src= {client.logo} alt="Logo" />
          </div>
        ))
      }
    </div>
  )
}

export default Clients
