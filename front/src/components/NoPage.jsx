import React from "react"
import {Link} from "react-router-dom"

export function NoPage() {
  return (
    <>
      <div className="h-screen container mx-auto flex justify-center items-center">
          <div className="text-center">
            <h1 className="text-center text-4xl font-semibold mb-5">Page <span className="text-red-600">not found</span></h1>
            <Link to={"/login"} className="font-medium text-stone-800 border-b-2 border-red-700">Go to login</Link>
          </div>
      </div>
    </>
  )
}