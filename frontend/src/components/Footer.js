import React from 'react'
import logo1 from '../assets/logo1.png'
import { Link, useLocation } from 'react-router-dom'
import { BsFacebook, BsWhatsapp } from 'react-icons/bs'

const Footer = () => {
  return (
    <div className='h-fit w-full px-[15px] sm:px-[25px] md:px-[50px] lg:px-[75px] xl:px-[100px] py-[50px] bg-blue-500 text-white flex mt-[50px]'>

        <div className='h-fit w-full max-w-[1300px] mx-auto flex flex-col md:flex-row gap-[25px] md:gap-[50px]'>
            <div className='h-fit w-full flex flex-col justify-center md:justify-start gap-[10px]'>
                <p className='text-center md:text-left text-sm font-semibold'>OEC</p>
                <div className=''>
                    <p className='text-center md:text-left text-sm opacity-50'>— Building bridges to a world-class education—</p>
                </div>
            </div>
            <div className='h-fit w-full flex flex-col justify-center md:justify-start gap-[10px]'>
                <p className='text-center md:text-left text-sm font-semibold'>Company</p>
                <div className='flex flex-col gap-[10px]'>
                    <p className='text-center md:text-left text-sm opacity-50'>About us</p>
                    <p className='text-center md:text-left text-sm opacity-50'>Contact us</p>
                </div>
            </div>
            <div className='h-fit w-full flex flex-col justify-center md:justify-start gap-[10px]'>
                <p className='w-full text-center md:text-left text-sm font-semibold'>Social media</p>
                <div className='w-full flex justify-center gap-[10px]'>
                    <p className='text-center md:text-left text-sm opacity-50'>
                        <BsFacebook/>
                    </p>
                    <p className='text-center md:text-left text-sm opacity-50'>
                        <BsWhatsapp/>
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer