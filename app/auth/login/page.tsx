'use client'
import React, { useState } from 'react'
import { PiCaretRightBold } from 'react-icons/pi'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { RiFacebookFill } from "react-icons/ri";
import { RiGoogleFill } from "react-icons/ri";
import { RiAppleFill } from "react-icons/ri";
import { RiPaypalFill } from "react-icons/ri";
import { IoMailOutline } from "react-icons/io5";
import { CiLock } from "react-icons/ci";
import { LuEyeOff, LuEye, LuDot } from "react-icons/lu";
import { IoIosArrowForward } from 'react-icons/io'


const Login = () => {
    const router = useRouter()
    const [showPassword, setShowPassword] = useState(false)
    const [auth, setAuth] = useState({email: '', password: ''})

    function handleChange(e:any) {
        const name = e.target.name
        const value = e.target.value
        setAuth({...auth, [name]: value})
    }

    function handleSubmit(e:any) {
        e.preventDefault()
        console.log(auth)
    }

    return (
    <div className="w-full h-[100vh] flex flex-col items-center justify-start relative overflow-hidden">
        {/* The floating icon */}
        <div className="absolute -right-[350px] -top-[50px] sm:-top-[85px] sm:-right-[175px] md:-top-[75px] md:-right-[175px] sm:-right-[100px] lg:-right-[140px]  "  style={{transform: 'rotate(0deg)'}} >
            <span className="bg-transparent w-[616.89px] h-[236.14px]   flex items-center justify-center relative  overflow-auto  "  >
                <Image 
                    src="/Illustration.svg" 
                    alt="Authentication" 
                    layout="fill" 
                    objectFit="cover" 
                    className=''
                />
            </span>
        </div>
        
        {/* For screes bigger than mobile */}
        <div className=" hidden sm:block sm:w-full sm:h-full sm:flex sm:flex-col sm:items-center sm:justify-start relative ">
            <div className="flex flex-col items-center justify-center w-full h-full">
        
                <span className="sm:w-[205px] sm:h-[60px] 2xl:w-[227.47px] 2xl:h-[65px] flex items-center justify-center relative overflow-hidden ">
                    <Image 
                        src="/logo-poma.svg" 
                        alt="Authentication" 
                        layout="fill" 
                        objectFit="cover" 
                    />
                </span>

                <span className="w-[426px] h-[49px] sm:mt-[25px] md:mt-[20px]  flex items-center justify-center text-[#513675] text-[36px] grot-font" style={{fontWeight: '500'}} >Connectez-vous à votre compte</span>

                <span className="w-[421px] sm:mt-[30px] md:mt-[25px] lg:mt-[20px]  2xl:mt-[35px] flex flex-col items-center justify-center gap-[20px] ">
                    <span className="w-full  flex flex-col items-start justify-start gap-[5px] relative">
                        <p className="text-[20.66px] text-[#513675] flex items-center justify-start font-normal leading-[18.71px] grot-font ">Adresse e-mail</p>
                        <input type="email" name="email" id="email" value={auth.email} onChange={handleChange} className='input-style text-[18px]' />
                        <span className="w-[22px] h-[56px] left-[12.62px] bottom-0 flex items-center justify-start cursor-pointer absolute text-[#513675] ">
                            <IoMailOutline size={22} />
                        </span>
                    </span>

                    <span className="w-full  flex flex-col items-start justify-start gap-[5px] relative">
                        <p className="text-[20.66px] text-[#513675] flex items-center justify-start font-normal leading-[18.71px] grot-font "  >Mot de passe</p>
                        <input type={showPassword ? "text": "password"} name="password" id="password" value={auth.password} onChange={handleChange} className='input-style text-[18px]' />
                        <span className="w-[23px] h-[56px] left-[12.62px] bottom-0 flex items-center justify-start cursor-pointer absolute text-[#513675] font-semibold ">
                            <CiLock size={23} />
                        </span>

                        <span onClick={()=> setShowPassword(!showPassword)} className="w-[22px] h-[56px] right-[12.62px] bottom-0 flex items-center justify-start cursor-pointer absolute text-[#513675] ">
                            {showPassword ? <LuEye size={20} /> : <LuEyeOff size={20} />}
                        </span>
                    </span>

                    <button className="w-[211px] h-[56px] bg-[#513675] rounded-[6.44px] sm:mt-[25px] md:mt-[20px] lg:mt-[15px] grot-font flex items-start justify-center hover:bg-[#6D489D]" style={{fontWeight: '500'}} onClick={()=> router.push('/auth/login') } >
                        <span className=" h-[36.47px] sm:w-[129.92px] mt-[7px] flex items-start justify-between  text-[#F3EFF6] gap-3 ">
                            <p className=" text-[#F3EFF6] mt-[2px] text-[23px] grot-font sm:font-extrabold leading-[32.2px] ">Connexion</p>
                            <span className="w-[25px] flex items-center justify-end relative mt-[9px] ">
                                <IoIosArrowForward size={23} />
                                <span className="w-[10px] absolute -left-[5px]"><LuDot size={23} /> </span>
                            </span>
                        </span>
                    </button>

                </span>

                <span className="w-full flex items-center justify-center gap-[12.24px] sm:mt-[40px] md:mt-[35px] lg:mt-[30px] 2xl:mt-[45px] ">
                    <span className="w-[46.52px] h-[38.35px] text-[#FFFFFF] rounded-[5.71px] bg-[#513675] flex items-center justify-center  cursor-pointer hover:bg-violet-800  ">
                        <RiFacebookFill size={21} />
                    </span>
                    <span className="w-[46.52px] h-[38.35px] text-[#513675] rounded-[5.71px] bg-[#FFFFFF] border-[0.82px] border-[#513675]  flex items-center justify-center cursor-pointer hover:bg-slate-100 ">
                        <RiGoogleFill size={21} />
                    </span>
                    <span className="w-[46.52px] h-[38.35px] text-[#FFFFFF] rounded-[5.71px] bg-[#513675] flex items-center justify-center cursor-pointer hover:bg-violet-800  ">
                        <RiAppleFill size={21} />
                    </span>
                    
                </span>

                <span className="w-[344px] h-[17.01px] flex items-center justify-center relative sm:mt-[55px] md:mt-[50px] lg:mt-[45px] 2xl:mt-[60px]">
                    <span className="w-full h-[2px] border-b border-[#513675] "></span>
                    <span className=" absolute  m-auto w-[60px] h-[40px] flex items-center justify-center grot-font bg-white text-[#513675] text-[21px] " style={{fontWeight: '500'}}>OU</span>
                </span>

                <button className="w-[304px] h-[48.95px] bg-[#513675] rounded-[6.44px] sm:mt-[55px] md:mt-[50px] lg:mt-[45px] 2xl:mt-[60px] grot-font flex items-start justify-center hover:bg-[#6D489D]" style={{fontWeight: '500'}} onClick={()=> router.push('/auth/signup') } >
                        <span className=" h-[31px] mt-[7px] flex items-center justify-between  text-[#F3EFF6] gap-3 ">
                            <p className=" text-[#F3EFF6] text-[23px] grot-font ">Créer un compte </p>
                        </span>
                </button>

            </div>
        </div>

                {/* for mobile */}
        <div className="sm:hidden block w-[90%] flex flex-col items-center justify-start mt-[121px]">
            <span className="w-[160px] h-[45.79px] flex items-center justify-center relative overflow-hidden  ">
                <Image 
                    src="/logo-poma.svg" 
                    alt="Authentication" 
                    layout="fill" 
                    objectFit="cover" 
                />
            </span>

            <span className="w-[95%] h-[29px] mt-[30px] flex items-center justify-center text-[#513675] playfair-display-font font-semibold text-[22px] leading-[29.33px] text-center ">
            Connectez-vous à votre compte
            </span>

            <div className="w-[95%] mx-auto mt-[40px]  flex flex-col items-center justify-start ">
                
                <span className="w-[164.03px]  h-[38.35px] flex items-center justify-between rounded-[5.71px] ">
                    <span className=" w-[46.52px] h-[38.35px] flex items-center justify-center text-[#513675] rounded-[5.71px] border-[0.5px] border-[#000000] hover:bg-[#513675] hover:border-[#513675] hover:text-[#FFFFFF] ">
                        <RiFacebookFill size={21} />
                    </span>
                    <span className=" w-[46.52px] h-[38.35px] flex items-center justify-center text-[#513675] rounded-[5.71px] border-[0.5px] border-[#000000] hover:bg-[#513675] hover:border-[#513675] hover:text-[#FFFFFF] ">
                        <RiGoogleFill size={21} />
                    </span>
                    <span className=" w-[46.52px] h-[38.35px] flex items-center justify-center text-[#513675] rounded-[5.71px] border-[0.5px] border-[#000000] hover:bg-[#513675] hover:border-[#513675] hover:text-[#FFFFFF] ">
                        <RiAppleFill size={21} />
                    </span>
                </span>
           

                <span className="w-full h-[66px] mt-[20px] flex flex-col items-start justify-start gap-[2px] relative">
                    <p className="text-[24px] text-[#513675] flex items-center justify-start grot-font font-semibold leading-[24.41px] " style={{fontWeight: '600', lineHeight: '24.41px'}} >Adresse e-mail</p>
                    <input type="email" name="email" id="email" value={auth.email} onChange={handleChange} className='h-[40px] w-full outline-none border-2 focus:border-[#513675] px-[30px] rounded-[4.69px] bg-[#E9E2F0] ' />
                    <span className="w-[15.78px] h-[40px] left-[12px] bottom-0 flex items-center justify-center  cursor-pointer absolute text-[#513675] ">
                        <IoMailOutline size={22} />
                    </span>
                </span>

                <span className="w-full mt-[20px] flex flex-col items-start justify-start gap-[5px] relative">
                    <p className="text-[24px] text-[#513675] flex items-center justify-start grot-font font-semibold leading-[24.41px] "  >Mot de passe</p>
                    <input type={showPassword ? "text": "password"} name="password" id="password" value={auth.password} onChange={handleChange} className='h-[40px] w-full outline-none border-2 focus:border-[#513675] px-[35px] rounded-[4.69px] bg-[#E9E2F0] ' />
                    <span className="w-[23px] h-[40px] left-[12px] bottom-0 flex items-center justify-start cursor-pointer absolute text-[#513675] font-semibold ">
                        <CiLock size={21} />
                    </span>

                    <span onClick={()=> setShowPassword(!showPassword)} className="w-[22px] h-[40px] right-[12px] bottom-0 flex items-center justify-start cursor-pointer absolute text-[#513675] ">
                        {showPassword ? <LuEye size={20} /> : <LuEyeOff size={19} />}
                    </span>
                </span>

                <button className="w-[142.01px] h-[46.28px] bg-[#513675] rounded-[64px] mt-[40px] grot-font flex items-start justify-center hover:bg-[#6D489D]" style={{fontWeight: '700'}} onClick={()=> router.push('/home') } >
                    <span className=" h-[24px] mt-[9.22px] flex items-center justify-between  text-[#F3EFF6] gap-3 ">
                        <p className=" text-[#F3EFF6] text-[18px] grot-font ">Connexion</p>
                        
                    </span>
                </button>

            </div>

            <span className="w-[95%] h-[10.57px] flex items-center justify-center relative mt-[40px] ">
                <span className="w-full h-[2px] border-b border-[#513675] "></span>
                <span className=" absolute  m-auto w-[60px] h-[40px] flex items-center justify-center grot-font bg-white text-[#513675] text-[21px] " style={{fontWeight: '600'}}>OU</span>
            </span>

            <button className="w-[304px] h-[48.95px] bg-[#513675] rounded-[64px] mt-[40px] grot-font flex items-start justify-center hover:bg-[#6D489D]" style={{fontWeight: '700'}} onClick={()=> router.push('/auth/signup') } >
                    <span className=" h-[24px] mt-[10.93px] flex items-center justify-between  text-[#F3EFF6] gap-3 ">
                        <p className=" text-[#F3EFF6] text-[18px] grot-font ">Créer un compte </p>
                    </span>
            </button>




        </div>
            
    </div> 
  )
}

export default Login