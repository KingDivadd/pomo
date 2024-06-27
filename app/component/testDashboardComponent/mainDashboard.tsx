'use client'
import React, {useState, useEffect} from 'react'
import MainDashboardPage from './mainDashboardPage'

const MainDashboard = () => {
    return (
        <div className="w-full h-[100vh] flex flex-row items-start justify-start">
            {/* <div className="w-[270px] h-full flex flex-col items-start justify-start bg-blue-100"></div> */}
            <div className="flex-1 h-full flex flex-col items-start justify-start bg-white">
                <MainDashboardPage />
            </div>
        </div>
    )
}

export default MainDashboard