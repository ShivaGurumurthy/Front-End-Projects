import React from 'react'

const BaristaRecommendations = () => {
  return (
    <>
        <div className='h-[300px] w-screen bg-[#EDEBE9] flex'>
            <button className='text-[#1E3932] text-2xl font-semibold absolute right-20 top-410'>View Menu</button>
            <h1 className='absolute left-60 top-410 text-3xl font-semibold '>Barista Recommendations</h1>
            <div className='h-[185px] w-[550px] bg-[#FFFFFF] rounded-lg absolute top-430 left-90 p-7 flex shadow-xl'>
                <img src="https://starbucks.in/assets/icon/veg.svg" alt="" className='h-[20px] w-[20px] absolute left-50'/>
                <img src="/Java Chip Frappuccino.jpeg" alt="" className='h-40 w-40 rounded-xl'/>
                <h1 className='relative top-12 left-3 text-2xl font-semibold'>Java Chip Frappuccino</h1>
                <h1 className='text-gray-700 absolute top-26 left-50 '>TALL(345 ml) .392 kcal</h1>
                <h1 className='absolute text-3xl font-semibold top-60'>₹420.00</h1>
                <button className='absolute top-58 left-190 text-white text-xl font-semibold bg-[#01754A] h-[30px] w-[100px] rounded-[40px]'>Add Item</button>
            </div>
            
        </div>
    </>
  )
}

export default BaristaRecommendations