import React, { useEffect, useState } from 'react'
import hero1 from '../assets/hero1.png'
import hero2 from '../assets/hero2.png'
import { Link, useLocation } from 'react-router-dom'
import { useInView } from 'react-intersection-observer'
import 'react-slideshow-image/dist/styles.css'
import { BiWorld } from 'react-icons/bi'
import { TbCloudComputing } from 'react-icons/tb'
import { CgWebsite } from 'react-icons/cg'
import { MdImportExport, MdOutlineModeOfTravel } from 'react-icons/md'
import { BsArrowRight } from 'react-icons/bs'
import { IoIosMail } from 'react-icons/io'
import RoundEllipse from '../assets/RoundEllipse.png'
import herom from '../assets/herom.png'
import pImg from '../assets/ProssessImg.jpg'
import cu from '../assets/cu.png'
import we from '../assets/we.png'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import { IoMailOutline, IoPhonePortraitOutline } from 'react-icons/io5'


const HomeScreen = () => {
    const { ref:heroText, inView:isHeroText } = useInView({triggerOnce:true});

    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
    const [country, setCountry] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')

  return (
    <div className='h-fit w-full flex flex-col gap-[50px]'>
        <div className='h-fit w-full px-[15px] sm:px-[25px] md:px-[50px] lg:px-[75px] xl:px-[100px]'>
            <div className='h-fit w-full max-w-[1300px] mx-auto flex flex-col md:flex-row items-center justify-center gap-[25px] md:gap-[150px] py-[50px]'>
                <div className='h-fit w-full flex flex-col items-center justify-center md:items-start gap-[25px] max-w-[550px]'>
                    <p className='text-3xl sm:text-4xl md:text-5xl md:font-bold text-center md:text-left font-semibold max-w-[500px]'>Overseas Education Consultants in Sri Lanka</p>
                    <p className='text-sm text-center md:text-left opacity-50'>Best Overseas Education Consultants in Sri Lanka and Study Abroad Consultants in Colombo, Galle, Jaffna, Kandy, Dehiwala-Mount Lavinia, Maharagama, Moratuwa, Negombo, Pita Kotte, Sri Jayewardenepura, Trincomalee, Kalmunai, Sri lanka</p>
                    <button className='h-[45px] px-[25px] flex items-center justify-center bg-blue-500 text-white rounded-[10px] capitalize'>
                        Contact us
                    </button>
                </div>
                <div className='h-[400px] md:w-[300px] lg:w-[500px]'>
                    <div className='h-[400px] md:w-[300px] lg:w-[500px]'>
                        <img alt='' src={hero1} className='h-full w-full object-contain scale-90 md:scale-100' />
                    </div>
                </div>
            </div>
        </div> 

        <div className='h-fit w-full px-[15px] sm:px-[25px] md:px-[50px] lg:px-[75px] xl:px-[100px] '>
            <div className='h-fit w-full max-w-[1300px] mx-auto flex flex-col md:flex-row items-center justify-center gap-[25px] md:gap-[150px] py-[50px]'>
                <div className='h-fit w-full max-w-[400px]'>
                    <img alt='' src={herom} className='h-[300px] w-fit object-contain' />
                </div>
                <div className='h-fit w-full flex flex-col gap-[10px]'>
                    <Link to={'/canada'} className='h-fit w-full bg-blue-500 text-white py-[15px] px-[20px] rounded-[10px] hover:scale-105 duration-100 flex items-center justify-between'>
                        <p className='text-lg font-medium'>Admision open <span className='font-bold capitalize text-xl'>"Canada"</span></p>
                    </Link>
                    <Link to={'/australia'} className='h-fit w-full bg-blue-500 text-white py-[15px] px-[20px] rounded-[10px] hover:scale-105 duration-100 flex items-center justify-between'>
                        <p className='text-lg font-medium'>Admision open <span className='font-bold capitalize text-xl'>"australia"</span></p>
                    </Link>
                    <Link to={'/unitedstates'} className='h-fit w-full bg-blue-500 text-white py-[15px] px-[20px] rounded-[10px] hover:scale-105 duration-100 flex items-center justify-between'>
                        <p className='text-lg font-medium'>Admision open <span className='font-bold capitalize text-xl'>"UK"</span></p>
                    </Link>
                    <Link to={'/switzerland'} className='h-fit w-full bg-blue-500 text-white py-[15px] px-[20px] rounded-[10px] hover:scale-105 duration-100 flex items-center justify-between'>
                        <p className='text-lg font-medium'>Admision open <span className='font-bold capitalize text-xl'>"switzerland"</span></p>
                    </Link>
                    <Link to={'/Europe'} className='h-fit w-full bg-blue-500 text-white py-[15px] px-[20px] rounded-[10px] hover:scale-105 duration-100 flex items-center justify-between'>
                        <p className='text-lg font-medium'>Admision open <span className='font-bold capitalize text-xl'>"europe"</span></p>
                    </Link>
                </div>
            </div>
        </div>

        <div className='h-fit w-full px-[15px] sm:px-[25px] md:px-[50px] lg:px-[75px] xl:px-[100px] bg-[#f6f6f6] py-[50px]'>
            <div className='h-fit w-full max-w-[1024px] mx-auto'>
                <p className='text-center font-semibold text-4xl'>Could Your Next Home Be?</p>
                <div className='h-fit w-full gap-[25px] flex flex-col md:flex-row flex-wrap md:justify-center items-center py-[50px]'>
                    <Link to={'/canada'} className='h-fit w-full max-w-[300px] px-[10px] pt-[10px] bg-white rounded-[25px] hover:scale-105 duration-300'>
                        <div className='h-[200px] w-full bg-white rounded-[15px] overflow-hidden'>
                            <img alt='' src='https://a.cdn-hotels.com/gdcs/production149/d121/06dc8ae0-c55c-11e8-9739-0242ac110006.jpg?impolicy=fcrop&w=800&h=533&q=medium' className='h-full w-full object-cover' />
                        </div>
                        <div className='h-[65px] w-full flex items-center justify-center relative'>
                            <p className='capitalize font-semibold'>Canada</p>
                            <div className='absolute h-[50px] w-[50px] flex items-center justify-center bg-blue-500 rounded-full right-0'>
                                <BsArrowRight className='text-white'/>
                            </div>
                        </div>
                    </Link>

                    <Link to={'/australia'} className='h-fit w-full max-w-[300px] px-[10px] pt-[10px] bg-white rounded-[25px] hover:scale-105 duration-300'>
                        <div className='h-[200px] w-full bg-white rounded-[15px] overflow-hidden'>
                            <img alt='' src='https://ichef.bbci.co.uk/news/976/cpsprodpb/10A3C/production/_129365186_gettyimages-103455489.jpg' className='h-full w-full object-cover' />
                        </div>
                        <div className='h-[65px] w-full flex items-center justify-center relative'>
                            <p className='capitalize font-semibold'>australia</p>
                            <div className='absolute h-[50px] w-[50px] flex items-center justify-center bg-blue-500 rounded-full right-0'>
                                <BsArrowRight className='text-white'/>
                            </div>
                        </div>
                    </Link>

                    <Link to={'/unitedstates'} className='h-fit w-full max-w-[300px] px-[10px] pt-[10px] bg-white rounded-[25px] hover:scale-105 duration-300'>
                        <div className='h-[200px] w-full bg-white rounded-[15px] overflow-hidden'>
                            <img alt='' src='https://assets.traveltriangle.com/blog/wp-content/uploads/2018/08/big-ben.jpg' className='h-full w-full object-cover' />
                        </div>
                        <div className='h-[65px] w-full flex items-center justify-center relative'>
                            <p className='capitalize font-semibold'>unitedstates kingdom</p>
                            <div className='absolute h-[50px] w-[50px] flex items-center justify-center bg-blue-500 rounded-full right-0'>
                                <BsArrowRight className='text-white'/>
                            </div>
                        </div>
                    </Link>

                    <Link to={'/switzerland'} className='h-fit w-full max-w-[300px] px-[10px] pt-[10px] bg-white rounded-[25px] hover:scale-105 duration-300'>
                        <div className='h-[200px] w-full bg-white rounded-[15px] overflow-hidden'>
                            <img alt='' src='https://www.myglobalviewpoint.com/wp-content/uploads/2020/01/Most-beautiful-places-in-Switzerland.jpg' className='h-full w-full object-cover' />
                        </div>
                        <div className='h-[65px] w-full flex items-center justify-center relative'>
                            <p className='capitalize font-semibold'>switzerland</p>
                            <div className='absolute h-[50px] w-[50px] flex items-center justify-center bg-blue-500 rounded-full right-0'>
                                <BsArrowRight className='text-white'/>
                            </div>
                        </div>
                    </Link>

                    <Link to={'/europe'} className='h-fit w-full max-w-[300px] px-[10px] pt-[10px] bg-white rounded-[25px] hover:scale-105 duration-300'>
                        <div className='h-[200px] w-full bg-white rounded-[15px] overflow-hidden'>
                            <img alt='' src='https://image.jimcdn.com/app/cms/image/transf/dimension=1190x10000:format=jpg/path/sa6549607c78f5c11/image/i2c81a69087b406ef/version/1456237268/most-beautiful-landscapes-in-europe-hallstatt-copyright-canadastock-european-best-destinations.jpg' className='h-full w-full object-cover' />
                        </div>
                        <div className='h-[65px] w-full flex items-center justify-center relative'>
                            <p className='capitalize font-semibold'>europe </p>
                            <div className='absolute h-[50px] w-[50px] flex items-center justify-center bg-blue-500 rounded-full right-0'>
                                <BsArrowRight className='text-white'/>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        </div>

        <div className='h-fit w-full px-[15px] sm:px-[25px] md:px-[50px] lg:px-[75px] xl:px-[100px]'>
            <div className='h-fitt w-full max-w-[1300px] mx-auto flex flex-col gap-[50px] md:pb-[50px]'>
                <div className='h-fit w-full  flex flex-col justify-center md:justify-start gap-[10px]'>
                    <p className='capitalize text-center md:text-left text-3xl font-semibold'>Who Are We</p>
                    <p className='text-sm opacity-50 text-center md:text-left'>Through a long history of change and development, GIEC Global has now become Sri Lanka’s most trusted and well-established education and migration agency. At GIEC Global Sri Lanka, we take pride in helping our clients in every step of the way to achieve their ultimate goals in Migration or Student Services. Since our establishment, we have several partners in various part of the world and we have expanded our company to Australia, India, UK,  and Canada. We are proud of our multilingual proficiency where our team members can communicate in over eight different languages (English, Sinhala, Hindi, Nepali, Punjabi, Maithili, Rajasthani, and Urdu). Our visa success and satisfied clients are the reasons for our fast growth. We have expertise in all kinds of Study Abroad and Immigration Services.</p>
                </div>
                <div className='h-fit w-full  flex flex-col justify-center md:justify-start gap-[10px]'>
                    <p className='capitalize text-center md:text-left text-xl font-semibold'>Vission</p>
                    <p className='text-sm opacity-50 text-center md:text-left'>"At Overseas Education Consultancy, our vision is to be the guiding light for aspiring students, illuminating their path to world-class education. We strive to empower individuals with the knowledge and opportunities they need to unlock their full potential, enabling them to thrive in diverse academic landscapes across Canada, the UK, Australia, Switzerland, and Europe. Our commitment to excellence is unwavering, and we envision a future where every student's dream of international education becomes a reality."</p>
                </div>

                <div className='h-fit w-full  flex flex-col justify-center md:justify-start gap-[10px]'>
                    <p className='capitalize text-center md:text-left text-xl font-semibold'>Mission</p>
                    <p className='text-sm opacity-50 text-center md:text-left'>"Our mission is to build bridges to a world-class education by offering unparalleled guidance and support for student visas to Canada, the UK, Australia, Switzerland, and Europe. With trust at the core of our services, we aim to simplify the complex journey of overseas education, providing a seamless experience. We are dedicated to nurturing dreams, fostering a diverse global community of learners, and ensuring that our students succeed in their academic pursuits. At Overseas Education Consultancy, we are more than just consultants; we are partners in your educational journey."</p>
                </div>
            </div>
        </div>

        <div className='h-fit w-full px-[15px] sm:px-[25px] md:px-[50px] lg:px-[75px] xl:px-[100px]'>
            <div className='h-fit w-full max-w-[1300px] mx-auto md:flex md:justify-between md:px-[50px] xl:px-[100px] py-[50px] px-[15px] sm:px-[25px] bg-[#F6F6F6] rounded-[10px]'>
                <div className='h-fit w-fit'>
                    <img alt='' src={hero2} className='h-[300px] w-fit object-contain' />
                </div>
                <div className='h-fit my-auto gap-[50px] md:gap-[100px] flex items-center'>
                    <form className='w-full md:min-w-[400px] flex flex-col gap-[10px] py-[25px]'>
                        <div className='h-[50px] w-full relative'>
                            <input type='text' autoComplete={false} autoSave={false} required={true} value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Email' className='h-full w-full px-[65px] border-[1px] border-black border-opacity-5 focus:border-opacity-20 duration-200 rounded-[5px] outline-none'></input>
                            <div className='h-[50px] w-[50px] absolute left-0 top-0 bottom-0 flex items-center justify-center'>
                                <IoMailOutline className='text-2xl'/>
                            </div>
                            <div className='h-[30px] w-[1px] bg-black opacity-10 absolute top-1/2 left-[50px] transform -translate-y-1/2'>

                            </div>
                        </div>
                        <div className='h-[50px] w-full relative'>
                            <input type='text' autoComplete={false} autoSave={false} required={true} value={name} onChange={(e) => setName(e.target.value)} placeholder='Username' className='h-full w-full px-[65px] border-[1px] border-black border-opacity-5 focus:border-opacity-20 duration-200 rounded-[5px] outline-none'></input>
                            <div className='h-[50px] w-[50px] absolute left-0 top-0 bottom-0 flex items-center justify-center'>
                                <IoIosMail className='text-2xl'/>
                            </div>
                            <div className='h-[30px] w-[1px] bg-black opacity-10 absolute top-1/2 left-[50px] transform -translate-y-1/2'>

                            </div>
                        </div>
                        <div className='h-[50px] w-full relative'>
                            <input type='text' autoComplete={false} autoSave={false} required={true} value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} placeholder='Phone Number' className='h-full w-full px-[65px] border-[1px] border-black border-opacity-5 focus:border-opacity-20 duration-200 rounded-[5px] outline-none'></input>
                            <div className='h-[50px] w-[50px] absolute left-0 top-0 bottom-0 flex items-center justify-center'>
                                <IoPhonePortraitOutline className='text-2xl'/>
                            </div>
                            <div className='h-[30px] w-[1px] bg-black opacity-10 absolute top-1/2 left-[50px] transform -translate-y-1/2'>

                            </div>
                        </div>
                        <div className='h-[50px] w-full relative'>
                            <input type='text' autoComplete={false} autoSave={false} required={true} value={country} onChange={(e) => setCountry(e.target.value)} placeholder='Country' className='h-full w-full px-[65px] border-[1px] border-black border-opacity-5 focus:border-opacity-20 duration-200 rounded-[5px] outline-none'></input>
                            <div className='h-[50px] w-[50px] absolute left-0 top-0 bottom-0 flex items-center justify-center'>
                                <BiWorld className='text-2xl'/>
                            </div>
                            <div className='h-[30px] w-[1px] bg-black opacity-10 absolute top-1/2 left-[50px] transform -translate-y-1/2'>

                            </div>
                        </div>
                        <button className='h-[45px] w-fit mx-auto md:mx-0 px-[25px] flex items-center justify-center bg-blue-500 text-white rounded-[10px] capitalize mt-[10px]'>
                            Contact us
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HomeScreen







// <div pages={3} className=' overflow-hidden'>
//         <div factor={1}  className='h-[800px] md:h-[700px] w-auto overflow-hidden flex flex-col gap-[15px] items-center justify-center relative px-[15px]'>
//             <img src={herobg} alt='' className='h-[400px] md:h-auto absolute top-0 -z-50 object-cover' />
//             <div speed={2.5} className='h-full w-full absolute'>
//                 <div className='h-[350px] w-[350px] absolute top-[40%] md:top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -z-20'>
//                     <img src={RoundEllipse} alt='' className='h-[350px] w-[350px] ' />
//                 </div>
//                 <div className='h-[450px] w-[450px] absolute top-[50%] md:top-[50%] left-[20%] md:left-[40%] transform -translate-x-1/2 -translate-y-1/2 -z-20'>
//                     <img src={RoundEllipse} alt='' className='h-[450px] w-[450px]' />
//                 </div>
//                 <div className='h-[250px] w-[250px] absolute top-[75%] left-[60%] transform -translate-x-1/2 -translate-y-1/2 -z-20'>
//                     <img src={RoundEllipse} alt='' className='h-[250px] w-[250px]' />
//                 </div>
//                 <div className='h-[300px] w-[300px] absolute top-[45%] md:top-[40%] left-[90%] md:left-[70%] transform -translate-x-1/2 -translate-y-1/2 -z-20'>
//                     <img src={RoundEllipse} alt='' className='h-[300px] w-[300px]' />
//                 </div>
//             </div>
//             <div speed={0} className='h-full w-full absolute flex flex-col items-center justify-center gap-[15px]'>
//                 <p className='text-5xl font-bold text-center'>Consulting <span className='text-transparent bg-clip-text bg-gradient-to-r from-[#1877F2] to-[#B636CB]'>Serivices</span></p>
//                 <p className='w-full md:w-[500px] text-center opacity-50 '>A short, attention-grabbing headline that summarizes the benefits of your software solution</p>
//                 <button className='h-[65px] w-[200px] bg-white shadow-[0px_4px_50px_0px_rgba(54,125,203,0.25)] rounded-full mt-[15px] flex items-center px-[7.5px]'>
//                     <div className='w-[135px] flex justify-center'>
//                         <p className='font-bold text-[#1877F2]'>Action</p>
//                     </div>
//                     <div className='h-[50px] w-[50px] rounded-full bg-[#1877F2] ml-auto  flex items-center justify-center'>
//                         <BsArrowRight className='text-white text-2xl'/>
//                     </div>
//                 </button>
//             </div>
//         </div>
//         <section className='h-fit w-full px-[15px] sm:px-[35px] md:px-[50px] lg:px-[75px] xl:px-[100px] xl:px-[100px] py-[75px] md:py-[100px] bg-white'>
//                 <div className='h-fit w-full max-w-[1024px] mx-auto flex flex-col items-center gap-[50px]'>
//                     <div className='flex flex-col items-center'>
//                         <p className='font-semibold capitalize text-[#1877F2]'>sevices</p>
//                         <p className='text-4xl font-bold text-center'>What we <span className='text-transparent bg-clip-text bg-gradient-to-r from-[#1877F2] to-[#B636CB] capitalize'>provide</span> as a company</p>
//                     </div>
//                     <div className='h-fit w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-[25px] lg:gap-x-[50px] gap-y-[50px] sm:gap-y-[75px] md:gap-y-[100px]'>
//                         <div className='h-fit w-full max-w-[500px] mx-auto relative'>
//                             <div className='h-[50px] sm:h-[75px] w-[50px] sm:w-[75px] bg-[#1877F2] absolute top-0 left-0 flex items-center justify-center'>
//                                 <FiPieChart className='text-white text-2xl'/>
//                             </div>
//                             <div className='h-fit w-full relative top-[35px] sm:top-[50px] pl-[35px] sm:pl-[50px]'>
//                                 <div className='h-fit w-full px-[35px] sm:px-[50px] py-[35px] sm:py-[50px] shadow-[0px_5px_100px_0px_rgba(54,125,203,0.10)] bg-white flex flex-col gap-[10px]'>
//                                     <p className='font-semibold capitalize'>Trading Platform</p>
//                                     <p className='text-sm capitalize opacity-50 leading-6'>Our trading platform offers a variety of features to help you trade like a pro</p>
//                                 </div>
//                             </div>
//                         </div>
//                         <div className='h-fit w-full max-w-[500px] mx-auto relative'>
//                             <div className='h-[50px] sm:h-[75px] w-[50px] sm:w-[75px] bg-[#1877F2] absolute top-0 left-auto right-0 md:left-0 md:right-auto flex items-center justify-center'>
//                                 <MdImportExport className='text-white text-2xl'/>
//                             </div>
//                             <div className='h-fit w-full relative top-[35px] sm:top-[50px] pr-[35px] sm:pr-[50px] md:pr-0 md:pl-[50px]'>
//                                 <div className='h-fit w-full px-[35px] sm:px-[50px] py-[35px] sm:py-[50px] shadow-[0px_5px_100px_0px_rgba(54,125,203,0.10)] bg-white flex flex-col gap-[10px]'>
//                                     <p className='font-semibold capitalize'>Import and Export</p>
//                                     <p className='text-sm capitalize opacity-50 leading-6'>Our import and export platform is a one-stop shop for all your import and export needs.</p>
//                                 </div>
//                             </div>
//                         </div>
//                         <div className='h-fit w-full max-w-[500px] mx-auto relative'>
//                             <div className='h-[50px] sm:h-[75px] w-[50px] sm:w-[75px] bg-[#1877F2] absolute top-0 left-0 flex items-center justify-center'>
//                                 <TbCloudComputing className='text-white text-2xl'/>
//                             </div>
//                             <div className='h-fit w-full relative top-[35px] sm:top-[50px] pl-[35px] sm:pl-[50px]'>
//                                 <div className='h-fit w-full px-[35px] sm:px-[50px] py-[35px] sm:py-[50px] shadow-[0px_5px_100px_0px_rgba(54,125,203,0.10)] bg-white flex flex-col gap-[10px]'>
//                                     <p className='font-semibold capitalize'>IT Services</p>
//                                     <p className='text-sm capitalize opacity-50 leading-6'>We offer services for a variety of needs, including cloud computing, cybersecurity, data center management, and IT consulting.</p>
//                                 </div>
//                             </div>
//                         </div>
//                         <div className='h-fit w-full max-w-[500px] mx-auto relative'>
//                             <div className='h-[50px] sm:h-[75px] w-[50px] sm:w-[75px] bg-[#1877F2] absolute top-0 left-auto right-0 md:left-0 md:right-auto flex items-center justify-center'>
//                                 <FaComputer className='text-white text-2xl'/>
//                             </div>
//                             <div className='h-fit w-full relative top-[35px] sm:top-[50px] pr-[35px] sm:pr-[50px] md:pr-0 md:pl-[50px]'>
//                                 <div className='h-fit w-full px-[35px] sm:px-[50px] py-[35px] sm:py-[50px] shadow-[0px_5px_100px_0px_rgba(54,125,203,0.10)] bg-white flex flex-col gap-[10px]'>
//                                     <p className='font-semibold capitalize'>Software Solutions</p>
//                                     <p className='text-sm capitalize opacity-50 leading-6'>Our software solution platform provides a wide range of software solutions to businesses of all sizes.</p>
//                                 </div>
//                             </div>
//                         </div>
//                         <div className='h-fit w-full max-w-[500px] mx-auto relative'>
//                             <div className='h-[50px] sm:h-[75px] w-[50px] sm:w-[75px] bg-[#1877F2] absolute top-0 left-0 flex items-center justify-center'>
//                                 <CgWebsite className='text-white text-2xl'/>
//                             </div>
//                             <div className='h-fit w-full relative top-[35px] sm:top-[50px] pl-[35px] sm:pl-[50px]'>
//                                 <div className='h-fit w-full px-[35px] sm:px-[50px] py-[35px] sm:py-[50px] shadow-[0px_5px_100px_0px_rgba(54,125,203,0.10)] bg-white flex flex-col gap-[10px]'>
//                                     <p className='font-semibold capitalize'>Web and Mobile app Solutions</p>
//                                     <p className='text-sm capitalize opacity-50 leading-6'>We provides businesses with everything they need to create, deploy, and manage their web and mobile applications.</p>
//                                 </div>
//                             </div>
//                         </div>
//                         <div className='h-fit w-full max-w-[500px] mx-auto relative'>
//                             <div className='h-[50px] sm:h-[75px] w-[50px] sm:w-[75px] bg-[#1877F2] absolute top-0 left-auto right-0 md:left-0 md:right-auto flex items-center justify-center'>
//                                 <MdOutlineModeOfTravel className='text-white text-2xl'/>
//                             </div>
//                             <div className='h-fit w-full relative top-[35px] sm:top-[50px] pr-[35px] sm:pr-[50px] md:pr-0 md:pl-[50px]'>
//                                 <div className='h-fit w-full px-[35px] sm:px-[50px] py-[35px] sm:py-[50px] shadow-[0px_5px_100px_0px_rgba(54,125,203,0.10)] bg-white flex flex-col gap-[10px]'>
//                                     <p className='font-semibold capitalize'>Travels</p>
//                                     <p className='text-sm capitalize opacity-50 leading-6'>We offer a wide range of travel services, including flights, hotels, car rentals, tours, and activities.</p>
//                                 </div>
//                             </div>
//                         </div>
                        
//                     </div>
//                 </div>
//         </section>
//         <section className='h-fit w-full px-[15px] sm:px-[35px] md:px-[50px] lg:px-[75px] xl:px-[100px] xl:px-[100px] py-[75px] md:py-[100px] '>
//             <div className='h-fit w-full max-w-[1024px] mx-auto flex flex-col items-center gap-[25px]'>
                
//                 <div className='h-fit w-full md:flex items-center gap-[50px]'>
//                     <div className=''>
//                         <p className='text-4xl font-bold text-left'>we provide the <span className='text-transparent bg-clip-text bg-gradient-to-r from-[#1877F2] to-[#B636CB] capitalize'>best process</span> experience</p>
//                         <div className='h-[250px] w-full md:hidden bg-white rounded-[10px] shadow-[0px_4px_50px_rgba(0,0,0,0.075)]'>
//                             <img src={pImg} alt='' className='h-full w-full object-contain' />
//                         </div>
//                         <div className='h-fit w-full pt-[50px] flex flex-col gap-[10px]'>
//                             <div className='h-auto flex items-start gap-[30px]'>
//                                 <div className='h-auto w-[50px] flex flex-col items-center'>
//                                     <div className='h-[50px] w-[50px] bg-blue-500 rounded-full flex items-center justify-center text-white'>
//                                         01                            
//                                     </div>
//                                     <div className='h-full w-[1px] bg-black'>

//                                     </div>
//                                 </div>
//                                 <div className='flex flex-col gap-[10px]  pb-[25px] md:pb-[50px]'>
//                                     <p className='text-xl font-semibold'>Briefing</p>
//                                     <p className='text-sm opacity-50'>First thing you determine the concept and model you want</p>
//                                 </div>
//                             </div>
//                             <div className='h-auto flex items-start gap-[30px]'>
//                                 <div className='h-auto w-[50px] flex flex-col items-center'>
//                                     <div className='h-[50px] w-[50px] bg-blue-500 rounded-full flex items-center justify-center text-white'>
//                                         02                         
//                                     </div>
//                                     <div className='h-full w-[1px] bg-black'>

//                                     </div>
//                                 </div>
//                                 <div className='flex flex-col gap-[10px]  pb-[25px] md:pb-[50px]'>
//                                     <p className='text-xl font-semibold'>Processing</p>
//                                     <p className='text-sm opacity-50'>When the briefing process is complete and what the client wants has been achieved. Then we carry out the execution of the desired concept</p>
//                                 </div>
//                             </div>
//                             <div className='h-auto flex items-start gap-[30px]'>
//                                 <div className='h-auto w-[50px] flex flex-col items-center'>
//                                     <div className='h-[50px] w-[50px] bg-blue-500 rounded-full flex items-center justify-center text-white'>
//                                         03                            
//                                     </div>
//                                     <div className='h-full w-[1px] bg-black'>

//                                     </div>
//                                 </div>
//                                 <div className='flex flex-col gap-[10px]  pb-[25px] md:pb-[50px]'>
//                                     <p className='text-xl font-semibold'>Finishing</p>
//                                     <p className='text-sm opacity-50'>After the process is complete, we will immediately carry out the finishing stage and we do it carefully and make sure there are no mistakes</p>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                     <div className='h-[250px] w-full hidden md:flex bg-white rounded-[10px] shadow-[0px_4px_50px_rgba(0,0,0,0.075)]'>
//                             <img src={pImg} alt='' className='h-full w-full object-contain' />
//                         </div>
//                 </div>
//             </div>
//         </section>
//         <section className='h-[700px] w-full px-[15px] sm:px-[35px] md:px-[50px] lg:px-[75px] xl:px-[100px] xl:px-[100px]  bg-gradient-to-r from-[#367DCB] to-[#5EAAFF]'>
//             <div className='h-full w-full max-w-[1024px] mx-auto flex flex-col items-center gap-[10px] relative py-[75px] md:py-[100px]'>
//                 <p className='w-full md:w-[500px] text-center  text-white'>Hire us to your project</p>
//                 <p className='text-5xl font-bold text-center text-white'>Lets Work Together</p>
//                 <img src={we} alt='' className='h-[400px] absolute bottom-0 -left-[50px] object-cover' />
//                 <img src={cu} alt='' className='h-[500px] absolute bottom-0 -right-[100px] object-cover' />
//                 <button className='h-[65px] w-[200px] border-[1px] border-white  shadow-[0px_4px_50px_0px_rgba(54,125,203,0.25)] rounded-full mt-[25px] flex items-center px-[7.5px]'>
//                     <div className='w-[135px] flex justify-center'>
//                         <p className='font-bold text-white'>Contact us</p>
//                     </div>
//                     <div className='h-[50px] w-[50px] rounded-full bg-white ml-auto  flex items-center justify-center'>
//                         <BsArrowRight className='text-[#1877F2] text-2xl'/>
//                     </div>
//                 </button>
//             </div>
//         </section>
//     </div>













{/* <section className='h-fit w-full px-[15px] sm:px-[35px] md:px-[50px] lg:px-[75px] xl:px-[100px] xl:px-[100px] py-[75px] md:py-[100px] '>
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
        <section className='h-[700px] w-full px-[15px] sm:px-[35px] md:px-[50px] lg:px-[75px] xl:px-[100px] xl:px-[100px]  bg-gradient-to-r from-[#367DCB] to-[#5EAAFF]'>
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