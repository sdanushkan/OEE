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

    const [companyName, setCompanyName] = useState('')
    const [category, setCategory] = useState('')
    const [email, setEmail] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [about, setAbout] = useState('')

    const dispatch = useDispatch()
    const history = useNavigate()

    useEffect(() => {
        if (success) {
            history('/')
        }
    }, [history, success])

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(createRequest(companyName, category, email, phoneNumber, about))
    }

    return (
    <div className='h-fit w-full'> 
        <div className='h-fit w-full px-[15px] sm:px-[25px] md:px-[50px] lg:px-[75px] xl:px-[100px] overflow-hidden'>
            <div className='h-screen min-h-fit max-w-[1024px] mx-auto py-[25px] relative flex md:items-center justify-center'>
                <form onSubmit={submitHandler} className=''>
                    <div className=''>
                        <p className='text-2xl font-semibold'>Create your Action</p>
                        <p className='text-sm opacity-50'>After the action, we will contact you soon</p>
                    </div>
                    <div className='flex flex-col md:flex-row py-[25px] gap-[25px]'>
                        <div className='flex flex-col gap-[15px]'>
                            <div className='h-[50px] w-full relative'>
                                <input type='text' autoComplete={false} autoSave={false} required={true} value={companyName} onChange={(e) => setCompanyName(e.target.value)} placeholder='Campony name' className='h-full w-full px-[65px] border-[1px] border-black border-opacity-10 focus:border-opacity-20 duration-200 rounded-[5px] outline-none'></input>
                                <div className='h-[50px] w-[50px] absolute left-0 top-0 bottom-0 flex items-center justify-center'>
                                    <BsShop className='text-2xl'/>
                                </div>
                                <div className='h-[30px] w-[1px] bg-black opacity-10 absolute top-1/2 left-[50px] transform -translate-y-1/2'>

                                </div>
                            </div>
                            <div className='h-[50px] w-full relative'>
                                <input type='text' autoComplete={false} autoSave={false} required={true} value={category} onChange={(e) => setCategory(e.target.value)} placeholder='Category' className='h-full w-full px-[65px] border-[1px] border-black border-opacity-10 focus:border-opacity-20 duration-200 rounded-[5px] outline-none'></input>
                                <div className='h-[50px] w-[50px] absolute left-0 top-0 bottom-0 flex items-center justify-center'>
                                    <BiSolidCategoryAlt className='text-2xl'/>
                                </div>
                                <div className='h-[30px] w-[1px] bg-black opacity-10 absolute top-1/2 left-[50px] transform -translate-y-1/2'>

                                </div>
                            </div>
                            <div className='h-[50px] w-full relative'>
                                <input type='email' autoComplete={false} autoSave={false} required={true} value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Email' className='h-full w-full px-[65px] border-[1px] border-black border-opacity-10 focus:border-opacity-20 duration-200 rounded-[5px] outline-none'></input>
                                <div className='h-[50px] w-[50px] absolute left-0 top-0 bottom-0 flex items-center justify-center'>
                                    <IoMailOutline className='text-2xl'/>
                                </div>
                                <div className='h-[30px] w-[1px] bg-black opacity-10 absolute top-1/2 left-[50px] transform -translate-y-1/2'>

                                </div>
                            </div>
                            <div className='h-[50px] w-full relative'>
                                <input type='text' autoComplete={false} autoSave={false} required={true} value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} placeholder='Phone number' className='h-full w-full px-[65px] border-[1px] border-black border-opacity-10 focus:border-opacity-20 duration-200 rounded-[5px] outline-none'></input>
                                <div className='h-[50px] w-[50px] absolute left-0 top-0 bottom-0 flex items-center justify-center'>
                                    <BsPhone className='text-2xl'/>
                                </div>
                                <div className='h-[30px] w-[1px] bg-black opacity-10 absolute top-1/2 left-[50px] transform -translate-y-1/2'>

                                </div>
                            </div>
                        </div>
                        <div className='flex flex-col justify-between gap-[15px]'>
                            <div className='h-[150px] w-full relative border-[1px] border-black border-opacity-10 focus:border-opacity-20 duration-200 rounded-[5px]'>
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
                                    <p>submit</p>
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