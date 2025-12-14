import React from 'react'

const Navbar = () => {
  return (
    <div className='w-[80%] h-[50px] fixed left-[10%] bg-transparent flex bg-gray-500 justify-between z-1000 gap-10 items-center p-2'>
        <div className="text-[22px] p-10 w-[20%]">
            <h1>Portfolio</h1>
        </div>

        <div className="flex items-center justify-evenly w-[30%]">
            <p onClick={()=>window.location.hash="#about"} className='cursor-pointer'>About</p>
            <p onClick={()=>window.location.hash="#projects"} className='cursor-pointer'>Projects</p>
            <p className='cursor-pointer' onClick={()=>window.location.hash="#skills"}>Skills</p>
            <p className='cursor-pointer' onClick={()=>window.location.hash="#contact"}>Contact</p>
        </div>
      
    </div>
  )
}

export default Navbar
