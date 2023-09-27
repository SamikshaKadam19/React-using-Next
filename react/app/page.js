/*"use client"
import React from 'react'
import {ToastContainer, toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const page = () => {
  const notify = ()=>{
  toast("Login succesful!")
  }
  return (
    <div>
      <button onClick={notify}>Login</button>
      <ToastContainer/>
    </div>
  )
}

export default page*/
"use client"
import axios from 'axios'
import React, { useState } from 'react'

const page = () => {
  const [userdata, setuserdata] = useState("")
  const [num, setnum] = useState(10)
  const getData = async ()=>{
    const response = await axios.get("https://picsum.photos/v2/list")
    setuserdata(JSON.stringify(response.data))
  }
  return (
    <div>
      <button onClick={getData}>click</button>
      {userdata}
      
    </div>
  )
}

export default page