import React from 'react'
interface CardProp{
    name:String,
    color:String
}
export default function IndustryCard({name, color="#FDE2C9"}:CardProp) {
  return (
    <div className="flex items-center justify-center p-4">
        <div className={`bg-[${color}] font-normal text-base whitespace-nowrap md:text-lg xl:text-xl px-4 py-2 rounded-full`}>
            {name}
        </div>
    </div>
  )
}
