"use client"
import React, { useState } from 'react'
import SideNav from './_components/SideNav'
import TopHeader from './_components/TopHeader'
import Toast from '../_components/Toast';

function layout({ children }) {
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    // Cargar el script de Google AdSense u otro script aquí
    const script = document.createElement('script');
    script.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7761286844545012';
    script.async = true;
    script.crossOrigin = 'anonymous';
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);
  
  return (
    // <ToastContext.Provider value={{toast,setToast}}>
    <div>
      <div className=' h-full w-64 flex-col 
        fixed inset-y-0 z-30 md:flex hidden bg-white'>
        <SideNav closeSideBar={()=>setToggle(false)}/>
      </div>
   
      {toggle ? <div className=' h-full w-64 flex-col 
        fixed inset-y-0 z-30 bg-white flex'>
        <SideNav closeSideBar={()=>setToggle(false)}/>
      </div> : null}

      <div className='md:ml-64'>
        <TopHeader setToggleBar={() => 
          setToggle(true)} />
        {children}
        {/* <Toast/> */}
      </div>

    </div>
    
  )
}

export default layout
