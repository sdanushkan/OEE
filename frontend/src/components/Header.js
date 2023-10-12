import React, { useState } from 'react'
import { HiOutlineMenu } from 'react-icons/hi'
import { Link, useLocation } from 'react-router-dom'
// import { useInView } from 'react-intersection-observer'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../actions/userActions'
import logo from '../assets/SRKlogo.png'

const Header = () => {
    const userLogin = useSelector(state => state.userLogin)
    const { error, loading, userInfo } = userLogin

    const [navbar, setNavbar] = useState(false)

    const location = useLocation()
    const dispatch = useDispatch()

    const navbarHandler = () =>{
        setNavbar(!navbar)
    }
    
    const logoutHandler = () => {
        dispatch(logout())
    }

  return (
    <div className={
        location.pathname === '/login' || location.pathname === '/register' || location.pathname === '/resendActivationLink' || location.pathname.startsWith('/resetPassword') || location.pathname === '/action'?
            navbar?
            'hidden h-fit w-full absolute z-50 bg-transparent rounded-[25px]':
            'hidden h-fit w-full absolute z-50 bg-transparent':
            navbar?
            'h-fit w-full absolute z-50 bg-transparent rounded-[25px]':
            'h-fit w-full absolute z-50 bg-transparent'
    }>
        <div  className='md:px-[50px] lg:px-[75px] xl:px-[100px] md:bg-transparent'>
            <div className={
                navbar?
                'h-[240px] md:h-[100px] w-full flex flex-col md:flex-row px-[15px] md:px-0 md:justify-between md:items-center shadow-none md:border-b-[1px] md:border-black md:border-opacity-5 md:pb-0 xl:max-w-[1024px] mx-auto rounded-b-[25px] overflow-hidden duration-200 bg-white ':
                'h-[100px] md:h-[100px] w-full flex flex-col md:flex-row px-[15px] md:px-0 md:justify-between md:items-center shadow-none md:border-b-[1px] md:border-black md:border-opacity-5 md:pb-0 xl:max-w-[1024px] mx-auto pb-[25px] overflow-hidden duration-200'
            }>
                <div className='h-[100px] w-full md:w-fit flex items-center justify-between '>
                    <div className='h-[100px] w-full flex items-center justify-between'>
                        <Link to={'/'} className='h-[50px] w-full flex items-center gap-[15px]'>
                            <img src={logo} alt='' className='h-[50px] w-[50px] ' />
                            <div className='text-black'>
                                <p className='font-Orbitron font-medium text-2xl tracking-widest text-black uppercase'>SRK</p>
                                <p className='font-Orbitron font-medium text-sm tracking-widest text-black uppercase opacity-25'>elite enterprises</p>
                            </div>
                        </Link> 
                        {/* <div onClick={navbarHandler} className='md:hidden'>
                            <HiOutlineMenu className='text-xl'/>
                        </div> */}
                    </div>
                </div>
                {/* <div className='w-full md:w-fit flex flex-col md:flex-row md:items-center md:gap-[50px] md:text-black'>
                    {/* <button className='h-[50px] md:h-fit w-full md:w-fit flex items-center border-b-[1px] md:border-0 border-opacity-5 border-black opacity-50 hover:opacity-75 duration-200 '>
                        <p className='md:text-sm opacity-50 md:opacity-100 capitalize md:uppercase'>about us</p>
                    </button>
                    <button className='h-[50px] md:h-fit w-full md:w-fit flex items-center border-b-[1px] md:border-0 border-opacity-5 border-black opacity-50 hover:opacity-75 duration-200 '>
                        <p className='md:text-sm opacity-50 md:opacity-100 capitalize md:uppercase'>contact us</p>
                    </button> */}
                    {/* {
                        userInfo?
                        <button onClick={logoutHandler} className='h-[50px] md:h-fit w-full md:w-fit flex items-center border-b-[1px] md:border-0 border-opacity-5 border-black opacity-50 hover:opacity-75 duration-200 '>
                            <p className='font-medium opacity-25 md:opacity-100 capitalize'>logout</p>
                        </button>:
                        <Link to={'/login'} className='h-[50px] md:h-fit w-full md:w-fit flex items-center border-b-[1px] md:border-0 border-opacity-5 border-black opacity-50 hover:opacity-75 duration-200 '>
                        <p className='font-medium opacity-25 md:opacity-100 capitalize'>login</p>
                        </Link>
                    } */}
                {/* </div> */}
            </div>
        </div>
    </div>
  )
}

export default Header