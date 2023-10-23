import React from 'react'
import logo1 from '../assets/logo1.png'
import { Link, useLocation } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='h-fit w-full px-[15px] sm:px-[25px] md:px-[50px] lg:px-[75px] xl:px-[100px] py-[50px] bg-[#F0EFF5] flex'>

        <div className='h-fit w-full max-w-[1024px] mx-auto flex flex-col-reverse md:flex-row gap-[50px]'>
            <div className='h-fit md:w-1/2 bg-[#F0EFF5] text-black py-[50px] grid grid-cols-2 items-start justify-between gap-[25px]'>
                <div className='w-full flex flex-col items-start gap-[10px] justify-center'>
                    <div className='pb-[10px] md:px-0 md:pr-[25px] border-b-[1px] border-white border-opacity-10'>
                        <p className='capitalize font-semibold '>Quick Link</p>
                    </div>
                    <div className='flex flex-col items-start gap-[5px]'>
                        <p className='text-xs capitalize opacity-50'>About our company</p>
                        <p className='text-xs capitalize opacity-50'>Career & opportunity</p>
                        <p className='text-xs capitalize opacity-50'>Contact us</p>
                    </div>
                </div>
                <div className='w-full flex flex-col items-start gap-[10px] justify-center'>
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
                <div className='w-full flex flex-col items-start gap-[10px] justify-center'>
                    <div className='pb-[10px] md:px-0 md:pr-[25px] border-b-[1px] border-white border-opacity-10'>
                        <p className='capitalize font-semibold '>Company</p>
                    </div>
                    <div className='flex flex-col items-start gap-[5px]'>
                        <p className='text-xs capitalize opacity-50'>About company</p>
                        <p className='text-xs capitalize opacity-50'>Latest news</p>
                        <p className='text-xs capitalize opacity-50'>Our mission</p>
                    </div>
                </div>
                <div className='w-full flex flex-col items-start gap-[10px] justify-center'>
                    <div className='pb-[10px] md:px-0 md:pr-[25px] border-b-[1px] border-white border-opacity-10'>
                        <p className='capitalize font-semibold '>Quick Link</p>
                    </div>
                    <div className='flex flex-col items-start gap-[5px]'>
                        <p className='text-xs opacity-50'>info@srk-elite.com</p>
                    </div>
                </div>
            </div>
            <div className='h-fit md:w-1/2 pt-[50px] flex flex-col gap-[25px]'>
                <Link to={'/'} className='h-[50px] w-full flex items-center gap-[15px]'>
                    <img src={logo1} alt='' className='h-[50px] w-[50px] ' />
                    <div className='text-black'>
                        <p className='font-Orbitron font-medium text-2xl tracking-widest text-black uppercase'>oec</p>
                        <p className='font-Orbitron font-medium text-sm tracking-widest text-black uppercase opacity-25'></p>
                    </div>
                </Link> 
                <p className='text- font-bold lowercase text-black'>info@srk-elite.com</p>
            </div>
        </div>
    </div>
  )
}

export default Footer