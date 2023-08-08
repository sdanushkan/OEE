import React, { useState, useEffect } from 'react'
import { IoLockClosedOutline } from 'react-icons/io5'
import { useInView } from 'react-intersection-observer'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { reSendActivateLink, resetPasswordConfirmation } from '../actions/userActions'
import { AiOutlineLoading3Quarters } from 'react-icons/ai'

const ResetPasswordConfirmationScreen = () => {
    const userPasswordResetConfirmation = useSelector(state => state.userPasswordResetConfirmation)
    const { success, message, error, loading } = userPasswordResetConfirmation

    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin

    const {uid} = useParams()
    const {token} = useParams()

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
        if (success){
          history('/login')
        }
    }, [history, userInfo, success])

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(resetPasswordConfirmation(uid, token, password, confirmPassword))
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
                   
                    <div className='h-fit w-full flex flex-col gap-[10px]'>
                        {
                            error?
                            <p className='text-red-500 text-xs'>{error}</p>:
                            ''
                        }
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
                    <div className='h-[50px] w-full'>
                            <button onClick={submitHandler} type='submit' placeholder='Password' className='h-full w-full text-white px-[65px] bg-blue-500 duration-200 rounded-[5px] outline-none flex items-center justify-center gap-[10px]'>
                                {
                                    loading?
                                    <AiOutlineLoading3Quarters className='animate-spin'/>:
                                    ''
                                }
                                <p>Update the password</p>
                            </button>
                    </div> 
                    
                </form>
              
            </div>
        </div>
    </div>
  )
}

export default ResetPasswordConfirmationScreen