import PlayStoreAppAd from "@/components/Banners/PlaystoreAppAd";
import Breadcrumb from "@/components/Breadcrumb";
import Footer from "@/components/Footer";
import CompanyAboutSection from "@/components/JobDetail/CompanyAboutSection";
import JobdetailBanner from "@/components/JobDetail/JobdetailBanner";
import Tabs from "@/components/JobDetail/Tabs";
import Image from "next/image";
import { FiCamera } from "react-icons/fi";
import { GoShareAndroid } from "react-icons/go";
import { HiOutlineCurrencyRupee } from "react-icons/hi";
import { IoHeartOutline } from "react-icons/io5";
import { MdAccessTime } from "react-icons/md";

export default function Home() {
  return (
    <main className="">
        <div className="container mb-5 mt-10 md:mt-14 2xl:mt-20 gap-1 flex-wrap flex items-center text-[#4d4d4f]">
          <Breadcrumb root="Home" category="For Women" subCategory="Employer" subcategory2="Swiggy" subcategory3="Jobs" />
        </div>
        <JobdetailBanner />
        <section className="container">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-20 mt-8 ">
            <div className="block">
              <Tabs/>
              <div className="flex flex-wrap mt-8 md:mt-16 md:mb-16 gap-2">
                  <button className='py-2 px-4 xl:px-6 text-xs md:text-lg xl:text-xl font-bold rounded-3xl border-[1px] bg-white border-[#E41C3B] text-[#E41C3B]'>Register to Apply</button>
                  <button className='py-2 px-4 xl:px-6 text-xs md:text-lg xl:text-xl font-bold rounded-3xl border-[1px] text-white border-[#E41C3B] bg-[#E41C3B]'>Login to Apply</button>
                  <div className="flex">
                      <button className='py-2 px-4 xl:px-6 text-xs md:text-lg xl:text-xl font-bold rounded-3xl bg-white border-[#E41C3B] text-[#E41C3B]'>Follow</button>
                      <button className='py-2 px-2 2xl:px-4 text-xs md:text-lg xl:text-xl font-bold rounded-3xl bg-white border-[#E41C3B] text-[#E41C3B]'><GoShareAndroid className='inline size-4 md:size-8'/> Share</button>
                      <button className='py-2 px-2 2xl:px-4 text-xs md:text-lg xl:text-xl font-bold rounded-3xl bg-white border-[#E41C3B] text-[#E41C3B]'><IoHeartOutline className='inline size-4 md:size-7'/> Save</button>    
                  </div>
              </div>
            </div>
            <div className="block">
              <strong className="block font-bold text-2xl py-5 md:py-6">
                Explore Jobs from Swiggy
              </strong>
              <div className="flex mt-4 mb-8 gap-4 md:gap-7 lg:flex-col overflow-auto custom-scrollbar">
                <div className="border border-[#A7A7A7] rounded-[20px] min-w-[320px] md:min-w-[380px] px-5 md:px-8 py-4 md:py-7">
                  <strong className="font-bold text-lg md:text-xl mb-2 block">Store Floor Manager | Delhi</strong>
                  <p className="font-light text-base text-[#727272]">Posted by HR Services Limited</p>
                  <div className="flex flex-wrap gap-y-1 flex-row md:items-center mt-3 gap-x-1 md:gap-x-3 md:mt-3">
                      <span className='opacity-80 flex items-center gap-1 md:gap-2 text-xs md:text-[14px]'><MdAccessTime className='inline size-3 md:size-5'/> Full Time</span> 
                      <span className='opacity-80 flex items-center gap-1 md:gap-2 text-xs md:text-[14px]'><FiCamera className='inline size-3 md:size-5'/> 2-5 years of experience</span>
                      <span className='opacity-80 flex items-center gap-1 md:gap-2 text-xs md:text-[14px]'><HiOutlineCurrencyRupee className='inline size-3 md:size-5'/> 3L-6 Lacs PA</span>
                  </div>
                  <div className="flex mt-4 flex-wrap opacity-80 gap-2 text-xs md:text-[14px]">
                    <span>Store Manager</span>
                    <span>Luxury Sales</span>
                    <span>Sales Operation</span>
                  </div>
                  <button className="font-bold text-xs md:text-sm py-2 mt-5 px-5 border-black border rounded-[20px]">
                    View Details
                  </button>
                </div>
                <div className="border border-[#A7A7A7] rounded-[20px] min-w-[320px] md:min-w-[380px] px-5 md:px-8 py-4 md:py-7">
                  <strong className="font-bold text-lg md:text-xl mb-2 block">Store Floor Manager | Delhi</strong>
                  <p className="font-light text-base text-[#727272]">Posted by HR Services Limited</p>
                  <div className="flex flex-wrap gap-y-1 flex-row md:items-center mt-3 gap-x-1 md:gap-x-3 md:mt-3">
                      <span className='opacity-80 flex items-center gap-1 md:gap-2 text-xs md:text-[14px]'><MdAccessTime className='inline size-3 md:size-5'/> Full Time</span> 
                      <span className='opacity-80 flex items-center gap-1 md:gap-2 text-xs md:text-[14px]'><FiCamera className='inline size-3 md:size-5'/> 2-5 years of experience</span>
                      <span className='opacity-80 flex items-center gap-1 md:gap-2 text-xs md:text-[14px]'><HiOutlineCurrencyRupee className='inline size-3 md:size-5'/> 3L-6 Lacs PA</span>
                  </div>
                  <div className="flex mt-4 flex-wrap opacity-80 gap-2 text-xs md:text-[14px]">
                    <span>Store Manager</span>
                    <span>Luxury Sales</span>
                    <span>Sales Operation</span>
                  </div>
                  <button className="font-bold text-xs md:text-sm py-2 mt-5 px-5 border-black border rounded-[20px]">
                    View Details
                  </button>
                </div>
                <div className="border border-[#A7A7A7] rounded-[20px] min-w-[320px] md:min-w-[380px] px-5 md:px-8 py-4 md:py-7">
                  <strong className="font-bold text-lg md:text-xl mb-2 block">Store Floor Manager | Delhi</strong>
                  <p className="font-light text-base text-[#727272]">Posted by HR Services Limited</p>
                  <div className="flex flex-wrap gap-y-1 flex-row md:items-center mt-3 gap-x-1 md:gap-x-3 md:mt-3">
                      <span className='opacity-80 flex items-center gap-1 md:gap-2 text-xs md:text-[14px]'><MdAccessTime className='inline size-3 md:size-5'/> Full Time</span> 
                      <span className='opacity-80 flex items-center gap-1 md:gap-2 text-xs md:text-[14px]'><FiCamera className='inline size-3 md:size-5'/> 2-5 years of experience</span>
                      <span className='opacity-80 flex items-center gap-1 md:gap-2 text-xs md:text-[14px]'><HiOutlineCurrencyRupee className='inline size-3 md:size-5'/> 3L-6 Lacs PA</span>
                  </div>
                  <div className="flex mt-4 flex-wrap opacity-80 gap-2 text-xs md:text-[14px]">
                    <span>Store Manager</span>
                    <span>Luxury Sales</span>
                    <span>Sales Operation</span>
                  </div>
                  <button className="font-bold text-xs md:text-sm py-2 mt-5 px-5 border-black border rounded-[20px]">
                    View Details
                  </button>
                </div>
                <div className="border border-[#A7A7A7] rounded-[20px] min-w-[320px] md:min-w-[380px] px-5 md:px-8 py-4 md:py-7">
                  <strong className="font-bold text-lg md:text-xl mb-2 block">Store Floor Manager | Delhi</strong>
                  <p className="font-light text-base text-[#727272]">Posted by HR Services Limited</p>
                  <div className="flex flex-wrap gap-y-1 flex-row md:items-center mt-3 gap-x-1 md:gap-x-3 md:mt-3">
                      <span className='opacity-80 flex items-center gap-1 md:gap-2 text-xs md:text-[14px]'><MdAccessTime className='inline size-3 md:size-5'/> Full Time</span> 
                      <span className='opacity-80 flex items-center gap-1 md:gap-2 text-xs md:text-[14px]'><FiCamera className='inline size-3 md:size-5'/> 2-5 years of experience</span>
                      <span className='opacity-80 flex items-center gap-1 md:gap-2 text-xs md:text-[14px]'><HiOutlineCurrencyRupee className='inline size-3 md:size-5'/> 3L-6 Lacs PA</span>
                  </div>
                  <div className="flex mt-4 flex-wrap opacity-80 gap-2 text-xs md:text-[14px]">
                    <span>Store Manager</span>
                    <span>Luxury Sales</span>
                    <span>Sales Operation</span>
                  </div>
                  <button className="font-bold text-xs md:text-sm py-2 mt-5 px-5 border-black border rounded-[20px]">
                    View Details
                  </button>
                </div>

              </div>
            </div>
          </div>
        </section>
        <CompanyAboutSection/>
        <section className="container">
          <strong className="text-lg md:text-2xl font-bold block mt-10 lg:mt-20 mb-5 lg:mb-8">Explore Similar Jobs from Other Companies</strong>
          <div className="flex flex-col gap-4 md:gap-6">
            {["","",""].map(()=>(
              <div className="border sm:flex w-full max-w-[920px] border-[#A7A7A7] rounded-[20px] justify-between px-3 sm:px-8 py-3 sm:py-7">
              <div className="block">
                <Image
                    src={"/assets/logos/jio.png"}
                    width={64}
                    height={58.4}
                    alt="company logo"
                    className="block sm:hidden mb-2"
                    />
                <strong className="font-bold text-lg md:text-xl mb-2 block">Store Floor Manager | Delhi</strong>
                <p className="font-light text-base text-[#727272]">Posted by HR Services Limited</p>
                <div className="flex flex-wrap gap-y-1 flex-row md:items-center mt-3 gap-x-1 md:gap-x-3 md:mt-3">
                    <span className='opacity-80 flex items-center gap-1 md:gap-2 text-xs md:text-[14px]'><MdAccessTime className='inline size-3 md:size-5'/> Full Time</span> 
                    <span className='opacity-80 flex items-center gap-1 md:gap-2 text-xs md:text-[14px]'><FiCamera className='inline size-3 md:size-5'/> 2-5 years of experience</span>
                    <span className='opacity-80 flex items-center gap-1 md:gap-2 text-xs md:text-[14px]'><HiOutlineCurrencyRupee className='inline size-3 md:size-5'/> 3L-6 Lacs PA</span>
                </div>
                <div className="flex mt-4 flex-wrap opacity-80 gap-2 text-xs md:text-[14px]">
                  <span>Store Manager</span>
                  <span>Luxury Sales</span>
                  <span>Sales Operation</span>
                </div>
              </div>
              <div className="flex flex-col items-end">
                <Image
                  src={"/assets/logos/jio.png"}
                  width={80}
                  height={73}
                  alt="company logo"
                  className="hidden sm:block"
                  />
                  <div className="flex gap-2 md:gap-3">
                    <button className="font-bold text-xs md:text-sm py-2 mt-5 px-5 border-black border rounded-[20px]">
                      Save
                    </button>
                    <button className="font-bold text-xs text-white bg-[#E41C3B] md:text-sm py-2 mt-5 px-5 border-[#E41C3B] border rounded-[20px]">
                      Apply Now
                    </button>
                  </div>
              </div>
            </div>
            ))}
          </div>
        </section>
        <PlayStoreAppAd/>        
    </main>
  );
}
