'use client'
import React from 'react'
import Select from 'react-select'

export default function SearchSection() {
  return (
    <div className="seach-section bg-[#2C2C2C] grid grid-cols-12 gap-2 md:gap-3 px-5 py-8 md:px-14 md:py-12 xl:px-24 xl:py-14 2xl:px-20 rounded-full">
          <input type="text" placeholder="Enter Keywords or a job title, e.g. 'sales & marketing'" className="col-span-6 min-w-[200px] xl:min-w-[480px] 2xl:min-w-[530px] px-6 py-2 xl:px-8 xl:py-4 rounded-full" />
          <Select
            value={null}
            options={[]}
            placeholder="City"
            className='col-span-2'
            components={{
                DropdownIndicator: () => null, // Remove the dropdown arrow
                IndicatorSeparator: () => null, // Remove the separator
            }}
          />
          <Select
            value={null}
            options={[]}
            placeholder="Job Type"
            className='col-span-2'
            components={{
                DropdownIndicator: () => null, // Remove the dropdown arrow
                IndicatorSeparator: () => null, // Remove the separator
            }}
          />
          <button className="col-span-2 px-6 py-2 xl:px-8 xl:py-4 rounded-full bg-[#E41C3B] text-white">Search Jobs</button>
        </div>
  )
}
