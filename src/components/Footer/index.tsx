import Image from 'next/image'
import React from 'react'
import { FaArrowRight, FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'
import { MdOutlineArrowRightAlt } from 'react-icons/md'

export default function Footer() {
  return (
    <footer className='border-t-4 border-[#E41C3B]'>
        <div className="container py-28 lg:py-40">
            <div className="flex flex-col md:flex-row gap-10 items-start md:justify-between md:items-center">
                <Image
                    src={"/assets/logos/Kaabil logo.png"}
                    width={200}
                    height={97}
                    alt="company logo"
                    className=""
                    />
                <strong className='lg:max-w-[309px] font-bold text-lg md:text-sm lg:text-lg xl:text-2xl'>Subscribe to <span className='text-[#E41C3B]'>Kaabil</span> to Get Latest Updates!</strong>
                <div className="relative w-full md:w-[260px] 2xl:w-[300px]">
                    <input type="text" placeholder='Enter Your Email' className="inline w-full border-b-2 border-black pb-3 placeholder:text-black" />
                    <FaArrowRight className='absolute size-6 right-0 top-0 text-[#E41C3B] font-bold '/>
                </div>
                <div className="flex justify-end items-center gap-2">
                    <FaInstagram className='size-6 xl:size-8 text-[#E41C3B]'/> <FaTwitter className='size-6 xl:size-8 text-[#E41C3B]'/> <FaYoutube className='size-6 xl:size-8 text-[#E41C3B]'/> <FaFacebookF className='size-6 xl:size-8 text-[#E41C3B]'/>
                </div>
            </div>
            <div className="grid lg:gap-10 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 mt-8 md:mt-10 xl:mt-16 mb-8 md:mb-10 xl:mb-16">
                <div className="block">
                    <strong className='font-bold text-[#E41C3B] text-base mb-4 block'>Company</strong>
                    <ul>
                        <li className='mb-3'>Our Story</li>
                        <li className='mb-3'>Our Mission</li>
                        <li className='mb-3'>Leadership Team</li>
                        <li className='mb-3'>Careers</li>
                        <li className='mb-3'>Contact Us</li>
                    </ul>
                </div>
                <div className="block">
                    <strong className='font-bold text-[#E41C3B] text-base mb-4 block'>For Women</strong>
                    <ul>
                        <li className='mb-3'>Search Jobs</li>
                        <li className='mb-3'>Find Employers</li>
                        <li className='mb-3'>Join Community</li>
                        <li className='mb-3'>Skill Training Courses</li>
                        <li className='mb-3'>Stories & Inspiration</li>
                        <li className='mb-3'>Women Job Seekers Login</li>
                    </ul>
                </div>
                <div className="block">
                    <strong className='font-bold text-[#E41C3B] text-base mb-4 block'>For Employers</strong>
                    <ul>
                        <li className='mb-3'>Employers Resources</li>
                        <li className='mb-3'>Hiring Talents</li>
                        <li className='mb-3'>Manage Jobs</li>
                        <li className='mb-3'>Employer Login</li>
                    </ul>
                </div>
                <div className="block">
                    <strong className='font-bold text-[#E41C3B] text-base mb-4 block'>Resources</strong>
                    <ul>
                        <li className='mb-3'>Blogs</li>
                        <li className='mb-3'>Stories</li>
                        <li className='mb-3'>Videos</li>
                        <li className='mb-3'>Podcasts</li>
                        <li className='mb-3'>Events</li>
                        <li className='mb-3'>Join a community</li>
                    </ul>
                </div>
                <div className="block">
                    <strong className='font-bold text-[#E41C3B] text-base mb-4 block'>Trending</strong>
                    <ul>
                        <li className='mb-3'>Sales & Marketing Jobs</li>
                        <li className='mb-3'>Administration Jobs</li>
                        <li className='mb-3'>Retail Jobs</li>
                        <li className='mb-3'>Accounting Jobs</li>
                        <li className='mb-3'>Manufacturing Jobs</li>
                        <li className='mb-3'>Transport & Shipping Jobs</li>
                    </ul>
                </div>
                <div className="block">
                    <strong className='font-bold text-[#E41C3B] text-base mb-4 block'>Legal</strong>
                    <ul>
                        <li className='mb-3'>Terms of Use</li>
                        <li className='mb-3'>Privacy Policy</li>
                        <li className='mb-3'>Disclaimers</li>
                        <li className='mb-3'>Cookies Policy</li>
                    </ul>
                </div>
            </div>
            <div className="flex w-full justify-between flex-col md:flex-row gap-4 items-center">
                <div className="block text-center md:text-start">
                    <p className='text-sm opacity-70 text-[#2C2C2C]'>Copyright  @ Kaabil. All Right Reserved. 2024.</p>
                    <p className='text-sm opacity-70 text-[#2C2C2C]'>A Mahindra Intiative</p>
                </div>
                <p className='text-sm opacity-70 text-[#2C2C2C]'>Powered by Kaam.</p>
            </div>
        </div>
    </footer>
  )
}
