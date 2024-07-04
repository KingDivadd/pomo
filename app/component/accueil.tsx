'use client'
import React, {useState, useEffect} from 'react'
import { IoMdNotifications } from "react-icons/io";
import { MdPerson } from "react-icons/md";
import Image from 'next/image'
import { LuHome } from "react-icons/lu";
import { TbBallBasketball } from "react-icons/tb";
import { TbMessageCircle } from "react-icons/tb";
import { GoPerson } from "react-icons/go";
import { PiUsersThree } from "react-icons/pi";
import { FaUsers } from "react-icons/fa";


import { Swiper as SwiperClass } from 'swiper/types'; // Import Swiper types
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';
import { GrandChildren } from './userProfile';
import { profile_one, profile_people, profile_three, profile_two } from '@/constants';
import { MobileNavProps } from '@/types';

const Accueil = ({mobileNav, setMobileNav, handleMobileNav}:MobileNavProps) => {
    const [selectedBtn, setSelectedBtn] = useState('')
    

    useEffect(()=>{
        const selected_btn = sessionStorage.getItem('selected-btn')
        if (!selected_btn || selected_btn == null){
            setSelectedBtn('left')
        }
        else{
            setSelectedBtn(selected_btn)
        }
    }, [])

    

    function handleSelectedBtn(item:string) {
        setSelectedBtn(item)
        sessionStorage.setItem('selected-btn', item)
    }

    return (
        <div className="w-full flex h-[100vh]  pb-[10px] overflow-hidden  ">

            {/* Accueil for larger screen */}
            <div className="sm:h-[100vh] sm:w-full  hidden sm:block sm:px-[54px] sm:overflow-y-auto pb-[20px] ">
                <div className="w-full flex flex-col items-start justify-start ">

                    <header className="sm:mt-[35px] md:mt-[43px] 2xl:mt-[64px] w-full h-[44px] flex items-center justify-between">
                        <p className="h-[44px] w-[254px] font-bold text-[33px] playfair-display-font leading-[43.99px] text-[#513675] ">Ils vous ont liké !</p>

                        <span className="w-[38px] h-[35.32px]  relative flex items-center justify-end" onClick={()=> handleMobileNav('Notification')}>

                            <IoMdNotifications size={'100%'} className='text-[#513675] ml-[5px] ' />
                            <span className="absolute left-0 top-0 bg-white w-[18.47px] h-[18.47px] rounded-[100%] border-[0.82px] border-[#513675] flex items-start justify-center">
                                <p className="text-[11.51px] font-extrabold leading-[7.92px] text-[#513675] mt-[5.28px]">15</p>
                            </span>
                        </span>
                    </header>

                    <div className="w-full mt-[33px] flex flex-row items-center justify-center   overflow-x-auto">
                        <div className="w-full flex flex-row  items-start justify-between gap-[28px]  ">
                        
                        {profile_two.map((data, ind)=>{
                            
                            return(
                                <div key={ind} className="w-[254] flex flex-col items-center justify-start gap-[28px] ">
                                    <span className="h-[329.84px] relative  ">
                                        <span className="absolute h-[44.195px] w-[44.195px] rounded-[100%] bg-[#513675] top-[45%] right-[-22.1px] z-[10] border-[7.545px] border-white "></span>
                                        <span className="w-[236px] h-[329.84px] rounded-[6px] flex items-center justify-center relative overflow-hidden  ">
                                            <Image 
                                                src={data.img}
                                                alt="Authentication" 
                                                layout="fill" 
                                                objectFit="cover" 
                                            />
                                        </span>
                                    </span>
                                    <span className="h-[51px] w-[92px] grot-font font-extrabold text-center leading-[21.7px] mt-[15.16px] text-[16px] text-[#513675] ">{data.name}</span>
                                </div>
                            )
                        })}

                        </div>
                        
                    </div>

                    <p className="h-[40px] w-[590px] font-bold text-[33px] playfair-display-font leading-[43.99px] mt-[64.5px] text-[#513675] ">Découvrez de nouveaux petits-enfants.</p>

                    <p className="h-[31px] w-[215px] font-medium text-[23px] grot-font leading-[31.19px] mt-[7px] opacity-[53%] text-[#513675] ">Recommandez pour vous</p>
                    
                    <span className="w-full responsive-grid gap-[24px]">

                        {profile_three.map((data, ind)=>{
                            
                            return(
                                <span key={ind} className="w-[344px] relative">

                                            <span className="z-[20] w-[90%]  mx-[19px] absolute top-[173px]  flex flex-col items-start  justify-start ">

                                                <p className="h-[34px]  font-extrabold text-[25px] grot-font leading-[33.9px] text-[#F3EFF6] ">{data.description} </p>

                                                <p className="h-[30px]  font-medium text-[22px] grot-font leading-[29.83px] text-[#F3EFF6] ">{data.job} </p>

                                                <button className="w-full h-[39px] rounded-[5px] bg-[#513675] hover:bg-violet-900 ">
                                                    <p className=" font-medium text-[17.67px] grot-font  text-[#F3EFF6]  text-[#F3EFF6]  ">Voir le profil </p>

                                                </button>

                                            </span>
                                            <span className="w-full h-[329.84px] rounded-[12px] flex items-center justify-center relative overflow-hidden gradient-overlay">
                                            <Image 
                                                src={data.img}
                                                alt="Authentication" 
                                                layout="fill" 
                                                objectFit="cover" 
                                                className="relative z-0"
                                            />
                                            </span>

                                        </span>
                            )
                        })}


                    </span>
                    
                </div>
                

            </div>

            {/* Accueil for mobile */}
            <div className="block sm:hidden w-full h-full flex flex-col justify-start items-center pb-[20px]">
                            
                {/* the header */}
                <header className="h-[64px] flex items-start justify-between w-[90%] mx-auto">
                    <p className="playfair-display-font font-bold leading-[39.99px] w-[223px] mt-[12px] h-[40px] flex items-center text-[#513675] text-[25px]">
                        Mise en relation
                    </p>
                    <span className="w-[86px] h-[31.89px] flex justify-between items-center mt-[16.06px] relative">
                        <span className="w-[34.31px] h-full" onClick={()=> setMobileNav('Notification')}>
                            <IoMdNotifications size={'100%'} className='text-[#513675] ml-[3.24px]' />
                            <span className="absolute left-0 top-0 bg-white w-[18.47px] h-[18.47px] rounded-[100%] border-[0.82px] border-[#513675] flex items-start justify-center">
                                <p className="text-[11.51px] font-extrabold leading-[7.92px] text-[#513675] mt-[5.28px]">15</p>
                            </span>
                        </span>
                        <span className="w-[28.2px] h-[28.72px]">
                            <MdPerson size={'100%'} className='text-[#513675]' />
                        </span>
                    </span>
                </header>

                <div className="w-full mx-auto mobile-body-height flex flex-col items-center justify-start  overflow-y-auto">
                    {/* second section */}
                    <div className="w-[90%] mx-auto flex flex-col items-start justify-start mt-[20px]">
                        <p className="playfair-display-font font-bold leading-[29.33px] w-[276px] mt-[12px] h-[29px] flex items-center text-[#513675] text-[19px]">
                            Vos petits-enfants de coeur
                        </p>
                        <div className="w-full   mt-[20px] flex items-start justify-start">
                        
                            <Swiper
                                slidesPerView={'auto'}
                                centeredSlides={true}
                                loop={true}
                                mousewheel={true}
                                spaceBetween={30}
                                pagination={false}
                                modules={[Pagination]}
                                className="w-full h-full flex justify-start"
                            >
                            {profile_one.map((data, ind) => {
                                const { description, name, img } = data;
                                return (
                                    <SwiperSlide key={ind} className=''  style={{ width: '60%', height: 'min-h-184.96px', }}>
                                            <span className="w-[100%] h-[230.96px] rounded-[5.73px] flex items-center justify-center relative overflow-hidden  ">
                                                <Image 
                                                    src={img}
                                                    alt="Authentication" 
                                                    layout="fill" 
                                                    objectFit="cover" 
                                                />
                                            </span>

                                            <span className=" h-[36px] w-[108px]">
                                                <p className="mt-[8px] grot-font font-semibold text-[15px] leading-[18px] text-center ">{name}</p>
                                                <p className="mt-[8px] grot-font font-semibold text-[15px] leading-[18px] text-center  ">{description}</p>
                                            </span>

                                            
                                    </SwiperSlide>
                                );
                            })}
                            </Swiper>
                        </div>
                    </div>


                    <div className="w-[90%] mx-auto h-[82px] flex flex-col items-start justify-start mt-[40px] ">
                        <p className="h-[58px] w-[347px] text-start text-[20px] playfair-display-font font-bold leading-[29.33px] text-[#513675] ">Découvrez de nouveaux petits-enfants.</p>
                        <p className="h-[24px] w-[347px] text-start opacity-[53%] grot-font font-semibold text-[18px] leading-[16px] text-[#513675] ">Recommandez pour vous</p>
                    </div>

                    <div className="w-full flex flex-col items-center justify-start ">
                        {profile_people.map((data, ind)=>{
                            
                            const {description, img, job} = data
                            return(
                                <GrandChildren key={ind} description={description} img={img} job={job} />
                            )
                        })}
                    </div>

                </div>

                    {/* this will be given position flot of stick */}
                <footer className="flex  flex-row items-center justify-center h-[72px] w-full ">
                        <span className={mobileNav=="Accueil"? "active-mobile-nav":"mobile-nav"} onClick={()=> handleMobileNav('Accueil')}>
                                <span className="w-[18px] h-[20px]  "><LuHome size={'100%'} /> </span>
                                <p className="text-[10px] w-[36px] h-[14px] grot-font text-[#513675] leading-[13.56px] text-center flex justify-center items-center font ">Accueil</p>
                        </span>
                        <span className={mobileNav=="Activités"? "active-mobile-nav":"mobile-nav"} onClick={()=> handleMobileNav('Activités')}>
                                <span className="w-[18px] h-[20px] " style={{transform: 'rotate(60deg)'}}><TbBallBasketball size={'100%'} /> </span>
                                <p className="text-[10px] w-[36px] h-[14px] grot-font text-[#513675] leading-[13.56px] text-center flex justify-center items-center font ">Activités</p>
                        </span>
                        <span className={mobileNav=="Communauté"? "active-mobile-nav":"mobile-nav"} onClick={()=> handleMobileNav('Communauté')}>
                                <span className="w-[18px] h-[20px] "><PiUsersThree size={'100%'} /> </span>
                                <p className="text-[10px] w-[36px] h-[14px] grot-font text-[#513675] leading-[13.56px] text-center flex justify-center items-center font ">Communauté</p>
                        </span>
                        <span className={mobileNav=== "Message"? "active-mobile-nav":"mobile-nav"} onClick={()=> handleMobileNav('Message')}>
                                <span className="w-[18px] h-[20px] "><TbMessageCircle size={'100%'} /> </span>
                                <p className="text-[10px] w-[36px] h-[14px] grot-font text-[#513675] leading-[13.56px] text-center flex justify-center items-center font ">Message</p>
                        </span>
                        <span className={mobileNav=="Profil"? "active-mobile-nav":"mobile-nav"} onClick={()=> handleMobileNav('Profil')}>
                                <span className="w-[18px] h-[20px] "><GoPerson size={'100%'} /> </span>
                                <p className="text-[10px] w-[36px] h-[14px] grot-font text-[#513675] leading-[13.56px] text-center flex justify-center items-center font ">Profil</p>
                        </span>
                </footer>

            </div>
        </div>

  )
}

export default Accueil