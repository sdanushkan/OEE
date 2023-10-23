import React, { useEffect } from 'react'
import { IoIosArrowDown } from 'react-icons/io'
import { useLocation } from 'react-router-dom';

const Australia = () => {
  
  const {pathName} = useLocation()

  useEffect(() => {
      window.scroll(0,0);
  }, [pathName]);
  
  return (
    <div className='h-fit w-full'>
      <div className='h-[300px] w-full relative'>
        <img alt='' src='https://d3hne3c382ip58.cloudfront.net/files/uploads/bookmundi/resized/cmsfeatured/best-cities-in-australia-sydney-1554104907-785X440.jpg' className='h-full w-full object-cover' />
        <div className='h-[300px] w-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gradient-to-b from-transparent to-black/50 flex items-end py-[50px] justify-center'>
          <p className='text-white text-center font-semibold text-3xl md:text-4xl'>Best Australian Migration Agents in Sri Lanka</p>
        </div>
      </div>

      <div className='h-fit w-full px-[15px] sm:px-[25px] md:px-[50px] lg:px-[75px]'>
        <div className='h-fitt w-full max-w-[1300px] mx-auto flex flex-col py-[25px] md:py-[50px]'>
          <div className='h-fit w-full  flex flex-col justify-center md:justify-start gap-[10px]'>
              <p className='capitalize text-center md:text-left text-2xl font-semibold'>Why Australia?</p>
              <p className='text-xs opacity-50 text-center md:text-left'>Australians have access to a high level of living, first-rate medical care, top-notch education, and a thriving multicultural community. Australia captivates people with its diversity, inventiveness, and laid-back lifestyle, from its magnificent landscapes to its bustling cities. Whether you want to establish a lucrative profession, give your kids access to top-notch educational possibilities,</p>
          </div>
        </div>
      </div>

      <div className='h-fit w-full px-[15px] sm:px-[25px] md:px-[50px] lg:px-[75px] bg-[#f6f6f6]'>
        <div className='h-fitt w-full max-w-[1300px] mx-auto flex flex-col py-[25px] gap-[10px]'>
          <p className='text-3xl text-red-600 text-center font-semibold pb-[10px]'>FAQs</p>

            <button className='h-[100px] md:h-[50px] w-full overflow-hidden focus:overflow-hidden bg-white  focus:h-fit duration-200 px-[15px] md:px-[25px]'>
              <div className='h-[100px] md:h-[50px]  w-full flex items-center justify-between'>
                <p className='text-base font-semibold text-left'>Which consultant is best for Australia immigration?</p>
                <IoIosArrowDown className='text-lg'/>
              </div>
              <div className='bg-red-600 text-white py-[15px] md:py-[25px] px-[10px]'>
                <p className='text-xs text-left'>GIEC GLOBAL Sri Lanka is the best Australian Migration Agents in Sri Lanka. We are highly reputed firm that is known for its experienced consultants for Australia immigration who can give you the best  advice at every step. It has a decade’s worth of experience making it a great place for everyone with a dream to move out of their homeland. If you are looking for the Australia Migration Agents in Sri Lanka Colombo, Galle, Kandy, Maharagama, Moratuwa, and Jaffna, Sri Lanka, contact us for best consultantion.</p>
              </div>
            </button>
            <button className='h-[100px] md:h-[50px] w-full overflow-hidden focus:overflow-hidden bg-white  focus:h-fit duration-200 px-[15px] md:px-[25px]'>
              <div className='h-[100px] md:h-[50px]  w-full flex items-center justify-between'>
                <p className='text-base font-semibold text-left'> What are the requirements to migrate to Australia?</p>
                <IoIosArrowDown className='text-lg'/>
              </div>
              <div className='bg-red-600 text-white py-[15px] md:py-[25px] px-[15px] md:px-[25px]'>
                <ol className='list-disc'>
                  <li className='text-left'>45 years of age</li>
                  <li className='text-left'>65 points in the Australian points grid</li>
                  <li className='text-left'>Valid skills assessment</li>
                  <li className='text-left'>IELTS or PTE score</li>
                  <li className='text-left'>Health insurance</li>
                  <li className='text-left'>Police verification certificate</li>
                </ol>
              </div>
            </button>
            <button className='h-[100px] md:h-[50px] w-full overflow-hidden focus:overflow-hidden bg-white  focus:h-fit duration-200 px-[15px] md:px-[25px]'>
              <div className='h-[100px] md:h-[50px]  w-full flex items-center justify-between'>
                <p className='text-base font-semibold text-left'> Why you should migrate to Australia? </p>
                <IoIosArrowDown className='text-lg'/>
              </div>
              <div className='bg-red-600 text-white py-[15px] md:py-[25px] px-[15px] md:px-[25px]'>
                <ol className='list-decimal md:px-[25px]'>
                  <li className='text-left'>Job opportunities.</li>
                  <li className='text-left'>Freedom to Work.</li>
                  <li className='text-left'>Flexible guidelines on immigration.</li>
                  <li className='text-left'>Geographical Surroundings.</li>
                  <li className='text-left'>Excellent Culture.</li>
                  <li className='text-left'>Quality Living Standards.</li>
                </ol>
              </div>
            </button>
            <button className='h-[100px] md:h-[50px] w-full overflow-hidden focus:overflow-hidden bg-white  focus:h-fit duration-200 px-[15px] md:px-[25px]'>
              <div className='h-[100px] md:h-[50px]  w-full flex items-center justify-between'>
                <p className='text-base font-semibold text-left'> What IELTS score is required for Australia immigration? </p>
                <IoIosArrowDown className='text-lg'/>
              </div>
              <div className='bg-red-600 text-white py-[15px] md:py-[25px] px-[15px] md:px-[25px]'>
                <p className='text-xs text-left'>
                You must get an IELTS score of at least 6.0 overall, with a minimum of 6.0 in each of the 4 sections. This will demonstrate the degree of ability in English that is necessary for this visa. GIEC GLOBAL Sri Lanka will help you to calculate your IELTS score if you need any kind of assistances regarding IELTS then we are always here for you that thing make us different and which is why we are the best Australian immigration lawyers in Sri Lanka 
                </p>
              </div>
            </button>
        </div>
      </div>
    </div>
  )
}

export default Australia