import React from 'react'
import Image from 'next/image'

import {BuilddMoangcailiy, HirinaOpers, Nomiumes, Ooplounrnce, DciltHiopers, Yop, Vorslatility, Empty, End, Adaa,BarColumnOne, BarColumnTwo, BarColumnThree, BarColumnFour, BarColumnFive, BuildingPerformanceBottomLeftOne, BuildingPerformanceBottomLeftTwo, BuildingPerformanceBottomLeftThree, BuildingPerformanceBottomLeftFour, BuildingPerformanceCenterBottomLeftOne, CompanyOverOne, CompanyOverSix, CompanyOvernow, CompanyOverFive, CompanyOverFour, CompanyOverThree, CompanyOverTwo} from './helper'
import  {BuildingBehaviourLineChartOne, BuildingBehaviourLineChartTwo} from './charts'
import { FaCaretRight } from "react-icons/fa6";

import BuildingPerformanceBarOne from './barCharts'
import { DoughnutChartThree } from '../donutChart'
import { ShowSideBarProps } from '@/types';

const MainDashboardPage = ({showSideBar, setShowSideBar}:ShowSideBarProps) => {
    return (
        <div className="w-full h-full flex flex-col items-start justify-start py-[20px] px-[25px] gap-[20px]">
            {/* Top section */}
            <div className="w-full h-[40px] flex flex-row items-center justify-between gap-[10px] ">
                <div className="h-full w-[40px] flex items-center justify-center rounded-[5px] bg-slate-500 text-slate-100 cursor-pointer hover:bg-slate-600 hover:text-slate-200 " onClick={()=> setShowSideBar(true)} >
                    <FaCaretRight size={25}  />
                </div>
                <div className="h-full flex">
                    <Adaa />
                </div>
                <div className=" h-full flex flex-row items-center justify-start gap-[30px]">
                    <HirinaOpers />
                    <Ooplounrnce />
                </div>
                <div className=" h-full flex flex-row items-center justify-start gap-[30px]">
                    <Nomiumes />
                    <BuilddMoangcailiy />
                    <DciltHiopers />
                </div>
                <div className=" h-full flex flex-row items-center justify-start  gap-[30px]">
                    <Yop />
                    <Vorslatility />
                    <Empty />
                    <End />
                </div>
                
            </div>
            {/* Middle section */}
            <div className="w-full main-dash-middle-bar flex flex-row items-center justify-start  gap-[3px] ">

                <div className="w-[30%] h-full flex flex-col items-start justify-between rounded-[5px] building-performance-one">
                    <div className="w-[95%] h-[40px] border-b border-slate-100 flex flex-row items-center justify-start mx-auto">
                        <p className="text-[16px] font-semibold text-white">Building Performance</p>
                    </div>
                    <span className="w-[95%] h-[32.5%] flex flex-col items-start justify-center border-b border-slate-200 mx-auto ">
                        <span className="w-full flex flex-col items-start justify-between gap-2">
                            <BarColumnOne />
                            <BarColumnTwo />
                            <BarColumnThree />
                            <BarColumnFour />
                            <BarColumnFive/>
                        </span>
                    </span> 

                    <span className="w-[95%]  flex-1 mx-auto pt-[10px]">
                        <span className="w-full h-full flex flex items-center justify-start">
                            <BuildingPerformanceBarOne />
                        </span>
                    </span>
                    <div className="w-full h-[55px] bg-gradient-to-r from-gray-400 via-slate-400 to-slate-500 flex flex-row items-center justify-center rounded-b-[5px] gap-4  px-[10px]">
                        <span className="w-full h-full flex flex-row items-center justif-start gap-2">
                            <BuildingPerformanceBottomLeftOne />
                            <BuildingPerformanceBottomLeftTwo />
                            <BuildingPerformanceBottomLeftThree />
                            <BuildingPerformanceBottomLeftFour />
                        </span>
                        {/* <BuildingPerformanceCenterBottomLeftOne /> */}
                    </div>
                </div>

                <div className="w-[46%] h-full flex flex-col items-start justify-between  rounded-[5px] ">
                    <div className="w-full flex-1  rounded-t-[5px]">
                        {/* image wil be here */}
                        <div className="relative w-full h-full rounded-[3px] overflow-hidden">
                            <Image 
                                src="/proj img.webp" 
                                alt="Authentication" 
                                layout="fill" 
                                objectFit="cover" 
                            />
                        </div>
                    </div>
                    <div className="w-full h-[55px] bg-gradient-to-r from-gray-400 via-slate-400 to-slate-500 flex flex-row items-center justify-center rounded-b-[5px] gap-4 py-[5px] px-[10px]">
                        <span className="w-full h-full flex flex-row items-center justify-between gap-2">
                            <BuildingPerformanceCenterBottomLeftOne />
                            <BuildingPerformanceCenterBottomLeftOne />
                            <BuildingPerformanceCenterBottomLeftOne />
                            <BuildingPerformanceCenterBottomLeftOne />
                            <BuildingPerformanceCenterBottomLeftOne />
                            <BuildingPerformanceCenterBottomLeftOne />
                        </span>
                        {/* <BuildingPerformanceCenterBottomLeftOne /> */}
                    </div>
                </div>

                <div className="w-[24%] h-full flex flex-col items-start justify-between  rounded-[5px] bg-gradient-to-r from-slate-400 via-slate-500 to-slate-600 ">
                    <span className="w-[94%] mx-auto h-[40px] flex flex-row items-center justify-between border-b border-slate-200 ">
                        <p className="text-[16px] font-semibold text-white">Building Behaviour</p>
                    </span>

                    <span className="w-[94%] mx-auto h-[30%] flex flex-col items-start justify-center border-b border-slate-200 py-[5px]">
                        <span className="w-[98%] mx-auto h-full flex flex-col items-start justify-between gap-2 ">
                            <BuildingBehaviourLineChartOne />
                        </span>
                    </span>

                    <span className="w-[94%] mx-auto h-[25px] flex items-center justify-start">
                        <p className="text-[12px] font-semibold text-slate-200 w-full">Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
                    </span>

                    <span className="w-[94%] mx-auto flex-1 flex flex-col items-start justify-between border-b border-slate-200  relative ">
                        <span className="w-full h-[1px] absolute top-[6px] mx-auto border-b border-slate-100 flex items-center justify-center line-chat-one"></span>

                        <span className="line-chat-two "></span>

                        <span className="w-[98%] mx-auto h-full flex flex-col items-start justify-between gap-2 ">
                            <BuildingBehaviourLineChartTwo />
                        </span>
                    </span>

                    <span className="w-[94%] mx-auto h-[50px] flex flex-row items-center justify-start ">
                        <p className="text-[12px] font-semibold text-slate-200">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                    </span>
                </div>
            </div>
            {/* Bottom section */}
            <div className="w-full main-dash-bottom-bar flex flex-row items-start justify-between gap-[50] rounded-[5px] ">
                {/* the left side */}
                <div className="flex-1 h-full flex flex-col items-start justify-start  gap-[30px] ">
                    <p className="text-[16px] font-semibold text-black">Company Over</p>
                    <div className="w-full h-full flex flex-row items-center justify-between ">
                        <CompanyOverOne />
                        <CompanyOverTwo />
                        <CompanyOverThree />
                        <CompanyOverFour />
                        <CompanyOverFive />
                        <CompanyOverSix />
                    </div>
                </div>

                {/* the right bottom side */}
                <div className="w-[350px] h-full flex flex-col items-start justify-start  gap-[30px]">
                    <p className="text-[16px] font-semibold text-black">Company Overnow</p>
                    <div className="w-full flex-1 flex flex-row items-center justify-between ">
                        <CompanyOvernow />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default MainDashboardPage