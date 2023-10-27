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
                        <img alt='' src={"https://royalstockphoto.s3.amazonaws.com/wp-content/uploads/2017/10/03050159/x060x-Toronto-City-Hall-Night-Lights-Downtown-Ontario-UK.jpg"} className='h-[350px] w-full object-cover' />
                        </SwiperSlide>
                        <SwiperSlide>
                        <img alt='' src={"https://wpcdn.us-midwest-1.vip.tn-cloud.net/www.coloradoexpression.com/content/uploads/2022/08/u/b/screen-shot-2022-08-23-at-103439-am-1024x470.png"} className='h-[350px] w-full object-cover' />
                        </SwiperSlide>
                        <SwiperSlide>
                        <img alt='' src={"https://cdn.sixtyandme.com/wp-content/uploads/2022/04/Sixty-and-Me_Exploring-5-of-UKs-Most-Beautiful-Cities.jpg"} className='h-[350px] w-full object-cover' />
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
            
              <p className='text-xl opacity-75 text-left'>Welcome to our website, your one-stop destination for discovering why the United Kingdom is the ultimate choice for international students. Get ready to explore a world of possibilities.</p>
              </div>

              <ol className='list-decimal px-[50px]'>
                <li className='text-lg opacity-50 text-left' >Academic Heritage: The UK is home to some of the world's most prestigious universities, known for their history of academic excellence and innovation.</li>
                <li className='text-lg opacity-50 text-left' >Global Recognition: A UK degree is internationally respected, offering a strong foundation for your future career, wherever it may take you.</li>
                <li className='text-lg opacity-50 text-left' >Cultural Melting Pot: Immerse yourself in a diverse, multicultural society, where you'll make friends from every corner of the globe.</li>
                <li className='text-lg opacity-50 text-left' >  Work and Study Opportunities: The UK's flexible visa policies allow you to work part-time during your studies and gain valuable experience.</li>
                <li className='text-lg opacity-50 text-left' > Historical Riches: Walk through history with the UK's rich heritage, from castles and museums to modern cultural hubs.</li>
                <li className='text-lg opacity-50 text-left' > Safety and Security: The UK prides itself on a safe and welcoming environment, ensuring your peace of mind.</li>
                <li className='text-lg opacity-50 text-left' > Quality of Life: Enjoy a high standard of living, excellent healthcare, and a wealth of cultural experiences.</li>
              </ol>

              <p className='text-xl opacity-75 text-left'>"Our website is your guide to courses, scholarships, visa procedures, and much more. Choose the United Kingdom as your academic destination and open the doors to a world of opportunities and academic distinction."</p>
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
          <p className='text-3xl text-blue-500 text-center font-semibold pb-[10px]'>FAQs</p>
{/* 
            <button className='h-[100px] md:h-[50px] w-full overflow-hidden focus:overflow-hidden bg-white  focus:h-fit duration-200 px-[15px] md:px-[35px]'>
              <div className='h-[100px] md:h-[50px]  w-full flex items-center justify-between'>
                <p className='text-base font-semibold text-left'>Which is the best UK Study visa consultant in Sri Lanka ?</p>
                <IoIosArrowDown className='text-lg'/>
              </div>
              <div className='bg-blue-500 text-white py-[15px] md:py-[25px] px-[10px]'>
                <p className='text-xs text-left'>We are the best UK student visa consultants in Sri Lanka.  We are the most trusted UK Student Visa Consultants Sri Lanka. If you want to peruse your study then we are the best UK Education Agents in Sri Lanka</p>
              </div>
            </button> */}
            <button className='h-[100px] md:h-[50px] w-full overflow-hidden focus:overflow-hidden bg-white  focus:h-fit duration-200 px-[15px] md:px-[35px]'>
              <div className='h-[100px] md:h-[50px]  w-full flex items-center justify-between'>
                <p className='text-base font-semibold text-left'>How can I get student visa for UK from Sri Lanka?</p>
                <IoIosArrowDown className='text-lg'/>
              </div>
              <div className='bg-blue-500 text-white py-[15px] md:py-[25px] px-[15px] md:px-[35px]'>
                <ol className='list-disc md:px-[25px]'>
                  <li className='text-left'>Receive an Offer from a UK Institution: You must first be accepted by a recognized educational institution in the UK. Once accepted, you'll receive a Confirmation of Acceptance for Studies (CAS) from the institution.</li>
                  <li className='text-left'>Check Visa Eligibility: Ensure you meet the eligibility criteria for a UK student visa, which may include proof of funds, English language proficiency, and meeting health requirements.</li>
                  <li className='text-left'>English Language Proficiency: If required, take an English language test like IELTS, TOEFL, or a UKVI-approved English language test.</li>
                  <li className='text-left'>Create an Online Account: Visit the official UK government's visa application website and create an account to start your application.</li>
                  <li className='text-left'>Complete the Visa Application: Fill out the online visa application form and pay the visa application fee. You will need to provide your CAS number during this process.</li>
                  <li className='text-left'>Biometric Appointment: Book and attend a biometric appointment at a local Application Support Centre (ASC) to provide your fingerprints and photograph.</li>
                  <li className='text-left'>Required Documents: Gather the necessary documents, which typically include your CAS, proof of funds, passport, and passport-sized photographs. Check the specific document requirements on the official website.</li>
                  <li className='text-left'>Tuberculosis (TB) Test: Depending on your home country, you might need to undergo a TB test. Check if this is a requirement for Sri Lankan citizens.</li>
                  <li className='text-left'>Healthcare Surcharge: Pay the Immigration Healthcare Surcharge as part of your application. This provides access to the UK's National Health Service (NHS).</li>
                  <li className='text-left'> Attend an Interview: In some cases, you may be required to attend an interview at your local UK visa application center.</li>
                  <li className='text-left'>Submit Your Application: Submit your visa application online and pay the fee.</li>
                  <li className='text-left'> Wait for a Decision: The UK Visa and Immigration office will process your application, and you will be notified of the decision. Processing times may vary.</li>
                  <li className='text-left'> Receive Your Visa: If your application is approved, you will receive a vignette sticker in your passport that allows you to enter the UK. Once in the UK, you will collect your full Biometric Residence Permit (BRP) from a local Post Office.</li>
                </ol>
              </div>
            </button>
            <button className='h-[100px] md:h-[50px] w-full overflow-hidden focus:overflow-hidden bg-white  focus:h-fit duration-200 px-[15px] md:px-[35px]'>
              <div className='h-[100px] md:h-[50px]  w-full flex items-center justify-between'>
                <p className='text-base font-semibold text-left'>Benefits of study UK?</p>
                <IoIosArrowDown className='text-lg'/>
              </div>
              <div className='bg-blue-500 text-white py-[15px] md:py-[25px] px-[10px]'>
                <p className='text-xs text-left'>In UK, there is a high level of life. The same liberties and rights respect for human rights, equality, diversity, and a stable, peaceful society—that safeguard all Canadians are also advantageous to international students. </p>
              </div>
            </button>
            <button className='h-[100px] md:h-[50px] w-full overflow-hidden focus:overflow-hidden bg-white  focus:h-fit duration-200 px-[15px] md:px-[35px]'>
              <div className='h-[100px] md:h-[50px]  w-full flex items-center justify-between'>
                <p className='text-base font-semibold text-left'>What are the requirements for UK Study Visa?</p>
                <IoIosArrowDown className='text-lg'/>
              </div>
              <div className='bg-blue-500 text-white py-[15px] md:py-[25px] px-[15px] md:px-[35px]'>
                <ol className='list-disc md:px-[25px]'>
                  <li className='text-left'>Acceptance Letter: You must have a Letter of Acceptance from a designated learning institution in UK.</li>
                  <li className='text-left'> Sufficient Finances: You need to demonstrate that you have enough money to cover tuition fees, living expenses, and return transportation. This can be shown through bank statements, scholarship offers, or a combination of funding sources.</li>
                  <li className='text-left'>Clean Criminal Record: You may be required to provide a police clearance certificate to prove you have no criminal record.</li>
                  <li className='text-left'> Medical Exam: In some cases, you may need to undergo a medical examination to demonstrate that you are in good health.</li>
                  <li className='text-left'>Intent to Return: You should convince the immigration officer that you will leave UK when your study permit expires.</li>
                  <li className='text-left'>Passport: You need a valid passport.</li>
                  <li className='text-left'>Photographs: Recent passport-sized photographs that meet the UK Visa Photo Requirements.</li>
                  <li className='text-left'>Biometrics: In some cases, you may need to provide biometrics (fingerprints and photograph).</li>
                  <li className='text-left'> Application Form: You'll need to complete the appropriate application forms.</li>
                  <li className='text-left'> Language Proficiency: Depending on your program, you may need to prove your language proficiency in English or French through language tests like IELTS or TOEFL.</li>
                  <li className='text-left'>Statement of Purpose: A statement explaining your study plans in UK.</li>
                  <li className='text-left'>Visa Processing Fee: You'll need to pay the required visa processing fee.</li>
                </ol>
              </div>
            </button>
            <button className='h-[100px] md:h-[50px] w-full overflow-hidden focus:overflow-hidden bg-white  focus:h-fit duration-200 px-[15px] md:px-[35px]'>
              <div className='h-[100px] md:h-[50px]  w-full flex items-center justify-between'>
                <p className='text-base font-semibold text-left'>What are the required IELTS and TOEFL scores for a student visa in the UK</p>
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

export default Unitedstates