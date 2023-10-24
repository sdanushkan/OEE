import React, { useEffect } from 'react'
import { IoIosArrowDown } from 'react-icons/io'
import { useLocation } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const Australia = () => {
  
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
                        <img alt='' src={"https://www.earthsattractions.com/wp-content/uploads/2018/08/sydney_opera-unsplash.jpg"} className='h-[350px] w-full object-cover' />
                        </SwiperSlide>
                        <SwiperSlide>
                        <img alt='' src={"https://cdn.kimkim.com/files/a/content_articles/featured_photos/d544e52c909b8e7c801ddeaa61904ab0ff21cb7a/big-0a17e223ef20a98578fff8e8398571d2.jpg"} className='h-[350px] w-full object-cover' />
                        </SwiperSlide>
                        <SwiperSlide>
                        <img alt='' src={"https://travelexperta.com/wp-content/uploads/2019/11/load-image-2.jpg"} className='h-[350px] w-full object-cover' />
                        </SwiperSlide>
                        <SwiperSlide>
                        <img alt='' src={"https://www.timeshighereducation.com/student/sites/default/files/sydney_0.jpg"} className='h-[350px] w-full object-cover' />
                        </SwiperSlide>
                        
                    </Swiper>

                    </div>
                </div>
                <div className='h-full w-full absolute z-30 bg-gradient-to-b from-transparent to-black/75 flex items-center justify-center px-[25px] md:px-0'>
                    <p className=' text-3xl sm:text-4xl md:text-5xl md:font-bold text-left md:text-center font-semibold max-w-[600px] text-white'>Unlock Your Future: Why Choose Australia for Study</p>
                </div>
            </div>
   
      

      <div className='h-fit w-full px-[15px] sm:px-[25px] md:px-[50px] lg:px-[75px]'>
        <div className='h-fitt w-full max-w-[1300px] mx-auto flex flex-col py-[25px] md:py-[50px]'>
          <div className='h-fit w-full  flex flex-col justify-center md:justify-start gap-[25px]'>
              {/* <p className='capitalize text-left text-2xl font-semibold'>Switzerland: Elevate Your Education, Enrich Your Life</p> */}
              <div className='h-fit w-full flex flex-col gap-[15px]'>
            
              <p className='text-xl opacity-75 text-left'>Australia beckons with a world of educational possibilities, adventure, and personal growth. Dive into our website to understand why Australia is your gateway to a bright academic future.</p>
              </div>

              <ol className='list-decimal px-[50px]'>
                <li className='text-lg opacity-50 text-left' >Academic Excellence: Australia boasts top-ranked universities and institutions, renowned for their cutting-edge research and high-quality education.</li>
                <li className='text-lg opacity-50 text-left' >Global Recognition: Degrees earned in Australia are globally recognized and respected, opening doors to a multitude of career opportunities.</li>
                <li className='text-lg opacity-50 text-left' >Multicultural Oasis: Embrace a diverse, inclusive society where you'll meet people from all corners of the world, fostering a global perspective.</li>
                <li className='text-lg opacity-50 text-left' > Work While You Learn: Australia's student visa allows you to work part-time, gaining real-world experience while studying.</li>
                <li className='text-lg opacity-50 text-left' > Nature's Paradise: From pristine beaches to the outback, Australia offers stunning natural beauty and endless adventures.</li>
                <li className='text-lg opacity-50 text-left' >Safety and Security: Enjoy a safe and friendly environment, known for its welcoming locals and a strong commitment to student welfare.</li>
                <li className='text-lg opacity-50 text-left' > Quality of Life: Australia consistently ranks high in terms of quality of life, healthcare, and overall well-being.</li>
              </ol>

              <p className='text-xl opacity-75 text-left'>"Our website is your ultimate resource for information on courses, scholarships, visas, and everything you need to know about studying in Australia. Let us be your guide on this remarkable journey to academic success Down Under."</p>
          </div>
        </div>
      </div>

      <div className='h-fit w-full px-[15px] sm:px-[25px] md:px-[50px] lg:px-[75px] bg-[#f6f6f6]'>
        <div className='h-fitt w-full max-w-[1300px] mx-auto flex flex-col py-[25px] gap-[10px]'>
          <p className='text-3xl text-red-600 text-center font-semibold pb-[10px]'>FAQs</p>

            <button className='h-[100px] md:h-[50px] w-full overflow-hidden focus:overflow-hidden bg-white  focus:h-fit duration-200 px-[15px] md:px-[25px]'>
              <div className='h-[100px] md:h-[50px]  w-full flex items-center justify-between'>
                <p className='text-base font-semibold text-left'>Which consultant is best for Australia immigration?</p>
                <IoIosArrowDown className='text-lg'/>
              </div>
              <div className='bg-red-600 text-white py-[15px] md:py-[25px] px-[10px]'>
                <p className='text-xs text-left'>GIEC GLOBAL Sri Lanka is the best Australian Migration Agents in Sri Lanka. We are highly reputed firm that is known for its experienced consultants for Australia immigration who can give you the best  advice at every step. It has a decade’s worth of experience making it a great place for everyone with a dream to move out of their homeland. If you are looking for the Australia Migration Agents in Sri Lanka Colombo, Galle, Kandy, Maharagama, Moratuwa, and Jaffna, Sri Lanka, contact us for best consultantion.</p>
              </div>
            </button>
            <button className='h-[100px] md:h-[50px] w-full overflow-hidden focus:overflow-hidden bg-white  focus:h-fit duration-200 px-[15px] md:px-[25px]'>
              <div className='h-[100px] md:h-[50px]  w-full flex items-center justify-between'>
                <p className='text-base font-semibold text-left'> What are the requirements to migrate to Australia?</p>
                <IoIosArrowDown className='text-lg'/>
              </div>
              <div className='bg-red-600 text-white py-[15px] md:py-[25px] px-[15px] md:px-[25px]'>
                <ol className='list-disc'>
                  <li className='text-left'>45 years of age</li>
                  <li className='text-left'>65 points in the Australian points grid</li>
                  <li className='text-left'>Valid skills assessment</li>
                  <li className='text-left'>IELTS or PTE score</li>
                  <li className='text-left'>Health insurance</li>
                  <li className='text-left'>Police verification certificate</li>
                </ol>
              </div>
            </button>
            <button className='h-[100px] md:h-[50px] w-full overflow-hidden focus:overflow-hidden bg-white  focus:h-fit duration-200 px-[15px] md:px-[25px]'>
              <div className='h-[100px] md:h-[50px]  w-full flex items-center justify-between'>
                <p className='text-base font-semibold text-left'> Why you should migrate to Australia? </p>
                <IoIosArrowDown className='text-lg'/>
              </div>
              <div className='bg-red-600 text-white py-[15px] md:py-[25px] px-[15px] md:px-[25px]'>
                <ol className='list-decimal md:px-[25px]'>
                  <li className='text-left'>Job opportunities.</li>
                  <li className='text-left'>Freedom to Work.</li>
                  <li className='text-left'>Flexible guidelines on immigration.</li>
                  <li className='text-left'>Geographical Surroundings.</li>
                  <li className='text-left'>Excellent Culture.</li>
                  <li className='text-left'>Quality Living Standards.</li>
                </ol>
              </div>
            </button>
            <button className='h-[100px] md:h-[50px] w-full overflow-hidden focus:overflow-hidden bg-white  focus:h-fit duration-200 px-[15px] md:px-[25px]'>
              <div className='h-[100px] md:h-[50px]  w-full flex items-center justify-between'>
                <p className='text-base font-semibold text-left'> What IELTS score is required for Australia immigration? </p>
                <IoIosArrowDown className='text-lg'/>
              </div>
              <div className='bg-red-600 text-white py-[15px] md:py-[25px] px-[15px] md:px-[25px]'>
                <p className='text-xs text-left'>
                You must get an IELTS score of at least 6.0 overall, with a minimum of 6.0 in each of the 4 sections. This will demonstrate the degree of ability in English that is necessary for this visa. GIEC GLOBAL Sri Lanka will help you to calculate your IELTS score if you need any kind of assistances regarding IELTS then we are always here for you that thing make us different and which is why we are the best Australian immigration lawyers in Sri Lanka 
                </p>
              </div>
            </button>
        </div>
      </div>
    </div>
  )
}

export default Australia