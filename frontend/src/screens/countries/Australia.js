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
          <p className='text-3xl text-blue-500 text-center font-semibold pb-[10px]'>FAQs</p>
{/* 
            <button className='h-[100px] md:h-[50px] w-full overflow-hidden focus:overflow-hidden bg-white  focus:h-fit duration-200 px-[15px] md:px-[35px]'>
              <div className='h-[100px] md:h-[50px]  w-full flex items-center justify-between'>
                <p className='text-base font-semibold text-left'>Which is the best Australia Study visa consultant in Sri Lanka ?</p>
                <IoIosArrowDown className='text-lg'/>
              </div>
              <div className='bg-blue-500 text-white py-[15px] md:py-[25px] px-[10px]'>
                <p className='text-xs text-left'>We are the best Australia student visa consultants in Sri Lanka.  We are the most trusted Australia Student Visa Consultants Sri Lanka. If you want to peruse your study then we are the best Australia Education Agents in Sri Lanka</p>
              </div>
            </button> */}
            <button className='h-[100px] md:h-[50px] w-full overflow-hidden focus:overflow-hidden bg-white  focus:h-fit duration-200 px-[15px] md:px-[35px]'>
              <div className='h-[100px] md:h-[50px]  w-full flex items-center justify-between'>
                <p className='text-base font-semibold text-left'>How can I get student visa for Australia from Sri Lanka?</p>
                <IoIosArrowDown className='text-lg'/>
              </div>
              <div className='bg-blue-500 text-white py-[15px] md:py-[25px] px-[15px] md:px-[35px]'>
                <ol className='list-disc md:px-[25px]'>
                  <li className='text-left'>Receive a Letter of Acceptance: First, you need to be accepted by a Designated Learning Institution (DLI) in Australia. Once accepted, the institution will provide you with a Letter of Acceptance.</li>
                  <li className='text-left'> Determine Eligibility: Make sure you meet the eligibility criteria for a Canadian study permit. This includes proving your financial capacity to cover tuition and living expenses, as well as meeting health and security requirements.</li>
                  <li className='text-left'>Language Proficiency: Take an English or French language proficiency test if required. Most students take the IELTS or TOEFL for English proficiency.</li>
                  <li className='text-left'>Create an Online Account: Visit the official website of the Government of Australia and create an account to apply online.</li>
                  <li className='text-left'> Complete the Study Permit Application: Fill out the study permit application form (IMM 1294) and make sure to have all the required documents ready, which may include your Letter of Acceptance, proof of funds, and passport.</li>
                  <li className='text-left'>Biometrics: If necessary, book an appointment to provide biometrics at a Visa Application Center (VAC).</li>
                  <li className='text-left'>Pay the Application Fee: Pay the required processing fee for your study permit application.</li>
                  <li className='text-left'>Attend an Interview: In some cases, you may be required to attend an interview at your local Canadian embassy or consulate.</li>
                  <li className='text-left'>Medical Examination: If requested, undergo a medical examination from an approved panel physician.</li>
                  <li className='text-left'>Wait for Processing: After submitting your application, you'll need to wait for it to be processed. This can take several weeks, so apply well in advance of your intended start date.</li>
                  <li className='text-left'>Receive a Port of Entry (POE) Letter: If your application is approved, you will receive a Port of Entry (POE) Letter of Introduction.</li>
                  <li className='text-left'>Travel to Australia: Once your study permit is approved, you can travel to Australia. Make sure to have all your documents, including your Letter of Introduction, with you when you arrive at the Canadian port of entry.</li>
                </ol>
              </div>
            </button>
            <button className='h-[100px] md:h-[50px] w-full overflow-hidden focus:overflow-hidden bg-white  focus:h-fit duration-200 px-[15px] md:px-[35px]'>
              <div className='h-[100px] md:h-[50px]  w-full flex items-center justify-between'>
                <p className='text-base font-semibold text-left'>Benefits of study Australia?</p>
                <IoIosArrowDown className='text-lg'/>
              </div>
              <div className='bg-blue-500 text-white py-[15px] md:py-[25px] px-[10px]'>
                <p className='text-xs text-left'>In Australia, there is a high level of life. The same liberties and rights respect for human rights, equality, diversity, and a stable, peaceful society—that safeguard all Canadians are also advantageous to international students. </p>
              </div>
            </button>
            <button className='h-[100px] md:h-[50px] w-full overflow-hidden focus:overflow-hidden bg-white  focus:h-fit duration-200 px-[15px] md:px-[35px]'>
              <div className='h-[100px] md:h-[50px]  w-full flex items-center justify-between'>
                <p className='text-base font-semibold text-left'>What are the requirements for Australia Study Visa?</p>
                <IoIosArrowDown className='text-lg'/>
              </div>
              <div className='bg-blue-500 text-white py-[15px] md:py-[25px] px-[15px] md:px-[35px]'>
                <ol className='list-disc md:px-[25px]'>
                  <li className='text-left'>Acceptance Letter: You must have a Letter of Acceptance from a designated learning institution in Australia.</li>
                  <li className='text-left'> Sufficient Finances: You need to demonstrate that you have enough money to cover tuition fees, living expenses, and return transportation. This can be shown through bank statements, scholarship offers, or a combination of funding sources.</li>
                  <li className='text-left'>Clean Criminal Record: You may be required to provide a police clearance certificate to prove you have no criminal record.</li>
                  <li className='text-left'> Medical Exam: In some cases, you may need to undergo a medical examination to demonstrate that you are in good health.</li>
                  <li className='text-left'>Intent to Return: You should convince the immigration officer that you will leave Australia when your study permit expires.</li>
                  <li className='text-left'>Passport: You need a valid passport.</li>
                  <li className='text-left'>Photographs: Recent passport-sized photographs that meet the Australia Visa Photo Requirements.</li>
                  <li className='text-left'>Biometrics: In some cases, you may need to provide biometrics (fingerprints and photograph).</li>
                  <li className='text-left'> Application Form: You'll need to complete the appropriate application forms.</li>
                  <li className='text-left'> Language Proficiency: Depending on your program, you may need to prove your language proficiency in English or French through language tests like IELTS or TOEFL.</li>
                  <li className='text-left'>Statement of Purpose: A statement explaining your study plans in Australia.</li>
                  <li className='text-left'>Visa Processing Fee: You'll need to pay the required visa processing fee.</li>
                </ol>
              </div>
            </button>
            <button className='h-[100px] md:h-[50px] w-full overflow-hidden focus:overflow-hidden bg-white  focus:h-fit duration-200 px-[15px] md:px-[35px]'>
              <div className='h-[100px] md:h-[50px]  w-full flex items-center justify-between'>
                <p className='text-base font-semibold text-left'>What are the required IELTS and TOEFL scores for a student visa in the Australia</p>
                <IoIosArrowDown className='text-lg'/>
              </div>
              <div className='bg-blue-500 text-white py-[15px] md:py-[25px] px-[15px] md:px-[35px]'>
                <ol className='list-disc md:px-[25px]'>
                  <li className='text-left'> IELTS: For most undergraduate and postgraduate programs, a common requirement is an IELTS score of at least 6.0 to 7.0 in each band (listening, reading, writing, and speaking). However, the exact score may vary based on the university and the course.</li>
                  <li className='text-left'>TOEFL: If you're taking the TOEFL, many institutions will often require a score of around 80 to 100 on the internet-based TOEFL (iBT). Some institutions may accept a paper-based TOEFL (PBT) score, which typically ranges from 550 to 600.</li>
                  <li className='text-left'>Keep in mind that requirements may have changed since my last update, and they can vary between universities and courses. Always check the specific English language proficiency requirements set by the institution you plan to apply to. It's a good idea to consult the university's official website or contact their admissions office for the most up-to-date information on language proficiency requirements.</li>
                </ol>
              </div>
            </button>
        </div>
      </div>
    </div>
  )
}

export default Australia