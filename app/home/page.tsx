'use client'
import React, {useState, useEffect} from 'react'

import Activities from '../component/activities';
import Message from '../component/message';
import Communaute from '../component/communaute';
import Profil from '../component/profil';
import Accueil from '../component/accueil';
import Notification from '../component/notification';
import SideNav from '../component/sideNav';


const Home = () => {
    const [mobileNav, setMobileNav] = useState('')

    

    useEffect(()=>{
        const nav = sessionStorage.getItem('mobile-nav')
        if (!nav || nav == null || !['Accueil', 'Activités', 'Communauté', 'Message', 'Profil'].includes(nav)) {
            setMobileNav('Accueil')
        }else{
            setMobileNav(nav)
        }

    },[])

    function handleMobileNav(item:string) {
        setMobileNav(item)
        sessionStorage.setItem('mobile-nav', item)
    }

  return (
    <div className="w-full flex items-start justify-start">
      {/* For Tabs and Bigger Screens */}
      <div className="hidden sm:block h-full w-full ">
        <div className="w-full flex flex-row items-start justify-center">
            {/* side bar */}

            <div className="w-[292px] h-full ">
                <SideNav mobileNav={mobileNav} setMobileNav={setMobileNav} handleMobileNav={handleMobileNav} />
            </div>

            {/* right side */}
            <div className="flex-1 h-full "> 

                {mobileNav == "Accueil" && <Accueil mobileNav={mobileNav} setMobileNav={setMobileNav} handleMobileNav={handleMobileNav} /> }
                {mobileNav == "Activités" && <Activities mobileNav={mobileNav} setMobileNav={setMobileNav} handleMobileNav={handleMobileNav} /> }
                {mobileNav == "Message" && <Message mobileNav={mobileNav} setMobileNav={setMobileNav} handleMobileNav={handleMobileNav} /> }
                {mobileNav == "Communauté" && <Communaute mobileNav={mobileNav} setMobileNav={setMobileNav} handleMobileNav={handleMobileNav} /> }
                {mobileNav == "Profil" && <Profil mobileNav={mobileNav} setMobileNav={setMobileNav} handleMobileNav={handleMobileNav} /> }

            </div>

        </div>
      </div>

      {/* For Smaller Screens */}
      <div className="block sm:hidden sm:flex sm:flex-col sm:items-center sm:justify-start w-full mx-auto relative  overflow-y-auto pt-[10px] ">

            {mobileNav == "Notification" && <Notification mobileNav={mobileNav} setMobileNav={setMobileNav} handleMobileNav={handleMobileNav} /> }
            {mobileNav == "Accueil" && <Accueil mobileNav={mobileNav} setMobileNav={setMobileNav} handleMobileNav={handleMobileNav} /> }
            {mobileNav == "Activités" && <Activities mobileNav={mobileNav} setMobileNav={setMobileNav} handleMobileNav={handleMobileNav} /> }
            {mobileNav == "Message" && <Message mobileNav={mobileNav} setMobileNav={setMobileNav} handleMobileNav={handleMobileNav} /> }
            {mobileNav == "Communauté" && <Communaute mobileNav={mobileNav} setMobileNav={setMobileNav} handleMobileNav={handleMobileNav} /> }
            {mobileNav == "Profil" && <Profil mobileNav={mobileNav} setMobileNav={setMobileNav} handleMobileNav={handleMobileNav} /> }


      </div>
    </div>
  )
}

export default Home
