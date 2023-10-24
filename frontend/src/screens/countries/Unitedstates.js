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

const Unitedstates = () => {
  
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
                    <p className=' text-3xl sm:text-4xl md:text-5xl md:font-bold text-left md:text-center font-semibold max-w-[600px] text-white'>United Kingdom: Your Gateway to Academic Excellence</p>
                </div>
            </div>
    

      <div className='h-fit w-full px-[15px] sm:px-[25px] md:px-[50px] lg:px-[75px]'>
        <div className='h-fitt w-full max-w-[1300px] mx-auto flex flex-col py-[25px] md:py-[50px]'>
          <div className='h-fit w-full  flex flex-col justify-center md:justify-start gap-[25px]'>
              {/* <p className='capitalize text-center md:text-left text-2xl font-semibold'>Switzerland: Elevate Your Education, Enrich Your Life</p> */}
              <div className='h-fit w-full flex flex-col gap-[15px]'>
            
              <p className='text-xl opacity-75 text-center md:text-left'>Welcome to our website, your one-stop destination for discovering why the United Kingdom is the ultimate choice for international students. Get ready to explore a world of possibilities.
</p>
              </div>

              <ol className='list-decimal px-[50px]'>
                <li className='text-lg opacity-50 text-center md:text-left' >Academic Heritage: The UK is home to some of the world's most prestigious universities, known for their history of academic excellence and innovation.</li>
                <li className='text-lg opacity-50 text-center md:text-left' >Global Recognition: A UK degree is internationally respected, offering a strong foundation for your future career, wherever it may take you.</li>
                <li className='text-lg opacity-50 text-center md:text-left' >Cultural Melting Pot: Immerse yourself in a diverse, multicultural society, where you'll make friends from every corner of the globe.</li>
                <li className='text-lg opacity-50 text-center md:text-left' >  Work and Study Opportunities: The UK's flexible visa policies allow you to work part-time during your studies and gain valuable experience.</li>
                <li className='text-lg opacity-50 text-center md:text-left' > Historical Riches: Walk through history with the UK's rich heritage, from castles and museums to modern cultural hubs.</li>
                <li className='text-lg opacity-50 text-center md:text-left' > Safety and Security: The UK prides itself on a safe and welcoming environment, ensuring your peace of mind.</li>
                <li className='text-lg opacity-50 text-center md:text-left' > Quality of Life: Enjoy a high standard of living, excellent healthcare, and a wealth of cultural experiences.</li>
              </ol>

              <p className='text-xl opacity-75 text-center md:text-left'>"Our website is your guide to courses, scholarships, visa procedures, and much more. Choose the United Kingdom as your academic destination and open the doors to a world of opportunities and academic distinction."</p>
          </div>
        </div>
      </div>

      {/* <div className='h-fit w-full px-[15px] sm:px-[25px] md:px-[50px] lg:px-[75px]'>
        <div className='h-fitt w-full max-w-[1300px] mx-auto flex flex-col py-[25px] md:py-[50px]'>
          <div className='h-fit w-full  flex flex-col justify-center md:justify-start gap-[10px]'>
              <p className='capitalize text-center md:text-left text-2xl font-semibold'>Your Gateway to UK Immigration Excellence: GIEC Global Sri Lanka</p>
              <p className='text-xs opacity-50 text-center md:text-left'>We at GIEC GLOBAL Sri Lanka are cognizant of the significance of UK immigration and the possibilities it might offer. With our broad spectrum of immigration services, we require you to be your reliable guide as you manage the complicated rules of the UK immigration system and progress towards your goals.</p>
          </div>
        </div>
      </div> */}

      <div className='h-fit w-full px-[15px] sm:px-[25px] md:px-[50px] lg:px-[75px] bg-[#f6f6f6]'>
        <div className='h-fitt w-full max-w-[1300px] mx-auto flex flex-col py-[25px] gap-[10px]'>
          <p className='text-3xl text-red-600 text-center font-semibold pb-[10px]'>FAQs</p>

            <button className='h-[100px] md:h-[50px] w-full overflow-hidden focus:overflow-hidden bg-white  focus:h-fit duration-200 px-[15px] md:px-[25px]'>
              <div className='h-[100px] md:h-[50px]  w-full flex items-center justify-between'>
                <p className='text-base font-semibold text-left'>Which consultant is best for UK immigration?</p>
                <IoIosArrowDown className='text-lg'/>
              </div>
              <div className='bg-red-600 text-white py-[15px] md:py-[25px] px-[10px]'>
                <p className='text-xs text-left'>GIEC GLOBAL Sri Lanka is specialises in offering visas for skilled workers from the UK. Our specialists can help you with the application procedure for the following visa categories in addition to a UK skilled worker visa: Tier 1 visa for UK entrepreneurs. Visas for innovators and startups.</p>
              </div>
            </button>
            <button className='h-[100px] md:h-[50px] w-full overflow-hidden focus:overflow-hidden bg-white  focus:h-fit duration-200 px-[15px] md:px-[25px]'>
              <div className='h-[100px] md:h-[50px]  w-full flex items-center justify-between'>
                <p className='text-base font-semibold text-left'>  What are the requirements to migrate to UK? </p>
                <IoIosArrowDown className='text-lg'/>
              </div>
              <div className='bg-red-600 text-white py-[15px] md:py-[25px] px-[15px] md:px-[25px]'>
                <ol className='list-disc'>
                  <li className='text-left'>The English Language Proficiency Test is required of you. IELTS and TOEFL are mostly included in this.</li>
                  <li className='text-left'>You should be a citizen of a nation that is not a part of the EEA, or European Economic Area.</li>
                  <li className='text-left'>To register in a college or apply for a job in the UK, you need be in possession of the necessary documentation, including work experience certificates and other types.</li>
                  <li className='text-left'>For the first years of your stay in the UK while you are on a student or work visa, you should have the necessary financial resources.</li>
                  <li className='text-left'>Additional documentation demonstrating your eligibility for the necessary visa, such as character and health certifications, are required.</li>
          
                </ol>
              </div>
            </button>
            <button className='h-[100px] md:h-[50px] w-full overflow-hidden focus:overflow-hidden bg-white  focus:h-fit duration-200 px-[15px] md:px-[25px]'>
              <div className='h-[100px] md:h-[50px]  w-full flex items-center justify-between'>
                <p className='text-base font-semibold text-left'>  Why you should migrate to UK?  </p>
                <IoIosArrowDown className='text-lg'/>
              </div>
              <div className='bg-red-600 text-white py-[15px] md:py-[25px] px-[15px] md:px-[25px]'>
                <ol className='list-decimal md:px-[25px]'>
                  <li className='text-left'>Robust economy and well-established businesses</li>
                  <li className='text-left'>There is a huge need for competent workers to fuel its modern economy.</li>
                  <li className='text-left'>Thriving, long-established Indian community superb, cost-free treatment provided by the NHS</li>
                  <li className='text-left'>Has some of the top universities in the world.</li>
                  <li className='text-left'>Strong passport to ease international travel</li>
                </ol>
              </div>
            </button>
            <button className='h-[100px] md:h-[50px] w-full overflow-hidden focus:overflow-hidden bg-white  focus:h-fit duration-200 px-[15px] md:px-[25px]'>
              <div className='h-[100px] md:h-[50px]  w-full flex items-center justify-between'>
                <p className='text-base font-semibold text-left'> What IELTS score is required for UK immigration?</p>
                <IoIosArrowDown className='text-lg'/>
              </div>
              <div className='bg-red-600 text-white py-[15px] md:py-[25px] px-[15px] md:px-[25px]'>
                <p className='text-xs text-left'>
                The university and subject you want to take will determine your IELTS score for the UK. Most UK colleges require a minimum IELTS score of 6.0 to 6.5, however selective institutions may demand a significantly higher score of 7 or above.
                </p>
              </div>
            </button>
        </div>
      </div>
    </div>
  )
}

export default Unitedstates