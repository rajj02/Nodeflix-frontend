import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <>
    <div className="flex justify-between items-center bg-gray-200 p-4 w-full mb-4 rounded-md">
         <h1 className="text-lg font-bold">Node flix</h1>
           <div className="flex items-center border border-gray-300 rounded-lg p-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                     <path fillRule="evenodd" d="M13.864 14.436a8 8 0 111.415-1.415l3.683 3.682a1 1 0 01-1.414
                           1.414l-3.684-3.682zM10 16A6 6 0 103.41 9.41 6 6 0 0010 16z" clipRule="evenodd" />
                </svg>
                 <input type="text" placeholder="Search..." className="ml-2 outline-none focus:ring-2 
                                                                       focus:ring-blue-500 border-none bg-transparent" />
           </div>
           <div className="space-x-4">
            <NavLink to="/login">
            <button
                className="px-4 py-2 bg-blue-500 text-white rounded-md 
                           hover:bg-blue-600 focus:outline-none focus:bg-blue-600">login</button>
            </NavLink>

            <NavLink to="/signingup">
            <button 
                className="px-4 py-2 bg-green-500 text-white rounded-md 
                           hover:bg-green-600 focus:outline-none focus:bg-green-600">signup</button>
            </NavLink>
            <NavLink to="/">
            <button 
                className="px-4 py-2 bg-red-500 text-white rounded-md 
                           hover:bg-green-600 focus:outline-none ">logout</button>
            </NavLink>


    </div>
</div>
    </>
  )
}

export default Header
