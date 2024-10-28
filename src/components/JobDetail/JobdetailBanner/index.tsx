import React from 'react'
import { FaStar } from 'react-icons/fa'
import { FiCamera } from 'react-icons/fi'
import { GoShareAndroid } from 'react-icons/go'
import { HiOutlineCurrencyRupee } from 'react-icons/hi'
import { IoHeartOutline } from 'react-icons/io5'
import { MdAccessTime } from 'react-icons/md'

export default function JobdetailBanner() {
  return (
    <div className='container'>
        <div className="flex">
            <div className="block">
                <h1 className='text-2xl font-extrabold'>Senior Store Managers</h1>
                <div className="flex gap-4">
                    <p className='font-bold'>Swiggy</p>
                    <span><FaStar className='inline text-[#DFB300]'/><FaStar className='inline text-[#DFB300]'/><FaStar className='inline text-[#DFB300]'/><FaStar className='inline text-[#DFB300]'/><FaStar className='inline text-[#AA9393]'/></span>
                    <p>22 reviews</p>
                </div>
                <div className="flex items-center gap-3 mt-6">
                    <span className='opacity-80'><MdAccessTime className='inline'/> Full Time</span> 
                    <span className='opacity-80'><FiCamera className='inline'/> 2-5 years of experience</span>
                    <span className='opacity-80'><HiOutlineCurrencyRupee className='inline'/> 3L-6 Lacs PA</span>
                </div>
                <div className="flex items-center gap-3 mt-4">
                    <span className='opacity-80'> Job Posted:  2 Days Ago</span> 
                    <span className='opacity-80'> Openings:  10</span>
                    <span className='opacity-80'> Applicants:  5</span>
                </div>
                <div className="flex mt-16 gap-2">
                    <button className='py-2 px-4 rounded-3xl border-[1px] bg-white border-[#E41C3B] text-[#E41C3B]'>Register to Apply</button>
                    <button className='py-2 px-4 rounded-3xl border-[1px] text-white border-[#E41C3B] bg-[#E41C3B]'>Login to Apply</button>
                    <button className='py-2 px-4 rounded-3xl bg-white border-[#E41C3B] text-[#E41C3B]'>Follow</button>
                    <button className='py-2 px-4 rounded-3xl bg-white border-[#E41C3B] text-[#E41C3B]'><GoShareAndroid className='inline'/> Share</button>
                    <button className='py-2 px-4 rounded-3xl bg-white border-[#E41C3B] text-[#E41C3B]'><IoHeartOutline className='inline'/> Save</button>
                </div>
            </div>
            <div className="block">
                
            </div>
        </div>
    </div>
  )
}
