import React from 'react'

const HandcraftedCurations = () => {
  return (
    <>
      <div className='flex justify-center pt-20'>
        <img src="/GradientPic.jpeg" alt="Starbucks Banner" className='h-[300px] w-60% items-start border border-gray-400 rounded-[16px]'/>
        <img src="https://preprodtsbstorage.blob.core.windows.net/cms/uploads/Refreshers_dashboard_03_1_10aa41bbca.png" alt="" className='h-[320px] w-[160px] absolute left-67 top-80'/>
      </div>
      <div className='relative bottom-[250px] left-[340px]'>
        <h1 className='relative bottom-[40px] text-[20px]'>All New!</h1><br/><br/><br/>
        <h1 className='relative bottom-[50px] text-[25px] font-semibold'>Starbucks Refreshers</h1><br/><br/>
        <h1 className='relative bottom-[50px] text-[15px]'>Beat the heat with your bestie, Refreshers now available in Lychee Raspberry and Kiwi Calamansi flavours.</h1>
        <div className='absolute left-[960px] -bottom-[70px] text-white text-3xl font-semibold bg-[#01754A] h-[65px] w-[200px] flex justify-center items-center rounded-[40px]'>
          Order Now!
        </div>
      </div>
      <div className='h-[240px] w-screen flex text-3xl font-semibold gap-50 justify-center'>
        <h1 className='absolute top-240 left-70'>Handcrafted Curations</h1>
        <div className='h-[100px] w-[150px]'>
          <img src="https://starbucksstatic.cognizantorderserv.com/Category/Small/webP/Bestseller.webp" alt="Frappuccino" className='rounded-[50%]'/>
          <h1 className='text-center p-5 text-3xl font-medium'>Bestseller</h1>
        </div>
        <div className='h-[100px] w-[150px]'>
          <img src="https://starbucksstatic.cognizantorderserv.com/Category/Small/webP/Drinks.webp" alt="Drinks" className='rounded-[50%]'/>
          <h1 className='text-center p-5 text-3xl font-medium'>Drinks</h1>
        </div>
        <div className='h-[100px] w-[150px]'>
          <img src="https://starbucksstatic.cognizantorderserv.com/Category/Small/webP/Food.webp" alt="Food" className='rounded-[50%]'/>
          <h1 className='text-center p-5 text-3xl font-medium'>Food</h1>
        </div>
        <div className='h-[100px] w-[150px]'>
          <img src="https://starbucksstatic.cognizantorderserv.com/Category/Small/webP/Merchandise.webp" alt="Exclusive Starbucks Merchandise" className='rounded-[50%]'/>
          <h1 className='text-center p-5 text-3xl font-medium'>Merchandise</h1>
        </div>
        <div className='h-[100px] w-[150px]'>
          <img src="https://starbucksstatic.cognizantorderserv.com/Category/Small/webP/CoffeeAtHome.webp" alt="Exotic Starbucks Coffee Blend @ Home!" className='rounded-[50%]'/>
          <h1 className='text-center p-5 text-3xl font-medium'>Coffee at home</h1>
        </div>
        <div className='h-[100px] w-[150px]'>
          <img src="https://starbucksstatic.cognizantorderserv.com/Category/Small/webP/ReadyToEat.webp" alt="Ready to eat!" className='rounded-[50%]'/>
          <h1 className='text-center p-5 text-3xl font-medium'>Ready to eat</h1>
        </div>
        
      </div>
     
    </>
  )
}

export default HandcraftedCurations






//  <button className='absolute left-[1050px] -bottom-[60px] text-white text-3xl font-semibold'>Order Now</button>