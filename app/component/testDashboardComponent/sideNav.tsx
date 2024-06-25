'use client'
import React, {useState, useEffect} from 'react'
import { MdAssessment } from "react-icons/md";
import { FaExchangeAlt } from "react-icons/fa";
import { BiSolidReport } from "react-icons/bi";
import { MdEnergySavingsLeaf } from "react-icons/md";
import { FaSmile } from "react-icons/fa";
import { FaRecycle } from "react-icons/fa";
import { FaBuilding } from "react-icons/fa";
import { IoSettingsSharp } from "react-icons/io5";
import { IoLogOut } from "react-icons/io5";
import Image from 'next/image'
import { SideBarNav } from '@/types';

const SideNav = ({active, setActive}:SideBarNav) => {
    const [dropdownHolder, setDropdownHolder] = useState('')
    const [dropBuildingPerforance, setDropBuildingPerforance] = useState(false)
    const [dropBuildingBehaviour, setDropBuildingBehaviour] = useState(false)
    const [selected, setSelected] = useState('')

    useEffect(() => {
        const item = sessionStorage.getItem('sideNav')
        if (item == null || item == ""){
            setActive('energy-efficiency')
            setDropBuildingPerforance(true)
            setDropdownHolder('')
        }else {
            setActive(item)
        }
    }, [])

    function handleActive(item:any){
        setActive(item)
        sessionStorage.setItem('sideNav', item)
    }

    return (
        <div className="w-full flex flex-col items-start justify-start  h-[100vh] bg-[#F6F9FE] ">
            <span className="h-[50px] w-full flex items-center justify-start px-[10px] bg-gradient-to-r from-[#1D62E2] to-blue-500 text-white px-[20px]">
                {/* <span className="relative  h-[40px] w-[150px]  overflow-hidden ">
                    <Image 
                        src={"/adaaLogo2.jpg"} 
                        alt="Logo" 
                        layout="fill" 
                        objectFit="cover" 
                        />
                </span> */}
                <p className="text-xl font-semibold">ADAA</p>
            </span>
            <div className="w-full flex flex-col items-start justify-between  px-[10px] bg-white test-side-nav-cont pt-[50px]">
                {/* the upper part */}
                <div className="w-full flex flex-col items-start justify-start gap-1 ">
                    <div className="main-side-bar-list-cont gap-1">
                        <span className={dropdownHolder == 'building-performance' ? "active-side-bar-list-item": "side-bar-list-item"} onClick={()=> {setDropBuildingPerforance(!dropBuildingPerforance); setDropdownHolder('building-performance'); handleActive(''); setDropBuildingBehaviour(false)}}>
                            <MdAssessment size={23} /> <p className="text-lg">Building Performance</p>
                        </span>
                        {dropBuildingPerforance && <>
                            {[{name: 'Energy Efficiency', id: 'energy-efficiency'}, {name: "Occupant Comfort", id: "occupant-comfort"}, {name:"Sustainability", id: 'sustainability'}].map((data, ind)=>{
                                const {name, id} = data
                                return (
                                    <span key={ind} className={active == data.id ? "active-side-bar-list-dropdown gap-2":"side-bar-list-dropdown gap-2"} onClick={()=> handleActive(data.id)}>
                                        
                                        <p className="text-md">{name}</p>
                                    </span>
                                )
                            })}
                        </>}
                    </div>
                    
                    <div className="main-side-bar-list-cont flex flex-col items-start gap-1">
                        <span className={dropdownHolder == 'building-behaviour' ? "active-side-bar-list-item": "side-bar-list-item"} onClick={()=> {setDropBuildingBehaviour(!dropBuildingBehaviour); setDropdownHolder('building-behaviour'); handleActive(''); setDropBuildingPerforance(false)}}>
                            <FaBuilding size={21} /> <p className="text-lg">Building Behaviour</p>
                        </span>
                        {dropBuildingBehaviour && <>
                            {[{name: 'Engagement', id: 'engagement'}, {name: "Usability", id: "usability"}, {name:"Perception", id: 'perception'}].map((data, ind)=>{
                                const {name, id} = data
                                return (
                                    <span key={ind} className={active == data.id ? "active-side-bar-list-dropdown":"side-bar-list-dropdown"} onClick={()=> handleActive(data.id)}>
                                        <p className="text-md">{name}</p>
                                    </span>
                                )
                            })}
                        </>}
                    </div>
                    <div className="main-side-bar-list-cont" onClick={()=> {handleActive('reports'); setDropdownHolder('')}}>
                        <span className={active == 'reports' ? "active-side-bar-list-item": "side-bar-list-item"}><BiSolidReport size={23} /> <p className="text-lg">Reports</p></span>
                    </div>
                    <div className="main-side-bar-list-cont" onClick={()=> {handleActive('settings'); setDropdownHolder('')}}>
                        <span className={active == 'settings' ? "active-side-bar-list-item": "side-bar-list-item"}><IoSettingsSharp size={23} /> <p className="text-lg">Settings</p>    </span>
                    </div>
                </div>
                {/* the logout part */}
                <div className="w-full flex flex-col h-[60px] items-start justify-start gap-1  ">
                    <div className="main-side-bar-list-cont" onClick={()=> {handleActive('logout'); setDropdownHolder('')}}>
                        <span className={'sidebar-logout-navigation'}> <IoLogOut size={23} /> <p className="text-lg">Logout</p></span>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default SideNav