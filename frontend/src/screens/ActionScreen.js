import React, { useEffect, useState } from 'react'
import { IoLockClosedOutline, IoMailOutline } from 'react-icons/io5'
import { BiSolidCategoryAlt } from 'react-icons/bi'
import { BsPhone, BsShop } from 'react-icons/bs'
import { AiOutlineFileText, AiOutlineLoading3Quarters } from 'react-icons/ai'
import { createRequest } from '../actions/requestActions'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useLocation, useNavigate } from 'react-router-dom'

const ActionScreen = () => {
    const requestCreate = useSelector(state => state.requestCreate)
    const { error, loading, request, success } = requestCreate

    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin

    const [companyName, setCompanyName] = useState('')
    const [category, setCategory] = useState('')
    const [email, setEmail] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [about, setAbout] = useState('')

    const dispatch = useDispatch()
    const history = useNavigate()

    useEffect(() => {
        if (!userInfo) {
            history('/')
        }
        if (success) {
            history('/')
        }
    }, [history, success, userInfo])

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(createRequest(companyName, category, email, phoneNumber, about))
    }

    return (
    <div className='h-fit w-full relative bg-white md:bg-transparent'> 
        <div className='absolute h-[300px] w-full bg-gray-50 hidden md:flex md:items-center'>
            <div className='h-fit w-full px-[15px] sm:px-[25px] md:px-[50px] lg:px-[75px] xl:px-[100px] overflow-hidden'>
                <div className='h-fit w-full max-w-[1024px] mx-auto '>
                    <div className='w-[300px] lg:w-[400px] '>
                        <p className='text-5xl font-semibold text-blue-500'>Create your Action,</p>
                    </div>
                </div>
            </div>
        </div>
        <div className='h-fit w-full px-[15px] sm:px-[25px] md:px-[50px] lg:px-[75px] xl:px-[100px] overflow-hidden'>
            <div className='h-fit min-h-fit max-w-[1024px] mx-auto relative flex md:items-center justify-center py-[25px] md:py-[150px]'>
                <form onSubmit={submitHandler} className='h-fit w-full md:w-[600px] lg:w-[650px] flex ml-auto flex-col gap-[15px] md:py-[50px] md:px-[50px] bg-white md:shadow-[0px_5px_25px_0px_rgba(0,0,0,0.05)] duration-500 mb-0 opacity-100'>
                    <div className='md:hidden'>
                        <p className='text-5xl font-bold text-blue-500'>Create your action..!</p>
                        <p className='text-sm font-semibold opacity-25 mt-[5px]'>After the action, we will contact you soon</p>
                    </div>
                    <div className='flex flex-col py-[25px] gap-[25px]'>
                        <div className='flex flex-col gap-[15px]'>
                            <div className='flex flex-col md:flex-row gap-[25px]'>
                                <div className='h-[50px] w-full relative'>
                                    <input type='text' autoComplete={false} autoSave={false} required={true} value={companyName} onChange={(e) => setCompanyName(e.target.value)} placeholder='Company name' className='h-full w-full px-[65px] border-[1px] border-black border-opacity-5 focus:border-opacity-20 duration-200 rounded-[5px] outline-none'></input>
                                    <div className='h-[50px] w-[50px] absolute left-0 top-0 bottom-0 flex items-center justify-center'>
                                        <BsShop className='text-2xl'/>
                                    </div>
                                    <div className='h-[30px] w-[1px] bg-black opacity-10 absolute top-1/2 left-[50px] transform -translate-y-1/2'>

                                    </div>
                                </div>
                                <div className='h-[50px] w-full relative'>
                                    <input type='text' autoComplete={false} autoSave={false} required={true} value={category} onChange={(e) => setCategory(e.target.value)} placeholder='Category' className='h-full w-full px-[65px] border-[1px] border-black border-opacity-5 focus:border-opacity-20 duration-200 rounded-[5px] outline-none'></input>
                                    <div className='h-[50px] w-[50px] absolute left-0 top-0 bottom-0 flex items-center justify-center'>
                                        <BiSolidCategoryAlt className='text-2xl'/>
                                    </div>
                                    <div className='h-[30px] w-[1px] bg-black opacity-10 absolute top-1/2 left-[50px] transform -translate-y-1/2'>

                                    </div>
                                </div>
                            </div>
                            <div className='flex flex-col md:flex-row gap-[25px]'>
                                <div className='h-[50px] w-full relative'>
                                    <input type='email' autoComplete={false} autoSave={false} required={true} value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Email' className='h-full w-full px-[65px] border-[1px] border-black border-opacity-5 focus:border-opacity-20 duration-200 rounded-[5px] outline-none'></input>
                                    <div className='h-[50px] w-[50px] absolute left-0 top-0 bottom-0 flex items-center justify-center'>
                                        <IoMailOutline className='text-2xl'/>
                                    </div>
                                    <div className='h-[30px] w-[1px] bg-black opacity-10 absolute top-1/2 left-[50px] transform -translate-y-1/2'>

                                    </div>
                                </div>
                                <div className='h-[50px] w-full relative'>
                                    <input type='text' autoComplete={false} autoSave={false} required={true} value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} placeholder='Phone number' className='h-full w-full px-[65px] border-[1px] border-black border-opacity-5 focus:border-opacity-20 duration-200 rounded-[5px] outline-none'></input>
                                    <div className='h-[50px] w-[50px] absolute left-0 top-0 bottom-0 flex items-center justify-center'>
                                        <BsPhone className='text-2xl'/>
                                    </div>
                                    <div className='h-[30px] w-[1px] bg-black opacity-10 absolute top-1/2 left-[50px] transform -translate-y-1/2'>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='flex flex-col justify-between gap-[15px]'>
                            <div className='h-[150px] w-full relative border-[1px] border-black border-opacity-5 focus:border-opacity-20 duration-200 rounded-[5px]'>
                                <input type='text' autoComplete={false} autoSave={false} required={true} value={about} onChange={(e) => setAbout(e.target.value)} placeholder='About your action' className='min-h-[50px] w-full px-[65px]  outline-none bg-transparent flex flex-wrap'></input>
                                <div className='h-[50px] w-[50px] absolute left-0 top-0 bottom-0 flex items-center justify-center'>
                                    <AiOutlineFileText className='text-2xl'/>
                                </div>
                                <div className='h-[30px] w-[1px] bg-black opacity-10 absolute top-[10px] left-[50px] transform '>

                                </div>
                            </div>
                            <div className='h-[50px] w-full'>
                                <button type='submit' placeholder='Password' className='h-full w-full text-white px-[65px] bg-blue-500 duration-200 rounded-[5px] outline-none flex items-center justify-center gap-[10px]'>
                                    {
                                        loading?
                                        <AiOutlineLoading3Quarters className='animate-spin'/>:
                                        ''
                                    }
                                    <p className='uppercase font-semibold'>submit</p>
                                </button>
                            </div> 
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default ActionScreen