'use client'
import React, {useState, useEffect} from 'react'
import Image from 'next/image'
import { LoadingBar } from './donutChart'
import { GoDotFill } from "react-icons/go";
import { PiCaretRightBold } from "react-icons/pi";
import { useRouter } from 'next/navigation';
import { IoIosArrowForward } from 'react-icons/io';
import { LuDot } from 'react-icons/lu';

const LandingPage = ()=>{
    const router = useRouter()
    const [next, setNext] = useState(true)

    setTimeout(() => {
        setNext(false)
    }, 3000);

    return(
        <div className="w-full h-[100vh] bg-white flex items-center justify-center ">
            {next ? 
            <div className="w-full  flex flex-col items-center justify-start  mt-[200px] sm:mt-[150px] ">
                <span className="w-[195px] h-[55.79px] sm:w-[478.51px] sm:h-[133.15px] flex items-center justify-center relative overflow-hidden">
                    <Image 
                        src="/logo-poma.svg" 
                        alt="Authentication" 
                        layout="fill" 
                        objectFit="cover" 
                    />
                </span>

                <span className="w-[57.5px] h-[57.px] sm:w-[75.25px] sm:h-[75.25px] mt-[258.21px] sm:mt-[206.85px] rounded-[100%] flex items-center justify-center  ">
                    <span className="w-full rotating-div h-full w-full items-center">
                        <LoadingBar />
                    </span>
                </span>
            </div>
            : 
            <div className="w-full h-full flex flex-col items-start justify-center">
                <div className="w-full h-full flex flex-col items-center justify-start sm:justify-center relative ">

                    {/* The floating icon */}
                    <div className="absolute -right-[350px] -top-[0] sm:-top-[80px] sm:-right-[150px] md:-top-[40px] sm:-right-[100px] lg:-right-[140px]  "  style={{transform: 'rotate(0deg)'}} >
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
                   
                    <span className="max-sm:w-[168px]   max-sm:h-[47.79px] sm:w-[300px] h-[80px] md:w-[310px] md:h-[85px] lg:w-[320px] lg:h-[90px]    2xl:w-[355.88px] 2xl:h-[97px] mt-[198px] sm:mt-[46px] lg:mt-0   flex items-center justify-center relative overflow-hidden md:scale-60 ">
                        <Image 
                            src="/logo-poma.svg" 
                            alt="Authentication" 
                            layout="fill" 
                            objectFit="cover" 
                        />
                    </span>

                    <div className="w-[350px] max-sm:w-[90%]  sm:w-[87%] md:w-[750px] flex items-start justify-center max-sm:mt-[20px] sm:mt-[20px] ">
                        <span className="text-[22px] sm:text-[36px] lg:text-[30px] xl:text-[32px] 2xl:[36px] text-[#513675] text-center playfair-display-font sm:grot-font font-bold sm:font-normal leading-[29.33px] sm:leading-[38px] ">
                            Trouvez votre
                            <span className="font-bold sm:font-semibold playfair-display-font sm:grot-font" > compagnon de cœur</span> et créez des
                            <span className="font-bold sm:font-semibold  playfair-display-font sm:grot-font" > souvenirs précieux</span> avec Poma !
                        </span>
                    </div>

                    <span className="w-[275px] h-[266.36px] sm:w-[387px] sm:h-[374.52px] 2xl:w-[397px] 2xl:h-[384.52px]  lg:h-[350px] xl:w-[365px]  flex items-center justify-center relative overflow-hidden max-sm:mt-[52.47px] sm:mt-[32px] lg:[25px] 2xl:[32px]">
                        <Image 
                            src="/Group 692.svg" 
                            alt="Authentication" 
                            layout="fill" 
                            objectFit="cover" 
                        />
                    </span>

                    <button className="w-[304px] h-[48.95px] sm:w-[211px] sm:h-[56px] bg-[#513675] rounded-[64px] sm:rounded-[6.44px] max-sm:mt-[40px] sm:mt-[21.48px] grot-font flex items-start justify-center hover:bg-[#6D489D] font-bold sm:font-medium"  onClick={()=> {router.push('/auth')}}>
                        <span className=" h-[24px]  w-[54px] sm:h-[36.47px] sm:w-[94.92px] mt-[7.93px] sm:mt-[7px] flex items-start justify-between  text-[#F3EFF6]  ">
                            <p className=" text-[#F3EFF6] text-[18px] sm:text-[23px] grot-font sm:mt-[2px] sm:leading-[32.2px] ">Suivant</p>
                            <span className="hidden sm:block sm:w-[25px] sm:flex sm:items-center sm:justify-end sm:relative sm:mt-[9px] ">
                                <IoIosArrowForward size={23} />
                                <span className="w-[10px] absolute -left-[5px]"><LuDot size={23} /> </span>
                            </span>
                        </span>
                    </button>


                </div>
            </div> }
        </div>
    )
}

export default LandingPage