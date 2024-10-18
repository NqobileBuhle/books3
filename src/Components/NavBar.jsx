import React from 'react'

const NavBar = () => {
  return (
    <div className='bg-secondary w-full left-0 z-10 px-36 py-5'>
      <div className=' flex justify-between items-center'>
        <a href=''>eBOOKS </a>

        <input 
        className='g-white text-gray-400 px-2' placeholder='Search for books'
        />
        <div className='space-x-5'>
            <a href=''>Home</a>
            <a href=''>Books</a>
        </div>
      </div>
    </div>
  )
}

export default NavBar
