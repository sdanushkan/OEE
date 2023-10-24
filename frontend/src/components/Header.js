import React, { useState } from 'react'
import { HiOutlineMenu } from 'react-icons/hi'
import { Link, useLocation, useNavigate } from 'react-router-dom'
// import { useInView } from 'react-intersection-observer'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../actions/userActions'
import logo from '../assets/SRKlogo.png'
import logo1 from '../assets/logo1.png'
import { AiOutlineMenu } from 'react-icons/ai'
import { animateScroll } from 'react-scroll';

const Header = () => {
    const userLogin = useSelector(state => state.userLogin)
    const { error, loading, userInfo } = userLogin

    const [navbar, setNavbar] = useState(false)

    const location = useLocation()
    const dispatch = useDispatch()
    const history = useNavigate()

    const navbarHandler = () =>{
        setNavbar(!navbar)
    }
    
    const logoutHandler = () => {
        dispatch(logout())
    }

    const contactUS = () => {
        if(location.pathname == "/"){
            animateScroll.scrollToBottom({
                duration: 500,
                smooth: true,
            })
        } else {
            history('/')
            animateScroll.scrollToBottom({
                duration: 500,
                smooth: true,
            })
        }
        
    }

  return (
    <div className={
        navbar?
        "h-fit w-full z-50 bg-white fixed top-0":
        "h-fit w-full z-50 relative top-0 bg-white"
    }>
        <div className='h-fit w-full px-[15px] sm:px-[25px] md:px-[50px] lg:px-[75px]'>
            <div className='h-[100px] w-full max-w-[1300px] mx-auto flex items-center justify-between'>
                <Link to={'/'} className='h-fit w-fit text-xl font-semibold tracking-wider uppercase opacity-75'>
                    <img alt='' src={logo1} className='h-[75px] w-fit object-contain' />
                </Link>
                <div className='hidden md:flex items-center gap-[25px]'>
                    <p className='uppercase text-sm font-medium'>Home</p>
                    <p className='uppercase text-sm font-medium'>Services</p>
                    <Link to={'/about'} className='uppercase text-sm font-medium'>about us</Link>
                    <button onClick={contactUS} className='uppercase text-sm font-medium'>Contact us</button>
                </div>
                <button onClick={navbarHandler} className='md:hidden'>
                    <AiOutlineMenu/>
                </button>
            </div>
        </div> 
        {
            navbar?
            <div className='h-screen w-full bg-white flex items-center justify-center px-[15px] sm:px-[25px] md:px-[50px] md:hidden'>
                <div className='flex flex-col gap-[10px] -mt-[150px]'>
                    <Link to={'/'} onClick={navbarHandler} className='h-[40px] w-full flex items-center justify-center'>
                        <p className='opacity-50 capitalize text-center'>Home</p>
                    </Link>
                    <button className='h-[40px] w-full flex items-center justify-center'>
                        <p className='opacity-50 capitalize text-center'>Services</p>
                    </button>
                    <button onClick={() => {
                        navbarHandler();
                        contactUS();
                    }} className='h-[40px] w-full flex items-center justify-center'>
                        <p className='opacity-50 capitalize text-center'>Contact us</p>
                    </button>
                    <Link to={'/about'} onClick={navbarHandler} className='h-[40px] w-full flex items-center justify-center'>
                        <p className='opacity-50 capitalize text-center'>about us</p>
                    </Link>
                </div>
            </div>
            :
            ""
        }  
    </div>
  )
}

export default Header


// <div className={
//         location.pathname === '/login' || location.pathname === '/register' || location.pathname === '/resendActivationLink' || location.pathname.startsWith('/resetPassword') || location.pathname === '/action'?
//             navbar?
//             'hidden h-fit w-full absolute z-50 bg-transparent rounded-[25px]':
//             'hidden h-fit w-full absolute z-50 bg-transparent':
//             navbar?
//             'h-fit w-full absolute z-50 bg-transparent rounded-[25px]':
//             'h-fit w-full absolute z-50 bg-transparent'
//     }>
//         <div  className='md:px-[50px] lg:px-[75px] xl:px-[100px] md:bg-transparent'>
//             <div className={
//                 navbar?
//                 'h-[240px] md:h-[100px] w-full flex flex-col md:flex-row px-[15px] md:px-0 md:justify-between md:items-center shadow-none md:border-b-[1px] md:border-black md:border-opacity-5 md:pb-0 xl:max-w-[1024px] mx-auto rounded-b-[25px] overflow-hidden duration-200 bg-white ':
//                 'h-[100px] md:h-[100px] w-full flex flex-col md:flex-row px-[15px] md:px-0 md:justify-between md:items-center shadow-none md:border-b-[1px] md:border-black md:border-opacity-5 md:pb-0 xl:max-w-[1024px] mx-auto pb-[25px] overflow-hidden duration-200'
//             }>
//                 <div className='h-[100px] w-full md:w-fit flex items-center justify-between '>
//                     <div className='h-[100px] w-full flex items-center justify-between'>
//                         <Link to={'/'} className='h-[50px] w-full flex items-center gap-[15px]'>
//                             <img src={logo} alt='' className='h-[50px] w-[50px] ' />
//                             <div className='text-black'>
//                                 <p className='font-Orbitron font-medium text-2xl tracking-widest text-black uppercase'>SRK</p>
//                                 <p className='font-Orbitron font-medium text-sm tracking-widest text-black uppercase opacity-25'>Overseas Education Consultants</p>
//                             </div>
//                         </Link> 
//                         {/* <div onClick={navbarHandler} className='md:hidden'>
//                             <HiOutlineMenu className='text-xl'/>
//                         </div> */}
//                     </div>
//                 </div>
//                 {/* <div className='w-full md:w-fit flex flex-col md:flex-row md:items-center md:gap-[50px] md:text-black'>
//                     {/* <button className='h-[50px] md:h-fit w-full md:w-fit flex items-center border-b-[1px] md:border-0 border-opacity-5 border-black opacity-50 hover:opacity-75 duration-200 '>
//                         <p className='md:text-sm opacity-50 md:opacity-100 capitalize md:uppercase'>about us</p>
//                     </button>
//                     <button className='h-[50px] md:h-fit w-full md:w-fit flex items-center border-b-[1px] md:border-0 border-opacity-5 border-black opacity-50 hover:opacity-75 duration-200 '>
//                         <p className='md:text-sm opacity-50 md:opacity-100 capitalize md:uppercase'>contact us</p>
//                     </button> */}
//                     {/* {
//                         userInfo?
//                         <button onClick={logoutHandler} className='h-[50px] md:h-fit w-full md:w-fit flex items-center border-b-[1px] md:border-0 border-opacity-5 border-black opacity-50 hover:opacity-75 duration-200 '>
//                             <p className='font-medium opacity-25 md:opacity-100 capitalize'>logout</p>
//                         </button>:
//                         <Link to={'/login'} className='h-[50px] md:h-fit w-full md:w-fit flex items-center border-b-[1px] md:border-0 border-opacity-5 border-black opacity-50 hover:opacity-75 duration-200 '>
//                         <p className='font-medium opacity-25 md:opacity-100 capitalize'>login</p>
//                         </Link>
//                     } */}
//                 {/* </div> */}
//             </div>
//         </div>
//     </div>