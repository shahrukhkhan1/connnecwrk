"use client";
import React, { useEffect, useState } from "react";
import Login from "../loginWidget/Login";
import SearchBar from "./SearchBar";
import HeaderIcons from "./HeaderIcons";
import SelectDropDown from "../common/userDropDown";
// import { useMyStore } from "@/store/Store";

const RightHeader = () => {
  // const myStore = useMyStore();
  // const [login, setLogin] = useState(false);

const [login, setLogin] = useState(true)


  useEffect(() => {
    // let checkLogin = ;
    return () => {
      // setLogin({ checkLogin });
      // console.log(login);
    };
  }, []);

  return (
    <>
      {!login ? (
        <>
          <SearchBar />
          <HeaderIcons />
          <SelectDropDown/>
        </>
      ) : (
        <Login />
      )}
    </>
  );
};

export default RightHeader;
