'use client'
import React, {useState, useEffect} from 'react'
import SideNav from './sideNav'
import NavBar from './navBar'
import EnergyEfficiencyPage from './energyEfficiencyPage'
import OccupantComfortPage from './occupantComfortPage'
import SustainabilityPage from './sustainabilityPage'
import EngagementPage from './engagementPage'
import UsabilityPage from './usabilityPage'
import PerceptionPage from './perceptionPage'
import ReportsPage from './reportsPage'



const MainDashboard = () => {
    const [active, setActive] = useState('')
    
    return (
        <div className="w-full flex itemes-start justify-start h-[100vh] overflow-hidden ">
            <div className="flex flex-row items-start justify-start h-full w-full">

                {/* the side nav */}
                <div className="w-[280px]">
                    <SideNav active={active} setActive={setActive} />
                </div>

                {/* the right side */}
                <div className="h-[100vh] flex-1 flex flex-col items-start justify-start bg-[#F6F9FE] ">
                    <div className="w-full flex items-start justify-start h-[50px] ">
                        <NavBar />
                    </div>
                    <div className="w-full flex items-start justify-start flex-1  overflow-y-auto">
                        {active === 'energy-efficiency' && <EnergyEfficiencyPage />}
                        {active === 'occupant-comfort' && <OccupantComfortPage />}
                        {active === 'sustainability' && <SustainabilityPage />}
                        {active === 'engagement' && <EngagementPage />}
                        {active === 'usability' && <UsabilityPage />}
                        {active === 'perception' && <PerceptionPage />}
                        {active === 'reports' && <ReportsPage />}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainDashboard