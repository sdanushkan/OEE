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

const Canada = () => {
  
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
                        <img alt='' src={"https://a.cdn-hotels.com/gdcs/production72/d1850/0bb0c864-bae4-42fd-9df9-dee0d5542461.jpg?impolicy=fcrop&w=800&h=533&q=medium"} className='h-[350px] w-full object-cover' />
                        </SwiperSlide>
                        <SwiperSlide>
                        <img alt='' src={"https://royalstockphoto.s3.amazonaws.com/wp-content/uploads/2017/10/03050159/x060x-Toronto-City-Hall-Night-Lights-Downtown-Ontario-Canada.jpg"} className='h-[350px] w-full object-cover' />
                        </SwiperSlide>
                        <SwiperSlide>
                        <img alt='' src={"https://wpcdn.us-midwest-1.vip.tn-cloud.net/www.coloradoexpression.com/content/uploads/2022/08/u/b/screen-shot-2022-08-23-at-103439-am-1024x470.png"} className='h-[350px] w-full object-cover' />
                        </SwiperSlide>
                        <SwiperSlide>
                        <img alt='' src={"https://cdn.sixtyandme.com/wp-content/uploads/2022/04/Sixty-and-Me_Exploring-5-of-Canadas-Most-Beautiful-Cities.jpg"} className='h-[350px] w-full object-cover' />
                        </SwiperSlide>
                        
                    </Swiper>

                    </div>
                </div>
                <div className='h-full w-full absolute z-30 bg-gradient-to-b from-transparent to-black/75 flex items-center justify-center px-[25px] md:px-0'>
                    <p className=' text-3xl sm:text-4xl md:text-5xl md:font-bold text-left md:text-center font-semibold max-w-[600px] text-white'>Your Trusted partner for Overseas Education Experience</p>
                </div>
            </div>

      <div className='h-fit w-full px-[15px] sm:px-[25px] md:px-[50px] lg:px-[75px]'>
        <div className='h-fitt w-full max-w-[1300px] mx-auto flex flex-col py-[25px] md:py-[50px]'>
          <div className='h-fit w-full  flex flex-col justify-center md:justify-start gap-[25px]'>
              <p className='capitalize text-left text-2xl font-semibold'>why to choose Canada for study:</p>
              <div className='h-fit w-full flex flex-col gap-[15px]'>
              <p className='text-base opacity-50 text-left'>"Discover Canada: Your Path to Excellence in Education”</p>
              <p className='text-xl opacity-75 text-left'>Choosing Canada for your studies is a decision that promises academic excellence, cultural diversity, and a world of opportunities. Our website is your comprehensive guide to understanding why Canada is the ideal destination for international students.</p>
              </div>

              <ol className='list-decimal px-[50px]'>
                <li className='text-lg opacity-50 text-left' >World-Class Education: Canada is renowned for its high-quality education system, with top universities consistently ranking among the best globally.</li>
                <li className='text-lg opacity-50 text-left' >Diverse and Inclusive Society: Experience a welcoming and multicultural environment that celebrates diversity and ensures all students feel at home.</li>
                <li className='text-lg opacity-50 text-left' >Work and Immigration Opportunities: Benefit from post-graduate work permits and pathways to permanent residency, making Canada a launching pad for your career.</li>
                <li className='text-lg opacity-50 text-left' >Stunning Natural Beauty: Immerse yourself in Canada's breathtaking landscapes, from the Rockies to the Northern Lights.</li>
                <li className='text-lg opacity-50 text-left' >Safe and Secure: Enjoy a safe and peaceful environment that's conducive to learning and personal growth.</li>
                <li className='text-lg opacity-50 text-left' > Quality of Life: Canada consistently ranks high for quality of life, healthcare, and social services.</li>
              </ol>

              <p className='text-xl opacity-75 text-left'>Our website provides in-depth information on programs, scholarships, visa processes, and more. Let us guide you on your journey to academic success in Canada."</p>
          </div>
        </div>
      </div>

      <div className='h-fit w-full px-[15px] sm:px-[25px] md:px-[50px] lg:px-[75px] bg-[#f6f6f6]'>
        <div className='h-fitt w-full max-w-[1300px] mx-auto flex flex-col py-[25px] gap-[10px]'>
          <p className='text-3xl text-blue-500 text-center font-semibold pb-[10px]'>FAQs</p>

            <button className='h-[100px] md:h-[50px] w-full overflow-hidden focus:overflow-hidden bg-white  focus:h-fit duration-200 px-[15px] md:px-[25px]'>
              <div className='h-[100px] md:h-[50px]  w-full flex items-center justify-between'>
                <p className='text-base font-semibold text-left'>Which is the best Canada Study visa consultant in Sri Lanka ?</p>
                <IoIosArrowDown className='text-lg'/>
              </div>
              <div className='bg-blue-500 text-white py-[15px] md:py-[25px] px-[10px]'>
                <p className='text-xs text-left'>We are the best Canada student visa consultants in Sri Lanka.  We are the most trusted Canada Student Visa Consultants Sri Lanka. If you want to peruse your study then we are the best Canada Education Agents in Sri Lanka</p>
              </div>
            </button>
            <button className='h-[100px] md:h-[50px] w-full overflow-hidden focus:overflow-hidden bg-white  focus:h-fit duration-200 px-[15px] md:px-[25px]'>
              <div className='h-[100px] md:h-[50px]  w-full flex items-center justify-between'>
                <p className='text-base font-semibold text-left'>How can I get student visa for Canada from Sri Lanka?</p>
                <IoIosArrowDown className='text-lg'/>
              </div>
              <div className='bg-blue-500 text-white py-[15px] md:py-[25px] px-[15px] md:px-[25px]'>
                <ol className='list-decimal'>
                  <li className='text-left'>Passport</li>
                  <li className='text-left'>Passport-size photographs</li>
                  <li className='text-left'>Unconditional letter of acceptance</li>
                  <li className='text-left'>Fees receipt (recommended)</li>
                  <li className='text-left'>Scholarship letter (if applicable)</li>
                  <li className='text-left'>Any relevant correspondence with the institution</li>
                  <li className='text-left'>Financial documents</li>
                  <li className='text-left'>Academic documents</li>
                  <li className='text-left'>Test scores</li>
                  <li className='text-left'>Work experience certificates (if applicable)</li>
                  <li className='text-left'>Medical report (if already undertaken)</li>
                </ol>
              </div>
            </button>
            <button className='h-[100px] md:h-[50px] w-full overflow-hidden focus:overflow-hidden bg-white  focus:h-fit duration-200 px-[15px] md:px-[25px]'>
              <div className='h-[100px] md:h-[50px]  w-full flex items-center justify-between'>
                <p className='text-base font-semibold text-left'>Benefits of study Canada?</p>
                <IoIosArrowDown className='text-lg'/>
              </div>
              <div className='bg-blue-500 text-white py-[15px] md:py-[25px] px-[10px]'>
                <p className='text-xs text-left'>In Canada, there is a high level of life. The same liberties and rights respect for human rights, equality, diversity, and a stable, peaceful society—that safeguard all Canadians are also advantageous to international students. </p>
              </div>
            </button>
            <button className='h-[100px] md:h-[50px] w-full overflow-hidden focus:overflow-hidden bg-white  focus:h-fit duration-200 px-[15px] md:px-[25px]'>
              <div className='h-[100px] md:h-[50px]  w-full flex items-center justify-between'>
                <p className='text-base font-semibold text-left'>What are the requirements for Canada Study Visa?</p>
                <IoIosArrowDown className='text-lg'/>
              </div>
              <div className='bg-blue-500 text-white py-[15px] md:py-[25px] px-[15px] md:px-[25px]'>
                <ol className='list-disc md:px-[25px]'>
                  <li className='text-left'>Valid Passport</li>
                  <li className='text-left'>Attested copies of 10th, 12th and Degree certificates</li>
                  <li className='text-left'>Academic references – 2</li>
                  <li className='text-left'>Employer references – 2</li>
                  <li className='text-left'>SOP (Statement of Purpose)</li>
                  <li className='text-left'>Certificates of extracurricular achievements</li>
                  <li className='text-left'>An acceptance letter from your education institution</li>
                  <li className='text-left'>Proof of payment</li>
                  <li className='text-left'>Proof of financial funds</li>
                  <li className='text-left'>Passport size photographs</li>
                  <li className='text-left'>Study Permit and visa</li>
                  <li className='text-left'>English Proficiency</li>
                  <li className='text-left'>Your University will make you aware of additional requirements if any prior to your application</li>
                </ol>
              </div>
            </button>
        </div>
      </div>
    </div>
  )
}

export default Canada