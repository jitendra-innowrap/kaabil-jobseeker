import Image from 'next/image'
import React from 'react'
import { AiOutlineSearch } from 'react-icons/ai'

export default function Header() {
  return (
    <div className='flex border-b-[1px] border-black pl-5 md:pl-10 2xl:pl-16'>
        <div className="flex relative pr-4 items-center">
            <img
                src="/assets/logos/Kaabil logo.png"
                className='w-auto h-[50px] md:h-[80px] 2xl:h-[97px]'
                alt='kaabil logo'
                />
        </div>
        <div className="flex h-full border-l-[1px] border-black flex-col w-[-webkit-fill-available]">
            <div className="flex justify-between items-center py-2 pl-8 border-b-[1px] border-black pr-5 md:pr-10 2xl:pr-16">
                <div className="flex gap-3 py-4">
                    <AiOutlineSearch  size={20} color='#959595' />
                    <input type="text" className='outline-none focus:outline-none placeholder:text-[#959595] w-[250px]' placeholder='Search Jobs, Companies & More' />
                </div>
                <div className="flex gap-4">
                    <a href="http://job-exchange" target="_blank" className='px-6 py-2 text-white bg-[#E41C3B] rounded-3xl' rel="noopener noreferrer">Job Exchange</a>
                    <a href="http://job-exchange" target="_blank" className='px-6 py-2 text-white bg-[#4D4D4F] rounded-3xl' rel="noopener noreferrer">Employer Portal</a>
                </div>
            </div>
            <div className="flex justify-between pl-8 pr-5 md:pr-10 2xl:pr-16 items-center">
                <ul className="flex py-4 gap-8">
                    <li>Home</li>
                    <li>pathfinder</li>
                    <li>Community Forum</li>
                    <li>LMS</li>
                    <li>About</li>
                </ul>
                <img
                    src="/assets/logos/Google Play creame.png"
                    className='w-auto h-12'
                    alt='kaabil logo'
                />
            </div>
        </div>
    </div>
  )
}
