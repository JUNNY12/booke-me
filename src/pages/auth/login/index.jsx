import React from 'react';
import { Container } from '@/components/modules/Container';
import { Typography, Input, Button } from '@/components/elements';
import { AiOutlineMail } from 'react-icons/ai';
import { FaUserCircle, FaKey } from 'react-icons/fa';
import { FiEyeOff, FiEye } from 'react-icons/fi';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const Login = () => {
    const [passwordVisibility, setPasswordVisibility] = useState(false);
    const inputType = passwordVisibility ? 'text' : 'password';

    const handlePasswordVisibility = () => {
        setPasswordVisibility(!passwordVisibility);
    };

    return (
        <section className="flex tabletM:flex-col">
            <div className="relative h-screen w-full tabletM:h-[100px]">
                <div className=" absolute left-1/2 top-1/2 text-center w-full transform -translate-x-1/2 -translate-y-1/2 z-20">
                    <Typography variants={3}>
                        <span className="text-5xl tabletM:text-3xl mobileXL:text-2xl font-bold text-white-50">
                            Welcome Back
                        </span>
                    </Typography>
                </div>
                <div className="absolute top-0 left-0 w-full h-full tabletM:h[70px] bg-[#00000088] z-10"></div>
                <Image
                    src="/images/login.svg"
                    fill={true}
                    priority={true}
                    style={{ objectFit: 'contain' }}
                />
            </div>
            <div className="h-[100vh] tabletM:h-max bg-white-100 bg-cover relative w-full px-4 py-3">
                <div>
                    <Link href={`/`}>
                        <Button
                            className="w-[100px]  p-1
                      rounded-sm bg-pink-600 text-white-50 font-semibold  z-10"
                        >
                            Back Home
                        </Button>
                    </Link>
                </div>

                <div className="flex justify-center items-center">
                    <form
                        action=""
                        className="w-[400px] mobileXL:wfull rounded-md h-max mt-8 mobileXL:mt-4
                        bg-pink-600 shadow-md  shadow-black-800 p-2 py-8
                        flex items-center justify-center flex-col mobileM:p-1 mobileM:py-4
                    "
                    >
                        <div className="text-5xl text-white-50 flex justify-center items-center mb-2">
                            <FaUserCircle />
                        </div>
                        <Typography
                            variants={`1`}
                            className={`text-2xl font-bold mb-6 text-white-50 text-center`}
                        >
                            Login
                        </Typography>

                        <div className="mb-4 flex items-center ">
                            <div
                                className="h-[40px] w-[45px] rounded-tl-sm flex items-center justify-center text-3xl
                            rounded-bl-sm  bg-white-50"
                            >
                                <AiOutlineMail className="text-white-950" />
                            </div>
                            <div>
                                <Input
                                    type="email"
                                    required
                                    placeholder={`Email`}
                                    className={`bg-white-50 w-[255px] mobileM:w-[205px] h-[40px] rounded-tr-sm rounded-br-sm 
                                    indent-4 placeholder:text-white-950
                                  `}
                                />
                            </div>
                        </div>

                        <div className="mb-4 flex items-center">
                            <div
                                className="h-[40px] w-[45px] rounded-tl-sm flex items-center justify-center text-xl
                            rounded-bl-sm   bg-white-50"
                            >
                                <FaKey className="text-white-950" />
                            </div>
                            <div className="relative">
                                <div
                                    onClick={handlePasswordVisibility}
                                    className="absolute top-3 right-4"
                                >
                                    {passwordVisibility ? (
                                        <FiEyeOff />
                                    ) : (
                                        <FiEye />
                                    )}
                                </div>
                                <Input
                                    required
                                    type={inputType}
                                    placeholder={`Password`}
                                    className={`bg-white-50 w-[255px] mobileM:w-[205px] h-[40px] rounded-tr-sm rounded-br-sm indent-4
                                 placeholder:text-white-950`}
                                />
                            </div>
                        </div>

                        <div className=" flex justify-between items-center mb-3 text-white-50 font-bold">
                            <div className="w-[150px]  mobileM:w-[125px] ">
                                <input
                                    className="me-1"
                                    id="remebmer"
                                    type="checkbox"
                                />
                                <label
                                    htmlFor="remember"
                                    className=" mobileM:text-[14px]"
                                >
                                    Remember Me
                                </label>
                            </div>
                            <Link href={`/`}>
                                <div className="w-[150px]  mobileM:w-[125px]  mobileM:text-[14px]">
                                    Forgot Password
                                </div>
                            </Link>
                        </div>

                        <Button
                            className={`bg-white-50 w-[300px]  mobileM:w-[250px]  shadow-md shadow-black-600
                        p-2 font-bold text-pink-600 rounded-[40px]
                        `}
                        >
                            Login
                        </Button>

                        <div className="mt-2">
                            <Typography
                                variants={`3`}
                                className={`text-white-50 text-center mt-2 font-bold  mobileM:text-[15px]`}
                            >
                                Don't have an account?{' '}
                                <span className=" ms-2">
                                    <Link
                                        className="underline"
                                        href={`/auth/register`}
                                    >
                                        Sign Up
                                    </Link>
                                </span>
                            </Typography>
                        </div>

                        <div className=" text-white-50 font-bold mb-1">Or</div>

                        <Button
                            className={` w-[300px] mobileM:w-[250px] shadow-md shadow-black-600
                        bg-white-50 transition duration-300 ease-in-out
                        p-2 font-bold text-pink-600 rounded-[40px] inline-flex items-center justify-center`}
                        >
                            <span>
                                {' '}
                                <Image
                                    src="/icons/icons8-google.svg"
                                    width={25}
                                    height={25}
                                />
                            </span>
                            <span className="ms-2">Login with Google</span>
                        </Button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Login;
