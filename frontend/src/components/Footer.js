import React from 'react'
import logo1 from '../assets/logo1.png'
import { Link, useLocation } from 'react-router-dom'
import { BsFacebook, BsWhatsapp } from 'react-icons/bs'
import ReactWhatsapp from 'react-whatsapp';

const Footer = () => {
  return (
    <div className='h-fit w-full px-[15px] sm:px-[25px] md:px-[50px] lg:px-[75px] xl:px-[100px] py-[50px] bg-blue-500 text-white flex mt-[50px]'>

        <div className='h-fit w-full max-w-[1300px] mx-auto flex flex-col md:flex-row gap-[25px] md:gap-[50px]'>
            <div className='h-fit w-full flex flex-col justify-center md:justify-start gap-[10px]'>
                <p className='text-center md:text-left text-xl font-semibold'>OEE</p>
                <div className='flex flex-col gap-[10px]'>
                    <p className='text-center md:text-left capitalize'>— Building bridges to a world-class education—</p>
                    <p className='text-center md:text-left text-sm opacity-50'>
                        070-1999955, 071-8995555
                    </p>
                    <p className='text-center md:text-left text-sm opacity-50'>
                        N0 162c, New kalmunai Road, Kallady, Batticaloa
                    </p>
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
                <p className='w-full md:text-left text-sm font-semibold text-center'>Social media</p>
                <div className='w-full flex flex-col items-center md:items-start gap-[10px]'>
                    {/* <p className='text-center md:text-left text-sm opacity-50'>
                        <BsFacebook/>
                    </p> */}
                    <ReactWhatsapp number="+94701999955" message="Hello!!!" className='text-center md:text-left text-sm opacity-50'>
                        <BsWhatsapp className='text-2xl'/>
                    </ReactWhatsapp>
                
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer