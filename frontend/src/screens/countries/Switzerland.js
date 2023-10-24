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


const Switzerland = () => {
  
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
                        <img alt='' src={"https://www.ourescapeclause.com/wp-content/uploads/2022/11/shutterstock_1464930743-768x512.jpg"} className='h-[350px] w-full object-cover' />
                        </SwiperSlide>
                        <SwiperSlide>
                        <img alt='' src={"https://www.myglobalviewpoint.com/wp-content/uploads/2020/01/Thun-Beautiful-Places-in-Switzerland.jpg"} className='h-[350px] w-full object-cover' />
                        </SwiperSlide>
                        <SwiperSlide>
                        <img alt='' src={"https://blog.akbartravels.com/wp-content/uploads/2018/10/05.jpg"} className='h-[350px] w-full object-cover' />
                        </SwiperSlide>
                        <SwiperSlide>
                        <img alt='' src={"https://theworldpursuit.com/wp-content/uploads/2021/12/Lauterbrunnen-Village.jpg"} className='h-[350px] w-full object-cover' />
                        </SwiperSlide>
                        <SwiperSlide>
                        <img alt='' src={"https://www.worldatlas.com/upload/7e/14/1c/shutterstock-1801619509.jpg"} className='h-[350px] w-full object-cover' />
                        </SwiperSlide>
                        
                    </Swiper>

                    </div>
                </div>
                <div className='h-full w-full absolute z-30 bg-gradient-to-b from-transparent to-black/75 flex items-center justify-center px-[25px] md:px-0'>
                    <p className=' text-3xl sm:text-4xl md:text-5xl md:font-bold text-left md:text-center font-semibold max-w-[600px] text-white'>Best switzerland Visa Consultants In Sri Lanka</p>
                </div>
            </div>
      

      <div className='h-fit w-full px-[15px] sm:px-[25px] md:px-[50px] lg:px-[75px]'>
        <div className='h-fitt w-full max-w-[1300px] mx-auto flex flex-col py-[25px] md:py-[50px]'>
          <div className='h-fit w-full  flex flex-col justify-center md:justify-start gap-[25px]'>
              <p className='capitalize text-left text-2xl font-semibold'>Switzerland: Elevate Your Education, Enrich Your Life</p>
              <div className='h-fit w-full flex flex-col gap-[15px]'>
            
              <p className='text-xl opacity-75 text-left'>Welcome to the ultimate source of information for those considering Switzerland as their study destination. Explore our website to uncover the compelling reasons why Switzerland stands out as a top choice.</p>
              </div>

              <ol className='list-decimal px-[50px]'>
                <li className='text-lg opacity-50 text-left' >Academic Prestige: Switzerland is synonymous with academic excellence, boasting world-class universities and research opportunities.</li>
                <li className='text-lg opacity-50 text-left' >Multilingual Advantage: Immerse yourself in a multilingual environment, sharpening your language skills while you study.</li>
                <li className='text-lg opacity-50 text-left' >Innovation Hub: Switzerland is a global innovation and technology leader, offering cutting-edge programs in science, engineering, and business.</li>
                <li className='text-lg opacity-50 text-left' >Cultural Diversity: In the heart of Europe, Switzerland is a melting pot of cultures, providing a rich and vibrant cultural experience.</li>
                <li className='text-lg opacity-50 text-left' > Stunning Landscapes: From the Swiss Alps to pristine lakes, Switzerland's natural beauty provides the perfect backdrop for your academic journey.</li>
                <li className='text-lg opacity-50 text-left' > Safety and Security: Experience a secure and welcoming environment that prioritizes the well-being of its residents, including international students.</li>
                <li className='text-lg opacity-50 text-left' > Our website is your compass to navigate Switzerland's educational landscape. Discover courses, scholarships, and visa details, and embark on an extraordinary educational adventure in this Alpine paradise. Choose Switzerland and elevate your future!"</li>
              </ol>

              <p className='text-xl opacity-75 text-left'>Our website provides in-depth information on programs, scholarships, visa processes, and more. Let us guide you on your journey to academic success in Canada."</p>
          </div>
        </div>
      </div>

      {/* <div className='h-fit w-full px-[15px] sm:px-[25px] md:px-[50px] lg:px-[75px]'>
        <div className='h-fitt w-full max-w-[1300px] mx-auto flex flex-col py-[25px] md:py-[50px]'>
          <div className='h-fit w-full  flex flex-col justify-center md:justify-start gap-[10px]'>
              <p className='capitalize text-left text-2xl font-semibold'>Your Gateway to UK Immigration Excellence: GIEC Global Sri Lanka</p>
              <p className='text-xs opacity-50 text-left'>We at GIEC GLOBAL Sri Lanka are cognizant of the significance of UK immigration and the possibilities it might offer. With our broad spectrum of immigration services, we require you to be your reliable guide as you manage the complicated rules of the UK immigration system and progress towards your goals.</p>
          </div>
        </div>
      </div> */}

      {/* <div className='h-fit w-full px-[15px] sm:px-[25px] md:px-[50px] lg:px-[75px] bg-[#f6f6f6]'>
        <div className='h-fitt w-full max-w-[1300px] mx-auto flex flex-col py-[25px] gap-[10px]'>
          <p className='text-3xl text-red-600 text-center font-semibold pb-[10px]'>FAQs</p>

            <button className='h-[100px] md:h-[50px] w-full overflow-hidden focus:overflow-hidden bg-white  focus:h-fit duration-200 px-[15px] md:px-[25px]'>
              <div className='h-[100px] md:h-[50px]  w-full flex items-center justify-between'>
                <p className='text-base font-semibold text-left'> Which consultancy is best for Europe immigration?</p>
                <IoIosArrowDown className='text-lg'/>
              </div>
              <div className='bg-red-600 text-white py-[15px] md:py-[25px] px-[10px]'>
                <p className='text-xs text-left'>GIEC GLOBAL Sri Lanka is the best Europe immigration consultant in Galle, Sri Lanka. They helped hundreds of our clients to get their visa process very smooth, which is why we are the most trusted consultant for Europe</p>
              </div>
            </button>
            <button className='h-[100px] md:h-[50px] w-full overflow-hidden focus:overflow-hidden bg-white  focus:h-fit duration-200 px-[15px] md:px-[25px]'>
              <div className='h-[100px] md:h-[50px]  w-full flex items-center justify-between'>
                <p className='text-base font-semibold text-left'>Is Europe good for immigrants?</p>
                <IoIosArrowDown className='text-lg'/>
              </div>
              <div className='bg-red-600 text-white py-[15px] md:py-[25px] px-[15px] md:px-[25px]'>
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
              <div className='bg-red-600 text-white py-[15px] md:py-[25px] px-[15px] md:px-[25px]'>
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
              <div className='bg-red-600 text-white py-[15px] md:py-[25px] px-[15px] md:px-[25px]'>
                <p className='text-xs text-left'>
                An English language assessment for study, immigration, or employment is called IELTS. It is well acknowledged and respected on a global scale. You may evaluate your English language proficiency for studying in Europe by taking the IELTS Academic exam in your neighbourhood.
                </p>
              </div>
            </button>
        </div>
      </div> */}
    </div>
  )
}

export default Switzerland