import React, { useState, useEffect } from 'react'
import { IoLockClosedOutline, IoMailOutline } from 'react-icons/io5'
import { BsFacebook } from 'react-icons/bs'
import { FcGoogle } from 'react-icons/fc'
import { useInView } from 'react-intersection-observer'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { register } from '../actions/userActions'
import { AiOutlineLoading3Quarters } from 'react-icons/ai'

const RegisterScreen = () => {
    const userRegister = useSelector(state => state.userRegister)
    const { error, loading, userInfo } = userRegister

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const dispatch = useDispatch()
    const history = useNavigate()
    // const location = useLocation()

    const { ref:formBox, inView:isFormBox } = useInView({triggerOnce:false});

    useEffect(() => {
        if (userInfo) {
            history('/')
        }
    }, [history, userInfo])

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(register(email, password, confirmPassword))
    }

  return (
    <div className='h-fit w-full'>
        <div className='h-fit w-full px-[15px] sm:px-[25px] md:px-[50px] lg:px-[75px] xl:px-[100px] overflow-hidden'>
            <div ref={formBox} className='h-screen min-h-fit max-w-[1024px] mx-auto py-[25px] relative flex md:items-center'>
                <form onSubmit={submitHandler} className={
                    isFormBox?
                    'h-fit w-full md:w-[300px] lg:w-[400px] flex flex-col gap-[15px] duration-500 mb-0 opacity-100':
                    'h-fit w-full md:w-[300px] lg:w-[400px] flex flex-col gap-[15px] duration-500 -mb-[100px] opacity-0'
                }>
                    <Link to={'/'} className='h-[50px] w-full flex items-center'>
                        <p className='text-2xl font-Orbitron font-medium text-blue-500'>SRK</p>
                    </Link>                   
                    <div className='h-[50px] w-full flex gap-[25px]'>
                        <div className='h-[50px] w-full border-[1px] border-black border-opacity-10 rounded-[5px] flex items-center justify-center gap-[5px]'>
                            <FcGoogle className='text-2xl'/>
                            <p className='font-medium opacity-75' >Google</p>
                        </div>
                        <div className='h-[50px] w-full border-[1px] border-black border-opacity-10 rounded-[5px] flex items-center justify-center gap-[5px]'>
                            <BsFacebook className='text-2xl text-blue-500'/>
                            <p className='font-medium opacity-75' >Facebook</p>
                        </div>
                    </div>
                    <div className='h-[50px] w-full relative'>
                        <div className='bg-white px-[10px] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10'>
                            <p className='text-xs opacity-50'>or continue with email</p>
                        </div>
                        <div className='h-[1px] w-full bg-black opacity-10 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-0'>
                        </div>
                    </div>
                    <div className='h-fit w-full flex flex-col gap-[10px]'>
                        <div className='flex flex-wrap gap-[5px]'>
                            {
                                error?
                                    error.map(i => (
                                        <p className='text-red-500 text-xs'>{
                                            i
                                        }</p>
                                    ))
                                :
                                ''
                            }
                        </div>
                        <div className='h-[50px] w-full relative'>
                            <input type='text' autoComplete={false} autoSave={false} required={true} value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Email' className='h-full w-full px-[65px] border-[1px] border-black border-opacity-10 focus:border-opacity-20 duration-200 rounded-[5px] outline-none'></input>
                            <div className='h-[50px] w-[50px] absolute left-0 top-0 bottom-0 flex items-center justify-center'>
                                <IoMailOutline className='text-2xl'/>
                            </div>
                            <div className='h-[30px] w-[1px] bg-black opacity-10 absolute top-1/2 left-[50px] transform -translate-y-1/2'>

                            </div>
                        </div>
                        <div className='h-[50px] w-full relative'>
                            <input type='password' autoComplete={false} autoSave={false} required={true} value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Password' className='h-full w-full px-[65px] border-[1px] border-black border-opacity-10 focus:border-opacity-20 duration-200 rounded-[5px] outline-none'></input>
                            <div className='h-[50px] w-[50px] absolute left-0 top-0 bottom-0 flex items-center justify-center'>
                                <IoLockClosedOutline className='text-2xl'/>
                            </div>
                            <div className='h-[30px] w-[1px] bg-black opacity-10 absolute top-1/2 left-[50px] transform -translate-y-1/2'>

                            </div>
                        </div>
                        <div className='h-[50px] w-full relative'>
                            <input type='password' autoComplete={false} autoSave={false} required={true} value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} placeholder='Confirm Password' className='h-full w-full px-[65px] border-[1px] border-black border-opacity-10 focus:border-opacity-20 duration-200 rounded-[5px] outline-none'></input>
                            <div className='h-[50px] w-[50px] absolute left-0 top-0 bottom-0 flex items-center justify-center'>
                                <IoLockClosedOutline className='text-2xl'/>
                            </div>
                            <div className='h-[30px] w-[1px] bg-black opacity-10 absolute top-1/2 left-[50px] transform -translate-y-1/2'>

                            </div>
                        </div>
                    </div>
                    <div className='h-[50px] w-full flex items-center justify-between'>
                        <div className='h-[24px] w-[24px] bg-blue-500 rounded-[5px]'>

                        </div>
                    </div>
                    <div className='h-[50px] w-full'>
                        <button type='submit' disabled={
                            loading?
                            true:
                            false
                        } placeholder='Password' className='h-full w-full text-white px-[65px] bg-blue-500 duration-200 rounded-[5px] outline-none flex items-center justify-center gap-[10px]'>
                            {
                                loading?
                                <AiOutlineLoading3Quarters className='animate-spin'/>:
                                ''
                            }
                            <p>Register</p>
                        </button>
                    </div> 
                    <div className='h-fit w-full md:flex items-center justify-center gap-[5px] hidden'>
                        <p className='text-sm'>I already have an Account!</p><Link to={'/login'} className='text-sm text-blue-500'>Sing in</Link>
                    </div>       
                </form>
                <div className='h-fit w-full absolute bottom-[75px] flex items-center justify-center gap-[5px] md:hidden'>
                    <p className='text-sm'>I don't have an Account!</p><Link to={'/login'} className='text-sm text-blue-500'>Sing in</Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default RegisterScreen