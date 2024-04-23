import React from "react";
import Header from "../components/header/Header";
import usePostStore from "@/app/store/store";
import Link from "next/link";
import LeftSidebar from "./leftSidebar";
import './style.css'
import MiddleTimeline from "./middleTimeline/middleTimeline";
import RightSidebar from "./rightSidebar/rightSidebar";

function TimeLine() {
  return (
    <>
      <Header HeaderId="header" />
      <div className="container main">
        <div className="home_container timeline">
         <LeftSidebar/>
         <MiddleTimeline/>
         <RightSidebar/>
        </div>
      </div>
    </>
  );
}

export default TimeLine;
