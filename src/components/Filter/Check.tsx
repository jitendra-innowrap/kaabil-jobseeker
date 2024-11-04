import { CheckOptions } from '@/Types/Filter'
import React from 'react'

function Check({item, checked=false}:CheckOptions) {
    
  return (
    <li title={item as string} className={`font-medium cursor-pointer text-black text-sm flex items-center`}><div className={`flex w-4 h-4 border mr-4 text-[8px] font-bold justify-center transition-all duration-300 items-center ${checked?'border-white bg-[#225df7]  text-white':'text-transparent border-black'}`}>&#10003;</div><div className='flex w-fit'>
      <span className={`${checked?'text-black':'text-[#8C8C8C]'}`}>
        {item}
      </span>  
    </div></li>
  )
}

export default Check