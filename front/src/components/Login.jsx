import React, {useState} from 'react'
import {Link,useNavigate} from 'react-router-dom'
import axios from "axios"

const URI = "http://localhost:5000/login"

export function Login() {

  const navigate = useNavigate()

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")

  // axios.defaults.withCredentials = true

  const login = async (e) => {
    try {
      e.preventDefault()
      const {data} = await axios.post(URI, {email,password},{withCredentials:true})
      console.log(data)
      navigate("/")
    } catch (error) {
      setError(error.response.data.message)
    }
  }

  return (
    <>

      {/* <!-- component --> */}
      <div className="h-screen flex justify-center items-center">
        <div className="bg-white lg:w-4/12 md:6/12 w-10/12 m-auto my-10 shadow-md">
          <div className="py-8 px-8 rounded-xl">
            <h1 className="font-medium text-2xl mt-3 text-center">Login</h1>
            <form onSubmit={login} className="mt-6">
              <div className="my-5 text-sm">
                <label htmlFor="Email" className="block text-black">Email</label>
                <input id="Email" name="email" type="text" value={email} autoFocus className="rounded-sm px-4 py-3 mt-3 focus:outline-none bg-gray-100 w-full" placeholder="Email" onChange={(e) => setEmail(e.target.value)} required />
              </div>
              <div className="my-5 text-sm">
                <label htmlFor="password" className="block text-black">Password</label>
                <input id="password" name="password" type="password" value={password} className="rounded-sm px-4 py-3 mt-3 focus:outline-none bg-gray-100 w-full" placeholder="Password" onChange={(e) => setPassword(e.target.value)} required />
                <h3 className="text-red-500 italic text-md mt-2">{error}</h3>
                <div className="flex justify-end mt-2 text-xs text-gray-600">
                  <Link to={"/asd"}>Forget Password?</Link>
                </div>
              </div>

              <button type="submit" onClick={()=> setError("")} className="block text-center text-white bg-gray-800 p-3 duration-300 rounded-sm hover:bg-black w-full">Login</button>
            </form>

            {/* <div className="flex md:justify-between justify-center items-center mt-10">
              <hr />
              <p className="md:mx-2 text-sm font-light text-gray-400"> Login With Social </p>
              <hr />
            </div>

            <div className="grid md:grid-cols-2 gap-2 mt-7">
              <div>
                <button className="text-center w-full text-white bg-blue-900 p-3 duration-300 rounded-sm hover:bg-blue-700">Facebook</button>
              </div>
              <div>
                <button className="text-center w-full text-white bg-blue-400 p-3 duration-300 rounded-sm hover:bg-blue-500">Twitter</button>
              </div>
            </div> */}

            <p className="mt-12 text-xs text-center font-light text-gray-400"> Don't have an account? <Link to={"/register"} className="text-black font-medium"> Create One </Link></p>

          </div>
        </div>
      </div>

    </>
  )
}