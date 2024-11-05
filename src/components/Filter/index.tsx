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
          <div className={`absolute lg:relative z-[1] ${open ? '-right-full lg:right-0' : 'right-0'} transition-all flex flex-col gap-2 xl:gap-4 duration-300 h-max w-[290px]`}>
          <LoadMoreAccordian 
              header="Job Types"
              list={[
                  {id: '1', name: 'Full time'},
                  {id: '2', name: 'Part time'},
                  {id: '3', name: 'Freelance'},
                  {id: '4', name: 'Internship'}
              ]} 
          />

        <LoadMoreAccordian 
            header="Experience" 
            list={[
                {id: '1', name: 'Expert'},
                {id: '2', name: 'Intermediate'},
                {id: '3', name: 'Beginner'}
            ]} 
        />

        <LoadMoreAccordian 
            header="Sectors" 
            isSearchable={true} 
            fetchMoreItems={true}
            list={[
                {id: '1', name: 'Search Sector'},
                {id: '2', name: 'IT'},
                {id: '3', name: 'Media'},
                {id: '4', name: 'FinTech'},
                {id: '5', name: 'Telecom'},
                {id: '6', name: 'Hospitality'},
                {id: '7', name: 'Retail'},
                {id: '8', name: 'Education'},
                {id: '9', name: 'Healthcare'},
                {id: '10', name: 'Construction'},
                {id: '11', name: 'Transportation'},
                {id: '12', name: 'Real Estate'}
            ]} 
        />

        <LoadMoreAccordian 
            header="City" 
            isSearchable={true} 
            fetchMoreItems={true}
            list={[
                {id: '1', name: 'Search City'},
                {id: '2', name: 'Delhi/NCR (50)'},
                {id: '3', name: 'Gurugram (45)'},
                {id: '4', name: 'Faridabad (20)'},
                {id: '5', name: 'Mumbai (15)'},
                {id: '6', name: 'Ahmedabad (13)'},
                {id: '7', name: 'Uttar Pradesh (7)'},
                {id: '8', name: 'Bengaluru (30)'},
                {id: '9', name: 'Chennai (25)'},
                {id: '10', name: 'Pune (18)'},
                {id: '11', name: 'Kolkata (12)'},
                {id: '12', name: 'Hyderabad (22)'}
            ]} 
        />

        <LoadMoreAccordian 
            header="Companies" 
            isSearchable={true} 
            fetchMoreItems={true}
            list={[
                {id:'1', name:'IT Company A'},
                {id:'2', name:'IT Company B'},
                {id:'3', name:'Media Company A'},
                {id:'4', name:'FinTech Company A'},
                {id:'5', name:'Telecom Company A'}
            ]} 
        />

        <LoadMoreAccordian 
            header="Skills" 
            isSearchable={true} 
            fetchMoreItems={true}
            list={[
                {id:'1', name:'JavaScript'},
                {id:'2', name:'Python'},
                {id:'3', name:'Project Management'},
                {id:'4', name:'Data Analysis'},
                {id:'5', name:'Graphic Design'}
            ]} 
        />

        <LoadMoreAccordian 
            header="Benefits" 
            list={[
                {id:'1', name:'Health Insurance'},
                {id:'2', name:'Paid Time Off'},
                {id:'3', name:'Retirement Plan'},
                {id:'4', name:'Remote Work Options'},
                {id:'5', name:'Professional Development'}
            ]} 
        />
          </div>
          </div>

        </div>
  )
}
