'use client'
import { activityList, left_notification_info, notification_date, notification_detial } from '../../constants/index';
import { MobileNavProps } from '../../types/index';
import React, {useState, useEffect} from 'react'
import { GoPerson } from 'react-icons/go';
import { IoMdNotifications } from 'react-icons/io'
import { LuHome, LuSearch } from "react-icons/lu";
import { PiUsersThree } from 'react-icons/pi';
import { TbBallBasketball, TbMessageCircle } from 'react-icons/tb';
import { SlLocationPin } from "react-icons/sl";
import Image from 'next/image'



const Notification = ({mobileNav, setMobileNav, handleMobileNav}:MobileNavProps) => {
    const [selectedBtn, setSelectedBtn] = useState('')
    const [notification, setNotification] = useState(1)
    

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
    <div className="w-full h-full flex flex-col justify-start items-center pb-[20px] bg-[#F2F2F2] ">
        <header className=" flex items-center justify-between w-[90%] mt-[26px] mx-auto  ">
           <div className="min-h-[34px] flex flex-row items-start justify-start gap-[6px] ">
                <p className=" w-[53px]  text-start flex items-start text-[#513675] grot-font text-[50.42px] -mt-[10px] font-bold ">25</p>
                <span className="flex flex-col items-start justify-center mt-[10px]">
                    <p className="text-[14.42px] font-bold text-[#9D8FB0] grot-font  ">Mardi</p>
                    <p className="text-[14.42px] font-bold text-[#9D8FB0] grot-font  ">Juin 2024</p>
                </span>
           </div>

           <button className="w-[84px] h-[34px] rounded-[34px] bg-[#51367566] flex justify-center items-start ">
                <p className="text-[15.42px] text-[#513675] grot-font mt-[2.5px] font-bold ">Aujourd’hui</p>
           </button>
        </header>

        <div className="w-full mx-auto h-[100px] mt-[31px]   flex flex-col items-center justify-start bg-white  overflow-y-auto rounded-t-[31px]">
            <div className="w-[90%] mt-[14px]  flex flex-row items-center justify-between ">
                {notification_date.map((data, ind)=>{

                    return(
                        <span key={ind} className= {notification == ind ? "active-notification-btn w-1/7 ": "notification-btn w-1/7 "} onClick={()=> setNotification(ind)} >
                            <p className=" text-[16px] font-semibold grot-font ">{data.day}</p>
                            <p className="text-[24.98px] font-semibold grot-font ">{data.number}</p>
                        </span>
                    )
                }) }
            </div>
            <span className="h-[1px] w-[90%] mx-auto border-b-2 border-[#F3EFF6] mt-[10px] "></span>
        </div>

        <div className="w-full  mx-auto h-[455.5px] flex flex-col items-center justify-start  overflow-y-auto  bg-white ">
            <div className="w-[90%] mx-auto flex items-start justify-start">
                {/* left */}
                <div className="w-[30%] flex flex-col items-center justify-start  gap-[15px]">
                    <p className="text-[16px] text-[#9D8FB0] grot-font font-bold ">Horaire</p>

                    <div className="w-full flex flex-col items-center justify-start border-r border-[#E9E2F0] gap-[16px] ">
                        {left_notification_info.map((data, ind)=>{

                            return(
                                <div key={ind} className="w-full h-[109px] flex flex-col items-center justify-start gap-[3px] ">
                                    <p className="text-[18.42px] text-center font-bold text-[#513675] grot-font ">{data.bold}</p>
                                    <p className="text-[15.42px] text-center font-bold text-[#9D8FB0] grot-font ">{data.light}</p>
                                </div>
                            )
                        })}
                    </div>
                </div>
                {/* right */}
                <div className="w-[70%] flex flex-col items-start justify-start gap-[15px] pl-[10px] ">
                    <p className="text-[16px] text-[#9D8FB0] grot-font  font-bold">Activités</p>

                    <div className="w-full flex flex-col items-center justify-start border-r border-[#E9E2F0] gap-[16px]  ">
                        {notification_detial.map((data, ind)=>{

                            return(
                                <div key={ind} className="w-full rounded-[6px] bg-[#E9E2F0] h-[109px] flex flex-col items-start justify-start gap-[5px] px-[14px] py-[11px] ">
                                    <p className="text-[18px] text-center font-bold text-[#513675] grot-font ">{data.activity}</p>
                                    <span className="flex items-center justify-start gap-[5px] ">
                                        <span className="mt-[2px] text-[#513675] "><SlLocationPin size={15} /> </span>
                                        <p className="text-[13px] text-center font-normal text-[#513675] grot-font ">{data.loaction}</p>
                                    </span>
                                    
                                    <span className="flex w-full items-center justify-between gap-[5px]  ">
                                        <span className="flex items-center justify-start gap-[5px] ">
                                            <span className="w-[18px] h-[18px] rounded-[100%] flex items-center justify-center relative overflow-hidden  ">
                                                <Image 
                                                    src={data.img} 
                                                    alt="Authentication" 
                                                    layout="fill" 
                                                    objectFit="cover" 
                                                    />
                                            </span>
                                            <p className="text-[13px] text-center font-normal text-[#513675] grot-font ">{data.user}</p>
                                        </span>


                                            <p className="text-[13px] text-center font-normal text-[#513675] grot-font ">{data.date}</p>
                                    </span>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
           

        </div>

        <footer className="flex bg-white flex-row items-center justify-center h-[82px] w-full ">
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
  )
}

export default Notification