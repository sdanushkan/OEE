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

              <p className='text-xl opacity-75 text-left'>Our website provides in-depth information on programs, scholarships, visa processes, and more. Let us guide you on your journey to academic success in Switzerland."</p>
          </div>
        </div>
      </div>

      <div className='h-fit w-full px-[15px] sm:px-[25px] md:px-[50px] lg:px-[75px] bg-[#f6f6f6]'>
        <div className='h-fitt w-full max-w-[1300px] mx-auto flex flex-col py-[25px] gap-[10px]'>
          <p className='text-3xl text-blue-500 text-center font-semibold pb-[10px]'>FAQs</p>
{/* 
            <button className='h-[100px] md:h-[50px] w-full overflow-hidden focus:overflow-hidden bg-white  focus:h-fit duration-200 px-[15px] md:px-[35px]'>
              <div className='h-[100px] md:h-[50px]  w-full flex items-center justify-between'>
                <p className='text-base font-semibold text-left'>Which is the best Switzerland Study visa consultant in Sri Lanka ?</p>
                <IoIosArrowDown className='text-lg'/>
              </div>
              <div className='bg-blue-500 text-white py-[15px] md:py-[25px] px-[10px]'>
                <p className='text-xs text-left'>We are the best Switzerland student visa consultants in Sri Lanka.  We are the most trusted Switzerland Student Visa Consultants Sri Lanka. If you want to peruse your study then we are the best Switzerland Education Agents in Sri Lanka</p>
              </div>
            </button> */}
            <button className='h-[100px] md:h-[50px] w-full overflow-hidden focus:overflow-hidden bg-white  focus:h-fit duration-200 px-[15px] md:px-[35px]'>
              <div className='h-[100px] md:h-[50px]  w-full flex items-center justify-between'>
                <p className='text-base font-semibold text-left'>How can I get student visa for Switzerland from Sri Lanka?</p>
                <IoIosArrowDown className='text-lg'/>
              </div>
              <div className='bg-blue-500 text-white py-[15px] md:py-[25px] px-[15px] md:px-[35px]'>
                <ol className='list-disc md:px-[25px]'>
                  <li className='text-left'>Receive a Letter of Acceptance: First, you need to be accepted by a Designated Learning Institution (DLI) in Switzerland. Once accepted, the institution will provide you with a Letter of Acceptance.</li>
                  <li className='text-left'> Determine Eligibility: Make sure you meet the eligibility criteria for a Canadian study permit. This includes proving your financial capacity to cover tuition and living expenses, as well as meeting health and security requirements.</li>
                  <li className='text-left'>Language Proficiency: Take an English or French language proficiency test if required. Most students take the IELTS or TOEFL for English proficiency.</li>
                  <li className='text-left'>Create an Online Account: Visit the official website of the Government of Switzerland and create an account to apply online.</li>
                  <li className='text-left'> Complete the Study Permit Application: Fill out the study permit application form (IMM 1294) and make sure to have all the required documents ready, which may include your Letter of Acceptance, proof of funds, and passport.</li>
                  <li className='text-left'>Biometrics: If necessary, book an appointment to provide biometrics at a Visa Application Center (VAC).</li>
                  <li className='text-left'>Pay the Application Fee: Pay the required processing fee for your study permit application.</li>
                  <li className='text-left'>Attend an Interview: In some cases, you may be required to attend an interview at your local Canadian embassy or consulate.</li>
                  <li className='text-left'>Medical Examination: If requested, undergo a medical examination from an approved panel physician.</li>
                  <li className='text-left'>Wait for Processing: After submitting your application, you'll need to wait for it to be processed. This can take several weeks, so apply well in advance of your intended start date.</li>
                  <li className='text-left'>Receive a Port of Entry (POE) Letter: If your application is approved, you will receive a Port of Entry (POE) Letter of Introduction.</li>
                  <li className='text-left'>Travel to Switzerland: Once your study permit is approved, you can travel to Switzerland. Make sure to have all your documents, including your Letter of Introduction, with you when you arrive at the Canadian port of entry.</li>
                </ol>
              </div>
            </button>
            <button className='h-[100px] md:h-[50px] w-full overflow-hidden focus:overflow-hidden bg-white  focus:h-fit duration-200 px-[15px] md:px-[35px]'>
              <div className='h-[100px] md:h-[50px]  w-full flex items-center justify-between'>
                <p className='text-base font-semibold text-left'>Benefits of study Switzerland?</p>
                <IoIosArrowDown className='text-lg'/>
              </div>
              <div className='bg-blue-500 text-white py-[15px] md:py-[25px] px-[10px]'>
                <p className='text-xs text-left'>In Switzerland, there is a high level of life. The same liberties and rights respect for human rights, equality, diversity, and a stable, peaceful society—that safeguard all Canadians are also advantageous to international students. </p>
              </div>
            </button>
            <button className='h-[100px] md:h-[50px] w-full overflow-hidden focus:overflow-hidden bg-white  focus:h-fit duration-200 px-[15px] md:px-[35px]'>
              <div className='h-[100px] md:h-[50px]  w-full flex items-center justify-between'>
                <p className='text-base font-semibold text-left'>What are the requirements for Switzerland Study Visa?</p>
                <IoIosArrowDown className='text-lg'/>
              </div>
              <div className='bg-blue-500 text-white py-[15px] md:py-[25px] px-[15px] md:px-[35px]'>
                <ol className='list-disc md:px-[25px]'>
                  <li className='text-left'>Acceptance Letter: You must have a Letter of Acceptance from a designated learning institution in Switzerland.</li>
                  <li className='text-left'> Sufficient Finances: You need to demonstrate that you have enough money to cover tuition fees, living expenses, and return transportation. This can be shown through bank statements, scholarship offers, or a combination of funding sources.</li>
                  <li className='text-left'>Clean Criminal Record: You may be required to provide a police clearance certificate to prove you have no criminal record.</li>
                  <li className='text-left'> Medical Exam: In some cases, you may need to undergo a medical examination to demonstrate that you are in good health.</li>
                  <li className='text-left'>Intent to Return: You should convince the immigration officer that you will leave Switzerland when your study permit expires.</li>
                  <li className='text-left'>Passport: You need a valid passport.</li>
                  <li className='text-left'>Photographs: Recent passport-sized photographs that meet the Switzerland Visa Photo Requirements.</li>
                  <li className='text-left'>Biometrics: In some cases, you may need to provide biometrics (fingerprints and photograph).</li>
                  <li className='text-left'> Application Form: You'll need to complete the appropriate application forms.</li>
                  <li className='text-left'> Language Proficiency: Depending on your program, you may need to prove your language proficiency in English or French through language tests like IELTS or TOEFL.</li>
                  <li className='text-left'>Statement of Purpose: A statement explaining your study plans in Switzerland.</li>
                  <li className='text-left'>Visa Processing Fee: You'll need to pay the required visa processing fee.</li>
                </ol>
              </div>
            </button>
            <button className='h-[100px] md:h-[50px] w-full overflow-hidden focus:overflow-hidden bg-white  focus:h-fit duration-200 px-[15px] md:px-[35px]'>
              <div className='h-[100px] md:h-[50px]  w-full flex items-center justify-between'>
                <p className='text-base font-semibold text-left'>What are the required IELTS and TOEFL scores for a student visa in the Switzerland</p>
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
      </div> */}
    </div>
  )
}

export default Switzerland