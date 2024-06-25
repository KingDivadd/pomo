'use client'
import React, {useState, useEffect} from 'react'
import CO2LineChart from './c02LineChart'
import TemperatureBarChart from './temperatureBarChart'
import HumidityLineChart from './humidityLineChart'
import ParticulateLineChart from './particulateLineChart'
import LightingLevelsBarChart from './lightingLevelsBarChart'
import NoiseLevelLineChart from './noiseLIneChart'

const OccupantComfortPage = () => {
    return (
        <div className="w-full flex p-[10px]">
            <div className="w-full flex flex-col items-start gap-[10px] ">
                <span className="w-full flex flex-row items-center justify-start gap-[10px] p-[10px] bg-white rounded-[5px] ">
                    <p className="text-xl text-blue-600">Occupant Comfort</p>
                </span>
                <div className="w-full h-[400px] flex flex-col items-start justify-start bg-white p-[10px] rounded-[5px] gap-[15px] ">
                    <p className="text-lg text-blue-500">C02 Levels</p>
                    <CO2LineChart />
                </div>
                <div className="w-full h-[400px] flex flex-col items-start justify-start bg-white p-[10px] rounded-[5px] gap-[15px] ">
                    <p className="text-lg text-blue-500">Temperature Levels</p>
                    <TemperatureBarChart />
                </div>
                <div className="w-full h-[400px] flex flex-col items-start justify-start bg-white p-[10px] rounded-[5px] gap-[15px] ">
                    <p className="text-lg text-blue-500">Humidity Levels</p>
                    <HumidityLineChart />
                </div>
                <div className="w-full h-[400px] flex flex-col items-start justify-start bg-white p-[10px] rounded-[5px] gap-[15px] ">
                    <p className="text-lg text-blue-500">Particulate Levels</p>
                    <ParticulateLineChart />
                </div>
                <div className="w-full h-[400px] flex flex-col items-start justify-start bg-white p-[10px] rounded-[5px] gap-[15px] ">
                    <p className="text-lg text-blue-500">Lighting Levels</p>
                    <LightingLevelsBarChart />
                </div>
                <div className="w-full h-[400px] flex flex-col items-start justify-start bg-white p-[10px] rounded-[5px] gap-[15px] ">
                    <p className="text-lg text-blue-500">Noise Levels</p>
                    <NoiseLevelLineChart />
                </div>
            </div>
        </div>
    )
}

export default OccupantComfortPage