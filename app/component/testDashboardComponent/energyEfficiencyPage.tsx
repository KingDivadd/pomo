'use client'
import React, {useState, useEffect} from 'react'
import EnergyEfficiencyLineChart from  './energyEfficiencyLineChart'
import EnergyEfficiencyBarChart from './energyEfficiencyBarChart'

const EnergyEfficiencyPage = () => {
    return (
        <div className="w-full flex p-[10px] ">
            <div className="w-full flex flex-col items-start justify-start gap-[10px] h-full  ">
                <span className="w-full flex flex-row items-center justify-start gap-[10px] p-[10px] bg-white rounded-[5px] ">
                    <p className="text-xl text-blue-600">Energy Efficiency</p>
                </span>
                <div className="w-full h-[350px] flex flex-col items-start justify-start bg-white p-[10px] rounded-[5px] gap-[15px]">
                    <p className="text-lg text-blue-500">EUI Trends Over Time</p>
                    <EnergyEfficiencyLineChart />
                </div>
                <div className="w-full h-[400px] flex flex-col items-start justify-start bg-white p-[10px] rounded-[5px] gap-[15px] ">
                    <p className="text-lg text-blue-500">EUI Comparison Across Buildings</p>
                    <EnergyEfficiencyBarChart />
                </div>
            </div>
        </div>
    )
}

export default EnergyEfficiencyPage