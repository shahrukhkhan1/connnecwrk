
import Link from "next/link";
import React,{useState} from "react";
// import { useMyStore } from "@/store/Store";
import { redirect } from "next/navigation";
import { handleLoginAction } from "@/app/actions";

export default function Login() {



  // const myStore = useMyStore();
// const handleLogin =()=>{
//   myStore.isLoggedIn=true;
//   redirect('/timeline')
// }
    
  return (
    <form 
    className="login-form"
    // action={handleLoginAction}
  >
    <div class="login-inputs">
      <label>Email</label>

      <input
        type="text"
        name="txtUsername"
        id="txtUsername"
        maxlength="60"
        // onChange={(e)=>setName(e.target.value)}
        autoComplete="off"

        class="validate" 
      />
    </div>
    <div class="login-inputs">
      <label>Password</label>

      <input
        type="password"
        name="txtPassword"
        id="txtPassword"
        // onChange={(e)=>setPass(e.target.value)}
        maxlength="60"
        class="validate"
        // onkeyup="hideerrordiv(this.id);"
      />

      <a href="https://www.connecwrk.com/forgot-password.html">
        Forgot Password?
      </a>
    </div>
    {/* <Link prefetch={false} href="/timeline">Log In</Link> */}
    <button type="submit">Log in</button>
  </form>
  );
}
