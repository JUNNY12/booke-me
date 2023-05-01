import React from 'react'
import { Container } from '@/components/modules/Container'
import { Typography, Input, Button } from '@/components/elements'
import { AiOutlineMail } from "react-icons/ai"
import { FaUserCircle, FaKey } from "react-icons/fa"
import {FiEyeOff, FiEye} from "react-icons/fi"
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'


const Login = () => {
  const [passwordVisibility, setPasswordVisibility] = useState(false)
  const inputType = passwordVisibility? 'text' : 'password'

  const handlePasswordVisibility = () => {
    setPasswordVisibility(!passwordVisibility)
  }

  return (
    <div className="h-[100vh] bg-bg-2 bg-cover relative w-full">
      <div className='absolute top-6 left-6 bg-white-50 p-2
       rounded-sm hover:bg-pink-600  hover:text-white-50 font-semibold  z-10'>
        <Link href={`/`}>
          <Button>Back Home</Button>
        </Link>
      </div>
      <div className="absolute inset-0  h-[100vh] bg-black-950 bg-opacity-60 w-full">
        <div className='flex justify-center items-center'>
          <form action="" className='w-[400px] mobileXL:w-[300px] rounded-md h-[500px] mt-12
           bg-[#ffffff88] shadow-md  shadow-black-800 p-2
           flex items-center justify-center flex-col mobileM:p-1
           '>
            <div className='text-5xl text-white-50 flex justify-center items-center mb-2'>
              <FaUserCircle />
            </div>
            <Typography variants={`1`} className={`text-3xl mb-2 text-white-50 text-center`}>
              Login
            </Typography>

            {/* <div className='mb-4 flex items-center '>
              <div className='h-[45px] w-[45px] rounded-tl-sm flex items-center justify-center text-3xl
               rounded-bl-sm  bg-[#ffffff88]'>
                <AiOutlineMail className='text-white-50' />
              </div>
              <div>
                <Input
                  type='email'
                  required
                  placeholder={`Email`}
                  className={`bg-[#ffffff88] w-[255px] mobileM:w-[205px] h-[45px] rounded-tr-sm rounded-br-sm 
                  indent-4 placeholder:text-white-950
                `}
                />
              </div>
            </div>

            <div className='mb-4 flex items-center'>
            <div className='h-[45px] w-[45px] rounded-tl-sm flex items-center justify-center text-xl
               rounded-bl-sm   bg-[#ffffff88]'>
                <FaKey className='text-white-50' />
              </div>
              <div className='relative'>
                <div onClick={handlePasswordVisibility} className='absolute top-4 right-4'>
                  {
                    passwordVisibility?
                    <FiEyeOff />
                    :
                    <FiEye />
                  }
                </div>
                <Input
                  required
                  type={inputType}
                  placeholder={`Password`}
                  className={`bg-[#ffffff88] w-[255px] mobileM:w-[205px] h-[45px] rounded-tr-sm rounded-br-sm indent-4
                  placeholder:text-white-950`}
                />
              </div>
            </div>

            <div className=' flex justify-between items-center mb-3 text-white-950 font-bold'>
              <div className='w-[150px]  mobileM:w-[125px] '>
                <input
                  className='me-1'
                  id='remebmer'
                  type='checkbox'
                />
                <label htmlFor="remember" className=' mobileM:text-[15px]'>Remember Me</label>
              </div>
              <Link href={`/`}>
                <div className='w-[150px]  mobileM:w-[125px]  mobileM:text-[15px]'>
                  Forgot Password
                </div>
              </Link>
            </div>

            <Button className={`bg-white-50 w-[300px]  mobileM:w-[250px]  shadow-md shadow-black-600
             p-3 font-bold text-white-950 rounded-[40px]
             hover:bg-pink-600 hover:text-white-50 transition duration-300 ease-in-out
             `}>Login</Button>

            <div className='mt-2'>
              <Typography variants={`3`} className={`text-white-50 text-center mt-2 font-bold  mobileM:text-[15px]`}>
                Don't have an account? <span className='text-pink-600 ms-4'><Link href={`/auth/register`}>Sign Up</Link></span>
              </Typography>
            </div>

            <div className=' text-pink-600 font-bold mb-2' >Or</div>

            <Button className={`bg-white-50 w-[300px] mobileM:w-[250px] shadow-md shadow-black-600
            hover:bg-pink-600 hover:text-white-50 transition duration-300 ease-in-out
             p-3 font-bold text-white-950 rounded-[40px] inline-flex items-center justify-center`}>
              <span> <Image src='/icons/icons8-google.svg' width={25} height={25} /></span>
              <span className='ms-2'>Login with Google</span>
            </Button> */}

          </form>
        </div>
      </div>
    </div>
  )
}

export default Login