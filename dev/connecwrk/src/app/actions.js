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


