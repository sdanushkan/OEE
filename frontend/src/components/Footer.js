import React from 'react'

const Footer = () => {
  return (
    <div className='h-full w-full px-[15px] sm:px-[25px] md:px-[50px] lg:px-[75px] xl:px-[100px] bg-blue-500 flex'>

        <div className='w-full max-w-[1024px] mx-auto flex flex-col-reverse md:flex-row gap-[50px]'>
            <div className='h-fit w-1/2 bg-blue-500 text-white py-[50px] grid grid-cols-2 items-start justify-between gap-[25px]'>
                <div className='w-1/2 flex flex-col items-start gap-[10px] justify-center'>
                    <div className='pb-[10px] md:px-0 md:pr-[25px] border-b-[1px] border-white border-opacity-10'>
                        <p className='capitalize font-semibold '>Quick Link</p>
                    </div>
                    <div className='flex flex-col items-start gap-[5px]'>
                        <p className='text-xs capitalize opacity-50'>About our company</p>
                        <p className='text-xs capitalize opacity-50'>Career & opportunity</p>
                        <p className='text-xs capitalize opacity-50'>Contact us</p>
                    </div>
                </div>
                <div className='w-1/2 flex flex-col items-start gap-[10px] justify-center'>
                    <div className='pb-[10px] md:px-0 md:pr-[25px] border-b-[1px] border-white border-opacity-10'>
                        <p className='capitalize font-semibold '>Services</p>
                    </div>
                    <div className='flex flex-col items-start gap-[5px]'>
                        <p className='text-xs capitalize opacity-50'>Trading Platform</p>
                        <p className='text-xs capitalize opacity-50'>Import and Export</p>
                        <p className='text-xs capitalize opacity-50'>Software Solutions</p>
                        <p className='text-xs capitalize opacity-50'>IT Services</p>
                        <p className='text-xs capitalize opacity-50'>Travels</p>
                        <p className='text-xs capitalize opacity-50'>Web and Mobile app Solutions</p>

                    </div>
                </div>
                <div className='w-1/2 flex flex-col items-start gap-[10px] justify-center'>
                    <div className='pb-[10px] md:px-0 md:pr-[25px] border-b-[1px] border-white border-opacity-10'>
                        <p className='capitalize font-semibold '>Company</p>
                    </div>
                    <div className='flex flex-col items-start gap-[5px]'>
                        <p className='text-xs capitalize opacity-50'>About company</p>
                        <p className='text-xs capitalize opacity-50'>Latest news</p>
                        <p className='text-xs capitalize opacity-50'>Our mission</p>
                    </div>
                </div>
                <div className='w-1/2 flex flex-col items-start gap-[10px] justify-center'>
                    <div className='pb-[10px] md:px-0 md:pr-[25px] border-b-[1px] border-white border-opacity-10'>
                        <p className='capitalize font-semibold '>Quick Link</p>
                    </div>
                    <div className='flex flex-col items-start gap-[5px]'>
                        <p className='text-xs opacity-50'>info@srk-elite.com</p>
                    </div>
                </div>
            </div>
            <div className='h-fit w-1/2 py-[50px] flex flex-col gap-[25px]'>
                <p className='text-3xl font-bold capitalize text-white'>stay updated</p>
                <div className='flex gap-[10px]'>
                    <input placeholder='example@gmail.com' type='email' className='h-[50px] w-full bg-white outline-none px-[25px]'></input>
                    <button disabled={true} className='h-[50px] w-[100px] flex items-center justify-center capitalize bg-[white]'> 
                        <p className='opacity-50'>Submit</p>
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer