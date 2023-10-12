import React from 'react'
import { useInView } from 'react-intersection-observer'
import 'react-slideshow-image/dist/styles.css'
import { FiPieChart } from 'react-icons/fi'
import { TbCloudComputing } from 'react-icons/tb'
import { CgWebsite } from 'react-icons/cg'
import { MdImportExport, MdOutlineModeOfTravel } from 'react-icons/md'
import { BsArrowRight } from 'react-icons/bs'
import { FaComputer } from 'react-icons/fa6'
import RoundEllipse from '../assets/RoundEllipse.png'
import herobg from '../assets/heroEllipse.png'
import pImg from '../assets/ProssessImg.jpg'
import cu from '../assets/cu.png'
import we from '../assets/we.png'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'


const HomeScreen = () => {
    const { ref:heroText, inView:isHeroText } = useInView({triggerOnce:true});

  return (
    <div pages={3} className=' overflow-hidden'>
        <div factor={1}  className='h-[800px] md:h-[700px] w-auto overflow-hidden flex flex-col gap-[15px] items-center justify-center relative px-[15px]'>
            <img src={herobg} alt='' className='h-[400px] md:h-auto absolute top-0 -z-50 object-cover' />
            <div speed={2.5} className='h-full w-full absolute'>
                <div className='h-[350px] w-[350px] absolute top-[40%] md:top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -z-20'>
                    <img src={RoundEllipse} alt='' className='h-[350px] w-[350px] ' />
                </div>
                <div className='h-[450px] w-[450px] absolute top-[50%] md:top-[50%] left-[20%] md:left-[40%] transform -translate-x-1/2 -translate-y-1/2 -z-20'>
                    <img src={RoundEllipse} alt='' className='h-[450px] w-[450px]' />
                </div>
                <div className='h-[250px] w-[250px] absolute top-[75%] left-[60%] transform -translate-x-1/2 -translate-y-1/2 -z-20'>
                    <img src={RoundEllipse} alt='' className='h-[250px] w-[250px]' />
                </div>
                <div className='h-[300px] w-[300px] absolute top-[45%] md:top-[40%] left-[90%] md:left-[70%] transform -translate-x-1/2 -translate-y-1/2 -z-20'>
                    <img src={RoundEllipse} alt='' className='h-[300px] w-[300px]' />
                </div>
            </div>
            <div speed={0} className='h-full w-full absolute flex flex-col items-center justify-center gap-[15px]'>
                <p className='text-5xl font-bold text-center'>Consulting <span className='text-transparent bg-clip-text bg-gradient-to-r from-[#1877F2] to-[#B636CB]'>Serivices</span></p>
                <p className='w-full md:w-[500px] text-center opacity-50 '>A short, attention-grabbing headline that summarizes the benefits of your software solution</p>
                <button className='h-[65px] w-[200px] bg-white shadow-[0px_4px_50px_0px_rgba(54,125,203,0.25)] rounded-full mt-[15px] flex items-center px-[7.5px]'>
                    <div className='w-[135px] flex justify-center'>
                        <p className='font-bold text-[#1877F2]'>Action</p>
                    </div>
                    <div className='h-[50px] w-[50px] rounded-full bg-[#1877F2] ml-auto  flex items-center justify-center'>
                        <BsArrowRight className='text-white text-2xl'/>
                    </div>
                </button>
            </div>
        </div>
        <section className='h-fit w-full px-[15px] sm:px-[35px] md:px-[50px] lg:px-[75px] xl:px-[100px] py-[75px] md:py-[100px] bg-white'>
                <div className='h-fit w-full max-w-[1024px] mx-auto flex flex-col items-center gap-[50px]'>
                    <div className='flex flex-col items-center'>
                        <p className='font-semibold capitalize text-[#1877F2]'>sevices</p>
                        <p className='text-4xl font-bold text-center'>What we <span className='text-transparent bg-clip-text bg-gradient-to-r from-[#1877F2] to-[#B636CB] capitalize'>provide</span> as a company</p>
                    </div>
                    <div className='h-fit w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-[25px] lg:gap-x-[50px] gap-y-[50px] sm:gap-y-[75px] md:gap-y-[100px]'>
                        <div className='h-fit w-full max-w-[500px] mx-auto relative'>
                            <div className='h-[50px] sm:h-[75px] w-[50px] sm:w-[75px] bg-[#1877F2] absolute top-0 left-0 flex items-center justify-center'>
                                <FiPieChart className='text-white text-2xl'/>
                            </div>
                            <div className='h-fit w-full relative top-[35px] sm:top-[50px] pl-[35px] sm:pl-[50px]'>
                                <div className='h-fit w-full px-[35px] sm:px-[50px] py-[35px] sm:py-[50px] shadow-[0px_5px_100px_0px_rgba(54,125,203,0.10)] bg-white flex flex-col gap-[10px]'>
                                    <p className='font-semibold capitalize'>Trading Platform</p>
                                    <p className='text-sm capitalize opacity-50 leading-6'>Our trading platform offers a variety of features to help you trade like a pro</p>
                                </div>
                            </div>
                        </div>
                        <div className='h-fit w-full max-w-[500px] mx-auto relative'>
                            <div className='h-[50px] sm:h-[75px] w-[50px] sm:w-[75px] bg-[#1877F2] absolute top-0 left-auto right-0 md:left-0 md:right-auto flex items-center justify-center'>
                                <MdImportExport className='text-white text-2xl'/>
                            </div>
                            <div className='h-fit w-full relative top-[35px] sm:top-[50px] pr-[35px] sm:pr-[50px] md:pr-0 md:pl-[50px]'>
                                <div className='h-fit w-full px-[35px] sm:px-[50px] py-[35px] sm:py-[50px] shadow-[0px_5px_100px_0px_rgba(54,125,203,0.10)] bg-white flex flex-col gap-[10px]'>
                                    <p className='font-semibold capitalize'>Import and Export</p>
                                    <p className='text-sm capitalize opacity-50 leading-6'>Our import and export platform is a one-stop shop for all your import and export needs.</p>
                                </div>
                            </div>
                        </div>
                        <div className='h-fit w-full max-w-[500px] mx-auto relative'>
                            <div className='h-[50px] sm:h-[75px] w-[50px] sm:w-[75px] bg-[#1877F2] absolute top-0 left-0 flex items-center justify-center'>
                                <TbCloudComputing className='text-white text-2xl'/>
                            </div>
                            <div className='h-fit w-full relative top-[35px] sm:top-[50px] pl-[35px] sm:pl-[50px]'>
                                <div className='h-fit w-full px-[35px] sm:px-[50px] py-[35px] sm:py-[50px] shadow-[0px_5px_100px_0px_rgba(54,125,203,0.10)] bg-white flex flex-col gap-[10px]'>
                                    <p className='font-semibold capitalize'>IT Services</p>
                                    <p className='text-sm capitalize opacity-50 leading-6'>We offer services for a variety of needs, including cloud computing, cybersecurity, data center management, and IT consulting.</p>
                                </div>
                            </div>
                        </div>
                        <div className='h-fit w-full max-w-[500px] mx-auto relative'>
                            <div className='h-[50px] sm:h-[75px] w-[50px] sm:w-[75px] bg-[#1877F2] absolute top-0 left-auto right-0 md:left-0 md:right-auto flex items-center justify-center'>
                                <FaComputer className='text-white text-2xl'/>
                            </div>
                            <div className='h-fit w-full relative top-[35px] sm:top-[50px] pr-[35px] sm:pr-[50px] md:pr-0 md:pl-[50px]'>
                                <div className='h-fit w-full px-[35px] sm:px-[50px] py-[35px] sm:py-[50px] shadow-[0px_5px_100px_0px_rgba(54,125,203,0.10)] bg-white flex flex-col gap-[10px]'>
                                    <p className='font-semibold capitalize'>Software Solutions</p>
                                    <p className='text-sm capitalize opacity-50 leading-6'>Our software solution platform provides a wide range of software solutions to businesses of all sizes.</p>
                                </div>
                            </div>
                        </div>
                        <div className='h-fit w-full max-w-[500px] mx-auto relative'>
                            <div className='h-[50px] sm:h-[75px] w-[50px] sm:w-[75px] bg-[#1877F2] absolute top-0 left-0 flex items-center justify-center'>
                                <CgWebsite className='text-white text-2xl'/>
                            </div>
                            <div className='h-fit w-full relative top-[35px] sm:top-[50px] pl-[35px] sm:pl-[50px]'>
                                <div className='h-fit w-full px-[35px] sm:px-[50px] py-[35px] sm:py-[50px] shadow-[0px_5px_100px_0px_rgba(54,125,203,0.10)] bg-white flex flex-col gap-[10px]'>
                                    <p className='font-semibold capitalize'>Web and Mobile app Solutions</p>
                                    <p className='text-sm capitalize opacity-50 leading-6'>We provides businesses with everything they need to create, deploy, and manage their web and mobile applications.</p>
                                </div>
                            </div>
                        </div>
                        <div className='h-fit w-full max-w-[500px] mx-auto relative'>
                            <div className='h-[50px] sm:h-[75px] w-[50px] sm:w-[75px] bg-[#1877F2] absolute top-0 left-auto right-0 md:left-0 md:right-auto flex items-center justify-center'>
                                <MdOutlineModeOfTravel className='text-white text-2xl'/>
                            </div>
                            <div className='h-fit w-full relative top-[35px] sm:top-[50px] pr-[35px] sm:pr-[50px] md:pr-0 md:pl-[50px]'>
                                <div className='h-fit w-full px-[35px] sm:px-[50px] py-[35px] sm:py-[50px] shadow-[0px_5px_100px_0px_rgba(54,125,203,0.10)] bg-white flex flex-col gap-[10px]'>
                                    <p className='font-semibold capitalize'>Travels</p>
                                    <p className='text-sm capitalize opacity-50 leading-6'>We offer a wide range of travel services, including flights, hotels, car rentals, tours, and activities.</p>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </section>
            <section className='h-fit w-full px-[15px] sm:px-[35px] md:px-[50px] lg:px-[75px] xl:px-[100px] py-[75px] md:py-[100px] '>
                <div className='h-fit w-full max-w-[1024px] mx-auto flex flex-col items-center gap-[25px]'>
                    
                    <div className='h-fit w-full md:flex items-center gap-[50px]'>
                        <div className=''>
                            <p className='text-4xl font-bold text-left'>we provide the <span className='text-transparent bg-clip-text bg-gradient-to-r from-[#1877F2] to-[#B636CB] capitalize'>best process</span> experience</p>
                            <div className='h-[250px] w-full md:hidden bg-white rounded-[10px] shadow-[0px_4px_50px_rgba(0,0,0,0.075)]'>
                                <img src={pImg} alt='' className='h-full w-full object-contain' />
                            </div>
                            <div className='h-fit w-full pt-[50px] flex flex-col gap-[10px]'>
                                <div className='h-auto flex items-start gap-[30px]'>
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
                                <div className='h-auto flex items-start gap-[30px]'>
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
                                <div className='h-auto flex items-start gap-[30px]'>
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
                        <div className='h-[250px] w-full hidden md:flex bg-white rounded-[10px] shadow-[0px_4px_50px_rgba(0,0,0,0.075)]'>
                                <img src={pImg} alt='' className='h-full w-full object-contain' />
                            </div>
                    </div>
                </div>
            </section>
            <section className='h-[700px] w-full px-[15px] sm:px-[35px] md:px-[50px] lg:px-[75px] xl:px-[100px]  bg-gradient-to-r from-[#367DCB] to-[#5EAAFF]'>
                <div className='h-full w-full max-w-[1024px] mx-auto flex flex-col items-center gap-[10px] relative py-[75px] md:py-[100px]'>
                    <p className='w-full md:w-[500px] text-center  text-white'>Hire us to your project</p>
                    <p className='text-5xl font-bold text-center text-white'>Lets Work Together</p>
                    <img src={we} alt='' className='h-[400px] absolute bottom-0 -left-[50px] object-cover' />
                    <img src={cu} alt='' className='h-[500px] absolute bottom-0 -right-[100px] object-cover' />
                    <button className='h-[65px] w-[200px] border-[1px] border-white  shadow-[0px_4px_50px_0px_rgba(54,125,203,0.25)] rounded-full mt-[25px] flex items-center px-[7.5px]'>
                        <div className='w-[135px] flex justify-center'>
                            <p className='font-bold text-white'>Contact us</p>
                        </div>
                        <div className='h-[50px] w-[50px] rounded-full bg-white ml-auto  flex items-center justify-center'>
                            <BsArrowRight className='text-[#1877F2] text-2xl'/>
                        </div>
                    </button>
                </div>
            </section>
    </div>
  )
}

