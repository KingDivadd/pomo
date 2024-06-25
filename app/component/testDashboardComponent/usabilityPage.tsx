import React from 'react'
import WayfindingEfficiencyLineChart from './efficiencyLineChart'
import TravelTimeBarChart, {PersonalizationRateBarChart} from './travelTimeBarChart'

const UsabilityPage = () => {
    return (
        <div className="w-full flex p-[10px]">
            <div className="w-full flex flex-col items-start gap-[10px] ">
                <span className="w-full flex flex-row items-center justify-start gap-[10px] p-[10px] bg-white rounded-[5px] ">
                    <p className="text-xl text-blue-600">Usability</p>
                </span>
                <div className="w-full h-[400px] flex flex-col items-start justify-start  p-[10px] rounded-[5px] gap-[15px] bg-white">
                    <p className="text-lg text-blue-500">Wayfinding Efficiency</p>
                    <WayfindingEfficiencyLineChart />
                </div>
                <div className="w-full h-[400px] flex flex-col items-start justify-start  p-[10px] rounded-[5px] gap-[15px] bg-white">
                    <p className="text-lg text-blue-500">Travel Time Chart</p>
                    <TravelTimeBarChart />
                </div>
                <div className="w-full h-[400px] flex flex-col items-start justify-start  p-[10px] rounded-[5px] gap-[15px] bg-white">
                    <p className="text-lg text-blue-500">Personalization Rate</p>
                    <PersonalizationRateBarChart />
                </div>
            </div>
        </div>
    )
}

export default UsabilityPage