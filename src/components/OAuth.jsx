import React from 'react'
import { FcGoogle } from 'react-icons/fc'
export default function OAuth() {
  return (
    <button className='flex w-full items-center justify-center bg-red-700 text-white p-3 rounded-lg uppercase text-sm font-semibold hover:bg-red-800 active:bg-red-900 shadow-md hover:shadow-lg active:shadow-lg transition duration-200 ease-in-out'>
        <FcGoogle className=' bg-white text-2xl rounded-full mr-2'/>
        <p>Continue with google</p>
    </button>
  )
}
