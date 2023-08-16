import React from 'react'
import { RxTriangleRight } from 'react-icons/rx'
import { useInView } from 'react-intersection-observer'
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import { GiChart } from 'react-icons/gi'
import { FaShippingFast } from 'react-icons/fa'
import { TbAppsFilled, TbWorldWww } from 'react-icons/tb'
import { GrServices } from 'react-icons/gr'
import { MdMiscellaneousServices, MdModeOfTravel, MdImportExport } from 'react-icons/md'
import { BiLineChart } from 'react-icons/bi'
import { SiYourtraveldottv } from 'react-icons/si'
import { PiDevices } from 'react-icons/pi'
import { IoIosApps } from 'react-icons/io'

const HomeScreen = () => {
    const { ref:heroText, inView:isHeroText } = useInView({triggerOnce:true});
    const slideImages = [
        {
          url: 'https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
          caption: 'Slide 1'
        },
        {
          url: 'https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80',
          caption: 'Slide 2'
        },
        {
          url: 'https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
          caption: 'Slide 3'
        },
      ];
  return (
    <div className='h-fit w-full pt-[100px] md:pt-[75px]'>
        <section ref={heroText} className='h-fit w-full '>
            <div className='h-fit w-full px-[25px] md:px-[50px] lg:px-[75px] xl:px-[100px] pb-[25px] overflow-hidden border-b-[10px] border-black border-opacity-10'>
                <div className='h-[500px] md:h-[500px] w-full max-w-[1024px] mx-auto flex flex-col md:flex-row md:items-center relative'>
                    <div className={
                        isHeroText?
                        'h-[300px] w-[85%] md:max-w-[500px] bg-blue-500 absolute md:top-1/2 md:left-0 md:transform md:-translate-y-1/2 z-10 flex flex-col items-start justify-center gap-[10px] px-[25px] md:px-[50px] lg:px-[75px] xl:px-[100px] duration-500 mb-0':
                        'h-[300px] w-[85%] md:max-w-[500px] bg-blue-500 absolute md:top-1/2 md:left-0 md:transform md:-translate-y-1/2 z-10 flex flex-col items-start justify-center gap-[10px] px-[25px] md:px-[50px] lg:px-[75px] xl:px-[100px] duration-500 mt-[100px]'
                    }>
                        <p className='text-4xl font-bold text-white'>Consulting Services</p>
                        <p className='text-white opacity-50'>A short, attention-grabbing headline that summarizes the benefits of your software solution</p>
                    </div>
                    <div className='h-[400px] md:h-[500px] w-[85%] md:min-w-[500px] absolute md:top-1/2 right-[5px] md:right-0 bottom-0 md:bottom-auto md:transform md:-translate-y-1/2 z-0'>
                        <img src='https://images.unsplash.com/photo-1519241047957-be31d7379a5d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80' alt='' className={
                            isHeroText?
                            'h-full w-full object-cover duration-500 scale-100':
                            'h-full w-full object-cover duration-500 scale-90'
                        } />
                    </div>
                </div>
            </div>
        </section>
        <section className='h-fit w-full px-[25px] md:px-[50px] lg:px-[75px] xl:px-[100px] py-[50px] md:py-[100px] border-b-[10px] border-black border-opacity-10'>
            <div className='h-fit w-full max-w-[1024px] mx-auto'>
                <div className='h-fit w-full'>
                    <div className='h-fit w-full flex flex-col md:flex-row-reverse md:items-end items-center md:justify-end gap-[10px] md:gap-[0px]'>
                        <p className='text-3xl capitalize font-bold text-center md:text-left'>Our services</p>
                        <div className='h-[4px] w-[150px] md:w-[75px] bg-black opacity-25'></div>
                    </div>
                    <div className='h-fit w-full flex flex-col md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-[25px] lg:gap-[50px] py-[0px] md:py-[50px]'>

                        <div className='h-fit w-full flex flex-col md:flex-row gap-[15px] md:gap-[25px] items-center md:items-start py-[25px] border-b-[1px] md:border-0 border-black border-opacity-10'>
                            <div className='h-[50px] w-[50px] rounded-full'>
                                <div className='h-[50px] w-[50px] rounded-full flex items-center justify-center bg-blue-500'>
                                    <GiChart className='text-2xl text-white'/>
                                </div>
                            </div>
                            <div className='h-fit w-full flex flex-col md:gap-[15px] px-[25px] md:px-0'>
                                <p className='text-lg md:text-xl font-medium text-center md:text-left'>Trading Platform</p>
                                <p className='text-sm text-center md:text-left opacity-50'>A trading platform is a software system that allows investors.</p>
                            </div>
                        </div>
                        
                        <div className='h-fit w-full flex flex-col md:flex-row gap-[15px] md:gap-[25px] items-center md:items-start py-[25px] border-b-[1px] md:border-0 border-black border-opacity-10'>
                            <div className='h-[50px] w-[50px] rounded-full'>
                                <div className='h-[50px] w-[50px] rounded-full flex items-center justify-center bg-blue-500'>
                                    <MdImportExport className='text-2xl text-white'/>
                                </div>
                            </div>
                            <div className='h-fit w-full flex flex-col md:gap-[15px] px-[25px] md:px-0'>
                                <p className='text-lg md:text-xl font-medium text-center md:text-left'>Import and Export</p>
                                <p className='text-sm text-center md:text-left opacity-50'>A trading platform is a software system that allows investors.</p>
                            </div>
                        </div>

                        <div className='h-fit w-full flex flex-col md:flex-row gap-[15px] md:gap-[25px] items-center md:items-start py-[25px] border-b-[1px] md:border-0 border-black border-opacity-10'>
                            <div className='h-[50px] w-[50px] rounded-full'>
                                <div className='h-[50px] w-[50px] rounded-full flex items-center justify-center bg-blue-500'>
                                    <IoIosApps className='text-2xl text-white'/>
                                </div>
                            </div>
                            <div className='h-fit w-full flex flex-col md:gap-[15px] px-[25px] md:px-0'>
                                <p className='text-lg md:text-xl font-medium text-center md:text-left'>Software Solutions</p>
                                <p className='text-sm text-center md:text-left opacity-50'>A trading platform is a software system that allows investors.</p>
                            </div>
                        </div>

                        <div className='h-fit w-full flex flex-col md:flex-row gap-[15px] md:gap-[25px] items-center md:items-start py-[25px] border-b-[1px] md:border-0 border-black border-opacity-10'>
                            <div className='h-[50px] w-[50px] rounded-full'>
                                <div className='h-[50px] w-[50px] rounded-full flex items-center justify-center bg-blue-500'>
                                    <MdMiscellaneousServices className='text-2xl text-white' />
                                </div>
                            </div>
                            <div className='h-fit w-full flex flex-col md:gap-[15px] px-[25px] md:px-0'>
                                <p className='text-lg md:text-xl font-medium text-center md:text-left'>IT Services</p>
                                <p className='text-sm text-center md:text-left opacity-50'>A trading platform is a software system that allows investors.</p>
                            </div>
                        </div>

                        <div className='h-fit w-full flex flex-col md:flex-row gap-[15px] md:gap-[25px] items-center md:items-start py-[25px] border-b-[1px] md:border-0 border-black border-opacity-10'>
                            <div className='h-[50px] w-[50px] rounded-full'>
                                <div className='h-[50px] w-[50px] rounded-full flex items-center justify-center bg-blue-500'>
                                    <SiYourtraveldottv className='text-2xl text-white'/>
                                </div>
                            </div>
                            <div className='h-fit w-full flex flex-col md:gap-[15px] px-[25px] md:px-0'>
                                <p className='text-lg md:text-xl font-medium text-center md:text-left'>Travels</p>
                                <p className='text-sm text-center md:text-left opacity-50'>A trading platform is a software system that allows investors.</p>
                            </div>
                        </div>

                        <div className='h-fit w-full flex flex-col md:flex-row gap-[15px] md:gap-[25px] items-center md:items-start py-[25px] border-b-[1px] md:border-0 border-black border-opacity-10'>
                            <div className='h-[50px] w-[50px] rounded-full'>
                                <div className='h-[50px] w-[50px] rounded-full flex items-center justify-center bg-blue-500'>
                                    <PiDevices className='text-2xl text-white'/>
                                </div>
                            </div>
                            <div className='h-fit w-full flex flex-col md:gap-[15px] px-[25px] md:px-0'>
                                <p className='text-lg md:text-xl font-medium text-center md:text-left'>Web & Mobile app Solutions</p>
                                <p className='text-sm text-center md:text-left opacity-50'>A trading platform is a software system that allows investors.</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
        <section className='h-fit w-full px-[25px] md:px-[50px] lg:px-[75px] xl:px-[100px] py-[50px] md:py-[100px] border-b-[10px] border-black border-opacity-10'>
            <div className='h-fit w-full max-w-[1024px] mx-auto md:flex justify-between gap-[50px] lg:gap-[100px]'>
                <div className='max-w-[400px]'>
                    <div className='h-fit w-full flex flex-col md:flex-row-reverse md:items-end items-center md:justify-end gap-[10px] md:gap-[0px]'>
                        <p className='text-3xl capitalize font-bold text-center md:text-left'>we provide the best process experience</p>
                        <div className='h-[4px] w-[150px] md:w-[75px] bg-black opacity-25'></div>
                    </div>
                    <div className='h-fit w-full pt-[50px] flex flex-col'>
                        <div className='h-auto flex items-start gap-[15px]'>
                            <div className='h-auto w-[50px] flex flex-col items-center'>
                                <div className='h-[50px] w-[50px] bg-blue-500 rounded-full flex items-center justify-center text-white'>
                                    01                            
                                </div>
                                <div className='h-full w-[1px] bg-black'>

                                </div>
                            </div>
                            <div className='flex flex-col gap-[10px]  pb-[25px] md:pb-[50px]'>
                                <p className='text-xl font-semibold'>Briefing</p>
                                <p className='text-sm opacity-50'>First thing you determine the concept and model you want</p>
                            </div>
                        </div>
                        <div className='h-auto flex items-start gap-[15px]'>
                            <div className='h-auto w-[50px] flex flex-col items-center'>
                                <div className='h-[50px] w-[50px] bg-blue-500 rounded-full flex items-center justify-center text-white'>
                                    02                         
                                </div>
                                <div className='h-full w-[1px] bg-black'>

                                </div>
                            </div>
                            <div className='flex flex-col gap-[10px]  pb-[25px] md:pb-[50px]'>
                                <p className='text-xl font-semibold'>Processing</p>
                                <p className='text-sm opacity-50'>When the briefing process is complete and what the client wants has been achieved. Then we carry out the execution of the desired concept</p>
                            </div>
                        </div>
                        <div className='h-auto flex items-start gap-[15px]'>
                            <div className='h-auto w-[50px] flex flex-col items-center'>
                                <div className='h-[50px] w-[50px] bg-blue-500 rounded-full flex items-center justify-center text-white'>
                                    03                            
                                </div>
                                <div className='h-full w-[1px] bg-black'>

                                </div>
                            </div>
                            <div className='flex flex-col gap-[10px]  pb-[25px] md:pb-[50px]'>
                                <p className='text-xl font-semibold'>Finishing</p>
                                <p className='text-sm opacity-50'>After the process is complete, we will immediately carry out the finishing stage and we do it carefully and make sure there are no mistakes</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='h-[500px] w-[400px] hidden md:flex bg-black'>

                </div>
            </div>
        </section>
    </div>
  )
}

