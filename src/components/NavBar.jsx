import React from 'react'
import { useNavigate } from 'react-router-dom'

function NavBar() {
  const navigate = useNavigate()
  return (
    <div className='w-full h-[45px] shadow-sm border flex justify-between'>
        <div className='font-semibold p-2'>Admin Panel</div>
        <div className='flex space-x-3 p-2'>
            <button className='hover:text-orange-800' onClick={() => {navigate('/storage')}}>Warehouse</button>
            <button className='hover:text-orange-800' onClick={() => {navigate('/items')}}>Item</button>
            <button className='hover:text-orange-800' onClick={() => {navigate('/temp')}}>Temprature</button>
        </div>

        <div className='flex space-x-3 p-2'>
            <button>login</button>
        </div>

    </div>
  )
}

export default NavBar