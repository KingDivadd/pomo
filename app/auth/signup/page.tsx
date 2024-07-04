'use client'
import React, {useState, useEffect} from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { CiLock } from 'react-icons/ci'
import { IoMailOutline } from 'react-icons/io5'
import { LuEye, LuEyeOff } from 'react-icons/lu'
import { RiFacebookFill, RiGoogleFill, RiAppleFill } from 'react-icons/ri'
import { GoPerson } from 'react-icons/go'


const Signup = () => {
    const router = useRouter()
    const [auth, setAuth] = useState({name: '', email: '', password: '', confirmPassword: ''})
    const [next, setNext] = useState('signup')
    const [selected, setSelected] = useState('')
    const [showPassword, setShowPassword] = useState(false)

    function handleChange(e:any) {
        const name = e.target.name
        const value = e.target.value
        setAuth({...auth, [name]: value})
    }

    function handleSubmit(e:any) {
        e.preventDefault()
        console.log(auth)
    }

    useEffect(()=>{
        const stage = sessionStorage.getItem('signup-stage')
        if (!stage || stage == null){
            setNext('signup')
        }else{
            setNext(stage)
        }
    },[])
    
  return (
    <div className="w-full h-[100vh] flex flex-col items-center justify-start relative overflow-hidden ">
        {/* The floating icon */}
        <div className="absolute -right-[350px] -top-[70px] sm:-top-[85px] sm:-right-[175px] md:-top-[75px] md:-right-[175px] sm:-right-[100px] lg:-right-[140px]  "  style={{transform: 'rotate(0deg)'}} >
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

        {/* For tabs and bigger screen */}
        {next =='signup' && 
        <div className=" hidden sm:block sm:w-full sm:h-full sm:flex sm:flex-col sm:items-center sm:justify-start relative ">
            <div className="flex flex-col items-center justify-center w-full h-full">
        
                <span className="sm:w-[213px] sm:h-[60px]  flex items-center justify-center relative overflow-hidden ">
                    <Image 
                        src="/logo-poma.svg" 
                        alt="Authentication" 
                        layout="fill" 
                        objectFit="cover" 
                    />
                </span>

                <span className="w-[426px] h-[49px] sm:mt-[15px]  flex items-center justify-center text-[#513675] text-[36px] playfair-display-font" style={{fontWeight: '500'}} >Inscrivez-vous</span>

                <span className="w-[421px] sm:mt-[30px] md:mt-[25px] lg:mt-[20px]  2xl:mt-[35px] flex flex-col items-center justify-center gap-[20px] ">
                    <span className="w-full  flex flex-col items-start justify-start gap-[5px] relative">
                        <p className="text-[20.66px] text-[#513675] flex items-center justify-start font-normal leading-[18.71px] grot-font ">Nom d’utilisateur</p>
                        <input type="text" name="name" id="name" value={auth.name} onChange={handleChange} className='input-style text-[18px]' />
                        <span className="w-[22px] h-[56px] left-[12.62px] bottom-0 flex items-center justify-start cursor-pointer absolute text-[#513675] ">
                            <GoPerson size={22} />
                        </span>
                    </span>
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

                    <span className="w-full  flex flex-col items-start justify-start gap-[5px] relative">
                        <p className="text-[20.66px] text-[#513675] flex items-center justify-start font-normal leading-[18.71px] grot-font "  >Confirmation du mot de passe</p>
                        <input type={showPassword ? "text": "password"} name="confirmPassword" id="confirmPassword" value={auth.confirmPassword} onChange={handleChange} className='input-style text-[18px]' />
                        <span className="w-[23px] h-[56px] left-[12.62px] bottom-0 flex items-center justify-start cursor-pointer absolute text-[#513675] font-semibold ">
                            <CiLock size={23} />
                        </span>

                        <span onClick={()=> setShowPassword(!showPassword)} className="w-[22px] h-[56px] right-[12.62px] bottom-0 flex items-center justify-start cursor-pointer absolute text-[#513675] ">
                            {showPassword ? <LuEye size={20} /> : <LuEyeOff size={20} />}
                        </span>
                    </span>

                    

                </span>

                


                <button className="w-[304px] h-[48.95px] bg-[#513675] rounded-[6.44px] sm:mt-[55px] md:mt-[50px] lg:mt-[45px] 2xl:mt-[60px] grot-font flex items-start justify-center hover:bg-[#6D489D]" style={{fontWeight: '500'}} onClick={()=> setNext('profile') } >
                        <span className=" h-[31px] mt-[7px] flex items-center justify-between  text-[#F3EFF6] gap-3 ">
                            <p className=" text-[#F3EFF6] text-[23px] grot-font ">Inscription </p>
                        </span>
                </button>

            </div>
        </div>}

        {next == 'profile' && <div className="hidden sm:block sm:w-full sm:h-full sm:flex sm:flex-col sm:items-center sm:justify-center">
            <span className="sm:w-[200px] sm:h-[65px] md:w-[210px] md:h-[58px] lg:w-[205px] h-[57px] 2xl:w-[227.47px]  2xl:h-[62px] flex items-center justify-center relative overflow-hidden  ">
                <Image 
                    src="/logo-poma.svg" 
                    alt="Authentication" 
                    layout="fill" 
                    objectFit="cover" 
                />
            </span>

            <span className="w-[300px] h-[43px] sm:mt-[15px] md:mt-[10px] sm:text-[30px]  grot-font flex items-start justify-center text-[#513675]  font-medium md:text-[32px] leading-[43.39px] ">
            Sélectionnez votre profil
            </span>

            <div className="sm:w-[95%] md:w-full sm:mt-[20px] md:mt-[15px] 2xl:mt-[30px] mx-auto   flex flex-row items-center justify-center sm:gap-[15px] md:gap-[20px] lg:gap-[25px] 2xl:gap-[29px]">

                <div className={selected == 'grand-parent' ?'active-profile':'profile'} onClick={()=> setSelected('grand-parent')}>
                    <span className="w-[187.55px] h-[238.74px] mt-[68.72px] flex items-center justify-center relative overflow-hidden  ">
                        {/* Missing Image */}
                        <Image 
                            src="/images/Group 1000002558.svg" 
                            alt="Authentication" 
                            layout="fill" 
                            objectFit="cover" 
                            />
                    </span>

                    <span className="w-[240px] h-[51px] mt-[59.54px] flex items-start justify-center text-[#513675] grot-font font-semibold text-[22px] leading-[26px] ">
                    Grand-Parents
                    </span>
                    
                </div>

                <div className={selected == 'infant' ?'active-profile':'profile'} onClick={()=> setSelected('infant')}>
                    <span className="w-[150px] h-[210px] mt-[80.72px] flex items-center justify-center relative overflow-hidden  ">
                        {/* Missing Image */}
                        <Image 
                            src="/images/Group 1000002559.svg" 
                            alt="Authentication" 
                            layout="fill" 
                            objectFit="cover" 
                            />
                    </span>

                    <span className="w-[240px] h-[51px] mt-[74.5px] flex items-start justify-center text-[#513675] grot-font font-semibold text-[22px] leading-[26px] ">
                    Petits-Enfants
                    </span>
                    
                </div>



            </div>

            <button className="w-[265px] h-[56px] sm:mt-[30px] md:mt-[25px] 2xl:mt-[40px] bg-[#513675] rounded-[6.44px]  grot-font flex items-start justify-center hover:bg-[#6D489D]"  onClick={()=> router.push('/home') } >
                    <span className=" h-[36px] mt-[10px] flex items-center justify-between  text-[#F3EFF6] gap-3 ">
                        <p className=" text-[#F3EFF6] text-[18px] font-extrabold grot-font ">Valider </p>
                    </span>
            </button>


        </div>}

        {/* Below are for mobile */}

        {next == 'signup' && 
        
        <div className="sm:hidden block w-[90%] flex flex-col items-center justify-start mt-[20px]">

            <div className="w-full h-[21px]   ">

                <span className="w-[21px] h-[21px] flex items-center justify-center relative overflow-hidden " style={{ transform: 'rotate(90deg)' }} onClick={()=> router.push('/auth/login')} >
                    <Image 
                        src="/Group 686.svg" 
                        alt="Authentication" 
                        layout="fill" 
                        objectFit="cover" 
                        
                    />
                </span>
            </div>

            <span className="w-[160px] h-[45px] mt-[50px] flex items-center justify-center relative overflow-hidden  ">
                <Image 
                    src="/logo-poma.svg" 
                    alt="Authentication" 
                    layout="fill" 
                    objectFit="cover" 
                />
            </span>

            <p className="text-[20px] font-extrabold leading-[32px] text-[#513675] playfair-display-font ">Inscrivez-vous </p>

            <div className="w-[95%] mx-auto mt-[56px]  flex flex-col items-center justify-start ">
                
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

                <span className="w-full h-[66px] mt-[49.65px] flex flex-col items-start justify-start gap-[2px] relative">
                    <p className="text-[24px] text-[#513675] flex items-center justify-start grot-font font-semibold leading-[24.41px] " style={{fontWeight: '600', lineHeight: '24.41px'}} >Nom d’utilisateur</p>
                    <input placeholder={'johndoe'} type="text" name="name" id="name" value={auth.name} onChange={handleChange} className='h-[40px] w-full outline-none border-2 focus:border-[#513675] px-[30px] rounded-[4.69px] bg-[#E9E2F0] ' />
                    <span className="w-[15.78px] h-[40px] left-[12px] bottom-0 flex items-center justify-center  cursor-pointer absolute text-[#513675] ">
                        <GoPerson size={22} />
                    </span>
                </span> 

                <span className="w-full h-[66px] mt-[20px] flex flex-col items-start justify-start gap-[2px] relative">
                    <p className="text-[24px] text-[#513675] flex items-center justify-start grot-font font-semibold leading-[24.41px] " style={{fontWeight: '600', lineHeight: '24.41px'}} >Adresse e-mail</p>
                    <input  type="email" name="email" id="email" value={auth.email} onChange={handleChange} className='h-[40px] w-full outline-none border-2 focus:border-[#513675] px-[30px] rounded-[4.69px] bg-[#E9E2F0] ' />
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

                <span className="w-full mt-[20px] flex flex-col items-start justify-start gap-[5px] relative">
                    <p className="text-[24px] text-[#513675] flex items-center justify-start grot-font font-semibold leading-[24.41px] "  >Confirmation du mot de passe</p>
                    <input type={showPassword ? "text": "confirmPassword"} name="confirmPassword" id="confirmPassword" value={auth.confirmPassword} onChange={handleChange} className='h-[40px] w-full outline-none border-2 focus:border-[#513675] px-[35px] rounded-[4.69px] bg-[#E9E2F0] ' />
                    <span className="w-[23px] h-[40px] left-[12px] bottom-0 flex items-center justify-start cursor-pointer absolute text-[#513675] font-semibold ">
                        <CiLock size={21} />
                    </span>

                    <span onClick={()=> setShowPassword(!showPassword)} className="w-[22px] h-[40px] right-[12px] bottom-0 flex items-center justify-start cursor-pointer absolute text-[#513675] ">
                        {showPassword ? <LuEye size={20} /> : <LuEyeOff size={19} />}
                    </span>
                </span>

                <button className="w-[173px] h-[52px] bg-[#513675] rounded-[64px] mt-[20px] grot-font flex items-start justify-center hover:bg-[#6D489D]" style={{fontWeight: '700'}} onClick={()=> setNext('profile')} >
                    <span className=" h-[24px] mt-[9.22px] flex items-center justify-between  text-[#F3EFF6] gap-3 ">
                        <p className=" text-[#F3EFF6] text-[22px] grot-font leading-[26px] ">Inscription</p>
                        
                    </span>
                </button>

            </div>



        </div>

        }

        {next == 'profile' && 
        <div className="block sm:hidden w-full   flex flex-col items-center justify-start mt-[120px] ">
            <span className="w-[160px] h-[45px]  flex items-center justify-center relative overflow-hidden  ">
                <Image 
                    src="/logo-poma.svg" 
                    alt="Authentication" 
                    layout="fill" 
                    objectFit="cover" 
                />
            </span>

            <span className="w-[317px] h-[29px] mt-[20px] flex items-center justify-center text-[#513675] playfair-display-font font-semibold text-[22px] leading-[29.33px] ">
            Sélectionnez votre profil
            </span>

            <div className="w-[90%] mx-auto  h-[300px] mt-[40px]  flex flex-row items-center justify-between gap-[16px]">

                <div className="w-[50%] h-[300px] rounded-[8px] flex flex-col items-center justify-start hover:bg-[#E9E2F0]  border-[3px] border-[#E9E2F0]">
                    <span className="w-[98px] h-[121.59px] mt-[35px] flex items-center justify-center relative overflow-hidden  ">
                        {/* Missing Image */}
                        <Image 
                            src="/images/Group 1000002558.svg" 
                            alt="Authentication" 
                            layout="fill" 
                            objectFit="cover" 
                            />
                    </span>

                    <span className="w-[124.23px] h-[26px] mt-[30.41px] flex items-center justify-center text-[#513675] grot-font font-semibold text-[22px] leading-[26px] ">
                    Grand-Parents
                    </span>
                    
                </div>

                <div className="w-[50%] h-[300px] rounded-[8px] flex flex-col items-center justify-start hover:bg-[#E9E2F0] border-[3px] border-[#E9E2F0] ">
                    <span className="w-[82.27px] h-[121.59px] mt-[35px] flex items-center justify-center relative overflow-hidden  ">
                        {/* Missing Imag  */}
                        <Image 
                            src="/images/Group 1000002559.svg" 
                            alt="Authentication" 
                            layout="fill" 
                            objectFit="cover" 
                            />
                    </span>

                    <span className="w-[124.23px] h-[26px] mt-[30.41px] flex items-center justify-center text-[#513675] grot-font font-semibold text-[22px] leading-[26px] ">
                    Petits-Enfants
                    </span>
                    
                </div>

            </div>

           

            <button className="w-[304px] h-[48.95px] bg-[#513675] rounded-[64px] mt-[61px] grot-font flex items-start justify-center hover:bg-[#6D489D]" style={{fontWeight: '700'}} onClick={()=> router.push('/auth/interest') } >
                    <span className=" h-[24px] mt-[10.93px] flex items-end justify-between  text-[#F3EFF6] gap-3 ">
                        <p className=" text-[#F3EFF6] text-[18px] ">Valider </p>
                    </span>
            </button>




        </div>}

        
    </div>
  )
}

export default Signup