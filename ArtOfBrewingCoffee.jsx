import React from 'react'

const ArtOfBrewingCoffee = () => {
  return (
    <>
      <br/>
      <div className='h-[450px] bg-[#EDEBE9] relative top-20'>
        <br/><br/>
        <h1 className='text-[20px] relative font-semibold left-30'>Learn more about the world of Coffee!</h1><br/><br/>
        <button className='text-[#1E3932] text-2xl font-semibold relative left-680  bottom-20'>Discover More</button>
        <img src="/Coffee.jpg" alt="Coffee Brewing" className='h-[70%] w-[80%] relative left-60 bottom-10 rounded-2xl hover:brightness-50'/>
        <div className='absolute left-80 top-100 text-white w-[70%]'>
          <h1 className='text-4xl font-extrabold mt-4'>Art & Science Of Coffee Brewing</h1>
          <p className='text-lg mt-2'>Master the perfect brew with Starbucks! Learn the art and science of coffee brewing.</p>
          <button className='mt-5 px-6 py-3 bg-white text-black rounded-full font-semibold shadow-md'>Learn More</button>
        </div>
        
      </div>
    </>
  )
}

export default ArtOfBrewingCoffee


{/* <span className='bg-[#D4E9E2] text-[#1E3932] absolute bottom-100 rounded-full font-semibold'>Coffee Culture</span> */}