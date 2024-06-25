'use client'
import React, {useState, useEffect} from 'react'
import WaterUseIntensityLineChart from './waterUseIntensityLineChart'
import WasteManagementBarChart from './wasteManagementBarChart'

const SustainabilityPage = () => {
    return (
        <div className="w-full flex p-[10px]">
            <div className="w-full flex flex-col items-start gap-[10px] ">
                <span className="w-full flex flex-row items-center justify-start gap-[10px] p-[10px] bg-white rounded-[5px] ">
                    <p className="text-xl text-blue-600">Sustainability</p>
                </span>
                <div className="w-full h-[400px] flex flex-col items-start justify-start bg-white p-[10px] rounded-[5px] gap-[15px] ">
                    <p className="text-lg text-blue-500">Water Use Intensity</p>
                    <WaterUseIntensityLineChart />
                </div>
                <div className="w-full h-[400px] flex flex-col items-start justify-start bg-white p-[10px] rounded-[5px] gap-[15px] ">
                    <p className="text-lg text-blue-500">Waste Managements</p>
                    <WasteManagementBarChart />
                </div>
            </div>
        </div>
    )
}

export default SustainabilityPage