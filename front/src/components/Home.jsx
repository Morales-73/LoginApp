import React, {useEffect,useState} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import axios from "axios"

const URI = "http://localhost:5000/"

export function Home() {

  const navigate = useNavigate()

  const [data, setData] = useState("")

  useEffect(() => {
    getData()
  }, [])
  

  const getData = async ()=>{
    try {
      const {data} = await axios.get(URI,{withCredentials : true})
      setData(data)
    } catch (error) {
      console.log(error.response.data.message)
      navigate("/login")
    }
  }

  return (
    <div>
          {/* <!-- component --> */}
          <nav className=" bg-zinc-800 text-white w-full ">

            <div className='container mx-auto flex relative justify-between items-center px-8 h-20'>
                  {/* <!-- logo --> */}
                  <div className="inline-flex">
                      <Link to={"/"}> Home </Link>
                  </div>

                  {/* <!-- end logo --> */}

                  {/* <!-- login --> */}
                  <div className="flex-initial">
                      <div className="flex justify-end items-center relative">

                          <div className="flex mr-4 items-center">
                              <Link to={"/logout"} className="inline-block py-2 px-3 rounded-full">
                                  Log out
                              </Link>
                          </div>

                      </div>
                  </div>
                  {/* <!-- end login --> */}
            </div>

          </nav>

          <h1 className="mt-20 text-center text-4xl font-semibold">Welcome! <span className="text-lime-500">{data}</span></h1>
    </div>
  )
}