export default HomeScreen


{/* <section className='h-fit w-full px-[15px] sm:px-[35px] md:px-[50px] lg:px-[75px] xl:px-[100px] py-[75px] md:py-[100px] '>
            <div className='h-fit w-full max-w-[1024px] mx-auto flex flex-col items-center gap-[25px]'>
                
                <div className='h-fit w-full md:flex items-center gap-[50px]'>
                    <div className=''>
                        <p className='text-4xl font-bold text-left'>we provide the <span className='text-transparent bg-clip-text bg-gradient-to-r from-[#1877F2] to-[#B636CB] capitalize'>best process</span> experience</p>
                        <div className='h-[250px] w-full md:hidden bg-white rounded-[10px] shadow-[0px_4px_50px_rgba(0,0,0,0.075)]'>
                            <img src={pImg} alt='' className='h-full w-full object-contain' />
                        </div>
                        <div className='h-fit w-full pt-[50px] flex flex-col gap-[10px]'>
                            <div className='h-auto flex items-start gap-[30px]'>
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
                            <div className='h-auto flex items-start gap-[30px]'>
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
                            <div className='h-auto flex items-start gap-[30px]'>
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
                    <div className='h-[250px] w-full hidden md:flex bg-white rounded-[10px] shadow-[0px_4px_50px_rgba(0,0,0,0.075)]'>
                            <img src={pImg} alt='' className='h-full w-full object-contain' />
                        </div>
                </div>
            </div>
        </section>
        <section className='h-[700px] w-full px-[15px] sm:px-[35px] md:px-[50px] lg:px-[75px] xl:px-[100px]  bg-gradient-to-r from-[#367DCB] to-[#5EAAFF]'>
            <div className='h-full w-full max-w-[1024px] mx-auto flex flex-col items-center gap-[10px] relative py-[75px] md:py-[100px]'>
                <p className='w-full md:w-[500px] text-center  text-white'>Hire us to your project</p>
                <p className='text-5xl font-bold text-center text-white'>Lets Work Together</p>
                <img src={we} alt='' className='h-[400px] absolute bottom-0 -left-[50px] object-cover' />
                <img src={cu} alt='' className='h-[500px] absolute bottom-0 -right-[100px] object-cover' />
                <button className='h-[65px] w-[200px] border-[1px] border-white  shadow-[0px_4px_50px_0px_rgba(54,125,203,0.25)] rounded-full mt-[25px] flex items-center px-[7.5px]'>
                    <div className='w-[135px] flex justify-center'>
                        <p className='font-bold text-white'>Contact us</p>
                    </div>
                    <div className='h-[50px] w-[50px] rounded-full bg-white ml-auto  flex items-center justify-center'>
                        <BsArrowRight className='text-[#1877F2] text-2xl'/>
                    </div>
                </button>
            </div>
        </section> */}