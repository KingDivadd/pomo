'use client'
import React, {useState, useEffect} from 'react'
import MainDashboardPage from './mainDashboardPage'
import SideBar from './sideBar'

const MainDashboard = () => {
    const [showSideBar, setShowSideBar] = useState(false)

    return (
        <div className="w-full h-[100vh] flex flex-row items-start justify-start relative">
            {showSideBar && <div className="absolute top-0 left-0 h-[100vh] w-[300px] h-full flex flex-col items-start justify-start bg-slate-500  z-10">
                <div className="w-full h-full flex items-center justify-center bg-slate-600 text-white">
                    <SideBar showSideBar={showSideBar} setShowSideBar={setShowSideBar} />
                </div>
            </div>}
            <div className="w-full h-full flex flex-col items-start justify-start bg-white  ">
                <MainDashboardPage showSideBar={showSideBar} setShowSideBar={setShowSideBar} />
            </div>
        </div>
    )
}

export default MainDashboard