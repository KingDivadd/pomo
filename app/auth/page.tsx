'use client'
import React, {useRef, useState} from 'react'
import { PiCaretRightBold } from 'react-icons/pi'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { Swiper as SwiperClass } from 'swiper/types'; // Import Swiper types
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';
import { IoIosArrowForward } from 'react-icons/io'
import { LuDot } from 'react-icons/lu'

const AuthLanding = () => {
    const [level, setLevel] = useState('one')
    const router = useRouter()
    const swiperRef = useRef<SwiperClass | null>(null);

  const handleNext = () => {
    if (swiperRef.current) {
      swiperRef.current.slideNext();
    }
  };


  return (
    <div className="w-full h-[100vh] flex flex-col items-start justify-start overflow-hidden relative ">
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

        {/* this is for screen bigger than mobile phones */}
        <div className="hidden sm:block sm:w-full sm:h-full sm:flex sm:items-center sm:justify-center ">
            <div className="w-full h-full flex flex-col items-center justify-center relative max-md:w-[90%] ">


            {level == 'one' && 
            
            <div className=" w-full  w-[350px] mt-[15px] flex flex-col items-center justify-start relative "  >
                <span className="w-[198px] bg-gren-100 h-[45.79px] sm:w-[430px] sm:h-[125px]  flex items-center justify-center relative overflow-hidden  ">
                    <Image 
                        src="/logo-poma.svg" 
                        alt="Authentication" 
                        layout="fill" 
                        objectFit="cover" 
                    />
                </span>

                <div className="w-[650px] h-[413px] flex flex-col justify-start items-center rounded-[12px] mt-[15.21px] bg-[#E9E2F0] cursor-pointer"  onClick={()=> router.push('/auth/login')}>
                    <span className="w-[220px]  h-[200px] mt-[40px] flex items-center justify-center relative overflow-hidden  ">
                        <Image 
                            src="/Frame (2).svg" 
                            alt="Authentication" 
                            layout="fill" 
                            objectFit="cover" 
                        />
                    </span>
                    <span className="w-[330px]  h-[116px] text-[22px] font-bold leading-[29.33px] text-center text-[#513675] playfair-display-font mt-[10px] ">Créez un compte et répondez à notre questionnaire pour renseigner vos centres d’intérêt.</span>
                </div>

                <span className="w-[350px] h-[29px] font-semibold relative flex items-center justify-end">
                    <span className="absolute w-full bg-transparent flex items-end justify-center h-full">
                        <span className=" w-[51px] h-[9px] flex items-center justify-between gap-[12px] ">
                            <span className="w-[9px] h-[9px] rounded-[100%] bg-[#513675] "></span>
                            <span className="w-[9px] h-[9px] rounded-[100%] bg-[#E9E2F0] "></span>
                            <span className="w-[9px] h-[9px] rounded-[100%] bg-[#E9E2F0] "></span>
                        </span>
                    </span>
                </span>

                <button className="mx-auto w-[211px] h-[56px] bg-[#513675] rounded-[6.44px] mt-[20px] sm:mt-[21.48] grot-font flex items-start justify-center hover:bg-[#6D489D] font-bold sm:font-medium"  onClick={()=> setLevel('two')}>
                    <span className=" h-[24px]  w-[54px] sm:h-[36.47px] sm:w-[104.92px] mt-[10.93px] sm:mt-[7px] flex items-start justify-between  text-[#F3EFF6] gap-3 ">
                        <p className=" text-[#F3EFF6] text-[18px] sm:text-[23px] grot-font sm:mt-[2px] sm:leading-[32.2px] ">Suivant</p>
                        <span className="hidden sm:block sm:w-[25px] sm:flex sm:items-center sm:justify-end sm:relative sm:mt-[9px] ">
                            <IoIosArrowForward size={23} />
                            <span className="w-[10px] absolute -left-[5px]"><LuDot size={23} /> </span>
                        </span>
                    </span>
                </button>

            </div>

            }

            {level == 'two' && 
            
            <div className=" w-full  w-[350px] mt-[15px] flex flex-col items-center justify-start relative " >
                <span className="w-[198px] bg-gren-100 h-[45.79px] sm:w-[430px] sm:h-[125px]  flex items-center justify-center relative overflow-hidden  ">
                    <Image 
                        src="/logo-poma.svg" 
                        alt="Authentication" 
                        layout="fill" 
                        objectFit="cover" 
                    />
                </span>

                <div className="w-[650px]  h-[413px] flex flex-col justify-start items-center rounded-[12px] mt-[15.21px] bg-[#E9E2F0] cursor-pointer  onClick={()=> router.push('/auth/login')}">
                    <span className="w-[200px]  h-[240px] mt-[40px] flex items-center justify-center relative overflow-hidden  ">
                        <Image 
                            src="/images/Group 12574.svg" 
                            alt="Authentication" 
                            layout="fill" 
                            objectFit="cover" 
                        />
                    </span>
                    <span className="w-[330px]  h-[116px] text-[22px] font-bold leading-[29.33px] text-center text-[#513675] playfair-display-font mt-[10px] ">Trouvez votre compagnon de cœur  et débutez votre aventure avec Poma !</span>
                </div>

                <span className="w-[350px] h-[29px] font-semibold relative flex items-center justify-end">
                    <span className="absolute w-full bg-transparent flex items-end justify-center h-full">
                        <span className=" w-[51px] h-[9px] flex items-center justify-between gap-[12px] ">
                            <span className="w-[9px] h-[9px] rounded-[100%] bg-[#E9E2F0] "></span>
                            <span className="w-[9px] h-[9px] rounded-[100%] bg-[#513675] "></span>
                            <span className="w-[9px] h-[9px] rounded-[100%] bg-[#E9E2F0] "></span>
                        </span>
                    </span>
                </span>

                <button className="mx-auto w-[211px] h-[56px] bg-[#513675] rounded-[6.44px] mt-[20px] sm:mt-[21.48] grot-font flex items-start justify-center hover:bg-[#6D489D] font-bold sm:font-medium"  onClick={()=> setLevel('three')}>
                    <span className=" h-[24px]  w-[54px] sm:h-[36.47px] sm:w-[104.92px] mt-[10.93px] sm:mt-[7px] flex items-start justify-between  text-[#F3EFF6] gap-3 ">
                        <p className=" text-[#F3EFF6] text-[18px] sm:text-[23px] grot-font sm:mt-[2px] sm:leading-[32.2px] ">Suivant</p>
                        <span className="hidden sm:block sm:w-[25px] sm:flex sm:items-center sm:justify-end sm:relative sm:mt-[9px] ">
                            <IoIosArrowForward size={23} />
                            <span className="w-[10px] absolute -left-[5px]"><LuDot size={23} /> </span>
                        </span>
                    </span>
                </button>

            </div>

            }

            {level == 'three' && 
            
            <div className=" w-full  w-[350px] mt-[15px] flex flex-col items-center justify-start relative " >
                <span className="w-[198px] bg-gren-100 h-[45.79px] sm:w-[430px] sm:h-[125px]  flex items-center justify-center relative overflow-hidden  ">
                    <Image 
                        src="/logo-poma.svg" 
                        alt="Authentication" 
                        layout="fill" 
                        objectFit="cover" 
                    />
                </span>

                <div className="w-[650px] h-[413px] flex flex-col justify-start items-center rounded-[12px] mt-[15.21px] bg-[#E9E2F0] cursor-pointer"  onClick={()=> router.push('/auth/login')}>
                    <span className="w-[220px]  h-[200px] mt-[40px] flex items-center justify-center relative overflow-hidden  ">
                        <Image 
                            src="/Frame (3).svg" 
                            alt="Authentication" 
                            layout="fill" 
                            objectFit="cover" 
                        />
                    </span>
                    <span className="w-[330px]  h-[116px] text-[22px] font-bold leading-[29.33px] text-center text-[#513675] playfair-display-font mt-[10px] ">Participez à des activités avec vos petits-enfants de cœur ou pour en rencontrer de nouveaux.</span>
                </div>

                <span className="w-[350px] h-[29px] font-semibold relative flex items-center justify-end">
                    <span className="absolute w-full bg-transparent flex items-end justify-center h-full">
                        <span className=" w-[51px] h-[9px] flex items-center justify-between gap-[12px] ">
                            <span className="w-[9px] h-[9px] rounded-[100%] bg-[#E9E2F0] "></span>
                            <span className="w-[9px] h-[9px] rounded-[100%] bg-[#E9E2F0] "></span>
                            <span className="w-[9px] h-[9px] rounded-[100%] bg-[#513675] "></span>
                        </span>
                    </span>
                </span>

                <button className="mx-auto w-[211px] h-[56px] bg-[#513675] rounded-[6.44px] mt-[20px] sm:mt-[21.48] grot-font flex items-start justify-center hover:bg-[#6D489D] font-bold sm:font-medium"  onClick={()=> setLevel('one')}>
                    <span className=" h-[24px]  w-[54px] sm:h-[36.47px] sm:w-[104.92px] mt-[10.93px] sm:mt-[7px] flex items-start justify-between  text-[#F3EFF6] gap-3 ">
                        <p className=" text-[#F3EFF6] text-[18px] sm:text-[23px] grot-font sm:mt-[2px] sm:leading-[32.2px] ">Suivant</p>
                        <span className="hidden sm:block sm:w-[25px] sm:flex sm:items-center sm:justify-end sm:relative sm:mt-[9px] ">
                            <IoIosArrowForward size={23} />
                            <span className="w-[10px] absolute -left-[5px]"><LuDot size={23} /> </span>
                        </span>
                    </span>
                </button>

            </div>

            }

            </div>
        </div>

        {/* The rest is for mobile */}
        {level === 'one' && 
        
        <div className="block sm:hidden w-full h-[586.74px] w-[350px] mt-[121px] flex flex-col items-center justify-start relative ">
            <span className="w-[182px] h-[52px] sm:w-[355.88px] sm:h-[97px]  flex items-center justify-center relative overflow-hidden  ">
                <Image 
                    src="/logo-poma.svg" 
                    alt="Authentication" 
                    layout="fill" 
                    objectFit="cover" 
                />
            </span>

            <div className="w-[350px] h-[353px] flex flex-col justify-start items-center rounded-[12px] mt-[40.21px] bg-[#E9E2F0]"  onClick={()=> router.push('/auth/login')}>
                <span className="w-[310px] h-[116px] text-[22px] font-bold leading-[29.33px] text-center text-[#513675] playfair-display-font mt-[20px] ">Répondez à notre questionnaire pour être mis en relation avec des membres partageant vos intérêts.</span>
                <span className="w-[172.81px] h-[157px] mt-[40px] flex items-center justify-center relative overflow-hidden  " >
                    <Image 
                        src="/Frame (2).svg" 
                        alt="Authentication" 
                        layout="fill" 
                        objectFit="cover" 
                    />
                </span>
            </div>

            <span className="w-[350px] h-[29px] font-semibold relative flex items-center justify-end">
                <span className="absolute w-full bg-transparent flex items-end justify-center h-full">
                    <span className=" w-[51px] h-[9px] flex items-center justify-between gap-[12px] ">
                        <span className="w-[9px] h-[9px] rounded-[100%] bg-[#513675] "></span>
                        <span className="w-[9px] h-[9px] rounded-[100%] bg-[#E9E2F0] "></span>
                        <span className="w-[9px] h-[9px] rounded-[100%] bg-[#E9E2F0] "></span>
                    </span>
                </span>
                <p className="text-[22px] text-[#513675] playfair-display-font ">1/3</p>
            </span>

            <button className="w-[304px] h-[48.95px] sm:w-[211px] sm:h-[56px] bg-[#513675] rounded-[64px] sm:rounded-[6.44px] mt-[40px] sm:mt-[21.48] grot-font flex items-start justify-center hover:bg-[#6D489D] font-bold sm:font-medium"  onClick={()=> setLevel('two')}>
                <span className=" h-[24px] w-[54px] sm:h-[36.47px] mt-[10.93px] sm:mt-[7px] flex items-center justify-between  text-[#F3EFF6] gap-3 ">
                    <p className=" text-[#F3EFF6] text-[18px] sm:text-[23px] ">Suivant</p>
                    <span className="hidden sm:block h-[16.03px] w-[14.92px] relative   flex items-center justify-end">
                        <span className="absolute w-[4.23px] h-[4.23px] bg-[#F3EFF6] flex items-center justfy-center rounded-[100%] right-[14.92px] "></span>
                        <span className="flex items-center justify-end  h-full ">

                            <PiCaretRightBold size={22}  />
                        </span>
                        

                    </span>
                </span>
            </button>

            <span className="w-[304px] mt-[4.26px] flex items-center justify-end text-[18px] text-[#513675] font-semibold leading-[21.41px] h-[24px] grot-font ">{'Passer ->'}</span>



        </div>}

        {level === 'two' && 
        
        <div className="block sm:hidden w-full h-[586.74px] w-[350px] mt-[121px] flex flex-col items-center justify-start relative ">
        <span className="w-[182px] h-[52px] sm:w-[355.88px] sm:h-[97px]  flex items-center justify-center relative overflow-hidden  ">
            <Image 
                src="/logo-poma.svg" 
                alt="Authentication" 
                layout="fill" 
                objectFit="cover" 
            />
        </span>

        <div className="w-[350px] h-[353px] flex flex-col justify-start items-center rounded-[12px] mt-[40.21px] bg-[#E9E2F0]"  onClick={()=> router.push('/auth/login')}>
            <span className="w-[310px] h-[116px] text-[22px] font-bold leading-[29.33px] text-center text-[#513675] playfair-display-font mt-[20px] ">Participez à des activités pour créer des souvenirs précieux avec vos familles de coeur.</span>
            <span className="w-[152.81px] h-[187px]  flex items-center justify-center relative overflow-hidden  ">
                <Image 
                    src="/images/Group 12574.svg" 
                    alt="Authentication" 
                    layout="fill" 
                    objectFit="cover" 
                />
            </span>
        </div>

        <span className="w-[350px] h-[29px] font-semibold relative flex items-center justify-end">
            <span className="absolute w-full bg-transparent flex items-end justify-center h-full">
                <span className=" w-[51px] h-[9px] flex items-center justify-between gap-[12px] ">
                    <span className="w-[9px] h-[9px] rounded-[100%] bg-[#E9E2F0] "></span>
                    <span className="w-[9px] h-[9px] rounded-[100%] bg-[#513675] "></span>
                    <span className="w-[9px] h-[9px] rounded-[100%] bg-[#E9E2F0] "></span>
                </span>
            </span>
            <p className="text-[22px] text-[#513675] playfair-display-font ">2/3</p>
        </span>

        <button className="w-[304px] h-[48.95px] sm:w-[211px] sm:h-[56px] bg-[#513675] rounded-[64px] sm:rounded-[6.44px] mt-[40px] sm:mt-[21.48] grot-font flex items-start justify-center hover:bg-[#6D489D] font-bold sm:font-medium"  onClick={()=> setLevel('three')}>
            <span className=" h-[24px] w-[54px] sm:h-[36.47px] mt-[10.93px] sm:mt-[7px] flex items-center justify-between  text-[#F3EFF6] gap-3 ">
                <p className=" text-[#F3EFF6] text-[18px] sm:text-[23px] ">Suivant</p>
                <span className="hidden sm:block h-[16.03px] w-[14.92px] relative   flex items-center justify-end">
                    <span className="absolute w-[4.23px] h-[4.23px] bg-[#F3EFF6] flex items-center justfy-center rounded-[100%] right-[14.92px] "></span>
                    <span className="flex items-center justify-end  h-full ">

                        <PiCaretRightBold size={22}  />
                    </span>
                    

                </span>
            </span>
        </button>

        <span className="w-[304px] mt-[4.26px] flex items-center justify-end text-[18px] text-[#513675] font-semibold leading-[21.41px] h-[24px] grot-font ">{'Passer ->'}</span>



    </div>}

        {level === 'three' && 
        <div className="block sm:hidden w-full h-[586.74px] w-[350px] mt-[121px] flex flex-col items-center justify-start relative ">
            <span className="w-[182px] h-[52px] sm:w-[355.88px] sm:h-[97px]  flex items-center justify-center relative overflow-hidden  ">
                <Image 
                    src="/logo-poma.svg" 
                    alt="Authentication" 
                    layout="fill" 
                    objectFit="cover" 
                />
            </span>

            <div className="w-[350px] h-[353px] flex flex-col justify-start items-center rounded-[12px] mt-[40.21px] p-[20px] bg-[#E9E2F0]"  onClick={()=> router.push('/auth/login')}>
                <span className="w-[310px] h-[116px] text-[22px] font-bold leading-[29.33px] text-center text-[#513675] playfair-display-font mt-[20px] ">Répondez à notre questionnaire pour être mis en relation avec des membres partageant vos intérêts.</span>
                <span className="w-[172.81px] h-[157px] sm:w-[355.88px] sm:h-[97px] mt-[40px] flex items-center justify-center relative overflow-hidden  " style={{ transform: 'rotate(-1.75deg)' }}  onClick={()=> router.push('/auth/login')}>
                    <Image 
                        src="/Frame (3).svg" 
                        alt="Authentication" 
                        layout="fill" 
                        objectFit="cover" 
                    />
                </span>
            </div>

            <span className="w-[350px] h-[29px] font-semibold relative flex items-center justify-end">
                <span className="absolute w-full bg-transparent flex items-end justify-center h-full">
                    <span className=" w-[51px] h-[9px] flex items-center justify-between gap-[12px] ">
                        <span className="w-[9px] h-[9px] rounded-[100%] bg-[#E9E2F0] "></span>
                        <span className="w-[9px] h-[9px] rounded-[100%] bg-[#E9E2F0] "></span>
                        <span className="w-[9px] h-[9px] rounded-[100%] bg-[#513675] "></span>
                    </span>
                </span>
                <p className="text-[22px] text-[#513675] playfair-display-font ">3/3</p>
            </span>

            <button className="w-[304px] h-[48.95px] sm:w-[211px] sm:h-[56px] bg-[#513675] rounded-[64px] sm:rounded-[6.44px] mt-[40px] sm:mt-[21.48] grot-font flex items-start justify-center hover:bg-[#6D489D] font-bold sm:font-medium" onClick={()=> setLevel('one')} >
                <span className=" h-[24px] w-[54px] sm:h-[36.47px] mt-[10.93px] sm:mt-[7px] flex items-center justify-between  text-[#F3EFF6] gap-3 ">
                    <p className=" text-[#F3EFF6] text-[18px] sm:text-[23px] ">Suivant</p>
                    <span className="hidden sm:block h-[16.03px] w-[14.92px] relative   flex items-center justify-end">
                        <span className="absolute w-[4.23px] h-[4.23px] bg-[#F3EFF6] flex items-center justfy-center rounded-[100%] right-[14.92px] "></span>
                        <span className="flex items-center justify-end  h-full ">

                            <PiCaretRightBold size={22}  />
                        </span>
                        

                    </span>
                </span>
            </button>

            <span className="w-[304px] mt-[4.26px] flex items-center justify-end text-[18px] text-[#513675] font-semibold leading-[21.41px] h-[24px] grot-font ">{'Passer ->'}</span>

        </div>}
    </div> 
  )
}

export default AuthLanding