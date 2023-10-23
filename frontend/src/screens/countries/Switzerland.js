import React, { useEffect } from 'react'
import { IoIosArrowDown } from 'react-icons/io'
import { useLocation } from 'react-router-dom';

const Switzerland = () => {
  
  const {pathName} = useLocation()

  useEffect(() => {
      window.scroll(0,0);
  }, [pathName]);
  
  return (
    <div className='h-fit w-full'>
      <div className='h-[300px] w-full relative'>
        <img alt='' src='https://wanderlustcrew.com/wp-content/uploads/2023/02/Most-Beautiful-Places-in-Switzerland.jpeg' className='h-full w-full object-cover' />
        <div className='h-[300px] w-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gradient-to-b from-transparent to-black/50 flex items-end py-[50px] justify-center'>
          <p className='text-white text-center font-semibold text-3xl md:text-4xl'>Best switzerland Visa Consultants In Sri Lanka</p>
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