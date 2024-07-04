'use client'
import { activityList, filter_profile_four, profile_four, profile_one } from '@/constants';
import { MobileNavProps } from '@/types';
import React, {useState, useEffect, useRef} from 'react'
import { GoPerson } from 'react-icons/go';
import { IoMdNotifications } from 'react-icons/io'
import { LuHome, LuSearch } from "react-icons/lu";
import { PiUsersThree } from 'react-icons/pi';
import { TbBallBasketball, TbMessageCircle } from 'react-icons/tb';
import { FiSearch } from "react-icons/fi";
import { FaCaretUp, FaCaretDown } from "react-icons/fa";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { LuDot } from "react-icons/lu";
import Image from 'next/image'
import { IoStar } from "react-icons/io5";
import { SlLocationPin } from "react-icons/sl";
import { IoCalendarOutline } from "react-icons/io5";
import { IoCheckmark } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";

import { Swiper as SwiperClass } from 'swiper/types'; // Import Swiper types
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';



const Activities = ({mobileNav, setMobileNav, handleMobileNav}:MobileNavProps) => {
    const [showActivities, setShowActivities] = useState(false)
    const [selectedActivities, setSelectedActivities] = useState([''])
    const [selectedBtn, setSelectedBtn] = useState('')
    const [showFilters, setShowFilters] = useState(false)
    const swiperRef1 = useRef<SwiperClass | null>(null);
    const swiperRef2 = useRef<SwiperClass | null>(null);

  const handleNext = () => {
    if (swiperRef1.current) {
      swiperRef1.current.slideNext();
    }
  };

  const handleNewNext = () => {
    if (swiperRef2.current) {
      swiperRef2.current.slideNext();
    }
  };

    useEffect(()=>{

        if (!selectedActivities.length){
            setShowFilters(false)
        }

    },[selectedActivities])


    

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

    function handleActivities(item:string) {
        if (selectedActivities.includes(item)){
        setSelectedActivities(selectedActivities.filter(activity => activity !== item))
    } else {
        setSelectedActivities([...selectedActivities, item])
    }
}

    function removeFilter(item:string){
        setSelectedActivities(selectedActivities.filter(activity => activity !== item))

    }

    function handleValider() {
        setShowActivities(!showActivities)
        if (selectedActivities.length) {
            setShowFilters(true)
        }
    }

    return (
    <div className="w-full h-full flex flex-col justify-start items-center pb-[20px]  ">
        {/* larger screen */}
        <div className="sm:h-[100vh] sm:w-full  hidden sm:block sm:pr-[27px] sm:overflow-y-auto pb-[20px]  ">
            <div className="w-full flex flex-col items-start justify-start ">
                <header className="sm:mt-[35px] md:mt-[43px] 2xl:mt-[64px] w-full h-[44px] flex items-center justify-between">
                    <span className="h-[63px] w-[90%] rounded-[10px] bg-[#513675] flex items-center relative pl-[48px] pr-[24px] ">
                        <span className="w-[16px] h-[16px] absolute left-[24px] h-[23.5px] text-white "><FiSearch size={'100%'} /> </span>
                        <input type="text" placeholder='Rechercher' className='h-[24px] w-full text-white outline-none font-normal grot-font text-[18px] leading-[24.41px] bg-transparent ' />
                    </span>


                    <span className="w-[38px] h-[35.32px]  relative flex items-center justify-end">

                        <IoMdNotifications size={'100%'} className='text-[#513675] ml-[5px] ' />
                        <span className="absolute left-0 top-0 bg-white w-[18.47px] h-[18.47px] rounded-[100%] border-[0.82px] border-[#513675] flex items-start justify-center">
                            <p className="text-[11.51px] font-extrabold leading-[7.92px] text-[#513675] mt-[5.28px]">15</p>
                        </span>
                    </span>
                </header>

                <div className="w-full h-[41px] flex flex-row items-start justify-start mt-[20px] gap-[16px] z-40">
                    <div className="w- h- flex items-start justify-start relative">
                        <span className="w-[163px] h-[41px] rounded-[7px] border border-[#513675] flex items-center justify-center cursor-pointer " onClick={()=> setShowActivities(!showActivities) } >
                            <p className="text-[#513675] text-[19px] font-semibold  grot-font mb-[4px] ">Type d’activité</p>
                            <span className=" text-[#513675] flex items-end justify-center ml-[6px] ">
                                <FaCaretDown size={'20px'} />
                            </span>
                        </span>
                        {showActivities && <div className="w-full absolute top-[45px] left-0 flex flex-col items-start justify-start  ">
                            {['Lecture et écriture', 'Sports et loisirs', 'Arts et culture', 'Musique et danse', 'Jeux et divertissement'].map((data, ind)=>{

                                return(
                                    <span key={ind} className="w-[312px] h-[49px] border-t border-[#513675] border-r border-l  flex items-center justify-start gap-[16px] bg-white cursor-pointer hover:bg-[#E9E2F0] " onClick={()=> handleActivities(data)} >
                                        <span className=" text-[#513675] flex items-end justify-center w-[24px] h-[24px] ml-[16px] text-[#513675] ">
                                            {selectedActivities.includes(data) && <IoCheckmark size={'100%'} />}
                                        </span>
                                        <p className="text-[#513675] text-[19px] font-semibold  grot-font mb-[4px] ">{data}</p>
                                    </span>
                                )
                            })}
                            <span className="w-[312px] h-[49px] border border-[#513675] hover:grayscale-[20%] flex items-center justify-center gap-[16px] bg-[#513675] cursor-pointer "  onClick={handleValider}  >
                                <p className="text-white text-[19px] font-semibold  grot-font mb-[4px] ">Valider</p>
                            </span>

                        </div>}

                    </div>




                    <span className="w-[95px] h-[41px] rounded-[7px] border border-[#513675] flex items-center justify-center ">
                        <p className="text-[#513675] text-[19px] font-semibold  grot-font mb-[4px] ">Lieu</p>
                        <span className=" text-[#513675] flex items-end justify-center ml-[6px] ">
                            <FaCaretDown size={'20px'} />
                        </span>
                    </span>
                    <span className="w-[246px] h-[41px] rounded-[7px] border border-[#513675] flex items-center justify-center ">
                        <p className="text-[#513675] text-[19px] font-semibold  grot-font mb-[4px] ">Nombre de participants</p>
                        <span className=" text-[#513675] flex items-end justify-center ml-[6px] ">
                            <FaCaretDown size={'20px'} />
                        </span>
                    </span>
                </div>

                {showFilters && 
                    <div className="w-[529px] flex items-center justify-start ">
                        <p className="text-[18px] text-[#513675] font-normal mt-[20px] roboto-font ">Filtres actifs</p>
                    </div>
                }

                {showFilters && <div className="w-full flex gap-[16px] flex-wrap mt-[20px]">
                    {selectedActivities.map((data, ind)=>{

                        return(
                            <span className=" flex items-start justify-center gap-[8px] border border-[#513675] rounded-[36px] h-[34px] px-[33px] ">
                                <p className="text-[#513675] mt-[1px] text-[17px] grot-font font-semibold ">{data}</p>
                                <span className="mt-[7.5px] cursor-pointer " onClick={()=> removeFilter(data)} ><RxCross2 size={16} /> </span>
                            </span>

                        )
                    }) }
                </div> }

                {showFilters && <div className="w-full mt-[28px] flex flex-row items-center justify-between">
                    <p className="text-[#513675] grot-font text-[25px] font-semibold ">Résultats de recherche</p>

                    <span className="flex items-center justify-center gap-[15px] cursor-pointer " onClick={handleNext}>
                        <p className="text-[#513675] grot-font text-[25px] font-semibold underline">Tout voir</p>
                        <span className="flex items-center justify-center relative w-[20px] mt-[8px] ">
                            <MdOutlineArrowForwardIos size={20} />

                            <LuDot size={20} className='absolute -left-[5px] my-auto ' />
                        </span>

                    </span>
                </div>}

                {showFilters && <span className="w-full  flex  items-center justify-start mt-[17px] ">
                    <span className="flex items-center justify-start relative overflow-hidden ">
                        <Swiper
                                     onSwiper={(swiper) => {
                                        swiperRef1.current = swiper;
                                        }}
                                        slidesPerView={'auto'}
                                        spaceBetween={30}
                                        loop={true}
                                        pagination={false}
                                        navigation={false}
                                        modules={[Pagination, Navigation]}
                                    className=" sm:[700px] lg:[950px] xl:w-[1134px] h-full flex justify-center  "
                                >
                                {filter_profile_four.map((data, ind) => {
                                    return (
                                        <SwiperSlide key={ind} className='rounded-[15px] flex flex-row justify-start items-center relative gap-[12.03px]  '  style={{ width: '539px',  }}>
                                            {data.map((info, ind)=>{
                                                
                                                const {date, img, location, name} = info;
                                                return(
                                                    <div key={ind} className="w-full h-[211px] bg-[#E9E2F0] rounded-[10.03px] flex flex-row items-center justify-start gap-[12.03px] px-[12.03px]  mb-[20px]  ">
                                                        <span className="w-[192px] h-[192px] rounded-[6.02px] flex items-center justify-center relative overflow-hidden  ">
                                                            <Image 
                                                                src={img}
                                                                alt="Authentication" 
                                                                layout="fill" 
                                                                objectFit="cover" 
                                                            />
                                                        </span>

                                                        <span className="flex-1   h-[167px] flex flex-col items-start justify-start gap-[12.03px] ">
                                                            <span className="w-full flex flex-row items-center justify-between ">
                                                                <p className="text-[25.05px] text-[#513675] grot-font font-bold ">{name}</p>

                                                                <span className="flex items-start justify-center gap-[5px] ">
                                                                    <p className="text-[#513675] font-semibold grot-font text-[25.05px]  ">4.9</p>
                                                                    <IoStar size={20} className='text-[#DA79FA] mt-[9px] ' />
                                                                </span>
                                                            </span>

                                                            <span className="flex flex-row items-start  gap-[5px]">
                                                                <span  className='text-[#513675] mt-[5.5px] ' ><IoCalendarOutline size={20}/></span>
                                                                
                                                                <p className="text-[19.04px] text-[#513675] grot-font font-normal ">{date}</p>
                                                            </span>

                                                            <span className="flex flex-row items-start  gap-[5px]">
                                                                <span  className='text-[#513675] mt-[5.5px] ' ><SlLocationPin size={20}/></span>
                                                                <p className="text-[19.04px] text-[#513675] grot-font font-normal ">{location}</p>
                                                            </span>

                                                            <button className="  h-[45px] w-[118px] rounded-[6.02px] grot-font bg-[#513675] text-[18.03px] mx-auto text-white flex items-start justify-center pt-[2px] ">Afficher</button>
                                                        </span>
                                                    </div>
                                                )
                                            })}    
                                        </SwiperSlide>
                                    );
                                })}
                        </Swiper>
                    </span>
                </span>}



                

                {!showFilters && <div className="w-full mt-[28px] flex flex-row items-center justify-between">
                    <p className="text-[#513675] grot-font text-[25px] font-semibold ">Nos suggestions</p>

                    <span className="flex items-center justify-center gap-[15px] cursor-pointer " onClick={handleNext}>
                        <p className="text-[#513675] grot-font text-[25px] font-semibold underline">Tout voir</p>
                        <span className="flex items-center justify-center relative w-[20px] mt-[8px] ">
                            <MdOutlineArrowForwardIos size={20} />

                            <LuDot size={20} className='absolute -left-[5px] my-auto ' />
                        </span>

                    </span>
                </div>}

                {!showFilters && 
                
                <span className="w-full  flex  items-center justify-start mt-[17px] ">
                    <span className="flex items-center justify-start relative overflow-hidden ">
                        <Swiper
                                     onSwiper={(swiper) => {
                                        swiperRef1.current = swiper;
                                        }}
                                        slidesPerView={2}
                                        spaceBetween={30}
                                        loop={true}
                                        pagination={false}
                                        navigation={false}
                                        modules={[Pagination, Navigation]}
                                    className="sm:[700px] lg:[950px] xl:w-[1134px] h-full flex justify-center "
                                >
                                {profile_four.map((data, ind) => {
                                    const {date, img, location, name} = data;
                                    return (
                                        <SwiperSlide key={ind} className='rounded-[15px] flex flex-row justify-start items-center relative gap-[12.03px] bg-[#E9E2F0] rounded-[10.03px] '  style={{ width: '263px', height: '301px' }}>
                                            <div className=""></div>
                                            <span className="absolute w-full h-full top-0 flex flex-col items-start justify-between z-[10] ">

                                                <span className="flex items-start justify-center mt-[21.5px] mx-auto ">
                                                    <p className="text-[#FFFFFF] roboto-font  ">4.5</p>
                                                    <IoStar size={20} className='text-[#BD8CFF] ' />
                                                </span>

                                                <div className=" h-[83px] flex flex-col items-start justify-start mb-[18px] ml-[18px]   ">
                                                    <p className="text-[25px] text-white grot-font font-bold ">{name}</p>
                                                    <span className="flex flex-row items-start  gap-[5px]">
                                                        <IoCalendarOutline size={20} className='text-white mt-[2px] ' />
                                                        <p className="text-[18px] text-white roboto-font font-normal ">{date}</p>
                                                    </span>
                                                    <span className="flex flex-row items-start gap-[5px] ">
                                                        <SlLocationPin size={20} className='text-white mt-[2px]' />
                                                        <p className="text-[15px] text-white roboto-font  font-normal">{location}</p>
                                                    </span>
                                                </div>

                                            </span>
                                            <span className="w-[100%] h-full rounded-[5.73px] flex items-center justify-center relative overflow-hidden  ">
                                                <Image 
                                                    src={img}
                                                    alt="Authentication" 
                                                    layout="fill" 
                                                    objectFit="cover" 
                                                />
                                            </span>
                                            
                                                
                                        </SwiperSlide>
                                    );
                                })}
                        </Swiper>
                    </span>
                </span>
                
                }

                {!showFilters && <div className="w-full  flex flex-row items-center justify-between mt-[28px]">
                    <p className="text-[#513675] grot-font text-[25px] font-semibold ">Les activités les mieux notés</p>

                    <span className="flex items-center justify-center gap-[15px] cursor-pointer " onClick={handleNewNext}>
                        <p className="text-[#513675] grot-font text-[25px] font-semibold underline">Tout voir</p>
                        <span className="flex items-center justify-center relative w-[20px] mt-[8px] ">
                            <MdOutlineArrowForwardIos size={20} />

                            <LuDot size={20} className='absolute -left-[5px] my-auto ' />
                        </span>

                    </span>
                </div>}

                {!showFilters && <span className="w-full  flex  items-center justify-start mt-[17px] ">
                    <span className="flex items-center justify-start relative overflow-hidden ">
                        <Swiper
                                     onSwiper={(swiper) => {
                                        swiperRef2.current = swiper;
                                        }}
                                        slidesPerView={2}
                                        spaceBetween={30}
                                        loop={true}
                                        pagination={false}
                                        navigation={false}
                                        modules={[Pagination, Navigation]}
                                    className="sm:[700px] lg:[950px] xl:w-[1134px] h-full flex justify-center "
                                >
                                {profile_four.map((data, ind) => {
                                    const {date, img, location, name} = data;
                                    return (
                                        <SwiperSlide key={ind} className='rounded-[15px] flex flex-row justify-start items-center relative gap-[12.03px] bg-[#E9E2F0] rounded-[10.03px] '  style={{ width: '539px', height: '211px',  }}>
                                            <div className="w-full h-full flex flex-row items-center justify-start gap-[12.03px] px-[12.03px] ">
                                                <span className="w-[192px] h-[192px] rounded-[6.02px] flex items-center justify-center relative overflow-hidden  ">
                                                    <Image 
                                                        src={img}
                                                        alt="Authentication" 
                                                        layout="fill" 
                                                        objectFit="cover" 
                                                    />
                                                </span>

                                                <span className="flex-1   h-[167px] flex flex-col items-start justify-start gap-[12.03px] ">
                                                    <span className="w-full flex flex-row items-center justify-between ">
                                                        <p className="text-[25.05px] text-[#513675] grot-font font-bold ">{name}</p>

                                                        <span className="flex items-start justify-center gap-[5px] ">
                                                            <p className="text-[#513675] font-semibold grot-font text-[25.05px]  ">4.9</p>
                                                            
                                                            <IoStar size={20} className='text-[#DA79FA] mt-[9px] ' />
                                                        </span>
                                                    </span>

                                                    <span className="flex flex-row items-start  gap-[5px]">
                                                        <span  className='text-[#513675] mt-[3.5px] ' ><IoCalendarOutline size={20}/></span>
                                                        <p className="text-[19.04px] text-[#513675] roboto-font font-normal ">{date}</p>
                                                    </span>

                                                    <span className="flex flex-row items-start  gap-[5px]">
                                                        <span  className='text-[#513675] mt-[3.5px] ' ><SlLocationPin size={20}/></span>
                                                        <p className="text-[19.04px] text-[#513675] roboto-font font-normal ">{location}</p>
                                                    </span>

                                                    <button className="  h-[45px] w-[118px] rounded-[6.02px] grot-font bg-[#513675] text-[18.03px] mx-auto text-white flex items-start justify-center pt-[2.5px] ">Afficher</button>
                                                </span>
                                            </div>
                                            
                                                
                                        </SwiperSlide>
                                    );
                                })}
                        </Swiper>
                    </span>
                </span>}
                    
                

            </div>
        </div>
        
        {/* for mobile */}
        <div className="block sm:hidden w-full h-full flex flex-col justify-start items-center pb-[20px]">
            <header className="h-[64px] flex items-start justify-between w-[90%] mx-auto">
                <p className="playfair-display-font font-bold leading-[39.99px] w-[119px] mt-[12px] h-[40px] flex items-center text-[#513675] text-[27px]">
                Activités
                </p>
                <span className="mt-[14.64px] w-[35.2px] h-[32.72px] relative">
                    <span className="w-[25.72px] h-[30.01] "></span>
                    <IoMdNotifications size={'100%'} className='text-[#513675] ml-[3.24px]' />
                    <span className="absolute left-0 top-0 bg-white w-[18.95px] h-[18.95px] rounded-[100%] border-[0.82px] border-[#513675] flex items-start justify-center">
                        <p className="text-[11.51px] font-extrabold leading-[7.92px] text-[#513675] mt-[5.28px]">15</p>
                    </span>
                </span>
            </header>

            <div className="w-full mx-auto h-[143px] flex flex-col items-center justify-start  overflow-y-auto">
                <div className="w-[90%] h-[143px] flex flex-col items-center justify-center gap-[20px]  ">
                    {/* buttons */}
                    <div className="w-full h-[45px] flex items-center justify-center rounded-[4px] bg-[#E9E2F0] ">
                        <button className={selectedBtn == 'left'? "rounded-[8px] h-full w-1/2 bg-[#513675] text-[#E9E2F0] ": "rounded-[8px] h-full w-1/2  text-[#513675] bg-[#E9E2F0] "} onClick={()=> handleSelectedBtn('left')} >
                            <p className="h-[22px] w-[142px] grot-font font-bold text-[16px] leading-[21.7px] text-center mx-auto  ">Réservation d’activités</p>
                        </button>

                        <button className={selectedBtn == 'right'? "rounded-[8px] h-full w-1/2 bg-[#513675] text-[#E9E2F0] ": "rounded-[8px] h-full w-1/2  text-[#513675] bg-[#E9E2F0] "} onClick={()=> handleSelectedBtn('right')} >
                            <p className="h-[22px] w-[142px] grot-font font-bold text-[16px] leading-[21.7px] text-center mx-auto flex items-center  ">Réservation d’activités</p>
                        </button>

                    </div>
                    {/* search iput */}
                    <div className="w-full h-[38px] border-2 border-[#513675] relative rounded-[38px] ">
                        <input type="text" name="search" id="search" className='w-full outline-none bg-transparent mt-[4px] grot-font px-[35px] flex items-center font-semibold h-[22px] text-[16px] py-[8px] text-[#513675] ' />
                        <span className="absolute h-[12.81px] w-[12.51px] text-[#513675] top-[11px] left-[13.85px] bg-transparent font-extrabold ">
                            <LuSearch size={'100%'} />
                        </span>
                    </div>

                </div>
            </div>

            <div className="w-full  mx-auto h-[475.5px] flex flex-col items-center justify-start  overflow-y-auto  ">

                <div className="w-full flex flex-col items-center justify-start gap-[20px] ">
                    {activityList.map((data, ind)=>{
                        return(
                            <div key={ind} className="w-[90%] flex flex-row items-start justify-center gap-[24px] ">
                                
                                {data.map((data, ind)=>{
                                    const {img, name, placeholder} = data

                                    return(
                                        <div key={ind} className="w-1/2 h-[182.92px] rounded-[10px] flex flex-col items-center jusity-start bg-[#E9E2F0]  ">
                                            <span className="w-[96.32px] h-[74.92px] mt-[20px] bg-gray-100 "></span>
                                            <span className="h-[48px] mt-[20px] mx-[20px]  flex items-center justify-center  ">
                                                <p className="text-[22px] grot-font text-center font-extrabold leading-[24px] w-full text-[#513675]   ">{name}</p>
                                            </span>
                                        </div>
                                            )
                                        })}
                            </div>
                        )
                    })}

                </div>

            </div>

            <footer className="flex flex-row items-center justify-center h-[82px] w-full ">

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

export default Activities