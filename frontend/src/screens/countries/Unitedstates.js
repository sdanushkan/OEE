import React, { useEffect } from 'react'
import { IoIosArrowDown } from 'react-icons/io'
import { useLocation } from 'react-router-dom';

const Unitedstates = () => {
  
  const {pathName} = useLocation()

  useEffect(() => {
      window.scroll(0,0);
  }, [pathName]);
  
  return (
    <div className='h-fit w-full'>
      <div className='h-[300px] w-full relative'>
        <img alt='' src='https://media.cnn.com/api/v1/images/stellar/prod/160418173456-beautiful-england-18-london-england.jpg?q=w_1900,h_1095,x_0,y_0,c_fill/h_618' className='h-full w-full object-cover' />
        <div className='h-[300px] w-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gradient-to-b from-transparent to-black/50 flex items-end py-[50px] justify-center'>
          <p className='text-white text-center font-semibold text-3xl md:text-4xl'>Best UK Immigration Consultant In Sri Lanka</p>
        </div>
      </div>

      <div className='h-fit w-full px-[15px] sm:px-[25px] md:px-[50px] lg:px-[75px]'>
        <div className='h-fitt w-full max-w-[1300px] mx-auto flex flex-col py-[25px] md:py-[50px]'>
          <div className='h-fit w-full  flex flex-col justify-center md:justify-start gap-[10px]'>
              <p className='capitalize text-center md:text-left text-2xl font-semibold'>Your Gateway to UK Immigration Excellence: GIEC Global Sri Lanka</p>
              <p className='text-xs opacity-50 text-center md:text-left'>We at GIEC GLOBAL Sri Lanka are cognizant of the significance of UK immigration and the possibilities it might offer. With our broad spectrum of immigration services, we require you to be your reliable guide as you manage the complicated rules of the UK immigration system and progress towards your goals.</p>
          </div>
        </div>
      </div>

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