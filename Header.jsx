import React from 'react'

const Header = () => {
  return (
    <>
        <header className="bg-[#1E3932] h-[60px] w-full flex justify-between">
            <h1 className='text-white text-5xl font-extralight flex items-center relative left-[200px]'>Starbucks</h1>
            <div className='flex text-white border border-white items-center rounded-[20px] h-[30px] w-[100px] justify-center text-2xl relative top-[14px] right-[200px]'><button>Know More!</button></div>
        </header>
    </>
  )
}

export default Header