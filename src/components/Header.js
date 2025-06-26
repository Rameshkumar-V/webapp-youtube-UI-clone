import React from 'react'
import { hambburgerMenuURL, userIcon, youtubeURL } from '../utils/constants'

export default function Header() {
  return (
    <div className='grid grid-flow-col w-full p-4'>
    
        <div className='flex col-span-1'>
            <button className='h-8 w-10'><img src={hambburgerMenuURL } alt='Menu'></img></button>
            <img alt='Youtube' src={youtubeURL} className=' h-10 w-15'></img>
        </div>

        <div className='col-span-10 text-center '>
          <input type='text' className='border border-gray-300 w-1/2 py-2 rounded-l-full'></input>
          <button className='border border-gray-300 rounded-r-full px-4 py-2 bg-gray-200'>Search</button>
        </div>

        <div className='col-span-1'>
          <button><img alt='Icon' src={userIcon} className='h-12 w-12'></img></button>
        </div>
    </div>
  )
}
