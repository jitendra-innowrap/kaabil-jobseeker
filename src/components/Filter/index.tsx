'use client'
import React, { useState } from 'react'
import { BiFilterAlt } from 'react-icons/bi'
import LoadMoreAccordian from './LoadMoreAccordian'

export default function FilterSidebar() {
    const [open, setOpen] = useState(false)
  return (
    <div className="flex flex-col items-start gap-5 md:gap-7 xl:gap-10 2xl:gap-12">
          <h2 className="font-bold text-lg md:text-3xl 2xl:text-4xl">All Filter</h2>
          <div className="flex">
          <BiFilterAlt onClick={() => { setOpen(!open) }} size={24} className='absolute right-0 z-10 -top-14 lg:hidden cursor-pointer' />
          <div className={`absolute lg:relative z-[1] ${open ? '-right-full lg:right-0' : 'right-0'} transition-all flex flex-col gap-2 xl:gap-4 duration-300 h-max w-full max-w-[290px]`}>
              {/* <LoadMoreAccordian fetchMoreItems={fetchMoreItems} fetch={fetchSkillsMaster} header="Skills"   selected={skill} setSelected={setSkill}/>
              <LoadMoreAccordian  fetchMoreItems={fetchMoreItems} fetch={fetchjobRoleMaster} header="Roles"  selected={role} setSelected={setRole}/>
              <LoadMoreAccordian  fetchMoreItems={fetchMoreItems} fetch={fetchnoticePeriodMaster} header="Notice Period" selected={noticePeriod} setSelected={setNoticePeriod}/>
              <LoadMoreAccordian  fetchMoreItems={fetchMoreItems} fetch={fetchjobTypeMaster} header="Job Type" selected={jobType} setSelected={setJobType}/> */}
              <LoadMoreAccordian  isSearchable={true} header="Location" list={[{id:'1', name:'Date'},{id:'2', name:'Relevancy'}]} />
              <LoadMoreAccordian  list={[{id:'1', name:'Date'},{id:'2', name:'Relevancy'}]} header={"Job Type"}  />
              <LoadMoreAccordian  list={[{id:'1', name:'Date'},{id:'2', name:'Relevancy'}]} isRadio header={"Sort By"}  />
          </div>
          </div>

        </div>
  )
}
