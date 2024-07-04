'use client'
import { MobileNavProps, SideNavProps } from '@/types'
import React, {useState, useEffect} from 'react'
import Image from 'next/image'
import { LuHome } from "react-icons/lu";
import { GoPerson } from 'react-icons/go';
import { PiUsersThree } from 'react-icons/pi';
import { TbBallBasketball, TbMessageCircle } from 'react-icons/tb';

const SideNav = ({handleMobileNav, mobileNav, setMobileNav}:MobileNavProps) => {
  return (
    <div className="w-full h-full  flex flex-col items-start justify-start px-[54px]  ">
         <span className="w-[184px] h-[50.15px] sm:mt-[40px] md:mt-[48px] 2xl:mt-[69px]  flex items-center justify-center relative overflow-hidden  ">
            <Image 
                src={'/logo-poma.svg'}
                alt="Authentication" 
                layout="fill" 
                objectFit="cover" 
            />
        </span>

        <div className="w-full mt-[99.85px] lg:mt-[50px] flex flex-col mt- items-start justify-start gap-[48px] h-[500px]  ">

            <nav className="flex flex-col items-start justify-start w-full ">
                    <span className={mobileNav=="Accueil"? "active-big-nav":"big-nav"} onClick={()=> handleMobileNav('Accueil')}>
                            <span className="w-[18px] h-[20px] text-[#513675]    "><LuHome size={'100%'} className='w- ' /> </span>
                            <p className="text-[18px] mt-[1px] w-[95px] h-[14px] grot-font text-[#513675] leading-[24.41px] text-start  flex justify-start ml-[29px] items-center font ">Accueil</p>
                    </span>
                    <span className={mobileNav=== "Message"? "active-big-nav":"big-nav"} onClick={()=> handleMobileNav('Message')}>
                            <span className="w-[18px] h-[20px] text-[#513675]  "><TbMessageCircle size={'100%'} /> </span>
                            <p className="text-[18px] mt-[1px] w-[178px] h-[14px] grot-font text-[#513675] leading-[24.41px] text-start  flex justify-start ml-[29px] items-center font ">Mise en relation</p>
                    </span>
                    <span className={mobileNav=="Communauté"? "active-big-nav":"big-nav"} onClick={()=> handleMobileNav('Communauté')}>
                            <span className="w-[18px] h-[20px] text-[#513675]  "><PiUsersThree size={'100%'} /> </span>
                            <p className="text-[18px] mt-[1px] w-[178px] h-[14px] grot-font text-[#513675] leading-[24.41px] text-start  flex justify-start ml-[29px] items-center font ">Communauté</p>
                    </span>
                    <span className={mobileNav=="Activités"? "active-big-nav":"big-nav"} onClick={()=> handleMobileNav('Activités')}>
                            <span className="w-[18px] h-[20px] text-[#513675]  " style={{transform: 'rotate(60deg)'}}><TbBallBasketball size={'100%'} /> </span>
                            <p className="text-[18px] mt-[1px] w-[178px] h-[14px] grot-font text-[#513675] leading-[24.41px] text-start  flex justify-start ml-[29px] items-center font ">Activités</p>
                    </span>
                    <span className={mobileNav=="Profil"? "active-big-nav":"big-nav"} onClick={()=> handleMobileNav('Profil')}>
                            <span className="w-[18px] h-[20px] text-[#513675]  "><GoPerson size={'100%'} /> </span>
                            <p className="text-[18px] mt-[1px] w-[178px] h-[14px] grot-font text-[#513675] leading-[24.41px] text-start  flex justify-start ml-[29px] items-center font ">Profil</p>
                    </span>
            </nav>

            
        </div>
    </div>
  )
}

export default SideNav