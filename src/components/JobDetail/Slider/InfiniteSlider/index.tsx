// components/InfiniteSlider.tsx
import React from 'react';

interface InfiniteSliderProps {
  direction?: any; // Define the direction prop type
}

const LOGOS = [
  'Media (10)', 
  'Hospitality (20)', 
  'Automotive (50)', 
  'IT & Digital (70)', 
  'Agriculture', 
  'Manufacturing (20)', 
  'Insurance (5)'
];

const InfiniteSlider: React.FC<InfiniteSliderProps> = ({ direction }) => {
  return (<div className='flex overflow-auto'>
    {LOGOS.map((logo, index) => (
      <div key={index}>
        <div className="flex items-center justify-center p-4">
          <div className="bg-[#FDE2C9] font-normal text-base whitespace-nowrap md:text-lg xl:text-xl px-4 py-2 rounded-full">
            {logo}
          </div>
        </div>
      </div>
    ))}
    </div>
  );
};

export default InfiniteSlider;