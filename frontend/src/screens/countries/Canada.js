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
{/* 
            <button className='h-[100px] md:h-[50px] w-full overflow-hidden focus:overflow-hidden bg-white  focus:h-fit duration-200 px-[15px] md:px-[35px]'>
              <div className='h-[100px] md:h-[50px]  w-full flex items-center justify-between'>
                <p className='text-base font-semibold text-left'>Which is the best Canada Study visa consultant in Sri Lanka ?</p>
                <IoIosArrowDown className='text-lg'/>
              </div>
              <div className='bg-blue-500 text-white py-[15px] md:py-[25px] px-[10px]'>
                <p className='text-xs text-left'>We are the best Canada student visa consultants in Sri Lanka.  We are the most trusted Canada Student Visa Consultants Sri Lanka. If you want to peruse your study then we are the best Canada Education Agents in Sri Lanka</p>
              </div>
            </button> */}
            <button className='h-[100px] md:h-[50px] w-full overflow-hidden focus:overflow-hidden bg-white  focus:h-fit duration-200 px-[15px] md:px-[35px]'>
              <div className='h-[100px] md:h-[50px]  w-full flex items-center justify-between'>
                <p className='text-base font-semibold text-left'>How can I get student visa for Canada from Sri Lanka?</p>
                <IoIosArrowDown className='text-lg'/>
              </div>
              <div className='bg-blue-500 text-white py-[15px] md:py-[25px] px-[15px] md:px-[35px]'>
                <ol className='list-disc md:px-[25px]'>
                  <li className='text-left'>*Receive a Letter of Acceptance*: First, you need to be accepted by a Designated Learning Institution (DLI) in Canada. Once accepted, the institution will provide you with a Letter of Acceptance.</li>
                  <li className='text-left'> *Determine Eligibility*: Make sure you meet the eligibility criteria for a Canadian study permit. This includes proving your financial capacity to cover tuition and living expenses, as well as meeting health and security requirements.</li>
                  <li className='text-left'>*Language Proficiency*: Take an English or French language proficiency test if required. Most students take the IELTS or TOEFL for English proficiency.</li>
                  <li className='text-left'>*Create an Online Account*: Visit the official website of the Government of Canada and create an account to apply online.</li>
                  <li className='text-left'> *Complete the Study Permit Application*: Fill out the study permit application form (IMM 1294) and make sure to have all the required documents ready, which may include your Letter of Acceptance, proof of funds, and passport.</li>
                  <li className='text-left'>*Biometrics*: If necessary, book an appointment to provide biometrics at a Visa Application Center (VAC).</li>
                  <li className='text-left'>*Pay the Application Fee*: Pay the required processing fee for your study permit application.</li>
                  <li className='text-left'>*Attend an Interview*: In some cases, you may be required to attend an interview at your local Canadian embassy or consulate.</li>
                  <li className='text-left'>*Medical Examination*: If requested, undergo a medical examination from an approved panel physician.</li>
                  <li className='text-left'>*Wait for Processing*: After submitting your application, you'll need to wait for it to be processed. This can take several weeks, so apply well in advance of your intended start date.</li>
                  <li className='text-left'>*Receive a Port of Entry (POE) Letter*: If your application is approved, you will receive a Port of Entry (POE) Letter of Introduction.</li>
                  <li className='text-left'>*Travel to Canada*: Once your study permit is approved, you can travel to Canada. Make sure to have all your documents, including your Letter of Introduction, with you when you arrive at the Canadian port of entry.</li>
                </ol>
              </div>
            </button>
            <button className='h-[100px] md:h-[50px] w-full overflow-hidden focus:overflow-hidden bg-white  focus:h-fit duration-200 px-[15px] md:px-[35px]'>
              <div className='h-[100px] md:h-[50px]  w-full flex items-center justify-between'>
                <p className='text-base font-semibold text-left'>Benefits of study Canada?</p>
                <IoIosArrowDown className='text-lg'/>
              </div>
              <div className='bg-blue-500 text-white py-[15px] md:py-[25px] px-[15px] md:px-[35px]'>
                <ol className='list-disc md:px-[25px]'>
                  <li className='text-left'>High-Quality Education: Canada is known for its world-class education system and globally recognized institutions.</li>
                  <li className='text-left'>Diverse and Inclusive Society: Canada is welcoming and multicultural, making it an excellent place for international students to adapt and thrive.</li>
                  <li className='text-left'> Post-Graduate Work Opportunities: Canada provides opportunities for international students to gain valuable work experience through post-graduate work permits.</li>
                  <li className='text-left'> Safety and Quality of Life: Canada is consistently ranked as one of the safest countries in the world, offering an excellent quality of life.</li>
                  <li className='text-left'>Research Opportunities: Canadian universities are at the forefront of research and innovation, providing students with the chance to be part of cutting-edge projects.</li>
                  <li className='text-left'>Natural Beauty: Canada's stunning landscapes and outdoor activities make it an ideal destination for those who enjoy the outdoors.</li>
                  <li className='text-left'>Language Learning: Studying in Canada allows you to improve your language skills, with English and French as the official languages.</li>
                  <li className='text-left'> Healthcare Benefits: International students often have access to Canada's healthcare system, which is highly regarded.</li>
                  <li className='text-left'> Immigration Opportunities: Canada offers various pathways for international students to become permanent residents or citizens.</li>
                  <li className='text-left'>Networking and Cultural Experiences: Studying in Canada enables you to build a global network and experience diverse cultures.</li>
                  <li className='text-left'>Keep in mind that specific benefits can vary depending on the institution and program you choose, so it's essential to research and select the best fit for your educational and career goals.</li>
                </ol>
              </div>
            </button>
            <button className='h-[100px] md:h-[50px] w-full overflow-hidden focus:overflow-hidden bg-white  focus:h-fit duration-200 px-[15px] md:px-[35px]'>
              <div className='h-[100px] md:h-[50px]  w-full flex items-center justify-between'>
                <p className='text-base font-semibold text-left'>What are the requirements for Canada Study Visa?</p>
                <IoIosArrowDown className='text-lg'/>
              </div>
              <div className='bg-blue-500 text-white py-[15px] md:py-[25px] px-[15px] md:px-[35px]'>
                <ol className='list-disc md:px-[25px]'>
                  <li className='text-left'>*Acceptance Letter*: You must have a Letter of Acceptance from a designated learning institution in Canada.</li>
                  <li className='text-left'> *Sufficient Finances*: You need to demonstrate that you have enough money to cover tuition fees, living expenses, and return transportation. This can be shown through bank statements, scholarship offers, or a combination of funding sources.</li>
                  <li className='text-left'>*Clean Criminal Record*: You may be required to provide a police clearance certificate to prove you have no criminal record.</li>
                  <li className='text-left'> *Medical Exam*: In some cases, you may need to undergo a medical examination to demonstrate that you are in good health.</li>
                  <li className='text-left'>*Intent to Return*: You should convince the immigration officer that you will leave Canada when your study permit expires.</li>
                  <li className='text-left'>*Passport*: You need a valid passport.</li>
                  <li className='text-left'>*Photographs*: Recent passport-sized photographs that meet the Canada Visa Photo Requirements.</li>
                  <li className='text-left'>*Biometrics*: In some cases, you may need to provide biometrics (fingerprints and photograph).</li>
                  <li className='text-left'> *Application Form*: You'll need to complete the appropriate application forms.</li>
                  <li className='text-left'> *Language Proficiency*: Depending on your program, you may need to prove your language proficiency in English or French through language tests like IELTS or TOEFL.</li>
                  <li className='text-left'>*Statement of Purpose*: A statement explaining your study plans in Canada.</li>
                  <li className='text-left'>*Visa Processing Fee*: You'll need to pay the required visa processing fee.</li>
                </ol>
              </div>
            </button>
            <button className='h-[100px] md:h-[50px] w-full overflow-hidden focus:overflow-hidden bg-white  focus:h-fit duration-200 px-[15px] md:px-[35px]'>
              <div className='h-[100px] md:h-[50px]  w-full flex items-center justify-between'>
                <p className='text-base font-semibold text-left'>What are the required IELTS and TOEFL scores for a student visa in the Canada</p>
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

export default Canada