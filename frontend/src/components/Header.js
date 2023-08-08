import React, { useState } from 'react'
import { HiOutlineMenu } from 'react-icons/hi'
import { Link, useLocation } from 'react-router-dom'
// import { useInView } from 'react-intersection-observer'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../actions/userActions'

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
        location.pathname === '/login' || location.pathname === '/register' || location.pathname === '/resendActivationLink' || location.pathname.startsWith('/resetPassword')?
            navbar?
            'hidden h-fit w-full absolute z-50 bg-white md:bg-transparent rounded-[25px]':
            'hidden h-fit w-full absolute z-50 bg-white md:bg-transparent':
            navbar?
            'h-fit w-full absolute z-50 bg-white md:bg-transparent rounded-[25px]':
            'h-fit w-full absolute z-50 bg-white md:bg-transparent'
    }>
        <div  className='md:px-[50px] lg:px-[75px] xl:px-[100px] md:bg-transparent'>
            <div className={
                navbar?
                'h-[240px] md:h-[75px] w-full flex flex-col md:flex-row px-[15px] md:px-0 md:justify-between md:items-center shadow-[0px_4px_25px_0px_rgba(0,0,0,0.05)] md:shadow-none md:border-b-[1px] md:border-black md:border-opacity-5 md:pb-0 xl:max-w-[1024px] mx-auto rounded-b-[25px] overflow-hidden duration-200 bg-white ':
                'h-[65px] md:h-[75px] w-full flex flex-col md:flex-row px-[15px] md:px-0 md:justify-between md:items-center shadow-[0px_4px_25px_0px_rgba(0,0,0,0.05)] md:shadow-none md:border-b-[1px] md:border-black md:border-opacity-5 md:pb-0 xl:max-w-[1024px] mx-auto pb-[25px] overflow-hidden duration-200'
            }>
                <div className='h-[65px] w-full md:w-fit flex items-center justify-between '>
                    <div className='h-[65px] w-full flex items-center justify-between'>
                        <div className=''>
                            <p className='font-Orbitron font-medium text-blue-500'>SRK</p>
                        </div>
                        <div onClick={navbarHandler} className='md:hidden'>
                            <HiOutlineMenu className='text-xl'/>
                        </div>
                    </div>
                </div>
                <div className={
                    location.pathname === "/activate"?
                    'w-full md:w-fit flex flex-col md:flex-row md:items-center md:gap-[50px] md:text-black':
                    'w-full md:w-fit flex flex-col md:flex-row md:items-center md:gap-[50px] md:text-white'
                }>
                    <button className='h-[50px] md:h-fit w-full md:w-fit flex items-center border-b-[1px] md:border-0 border-opacity-5 border-black opacity-50 hover:opacity-75 duration-200 '>
                        <p className='md:text-sm opacity-50 md:opacity-100 capitalize md:uppercase'>about us</p>
                    </button>
                    <button className='h-[50px] md:h-fit w-full md:w-fit flex items-center border-b-[1px] md:border-0 border-opacity-5 border-black opacity-50 hover:opacity-75 duration-200 '>
                        <p className='md:text-sm opacity-50 md:opacity-100 capitalize md:uppercase'>contact us</p>
                    </button>
                    {
                        userInfo?
                        <button onClick={logoutHandler} className='h-[50px] md:h-fit w-full md:w-fit flex items-center border-b-[1px] md:border-0 border-opacity-5 border-black opacity-50 hover:opacity-75 duration-200 '>
                            <p className='md:text-sm opacity-50 md:opacity-100 capitalize md:uppercase'>logout</p>
                        </button>:
                        <Link to={'/login'} className='h-[50px] md:h-fit w-full md:w-fit flex items-center border-b-[1px] md:border-0 border-opacity-5 border-black opacity-50 hover:opacity-75 duration-200 '>
                        <p className='md:text-sm opacity-50 md:opacity-100 capitalize md:uppercase'>login</p>
                        </Link>
                    }
                </div>
            </div>
        </div>
    </div>
  )
}

export default Header