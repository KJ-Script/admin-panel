import React, { useState } from 'react'
import ListStorage from '../components/ListStorage'

function Storage() {
    const [visible, setVisible] = useState(false)
  return (
    <>
    <div className={visible == true ? "hidden":'w-full h-screen flex flex-col items-center py-12'}>
        <div>Existing Storage Spaces</div>
        <div className="mt-2 w-[50%] h-[4%] bg-black text-white p-2 flex justify-between space-x-3">
             <p>ID</p>
             <p>Name</p>
             <p>Location</p>
             <p>Capacity</p>
             <p>Occupation</p>

        </div>
        <ListStorage />
        <ListStorage />
        <ListStorage />
        

        <div className='my-12 w-[50%] flex justify-end'>
            <button className='px-3 py-2 bg-orange-800 text-white'  onClick={() => {setVisible(true)}}>Add</button>
        </div>
    </div>

    <div className={visible == true ?'w-full h-screen flex flex-col items-center py-12 ' : "hidden"}>
    <div className="mt-2 w-[50%] h-[70%] shadow-lg bg-white rounded-sm p-3 flex flex-col justify-center items-center space-y-2">
        Create your Warehouse
        <input type='text' placeholder='name' className='p-2 border'/>
        <input type='text' placeholder='location' className='p-2 border'/>
        <input type='text' placeholder='capacity' className='p-2 border'/>
        <button className='px-3 py-2 bg-orange-800 text-white' onClick={() => {setVisible(false)}}>Create</button>
        <button className='px-3 py-2 bg-black text-white' onClick={() => {setVisible(false)}}>Cancel</button>

        </div>
    </div>
    </>

  )
}

export default Storage