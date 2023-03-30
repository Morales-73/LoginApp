import React, { useEffect } from 'react'
import {useNavigate} from "react-router-dom"
import axios from "axios"

const URI = "http://localhost:5000/logout"

export function Logout() {

  const navigate = useNavigate()

  useEffect(() => {
    getData()
    navigate("/login")
  }, [])

  const getData = async () => {
    try {
      const {data} = await axios.get(URI,{withCredentials : true})
      console.log(data)
    } catch (error) {
      console.log(error.response.data.message)
    }
  }
  

  return (
    <div>Logout</div>
  )
}
