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


const Europe = () => {
  
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
                    <p className=' text-3xl sm:text-4xl md:text-5xl md:font-bold text-left md:text-center font-semibold max-w-[600px] text-white'>Explore Europe: Your Gateway to World-Class Education</p>
                </div>
            </div>
  

      <div className='h-fit w-full px-[15px] sm:px-[25px] md:px-[50px] lg:px-[75px]'>
        <div className='h-fitt w-full max-w-[1300px] mx-auto flex flex-col py-[25px] md:py-[50px]'>
          <div className='h-fit w-full  flex flex-col justify-center md:justify-start gap-[25px]'>

              <div className='h-fit w-full flex flex-col gap-[15px]'>
              <p className='text-xl text-left'>Our website is your passport to understanding the countless benefits of studying in Europe. Embark on a journey that promises academic excellence, cultural richness, and personal growth.</p>
              </div>

              <ol className='list-decimal px-[50px]'>
                <li className='text-lg opacity-75 text-left' > Educational Diversity: Europe offers an extensive range of programs and institutions, from historic universities to innovative research centers.</li>
                <li className='text-lg opacity-75 text-left' >Multicultural Fusion: Immerse yourself in a diverse tapestry of cultures, languages, and traditions, expanding your global perspective.</li>
                <li className='text-lg opacity-75 text-left' >Easy Travel: Study in Europe, and you'll be a stone's throw away from exploring different countries and cultures during your academic journey.</li>
                <li className='text-lg opacity-75 text-left' >Scholarships Galore: Many European countries offer scholarships and financial aid to international students, making it an affordable choice.</li>
                <li className='text-lg opacity-75 text-left' > Rich History and Art: Walk in the footsteps of history's great minds, surrounded by Europe's rich art, architecture, and historical treasures.</li>
                <li className='text-lg opacity-75 text-left' > Language Learning: Enhance your language skills by studying in a multilingual environment, a valuable asset in the global job market.</li>
                <li className='text-lg opacity-75 text-left' > Safety and Sustainability: Europe is known for its safety, sustainability efforts, and commitment to a high quality of life.</li>
              </ol>

              <p className='text-xl opacity-75 text-left'>"Our website is your comprehensive resource for information on European study options, visa procedures, and cultural insights. Join us on this transformative educational voyage and choose Europe as your stepping stone to a brighter future!"</p>
          </div>
        </div>
      </div>

      {/* <div className='h-fit w-full px-[15px] sm:px-[25px] md:px-[50px] lg:px-[75px]'>
        <div className='h-fitt w-full max-w-[1300px] mx-auto flex flex-col py-[25px] md:py-[50px]'>
          <div className='h-fit w-full  flex flex-col justify-center md:justify-start gap-[10px]'>
              <p className='capitalize text-left text-2xl font-semibold'>Your Gateway to UK Immigration Excellence: GIEC Global Sri Lanka</p>
              <p className='text-xs opacity-75 text-left'>We at GIEC GLOBAL Sri Lanka are cognizant of the significance of UK immigration and the possibilities it might offer. With our broad spectrum of immigration services, we require you to be your reliable guide as you manage the complicated rules of the UK immigration system and progress towards your goals.</p>
          </div>
        </div>
      </div> */}

      <div className='h-fit w-full px-[15px] sm:px-[25px] md:px-[50px] lg:px-[75px] bg-[#f6f6f6]'>
        <div className='h-fitt w-full max-w-[1300px] mx-auto flex flex-col py-[25px] gap-[10px]'>
          <p className='text-3xl text-blue-500 text-center font-semibold pb-[10px]'>FAQs</p>

            <button className='h-[100px] md:h-[50px] w-full overflow-hidden focus:overflow-hidden bg-white  focus:h-fit duration-200 px-[15px] md:px-[25px]'>
              <div className='h-[100px] md:h-[50px]  w-full flex items-center justify-between'>
                <p className='text-base font-semibold text-left'> Which consultancy is best for Europe immigration?</p>
                <IoIosArrowDown className='text-lg'/>
              </div>
              <div className='bg-blue-500 text-white py-[15px] md:py-[25px] px-[10px]'>
                <p className='text-xs text-left'>GIEC GLOBAL Sri Lanka is the best Europe immigration consultant in Galle, Sri Lanka. They helped hundreds of our clients to get their visa process very smooth, which is why we are the most trusted consultant for Europe</p>
              </div>
            </button>
            <button className='h-[100px] md:h-[50px] w-full overflow-hidden focus:overflow-hidden bg-white  focus:h-fit duration-200 px-[15px] md:px-[25px]'>
              <div className='h-[100px] md:h-[50px]  w-full flex items-center justify-between'>
                <p className='text-base font-semibold text-left'>Is Europe good for immigrants?</p>
                <IoIosArrowDown className='text-lg'/>
              </div>
              <div className='bg-blue-500 text-white py-[15px] md:py-[25px] px-[15px] md:px-[25px]'>
                <ol className='list-disc'>
                  <li className='text-left'>No Restrictions</li>
                  <li className='text-left'>HealthCare Benefits</li>
                  <li className='text-left'>International</li>
                  <li className='text-left'>Education</li>
                  <li className='text-left'>Voting Right</li>

                  <li className='text-left'>New Born Citizenship</li>
                  <li className='text-left'>Apply for Citizenship</li>
                  <li className='text-left'>Employment Benefits</li>
                  <li className='text-left'>Social Security Benefit</li>
                  <li className='text-left'>Sponsor Your Family</li>
                  
          
                </ol>
              </div>
            </button>
            <button className='h-[100px] md:h-[50px] w-full overflow-hidden focus:overflow-hidden bg-white  focus:h-fit duration-200 px-[15px] md:px-[25px]'>
              <div className='h-[100px] md:h-[50px]  w-full flex items-center justify-between'>
                <p className='text-base font-semibold text-left'>  Documents required for Europe immigration </p>
                <IoIosArrowDown className='text-lg'/>
              </div>
              <div className='bg-blue-500 text-white py-[15px] md:py-[25px] px-[15px] md:px-[25px]'>
                <ol className='list-disc md:px-[25px]'>
                  <li className='text-left'>birth certificates</li>
                  <li className='text-left'>marriage certificate</li>
                  <li className='text-left'>academic qualifications</li>
                  <li className='text-left'>medical records such as doctor’s or dental records and vaccination certificates</li>
                  <li className='text-left'>references from previous landlords</li>
                  <li className='text-left'>credit references.</li>
                </ol>
              </div>
            </button>
            <button className='h-[100px] md:h-[50px] w-full overflow-hidden focus:overflow-hidden bg-white  focus:h-fit duration-200 px-[15px] md:px-[25px]'>
              <div className='h-[100px] md:h-[50px]  w-full flex items-center justify-between'>
                <p className='text-base font-semibold text-left'>What English test is required for Europe immigration?</p>
                <IoIosArrowDown className='text-lg'/>
              </div>
              <div className='bg-blue-500 text-white py-[15px] md:py-[25px] px-[15px] md:px-[25px]'>
                <p className='text-xs text-left'>
                An English language assessment for study, immigration, or employment is called IELTS. It is well acknowledged and respected on a global scale. You may evaluate your English language proficiency for studying in Europe by taking the IELTS Academic exam in your neighbourhood.
                </p>
              </div>
            </button>
        </div>
      </div>
    </div>
  )
}

export default Europe