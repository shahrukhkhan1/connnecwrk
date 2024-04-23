'use client'

import Link from "next/link";
import React,{useState,useEffect} from "react";
// import { useMyStore } from "@/store/Store";
import { redirect } from "next/navigation";
// import { handleLoginAction } from "@/app/actions";
import { useForm } from "react-hook-form"


export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')




  // const myStore = useMyStore();
// const handleLogin =()=>{
//   myStore.isLoggedIn=true;
//   redirect('/timeline')
// }

async function formLoginHandler(event) {
  event.preventDefault()

  let loginData={
    "email":email,
    "password":password
  }


  const response = await fetch('https://phpstack-1254813-4503864.cloudwaysapps.com/api/auth/login', {
    method: 'POST',
    // mode:'no-cors',
    body: JSON.stringify(loginData),
  })

  // Handle response if necessary
  const dataResponse = await response.json()
  console.log(dataResponse,'dataResponse');


};








  return (
    <form 
    className="login-form"
    onSubmit={formLoginHandler}
    id="mainForm"
  >
    <div class="login-inputs">
      <label>Email</label>
      <input
        type="text"
        name="email"
        placeholder="Email"
        required
        maxlength="60"
        onChange={(e)=>setEmail(e.target.value)}
        autoComplete="off"

        class="validate" 
      />
    </div>
    <div class="login-inputs">
      <label>Password</label>

      <input
        type="password"
        name="password"
        onChange={(e)=>setPassword(e.target.value)}
        maxlength="60"
        class="validate"
        // onkeyup="hideerrordiv(this.id);"
      />

      <a href="https://www.connecwrk.com/forgot-password.html">
        Forgot Password?
      </a>
    </div>
   

    {/* <Link prefetch={false} href="/timeline">Log In</Link> */}
    <button type="submit" >Log in</button>
  </form>
  );
}
