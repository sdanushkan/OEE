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

const USA = () => {
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
                        <img alt='' src={"https://s.marketwatch.com/public/resources/images/MW-HH706_austin_ZDR_20190416115712.jpg"} className='h-[350px] w-full object-cover' />
                        </SwiperSlide>
                        <SwiperSlide>
                        <img alt='' src={"https://files.ameyawdebrah.com/wp-content/uploads/2022/08/04114238/Regions-to-Live-in-the-USA.jpeg"} className='h-[350px] w-full object-cover' />
                        </SwiperSlide>
                        <SwiperSlide>
                        <img alt='' src={"https://www.traveloffpath.com/wp-content/uploads/2021/03/Top-10-Historic-Buildings-In-The-U.S.-To-See-In-2021-1024x696.jpg.webp"} className='h-[350px] w-full object-cover' />
                        </SwiperSlide>
                        <SwiperSlide>
                        <img alt='' src={"https://www.addtobucketlist.com/wp-content/uploads/2019/12/fea.jpg"} className='h-[350px] w-full object-cover' />
                        </SwiperSlide>
                        <SwiperSlide>
                        <img alt='' src={"https://www.attractionsofamerica.com/images/all_thingstodo/20230401004808_san-francisco-california.jpg"} className='h-[350px] w-full object-cover' />
                        </SwiperSlide>
                        
                    </Swiper>

                    </div>
                </div>
                <div className='h-full w-full absolute z-30 bg-gradient-to-b from-transparent to-black/75 flex items-center justify-center px-[25px] md:px-0'>
                    <p className=' text-3xl sm:text-4xl md:text-5xl md:font-bold text-left md:text-center font-semibold max-w-[600px] text-white'>USA: Where Dreams Take Flight</p>
                </div>
            </div>
   

      <div className='h-fit w-full px-[15px] sm:px-[25px] md:px-[50px] lg:px-[75px]'>
        <div className='h-fitt w-full max-w-[1300px] mx-auto flex flex-col py-[25px] md:py-[50px]'>
          <div className='h-fit w-full  flex flex-col justify-center md:justify-start gap-[25px]'>
              {/* <p className='capitalize text-left text-2xl font-semibold'>Switzerland: Elevate Your Education, Enrich Your Life</p> */}
              <div className='h-fit w-full flex flex-col gap-[15px]'>
            
              <p className='text-xl opacity-75 text-left font-medium'>Welcome to our website, your gateway to understanding why the United States is the ultimate destination for international students. Get ready to explore a land of boundless opportunities.</p>
              </div>

              <ol className='list-decimal px-[50px]'>
                <li className='text-lg opacity-50 text-center md:text-left' >Academic Excellence: The USA boasts top-ranked universities, renowned for their innovation, research, and academic quality.</li>
                <li className='text-lg opacity-50 text-center md:text-left' >Global Recognition: A degree from the USA opens doors worldwide, providing you with a competitive edge in the job market.</li>
                <li className='text-lg opacity-50 text-center md:text-left' >Cultural Diversity: Immerse yourself in a diverse society, where you'll meet people from all walks of life, enriching your global perspective.</li>
                <li className='text-lg opacity-50 text-center md:text-left' >Work and Internship Opportunities: The USA's flexible student visa regulations allow you to work and gain practical experience during and after your studies.</li>
                <li className='text-lg opacity-50 text-center md:text-left' >  Iconic Landscapes: From the bustling cities to breathtaking natural wonders, the USA offers a diverse range of experiences.</li>
                <li className='text-lg opacity-50 text-center md:text-left' > Safety and Support: The USA prioritizes student safety and offers extensive support services to ensure a smooth transition.
</li>
                <li className='text-lg opacity-50 text-center md:text-left' > Quality of Life: Experience a high standard of living, quality healthcare, and a wealth of cultural and recreational opportunities.
</li>
              </ol>

              <p className='text-xl opacity-75 text-left font-medium'>"Our website is your compass to navigate the American education system. Discover information on programs, scholarships, visas, and more. Choose the USA and set your dreams in motion – here, your academic journey is an extraordinary adventure."</p>
          </div>
        </div>
      </div>

      {/* <div className='h-fit w-full px-[15px] sm:px-[25px] md:px-[50px] lg:px-[75px]'>
        <div className='h-fitt w-full max-w-[1300px] mx-auto flex flex-col py-[25px] md:py-[50px]'>
          <div className='h-fit w-full  flex flex-col justify-center md:justify-start gap-[10px]'>
              <p className='capitalize text-left text-2xl font-semibold'>Your Gateway to UK Immigration Excellence: GIEC Global Sri Lanka</p>
              <p className='text-xs opacity-50 text-center md:text-left'>We at GIEC GLOBAL Sri Lanka are cognizant of the significance of UK immigration and the possibilities it might offer. With our broad spectrum of immigration services, we require you to be your reliable guide as you manage the complicated rules of the UK immigration system and progress towards your goals.</p>
          </div>
        </div>
      </div> */}

<div className='h-fit w-full px-[15px] sm:px-[25px] md:px-[50px] lg:px-[75px] bg-[#f6f6f6]'>
        <div className='h-fitt w-full max-w-[1300px] mx-auto flex flex-col py-[25px] gap-[10px]'>
          <p className='text-3xl text-blue-500 text-center font-semibold pb-[10px]'>FAQs</p>
{/* 
            <button className='h-[100px] md:h-[50px] w-full overflow-hidden focus:overflow-hidden bg-white  focus:h-fit duration-200 px-[15px] md:px-[35px]'>
              <div className='h-[100px] md:h-[50px]  w-full flex items-center justify-between'>
                <p className='text-base font-semibold text-left'>Which is the best USA Study visa consultant in Sri Lanka ?</p>
                <IoIosArrowDown className='text-lg'/>
              </div>
              <div className='bg-blue-500 text-white py-[15px] md:py-[25px] px-[10px]'>
                <p className='text-xs text-left'>We are the best USA student visa consultants in Sri Lanka.  We are the most trusted USA Student Visa Consultants Sri Lanka. If you want to peruse your study then we are the best USA Education Agents in Sri Lanka</p>
              </div>
            </button> */}
            <button className='h-[100px] md:h-[50px] w-full overflow-hidden focus:overflow-hidden bg-white  focus:h-fit duration-200 px-[15px] md:px-[35px]'>
              <div className='h-[100px] md:h-[50px]  w-full flex items-center justify-between'>
                <p className='text-base font-semibold text-left'>How can I get student visa for USA from Sri Lanka?</p>
                <IoIosArrowDown className='text-lg'/>
              </div>
              <div className='bg-blue-500 text-white py-[15px] md:py-[25px] px-[15px] md:px-[35px]'>
                <ol className='list-disc md:px-[25px]'>
                  <li className='text-left'>Receive a Letter of Acceptance: First, you need to be accepted by a Designated Learning Institution (DLI) in USA. Once accepted, the institution will provide you with a Letter of Acceptance.</li>
                  <li className='text-left'> Determine Eligibility: Make sure you meet the eligibility criteria for a Canadian study permit. This includes proving your financial capacity to cover tuition and living expenses, as well as meeting health and security requirements.</li>
                  <li className='text-left'>Language Proficiency: Take an English or French language proficiency test if required. Most students take the IELTS or TOEFL for English proficiency.</li>
                  <li className='text-left'>Create an Online Account: Visit the official website of the Government of USA and create an account to apply online.</li>
                  <li className='text-left'> Complete the Study Permit Application: Fill out the study permit application form (IMM 1294) and make sure to have all the required documents ready, which may include your Letter of Acceptance, proof of funds, and passport.</li>
                  <li className='text-left'>Biometrics: If necessary, book an appointment to provide biometrics at a Visa Application Center (VAC).</li>
                  <li className='text-left'>Pay the Application Fee: Pay the required processing fee for your study permit application.</li>
                  <li className='text-left'>Attend an Interview: In some cases, you may be required to attend an interview at your local Canadian embassy or consulate.</li>
                  <li className='text-left'>Medical Examination: If requested, undergo a medical examination from an approved panel physician.</li>
                  <li className='text-left'>Wait for Processing: After submitting your application, you'll need to wait for it to be processed. This can take several weeks, so apply well in advance of your intended start date.</li>
                  <li className='text-left'>Receive a Port of Entry (POE) Letter: If your application is approved, you will receive a Port of Entry (POE) Letter of Introduction.</li>
                  <li className='text-left'>Travel to USA: Once your study permit is approved, you can travel to USA. Make sure to have all your documents, including your Letter of Introduction, with you when you arrive at the Canadian port of entry.</li>
                </ol>
              </div>
            </button>
            <button className='h-[100px] md:h-[50px] w-full overflow-hidden focus:overflow-hidden bg-white  focus:h-fit duration-200 px-[15px] md:px-[35px]'>
              <div className='h-[100px] md:h-[50px]  w-full flex items-center justify-between'>
                <p className='text-base font-semibold text-left'>Benefits of study USA?</p>
                <IoIosArrowDown className='text-lg'/>
              </div>
              <div className='bg-blue-500 text-white py-[15px] md:py-[25px] px-[10px]'>
                <p className='text-xs text-left'>In USA, there is a high level of life. The same liberties and rights respect for human rights, equality, diversity, and a stable, peaceful society—that safeguard all Canadians are also advantageous to international students. </p>
              </div>
            </button>
            <button className='h-[100px] md:h-[50px] w-full overflow-hidden focus:overflow-hidden bg-white  focus:h-fit duration-200 px-[15px] md:px-[35px]'>
              <div className='h-[100px] md:h-[50px]  w-full flex items-center justify-between'>
                <p className='text-base font-semibold text-left'>What are the requirements for USA Study Visa?</p>
                <IoIosArrowDown className='text-lg'/>
              </div>
              <div className='bg-blue-500 text-white py-[15px] md:py-[25px] px-[15px] md:px-[35px]'>
                <ol className='list-disc md:px-[25px]'>
                  <li className='text-left'>Acceptance Letter: You must have a Letter of Acceptance from a designated learning institution in USA.</li>
                  <li className='text-left'> Sufficient Finances: You need to demonstrate that you have enough money to cover tuition fees, living expenses, and return transportation. This can be shown through bank statements, scholarship offers, or a combination of funding sources.</li>
                  <li className='text-left'>Clean Criminal Record: You may be required to provide a police clearance certificate to prove you have no criminal record.</li>
                  <li className='text-left'> Medical Exam: In some cases, you may need to undergo a medical examination to demonstrate that you are in good health.</li>
                  <li className='text-left'>Intent to Return: You should convince the immigration officer that you will leave USA when your study permit expires.</li>
                  <li className='text-left'>Passport: You need a valid passport.</li>
                  <li className='text-left'>Photographs: Recent passport-sized photographs that meet the USA Visa Photo Requirements.</li>
                  <li className='text-left'>Biometrics: In some cases, you may need to provide biometrics (fingerprints and photograph).</li>
                  <li className='text-left'> Application Form: You'll need to complete the appropriate application forms.</li>
                  <li className='text-left'> Language Proficiency: Depending on your program, you may need to prove your language proficiency in English or French through language tests like IELTS or TOEFL.</li>
                  <li className='text-left'>Statement of Purpose: A statement explaining your study plans in USA.</li>
                  <li className='text-left'>Visa Processing Fee: You'll need to pay the required visa processing fee.</li>
                </ol>
              </div>
            </button>
            <button className='h-[100px] md:h-[50px] w-full overflow-hidden focus:overflow-hidden bg-white  focus:h-fit duration-200 px-[15px] md:px-[35px]'>
              <div className='h-[100px] md:h-[50px]  w-full flex items-center justify-between'>
                <p className='text-base font-semibold text-left'>What are the required IELTS and TOEFL scores for a student visa in the USA</p>
                <IoIosArrowDown className='text-lg'/>
              </div>
              <div className='bg-blue-500 text-white py-[15px] md:py-[25px] px-[15px] md:px-[35px]'>
                <ol className='list-disc md:px-[25px]'>
                  <li className='text-left'> *IELTS*: For most undergraduate and postgraduate programs, a common requirement is an IELTS score of at least 6.0 to 7.0 in each band (listening, reading, writing, and speaking). However, the exact score may vary based on the university and the course.</li>
                  <li className='text-left'>*TOEFL*: If you're taking the TOEFL, many institutions will often require a score of around 80 to 100 on the internet-based TOEFL (iBT). Some institutions may accept a paper-based TOEFL (PBT) score, which typically ranges from 550 to 600.</li>
                  <li className='text-left'>Keep in mind that requirements may have changed since my last update, and they can vary between universities and courses. Always check the specific English language proficiency requirements set by the institution you plan to apply to. It's a good idea to consult the university's official website or contact their admissions office for the most up-to-date information on language proficiency requirements.</li>
                </ol>
              </div>
            </button>
        </div>
      </div>
    </div>
  )
}

export default USA