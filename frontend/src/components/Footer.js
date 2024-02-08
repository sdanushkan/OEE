import React from 'react'
import pr from '../assets/ProssessImg.jpg'
import { Link, useLocation } from 'react-router-dom'
import { BsFacebook, BsWhatsapp } from 'react-icons/bs'
import ReactWhatsapp from 'react-whatsapp';

const Footer = () => {
  return (
    <div className='h-fit w-full bg-blue-500 text-white flex flex-col mt-[50px]'>

        <div className='h-fit w-full px-[15px] sm:px-[25px] md:px-[50px] lg:px-[75px] xl:px-[100px] py-[50px] bg-blue-500 text-white flex flex-col mt-[50px]'>

        <div className='h-fit w-full max-w-[1300px] mx-auto flex flex-col md:flex-row gap-[25px] md:gap-[50px]'>
            <div className='h-fit w-full flex flex-col justify-center md:justify-start gap-[10px]'>
                <p className='text-center md:text-left text-xl font-semibold'>OEE</p>
                <div className='flex flex-col gap-[10px]'>
                    <p className='text-center md:text-left capitalize'>— Building bridges to a world-class education—</p>
                    <ol className='list-disc px-[25px]'>
                        <li className='text-center md:text-left text-base opacity-50'>
                            info@oee.lk
                        </li>
                        <li className='text-center md:text-left text-sm opacity-50'>
                            070-1999955, 071-8995555, 076-5999965
                        </li>
                        
                        <li className='text-center md:text-left text-sm opacity-50'>
                            N0 162c, New kalmunai Road, Kallady, Batticaloa
                        </li>
                    </ol>
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
                    <a href='https://web.facebook.com/profile.php?id=61553944226187' target="_blank" className='text-center md:text-left text-sm opacity-50'>
                        <BsFacebook className='text-2xl'/>
                    </a>
                    <ReactWhatsapp number="+94701999955" message="Hello!!!" className='text-center md:text-left text-sm opacity-50'>
                        <BsWhatsapp className='text-2xl'/>
                    </ReactWhatsapp>
                
                </div>
            </div>
        </div>
        </div>
        <div className='w-full h-fit bg-black flex items-start justify-between px-[15px] sm:px-[25px] gap-[10px] md:px-[50px] lg:px-[75px] xl:px-[100px] py-[15px]'>
            <div className='h-[3px] md:h-[5px] w-full bg-white'></div>
            <img src={pr} alt='' className='md:w-fit h-[40px] md:h-[40px] object-cover md:object-contain' />
            <div className='h-[3px] md:h-[5px] w-[25px] md:w-[100px] bg-white mt-auto'></div>
        </div>
    </div>
  )
}

export default Footer