'use client'
import React, {useState, useEffect} from 'react'
import EngagementBarChart from './engagementBarChart'
import ReturnVisitRateBarChart from './returnVisitRateBarChart'

const EngagementPage = () => {
    return (
        <div className="w-full flex p-[10px]">
            <div className="w-full flex flex-col items-start gap-[10px] ">
                <span className="w-full flex flex-row items-center justify-start gap-[10px] p-[10px] bg-white rounded-[5px] ">
                    <p className="text-xl text-blue-600">Engagement</p>
                </span>
                <div className="w-full h-[400px] flex flex-col items-start justify-start  p-[10px] rounded-[5px] gap-[15px] bg-white">
                    <p className="text-lg text-blue-500">Engagement KPIs</p>
                    <EngagementBarChart />
                </div>
                <div className="w-full h-[400px] flex flex-col items-start justify-start  p-[10px] rounded-[5px] gap-[15px] bg-white">
                    <p className="text-lg text-blue-500">Return Visit Rate</p>
                    <ReturnVisitRateBarChart />
                </div>
            </div>
        </div>
    )
}

export default EngagementPage