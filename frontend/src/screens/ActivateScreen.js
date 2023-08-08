import React, { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { activateUser, reSendActivateLink } from '../actions/userActions';
import { AiOutlineLoading3Quarters } from 'react-icons/ai'

const ActivateScreen = () => {
    const userActivation = useSelector(state => state.userActivation)
    const { success, message, error, loading } = userActivation

    const {uid} = useParams()
    const {token} = useParams()
    const dispatch = useDispatch()   

    useEffect(() => {
        dispatch(activateUser(uid, token))
    }, [dispatch, token, uid]);



  return (
    <div className='h-fit w-full'>
        <section className='h-fit w-full px-[15px] sm:px-[25px] md:px-[50px] lg:px-[75px] xl:px-[100px] py-[100px]'>
            <div className='h-[400px] max-w-[1024px] mx-auto flex flex-col items-center justify-center gap-[25px]'>
                {
                    error?
                    <div className='flex flex-col items-center justify-center capitalize'>
                        <p className='text-2xl font-semibold'>somthing went wrong</p>
                        <p className='text-red-500 text-2xl font-semibold'>Error..!</p>
                    </div>:
                    <div className='flex flex-col items-center justify-center capitalize'>
                        <p className='text-2xl font-semibold'>You account activated</p>
                        <p className='text-green-500 text-2xl font-semibold'>successfully..!</p>
                    </div>

                }
                {
                    error?
                    <Link to={'/resendActivationLink'} className='h-[50px] w-[300px] text-white px-[65px] bg-blue-500 duration-200 rounded-[5px] outline-none flex items-center justify-center gap-[10px]'>
                        {
                            loading?
                            <AiOutlineLoading3Quarters className='animate-spin'/>:
                            <p>Login</p>
                        }
                    </Link>
                    :
                    <Link to={'/login'} className='h-[50px] w-[300px] text-white px-[65px] bg-blue-500 duration-200 rounded-[5px] outline-none flex items-center justify-center gap-[10px]'>
                        {
                            loading?
                            <AiOutlineLoading3Quarters className='animate-spin'/>:
                            <p>Login</p>
                        }
                    </Link>
                }
            </div>
        </section>
    </div>
  )
}

export default ActivateScreen