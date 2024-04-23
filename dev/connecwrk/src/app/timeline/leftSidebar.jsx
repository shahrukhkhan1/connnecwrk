"use client";
import Link from "next/link";
import React, { useState } from "react";

function LeftSidebar() {
  const [sideMenu, setSideMenu] = useState([
    {
      id: 1,
      label: "MSME Connect",
      iconClass: "fa fa-industry",
      url: "#",
      bgColor: "#ff7800",
    },
    
    {
      id: 2,
      label: "Freelancer Connect ",
      iconClass: "fa fa-globe",
      url: "#",
      bgColor: "#1db055",
    },
    {
      id: 3,
      label: "Talent Connect",
      iconClass: "fa fa-star",
      url: "#",
      bgColor: "",
    },
    {
      id: 4,
      label: "Events",
      iconClass: "fa fa-calendar",
      url: "#",
      bgColor: "",
    },
    {
      id: 5,
      label: "MSME Jobs",
      iconClass: "fa fa-briefcase",
      url: "#",
      bgColor: "#1db055",
    },
    {
      id: 6,
      label: "The SME Post",
      iconClass: "fa fa-file-text-o",
      url: "#",
      bgColor: "#ff7800",
    },
    // {
    //   id: 7,
    //   label: "Groups",
    //   iconClass: "fa fa-users",
    //   url: "#",
    //   bgColor: "#1db055",
    // },
  ]);

  return (
    <div className="left_menu_sec">
      <div className="menu">
        <ul className="nav_list">
          <li className="user">
            <div class="usr-bg">
              <div class="user-bg-cover">&nbsp;</div>
              <span class="img">
                <Link href="">
                  <img src="/user-placeholder.jpg" />
                  {/* <i className="fa fa-user"></i> */}
                </Link>
              </span>
            </div>
            <div class="usr-right">
              <Link href="">John Doe</Link>
              <span>Developer</span>
            </div>
            <div className="usr-info">
              <div class="connctn">
                <span class="count">9</span>
                <span class="connct">
                  <a>Contacts</a>
                </span>
              </div>
              <div class="connctn" style={{ backgroundColor: "#ebebeb" }}>
                <span class="count">0</span>
                <span class="connct">
                  <a>profile views</a>
                </span>
              </div>
              <div class="connctn">
                <span class="count">2</span>
                <span class="connct">
                  <a>Activity</a>
                </span>
              </div>
            </div>
          </li>
          {sideMenu && sideMenu.map((item, i) => {
            return (
              <li key={i}>
                <a href={item.url} class=" ripple">
                  <i
                    class="micon"
                    style={{ backgroundColor: `${item.bgColor}` }}
                  >
                    <i class={`${item.iconClass}`}></i>
                  </i>
                  <span class="tltp">{item.label} </span>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default LeftSidebar;
