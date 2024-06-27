import React from 'react'
import {BuilddMoangcailiy, HirinaOpers, Nomiumes, Ooplounrnce, DciltHiopers, Yop, Vorslatility, Empty, End, Adaa,BarColumnOne, BarColumnTwo, BarColumnThree, BarColumnFour, BarColumnFive, BuildingPerformanceBottomLeftOne, BuildingPerformanceBottomLeftTwo, BuildingPerformanceBottomLeftThree, BuildingPerformanceBottomLeftFour, BuildingPerformanceCenterBottomLeftOne, CompanyOverOne, CompanyOverSix, CompanyOvernow, CompanyOverFive, CompanyOverFour, CompanyOverThree, CompanyOverTwo} from './helper'
import  {BuildingBehaviourLineChartOne, BuildingBehaviourLineChartTwo} from './charts'
import BuildingPerformanceBarOne from './barCharts'
import { DoughnutChartThree } from '../donutChart'

const MainDashboardPage = () => {
    return (
        <div className="w-full h-full flex flex-col items-start justify-start py-[20px] px-[25px] gap-[20px]">
            {/* Top section */}
            <div className="w-full h-[35px] flex flex-row items-center justify-between gap-[30px] ">
                <div className="h-full flex ">
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
            <div className="w-full flex-1 flex flex-row items-center justify-start  gap-[3px] ">

                <div className="w-[30%] h-full flex flex-col items-start justify-between bg-gray-200 rounded-[5px] bg-slate-400 ">
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

                    <span className="w-[95%] flex-1 mx-auto ">
                        <BuildingPerformanceBarOne />
                    </span>
                    <div className="w-full h-[65px] bg-gray-400 flex flex-row items-center justify-center rounded-b-[5px] gap-4 py-[10px] px-[10px]">
                        <span className="w-full h-full flex flex-row items-center justif-start gap-2">
                            <BuildingPerformanceBottomLeftOne />
                            <BuildingPerformanceBottomLeftTwo />
                            <BuildingPerformanceBottomLeftThree />
                            <BuildingPerformanceBottomLeftFour />
                        </span>
                        {/* <BuildingPerformanceCenterBottomLeftOne /> */}
                    </div>
                </div>

                <div className="w-[46%] h-full flex flex-col items-start justify-between bg-gray-200 rounded-[5px] ">
                    <div className="w-full flex-1 bg-gray-200 rounded-t-[5px]">
                        {/* <DoughnutChartThree /> */}
                    </div>
                    <div className="w-full h-[65px] bg-gray-400 flex flex-row items-center justify-center rounded-b-[5px] gap-4 py-[10px] px-[10px]">
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

                <div className="w-[24%] h-full flex flex-col items-start justify-between bg-slate-500 rounded-[5px] ">
                    <span className="w-[94%] mx-auto h-[40px] flex flex-row items-center justify-between border-b border-slate-200 ">
                        <p className="text-[16px] font-semibold text-white">Building Behaviour</p>
                    </span>

                    <span className="w-[94%] mx-auto h-[30%] flex flex-col items-start justify-center border-b border-slate-200 py-[5px]">
                        <span className="w-full h-full flex flex-col items-start justify-between gap-2 ">
                            <BuildingBehaviourLineChartOne />
                        </span>
                    </span>

                    <span className="w-[94%] mx-auto h-[25px] flex items-center justify-start">
                        <p className="text-[12px] font-semibold text-slate-200 w-full">Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
                    </span>

                    <span className="w-[94%] mx-auto flex-1 flex flex-col items-start justify-between border-b border-slate-200  ">
                        <span className="w-full h-full flex flex-col items-start justify-between gap-2 ">
                            <BuildingBehaviourLineChartTwo />
                        </span>
                    </span>

                    <span className="w-[94%] mx-auto h-[60px] flex flex-row items-center justify-start ">
                        <p className="text-[12px] font-semibold text-slate-200">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                    </span>
                </div>
            </div>
            {/* Bottom section */}
            <div className="w-full main-dash-bottom-bar flex flex-row items-start justify-between gap-[50] rounded-[5px]">
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