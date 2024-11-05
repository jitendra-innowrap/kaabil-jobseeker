import Image from 'next/image'
import React from 'react'
import Hamburger from 'hamburger-react'
import { SlMagnifier } from 'react-icons/sl'
import BurgerMenu from './BurgerMenu'
import Link from 'next/link'

export default function Header() {

  return (
    <header>
        <div className='flex py-4 md:py-0 justify-between md:justify-start border-b-[1px] border-[#A7A7A7] pl-5 xl:pl-14 2xl:pl-16'>
            <Link href="/" className="flex relative pr-4 items-center">
                <img
                    src="/assets/logos/Kaabil logo.svg"
                    className='w-auto max-w-fit h-[50px] xl:h-[80px] 2xl:h-[100px]'
                    alt='kaabil logo'
                    />
            </Link>
            <div className="hidden md:flex h-full border-l-[1px] border-[#A7A7A7] flex-col w-[-webkit-fill-available]">
                <div className="flex justify-between items-center py-2 pl-8 border-b-[1px] border-[#A7A7A7] pr-5 md:pr-10 2xl:pr-16">
                    <div className="flex gap-3 py-4">
                        <SlMagnifier  className='size-5' color='#959595' />
                        <input type="text" className='outline-none focus:outline-none placeholder:text-[#959595] w-[260px] lg:w-[350px] text-lg md:text-base xl:text-lg' placeholder='Search Jobs, Companies & More' />
                    </div>
                    <div className="flex gap-1 xl:gap-4">
                        <a href="http://job-exchange" target="_blank" className='px-3 xl:px-6 py-2 font-bold text-sm xl:text-base text-white bg-[#E41C3B] rounded-3xl' rel="noopener noreferrer">Job Exchange</a>
                        <a href="http://job-exchange" target="_blank" className='px-3 xl:px-6 py-2 font-bold text-sm xl:text-base text-white bg-[#4D4D4F] rounded-3xl' rel="noopener noreferrer">Employer Portal</a>
                    </div>
                </div>
                <div className="flex justify-between pl-8 pr-5 md:pr-10 2xl:pr-16 items-center">
                    <ul className="flex py-4 gap-4 xl:gap-8 lg:text-lg xl:text-xl">
                        <li>Home</li>
                        <li>pathfinder</li>
                        <li>Community Forum</li>
                        <li>LMS</li>
                        <li>About</li>
                    </ul>
                    <img
                        src="/assets/logos/Google Play light.svg"
                        className='w-auto h-[34px] xl:h-[44px]'
                        alt='Google Play Logo'
                    />
                </div>
            </div>
            <div className="md:hidden mr-4">
                <BurgerMenu />
            </div>
        </div>
    </header>
  )
}
