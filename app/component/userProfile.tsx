'use client'
import React, {useState, useEffect} from 'react'
import Image from 'next/image'
import { GrandChildrenProps, BelovedGrandChildrenProps } from '@/types'

const BelovedGrandChildren = ({img,name, description}:BelovedGrandChildrenProps) => {
  return (
    <div className="w-[108px] h-[184.96px]  flex flex-col items-center justify-start ">
        <span className="w-[108x] h-[130.96px] rounded-[5.73px] flex items-center justify-center relative overflow-hidden  ">
            <Image 
                src={img}
                alt="Authentication" 
                layout="fill" 
                objectFit="cover" 
            />
        </span>

        <span className=" h-[36px] w-[108px]">
            <p className="mt-[8px] grot-font font-semibold text-[15px] leading-[18px] text-center ">
            {name}
            </p>
            <p className="mt-[8px] grot-font font-semibold text-[15px] leading-[18px] text-center  ">
            {description}
            </p>
        </span>
    </div>
  )
}

export default BelovedGrandChildren


export const GrandChildren = ({description, img, job}:GrandChildrenProps)=>{

    return(
        <div  className="w-[90%] mx-auto mt-[20px] h-[300px]  relative bg-white">

            <span className="w-full h-full rounded-[12px]  flex items-center justify-center relative overflow-hidden mx-auto "
>
                <Image 
                    src={img}
                    alt="Authentication" 
                    layout="fill" 
                    objectFit="cover" 
                    
                />
            </span>


            <div className="absolute w-[304px] h-[106.95px] left-[23px] top-[163px] ">
                <span className="w-full h-[50px] flex flex-col items-start justify-center ">
                    <p className="w-[312px] h-[24px] text-[25px] font-extrabold grot-font leading-[24px] text-[#F3EFF6] ">{description}</p>
                    <p className="w-[275px] h-[26px] font-semibold grot-font text-[22px] leading-[26px] text-[#F3EFF6] ">{job}</p>
                </span>

                <button className="mt-[8px] w-full mx-auto h-[48.94px] rounded-[64px] bg-[#513675] flex justify-center items-start hover:grayscale-[15%] ">
                    <p className="w-[84px] h-[24px] mt-[10.93px] leading-[24.41px] text-[#F3EFF6] grot-font ">Voir le profil</p>
                </button>
            </div>
        </div>
    )
}