export default HomeScreen

{/* <div className='h-fit w-full'>
        <section ref={heroText} className='h-fit w-full px-[25px] md:px-[50px] lg:px-[75px] xl:px-[100px] pb-[50px] overflow-hidden' >
            <div className='h-[700px] md:h-[600px] w-full max-w-[1024px] mx-auto flex flex-col md:flex-row md:items-center relative'>
                <div className={
                    isHeroText ?
                    'h-fit w-full flex flex-col items-center md:items-start pt-[100px] md:pt-0 relative z-40 duration-500 opacity-100 md:mb-0':
                    'h-fit w-full flex flex-col items-center md:items-start pt-[100px] md:pt-0 relative z-40 duration-500 opacity-0 md:-mb-[100px]'
                }>
                    
                    <p className='text-5xl font-semibold uppercase text-center md:text-left'>software solutions</p>
                    <p className='opacity-50 mt-[10px] text-center md:text-left'>A short, attention-grabbing headline that summarizes the benefits of your software solution</p>
                    <button className='h-[50px] w-[150px] shadow-[0px_15px_50px_0px_rgba(0,0,0,0.10)] rounded-full flex mt-[25px] md:mt-[50px] bg-white'>
                        <div className='h-full w-full flex items-center justify-center'>
                            <p>Action</p>
                        </div>
                        <div className='h-[50px] w-[50px]'>
                            <div className='h-[50px] w-[50px] flex items-center justify-center'>
                                <div className='h-[40px] w-[40px] bg-blue-500 rounded-full flex items-center justify-center'>
                                    <RxTriangleRight className='text-white text-xl'/>
                                </div>
                            </div>
                        </div>
                    </button>
                </div>
                
                <div className='h-full w-screen relative -left-[15px] sm:-left-[25px] overflow-visible z-20'>
                    <div className='h-[1000px] w-[1000px] absolute rounded-[50px] md:rounded-[100px] rotate-45 left-[250px] -top-[250px] md:-top-[300px] overflow-hidden'>
                        <div className='h-[1500px] w-[1500px] -rotate-45 overflow-hidden'>
                            <Slide autoplay={true} >
                                {slideImages.map((slideImage, index)=> (
                                    <img key={index} src={slideImage.url} alt='' className={
                                        isHeroText?
                                        'h-[1500px] w-[1500px] object-cover scale-100 duration-1000':
                                        'h-[1500px] w-[1500px] object-cover scale-150 duration-1000'
                                    } />
                                ))} 
                            </Slide>
                        </div>
                    </div>
                </div>            
            </div>
        </section>
        <section className='h-fit w-full px-[25px] md:px-[50px] lg:px-[75px] xl:px-[100px] py-[100px] border-y-[1px] border-black border-opacity-5'>
            <div className='h-fit w-full max-w-[1024px] mx-auto grid grid-cols-2 md:grid-cols-3 gap-x-[15px] lg:gap-x-[50px] gap-y-[50px]'>
                <div className='h-[150px] w-full relative flex items-end'>
                    <div className='h-[125px] w-full shadow-[0px_15px_50px_0px_rgba(0,0,0,0.10)] rounded-[5px] flex items-end justify-start p-[25px] md:p-[25px]'>
                        <div className='h-[50px] w-[50px] absolute left-[25px] top-0 rounded-[5px] text-white flex items-center justify-center bg-blue-500'>
                            <BiLineChart className='text-2xl'/>
                        </div>
                        <p className='uppercase'>Trading plateform</p>
                    </div>
                </div>
                <div className='h-[150px] w-full relative flex items-end'>
                    <div className='h-[125px] w-full shadow-[0px_15px_50px_0px_rgba(0,0,0,0.10)] rounded-[5px] flex items-end justify-start p-[25px] md:p-[25px]'>
                        <div className='h-[50px] w-[50px] absolute left-[25px] top-0 rounded-[5px] text-white flex items-center justify-center bg-blue-500'>
                            <FaShippingFast className='text-2xl'/>
                        </div>
                        <p className='uppercase'>Import and Export</p>
                    </div>
                </div>
                <div className='h-[150px] w-full relative flex items-end'>
                    <div className='h-[125px] w-full shadow-[0px_15px_50px_0px_rgba(0,0,0,0.10)] rounded-[5px] flex items-end justify-start p-[25px] md:p-[25px]'>
                        <div className='h-[50px] w-[50px] absolute left-[25px] top-0 rounded-[5px] text-white flex items-center justify-center bg-blue-500'>
                            <TbAppsFilled className='text-2xl'/>
                        </div>
                        <p className='uppercase'>Software Solutions</p>
                    </div>
                </div>
                <div className='h-[150px] w-full relative flex items-end'>
                    <div className='h-[125px] w-full shadow-[0px_15px_50px_0px_rgba(0,0,0,0.10)] rounded-[5px] flex items-end justify-start p-[25px] md:p-[25px]'>
                        <div className='h-[50px] w-[50px] absolute left-[25px] top-0 rounded-[5px] text-white flex items-center justify-center bg-blue-500'>
                            <MdMiscellaneousServices className='text-2xl'/>
                        </div>
                        <p className='uppercase'>IT Services</p>
                    </div>
                </div>
                <div className='h-[150px] w-full relative flex items-end'>
                    <div className='h-[125px] w-full shadow-[0px_15px_50px_0px_rgba(0,0,0,0.10)] rounded-[5px] flex items-end justify-start p-[25px] md:p-[25px]'>
                        <div className='h-[50px] w-[50px] absolute left-[25px] top-0 rounded-[5px] text-white flex items-center justify-center bg-blue-500'>
                            <MdModeOfTravel className='text-2xl'/>
                        </div>
                        <p className='uppercase'>Travels</p>
                    </div>
                </div>
                <div className='h-[150px] w-full relative flex items-end'>
                    <div className='h-[125px] w-full shadow-[0px_15px_50px_0px_rgba(0,0,0,0.10)] rounded-[5px] flex items-end justify-start p-[25px] md:p-[25px]'>
                        <div className='h-[50px] w-[50px] absolute left-[25px] top-0 rounded-[5px] text-white flex items-center justify-center bg-blue-500'>
                            <TbWorldWww className='text-2xl'/>
                        </div>
                        <p className='uppercase'>Web and Mobile app Solutions</p>
                    </div>
                </div>
            </div>
        </section>
    </div> */}