import React, { useState } from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import { FaWindowClose } from "react-icons/fa";



function Navbar() {
    const [isOpen,setIsOpen]=useState(false)
  return (
    <div className='bg-rose-500'>
     <div  className='flex flex-row justify-between items-center text-white p-4'>
        <div>
            <h1 className='font-roboto'>Portfolio</h1>
        </div>
        <div className='hidden md:flex space-x-6 px-12 gap-16 '>
            <h1>Home</h1>
            <h1>About</h1>
        </div>
        <div className='md:hidden translate-x-3 ease-out'>
         <button onClick={() => setIsOpen(!isOpen)}>
           {isOpen ? <GiHamburgerMenu className='h-6 w-6' /> : <FaWindowClose className='h-6 w-6' />}
         </button>
        </div>
    </div>
    {isOpen && (
         <div className='lg:hidden absolute right-0 bg-rose-600 text-white p-4'>
      <h1 className='py-2'>Home</h1>
          <h1 className='py-2'>About</h1>
         </div>
)}
     
    </div>
  )
}

export default Navbar

