'use client'
import { useState,useRef,useEffect } from "react";
import  "./style.css";
import Link from "next/link";

export default function SelectDropDown() {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef();


  
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [ref]);


  return (
 
    <div className="dropdownWrapper" ref={ref}>
      <div className="toggle hiden-xs" >
        <button class="usr_img" onClick={() => setIsOpen(!isOpen)}>
          <img src="/user-placeholder.jpg"/></button>
      </div>
      {
        isOpen && 
        <ul class="setting_menu">
        <li>
          <Link prefetch={false} href="/myprofile">
            <i class="fa fa-user" aria-hidden="true"></i> My profile
          </Link>
        </li>
        {/* <li>
          <Link prefetch={false} href="/myads.html">
            <i class="fa fa-buysellads" aria-hidden="true"></i> My Ads
          </Link>
        </li> */}
        <li>
          <Link prefetch={false} href="/settings.html">
            <i class="fa fa-cog" aria-hidden="true"></i> Settings
          </Link>
        </li>
         
        <li>
          <Link prefetch={false} href="/faq.html">
            <i class="fa fa-question" aria-hidden="true"></i> FAQ's
          </Link>
        </li>
        <li>
          <Link prefetch={false} href="/logout.html">
            <i class="fa fa-sign-out" aria-hidden="true"></i> Logout
          </Link>
        </li>
      </ul>
      }
      
    </div>
  );
}
 
