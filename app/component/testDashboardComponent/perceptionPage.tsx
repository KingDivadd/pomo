import React from 'react'
import PersonalizationPostOccupancySurveysChart, {SafetySurveysBarChart, ProductivityWellBeingBarChart} from './perceptionCharts'

const PerceptionPage = () => {
    return (
        <div className="w-full flex p-[10px]">
            <div className="w-full flex flex-col items-start gap-[10px] ">
                <span className="w-full flex flex-row items-center justify-start gap-[10px] p-[10px] bg-white rounded-[5px] ">
                    <p className="text-xl text-blue-600">Perception</p>
                </span>
                <div className="w-full h-[400px] flex flex-col items-start justify-start  p-[10px] rounded-[5px] gap-[15px] bg-white">
                    <p className="text-lg text-blue-500">Post-occupancy Surveys</p>
                    <PersonalizationPostOccupancySurveysChart />
                </div>
                <div className="w-full h-[400px] flex flex-col items-start justify-start  p-[10px] rounded-[5px] gap-[15px] bg-white">
                    <p className="text-lg text-blue-500">Safety Surveys</p>
                    <SafetySurveysBarChart />
                </div>
                <div className="w-full h-[400px] flex flex-col items-start justify-start  p-[10px] rounded-[5px] gap-[15px] bg-white">
                    <p className="text-lg text-blue-500">Productivity & Well-being</p>
                    <ProductivityWellBeingBarChart />
                </div>
            </div>
        </div>
    )
}

export default PerceptionPage