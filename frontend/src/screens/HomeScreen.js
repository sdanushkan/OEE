import React from 'react'
import { RxTriangleRight } from 'react-icons/rx'
import { useInView } from 'react-intersection-observer'
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

const HomeScreen = () => {
    const { ref:heroText, inView:isHeroText } = useInView({triggerOnce:false});
    const slideImages = [
        {
          url: 'https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
          caption: 'Slide 1'
        },
        {
          url: 'https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80',
          caption: 'Slide 2'
        },
        {
          url: 'https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
          caption: 'Slide 3'
        },
      ];
  return (
    <div className='h-fit w-full'>
        <section ref={heroText} className='h-fit w-full px-[15px] sm:px-[25px] md:px-[50px] lg:px-[75px] xl:px-[100px] overflow-hidden' >
            <div className='h-[700px] md:h-[600px] w-full max-w-[1024px] mx-auto flex flex-col md:flex-row md:items-center relative'>
                <div className={
                    isHeroText ?
                    'h-fit w-full flex flex-col items-center md:items-start pt-[100px] md:pt-0 relative z-40 duration-500 opacity-100 md:mb-0':
                    'h-fit w-full flex flex-col items-center md:items-start pt-[100px] md:pt-0 relative z-40 duration-500 opacity-0 md:-mb-[100px]'
                }>
                    
                    <p className='text-5xl font-semibold uppercase text-center md:text-left'>software solutions</p>
                    <p className='opacity-50 mt-[10px] text-center md:text-left'>A short, attention-grabbing headline that summarizes the benefits of your software solution</p>
                    <button className='h-[50px] w-[150px] shadow-[0px_15px_50px_0px_rgba(0,0,0,0.10)] rounded-full flex mt-[25px] bg-white'>
                        <div className='h-full w-full flex items-center justify-center'>
                            <p>Action</p>
                        </div>
                        <div className='h-[50px] w-[50px]'>
                            <div className='h-[50px] w-[50px] flex items-center justify-center'>
                                <div className='h-[40px] w-[40px] bg-blue-500 rounded-full flex items-center justify-center'>
                                    <RxTriangleRight className='text-white text-xl'/>
                                </div>
                            </div>
                        </div>
                    </button>
                </div>
                
                <div className='h-full w-screen relative -left-[15px] sm:-left-[25px] overflow-visible z-20'>
                    <div className='h-[1000px] w-[1000px] absolute rounded-[50px] md:rounded-[100px] rotate-45 left-[250px] -top-[250px] md:-top-[300px] overflow-hidden'>
                        <div className='h-[1500px] w-[1500px] -rotate-45 overflow-hidden'>
                            <Slide autoplay={true} >
                                {slideImages.map((slideImage, index)=> (
                                    <img key={index} src={slideImage.url} alt='' className={
                                        isHeroText?
                                        'h-[1500px] w-[1500px] object-cover scale-100 duration-1000':
                                        'h-[1500px] w-[1500px] object-cover scale-150 duration-1000'
                                    } />
                                ))} 
                            </Slide>
                        </div>
                    </div>
                </div>
                
            </div>
        </section>
    </div>
  )
}

export default HomeScreen