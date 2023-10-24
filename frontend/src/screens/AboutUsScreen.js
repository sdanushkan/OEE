import React, { useEffect } from 'react'
import { IoIosArrowDown } from 'react-icons/io'
import { useLocation } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import hero1 from '../assets/hero1.png'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';


const AboutUsScreen = () => {
    const {pathName} = useLocation()

  useEffect(() => {
      window.scroll(0,0);
  }, [pathName]);
  return (
    <div className='h-fit w-full'>
         <div className='h-[350px] w-full flex flex-col md:flex-row items-center justify-center relative '>
                <div className='h-full w-full absolute z-20'>
                    <div className='h-full w-full'>
                    <Swiper
                        spaceBetween={30}
                        centeredSlides={true}
                        autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                        }}
                        pagination={{
                        clickable: true,
                        }}
                    
                        modules={[Autoplay, Pagination, Navigation]}
                        className="mySwiper"
                    >
                        <SwiperSlide>
                        <img alt='' src={"https://static.toiimg.com/thumb/msid-87137761,width-748,height-499,resizemode=4,imgsize-101646/.jpg"} className='h-[350px] w-full object-cover' />
                        </SwiperSlide>
                        <SwiperSlide>
                        <img alt='' src={"https://traveltomorrow.com/wp-content/uploads/2021/02/147677254_2935210533472459_996703284364145499_n.jpg"} className='h-[350px] w-full object-cover' />
                        </SwiperSlide>
                        <SwiperSlide>
                        <img alt='' src={"https://www.travelandleisure.com/thmb/9WFBvvcWb6iprVAnByZKvCTs_9E=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/TAL-header-hallstatt-austria-BEAUTEURO0323-640d96b8cfd141c9af4582fd1f11bb42.jpg"} className='h-[350px] w-full object-cover' />
                        </SwiperSlide>
                        <SwiperSlide>
                        <img alt='' src={"https://www.orangewayfarer.com/wp-content/uploads/2020/03/cinque-terre.jpg"} className='h-[350px] w-full object-cover' />
                        </SwiperSlide>
                        <SwiperSlide>
                        <img alt='' src={"https://bestthingstodoinyork.co.uk/wp-content/uploads/2023/01/bridge-2715_960_720.jpg"} className='h-[350px] w-full object-cover' />
                        </SwiperSlide>
                        
                    </Swiper>

                    </div>
                </div>
                <div className='h-full w-full absolute z-30 bg-gradient-to-b from-transparent to-black/75 flex items-center justify-center px-[25px] md:px-0'>
                    <p className=' text-3xl sm:text-4xl md:text-5xl md:font-bold text-left md:text-center font-semibold max-w-[600px] text-white capitalize'>About us</p>
                </div>
            </div>

            <div className='h-fit w-full px-[15px] sm:px-[25px] md:px-[50px] lg:px-[75px] xl:px-[100px] py-[50px] '>
            <div className='h-fit w-full max-w-[1024px] mx-auto flex flex-col md:flex-row'>
                <div className='h-[300px] w-full md:w-1/2 flex items-center justify-center '>
                    <img alt='' src={hero1} className='max-h-[300px] h-full  w-fit object-contain' />
                </div>
                <div className='h-fit w-full md:w-1/2 flex flex-col justify-start gap-[25px]'>
                <p className='text-center md:text-left font-semibold text-2xl capitalize'>your trusted partner for overseas education Experience</p>
                <p className='text-justify text-sm'>At Overseas Education Consultancy, we are dedicated to guiding the aspirations of students towards a world-class education. Our unwavering commitment to excellence is the beacon that lights the path to academic success across Canada, the UK, Australia, Switzerland, and Europe. We empower individuals to unlock their full potential, simplifying the intricate journey of overseas education through unparalleled guidance and trust at the core of our services. We believe in nurturing dreams and building bridges to a brighter educational future. We're not just consultants; we're partners in your educational journey, ensuring your success in a global community of learners,</p>
                </div>
            </div>
        </div>
        <div className='h-fit w-full px-[15px] sm:px-[25px] md:px-[50px] lg:px-[75px] xl:px-[100px]'>
            <div className='h-fitt w-full max-w-[1300px] mx-auto flex flex-col gap-[50px] md:py-[50px]'>

                <div className='h-fit w-full  flex flex-col justify-center md:justify-start gap-[10px]'>
                    <p className='uppercase text-center md:text-left text-2xl font-semibold'>Vission</p>
                    <p className='text-sm opacity-50 text-justify'>"At Overseas Education Consultancy, our vision is to be the guiding light for aspiring students, illuminating their path to world-class education. We strive to empower individuals with the knowledge and opportunities they need to unlock their full potential, enabling them to thrive in diverse academic landscapes across Canada, the UK, Australia, Switzerland, and Europe. Our commitment to excellence is unwavering, and we envision a future where every student's dream of international education becomes a reality."</p>
                </div>

                <div className='h-fit w-full  flex flex-col justify-center md:justify-start gap-[10px]'>
                    <p className='uppercase text-center md:text-left text-2xl font-semibold'>Mission</p>
                    <p className='text-sm opacity-50 text-justify'>"Our mission is to build bridges to a world-class education by offering unparalleled guidance and support for student visas to Canada, the UK, Australia, Switzerland, and Europe. With trust at the core of our services, we aim to simplify the complex journey of overseas education, providing a seamless experience. We are dedicated to nurturing dreams, fostering a diverse global community of learners, and ensuring that our students succeed in their academic pursuits. At Overseas Education Consultancy, we are more than just consultants; we are partners in your educational journey."</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutUsScreen