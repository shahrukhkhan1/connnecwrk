import Image from "next/image";
import Link from "next/link";
import React from "react"; 
import "./style.css";

import RightHeader from "./RightHeader";


export default function Header({HeaderId}) {

  

  return (
    <>
      <header id={HeaderId && HeaderId}>
        <div className="container">
          <div className="logo">
            <Link href="/" prefetch={false}>
              <img src="/connectwrk-logo.png"/>
            </Link>
          </div>
          <div className="header_right">
           <RightHeader/>
          </div>
        </div>
      </header>
    </>
  );
}
