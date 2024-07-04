'use client'
import { activityList } from '@/constants';
import { MobileNavProps } from '@/types';
import React, {useState, useEffect} from 'react'
import { GoPerson } from 'react-icons/go';
import { IoMdNotifications } from 'react-icons/io'
import { LuHome, LuSearch } from "react-icons/lu";
import { PiUsersThree } from 'react-icons/pi';
import { TbBallBasketball, TbMessageCircle } from 'react-icons/tb';

const Communaute = ({mobileNav, setMobileNav, handleMobileNav}:MobileNavProps) => {
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
    <div className="w-full h-full flex flex-col justify-start items-center pb-[20px] ">
        <header className="h-[64px] flex items-start justify-between w-[90%] mx-auto">
            <p className="playfair-display-font font-bold leading-[39.99px] w-[119px] mt-[12px] h-[40px] flex items-center text-[#513675] text-[27px]">
            Communauté
            </p>
            <span className="mt-[14.64px] w-[35.2px] h-[32.72px] relative" onClick={()=> handleMobileNav('Notification')}>
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

        <div className="w-full mt-0  mx-auto h-[475.5px] flex flex-col items-center justify-start  overflow-y-auto  ">

            <div className="w-full flex flex-col items-center justify-start gap-[20px] ">
                {activityList.map((data, ind)=>{
                    return(
                        <div className="w-[90%] flex flex-row items-start justify-center gap-[24px] ">
                            
                            {data.map((data, ind)=>{
                                const {img, name, placeholder} = data

                                return(
                                    <div className="w-1/2 h-[182.92px] rounded-[10px] flex flex-col items-center jusity-start bg-[#E9E2F0]  ">
                                        <span className="w-[96.32px] h-[74.92px] mt-[20px] bg-gray-100 "></span>
                                        <span className="h-[48px] mt-[20px] mx-[20px]  flex items-center justify-center  ">
                                            <p className="text-[25px] grot-font text-center font-extrabold leading-[24px] w-full text-[#513675]   ">{name}</p>
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
  )
}

export default Communaute