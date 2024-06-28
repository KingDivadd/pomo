'use client'
import { ShowSideBarProps } from '@/types';
import React, {useState, useEffect} from 'react'
import { FaCaretLeft } from "react-icons/fa6";
import { RiLogoutBoxRLine } from "react-icons/ri";
import { BiSolidDashboard } from "react-icons/bi";

const SideBar = ({setShowSideBar, showSideBar}:ShowSideBarProps) => {
    return (
        <div className="w-full h-full flex flex-col justify-between items-start">
            <span className="w-full h-[60px] flex items-center justify-start px-3 relative">
                <span className="side-bar" onClick={()=> setShowSideBar(false)}><FaCaretLeft size={21}  /> </span>
                <p className="text-xl font-bold flex items-start justify-start"><p className="text-indigo-500">AD</p> AAA</p>
            </span>
            <div className="w-full flex-1 flex flex-col items-start justify-between gap-2 ">
                <div className="w-full min-h-[50px]  mt-[20px] px-3 pr-4 flex flex-col items-start justify-start gap-2 ">
                    <span className="side-bar-nav">
                        <span className="w-full flex items-center justify-start gap-3">
                            <BiSolidDashboard  size={22} />
                            <p className="text-md">Dashboard</p>
                        </span>
                    </span>

                    {/* the side bar nav with drop down */}
                    <span className="w-full flex flex-col items-start gap-2">
                        <span className="side-bar-nav">
                            <span className="w-full flex items-center justify-start gap-3">
                                <BiSolidDashboard size={22} />
                                <p className="text-md">Building Behaviour</p>
                            </span>
                        </span>
                        {/* below here will have the rows */}
                        <span className="w-full flex flex-col items-start justify-start gap-2 pl-[10px] ">
                            <span className="side-bar-nav-item">
                                <span className="w-full flex items-center justify-start gap-3">
                                    <BiSolidDashboard size={22} />
                                    <p className="text-md">Sub Builidng One</p>
                                </span>
                            </span>

                            <span className="side-bar-nav-item">
                                <span className="w-full flex items-center justify-start gap-3">
                                    <BiSolidDashboard size={22} />
                                    <p className="text-md">Sub Builidng Two</p>
                                </span>
                            </span>

                            <span className="side-bar-nav-item">
                                <span className="w-full flex items-center justify-start gap-3">
                                    <BiSolidDashboard size={22} />
                                    <p className="text-md">Sub Builidng Three</p>
                                </span>
                            </span>
                        </span>
                    </span>

                    {/* the side bar nav with drop down */}
                    <span className="w-full flex flex-col items-start">
                        <span className="side-bar-nav">
                            <span className="w-full flex items-center justify-start gap-3">
                                <BiSolidDashboard  size={22} />
                                <p className="text-md">Building Performance</p>
                            </span>
                        </span>
                    </span>

                </div>
                <div className="w-full min-h-[50px] mb-[20px] ">
                    <span className="sidebar-logout-navigation text-white"><RiLogoutBoxRLine size={23} /> Logout</span>
                </div>
            </div>
        </div>
    )
}

export default SideBar