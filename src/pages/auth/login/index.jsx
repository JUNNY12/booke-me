import React from 'react'
import { Container } from '@/components/modules/Container'
import { Typography, Input, Button } from '@/components/elements'
import { AiOutlineUser, AiUser } from "react-icons/ai"
import { FaUserCircle } from "react-icons/fa"


const Login = () => {
  return (
    <div className="h-[100vh] bg-bg-5 bg-cover relative">
      <div className="absolute inset-0  h-[100vh] bg-black-950 bg-opacity-60">


        <Container className='flex justify-center items-center h-[95vh]'>


          <form action="" className='w-[400px] rounded-md h-[400px]
           bg-[#ffffff88] shadow-md  shadow-black-800 p-2
           flex items-center justify-center flex-col
           '>
            <div className='text-5xl text-white-50 flex justify-center items-center mb-2'>
              <FaUserCircle />
            </div>
            <Typography variants={`1`} className={`text-4xl mb-2 text-white-50 text-center`}>
              Login
            </Typography>

            <div className='mb-4'>
              <Input
              type='email'
                required
                placeholder={`Email`}
                className={`bg-[#ffffff88] w-[300px] h-[45px] rounded-sm 
                shadow shadow-md shadow-black-600
                indent-4 placeholder:text-white-950`}
              />
            </div>

            <div className='mb-4'>
              <Input
              required
                type='password'
                placeholder={`Password`}
                className={`bg-[#ffffff88] w-[300px] h-[45px] rounded-sm indent-4
                shadow shadow-md shadow-black-600
                placeholder:text-white-950`}
              />
            </div>

              <div>
                <label htmlFor="remember">Re</label>
              </div>

            <Button className={`bg-white-50 w-[300px] shadow shadow-md shadow-black-600
             p-3 font-bold text-white-950 rounded-[40px]`}>Login</Button>

          </form>

        </Container>
      </div>
    </div>
  )
}

export default Login