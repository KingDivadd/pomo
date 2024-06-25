'use client'
import React, {useState, useEffect} from 'react'
import Image from 'next/image'

const NavBar = () => {
    return (
        <div className="w-full flex flex-row items-center justify-between h-full bg-gradient-to-r from-blue-500 to-[#1D62E2] px-[10px]">
            <span className="flex items-center justify-start">
                <p className="text-xl text-white">Welcome</p>
            </span>

            <span className="flex flex-row h-full items-center justify-center gap-5">
                {/* user avatar */}
                <span className="flex flex-col justify-between items-start h-[35px] my-auto">
                    <p className='text-sm font-semibold text-white'>Marry Poppins</p>
                    <p className='text-sm text-white'>Admin</p>
                </span>
                <span className="flex flex-row items-center justify-center rounded-[100%] bg-blue-200 ">
                    <span className="relative  h-[35px] w-[35px] rounded-[100%] overflow-hidden  ">
                        <Image 
                            src={"https://res.cloudinary.com/iroegbu-cloud-1/image/upload/v1718748903/u6wmwqvxzfinumomdfro.jpg"} 
                            alt="Logo" 
                            layout="fill" 
                            objectFit="cover" 
                            />
                    </span>
                </span>
                
            </span>
        </div>
    )
}

export default NavBar