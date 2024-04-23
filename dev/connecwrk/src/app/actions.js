"use server"
import { APIPATH,CACHE } from "@/config/config"
import { redirect } from "next/navigation"




export async function handleSignUpAction (formData) {
  const firstName = formData.get('firstName')
  const lastName = formData.get('lastName')
  const email = formData.get('email')
  const password = formData.get('password')
  const day = formData.get('day')
  const month = formData.get('month')
  const year = formData.get('year')
  const gender = formData.get('gender')

  const saveData = await fetch(APIPATH+"")





  
}


export async function handleLoginAction (formData) {
  const emailId = formData.get('txtUsername')
  const password = formData.get('txtPassword')
  const userData ={
    'email' :emailId,
    'password' :password,

  }

  
async function getLogin() {
  const loginData = await fetch(`${APIPATH.url+'/auth/login'}`, {
    method:'POST',
      // next: { 
      //   revalidate: CACHE.validateTime,
      //   // cache: 'no-store'  
      // },
      body:{
        "email":"alimhali01@gmail.com",
        "password":"Alim@123"
      }
      
    }
  );

  if (!loginData.ok) {
    throw new Error("Failed to fetch data");
  }
  return loginData.json();
}

const getLoginD = await getLogin();

console.log(getLoginD,'sidebarData');


  
}