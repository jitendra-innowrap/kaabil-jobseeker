import Breadcrumb from "@/components/Breadcrumb";
import Image from "next/image";
import { FaCheckCircle, FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { FiCamera } from "react-icons/fi";
import { HiOutlineCurrencyRupee } from "react-icons/hi";
import { MdAccessTime } from "react-icons/md";
import GallarySlider from '@/components/JobDetail/Slider/GallarySlider';
import PlayStoreAppAd from "@/components/Banners/PlaystoreAppAd";
import GallerySlider from "@/components/JobDetail/Slider/GallarySlider";

export default function Home() {
  const slides = [
    <Image
      className="cursor-pointer"
      src="/assets/sliders/company-1.png"
      width={320}
      height={260}
      alt="company culture"
    />,
    <Image
      className="cursor-pointer"
      src="/assets/sliders/company-2.png"
      width={320}
      height={260}
      alt="company culture"
    />,
    <Image
      className="cursor-pointer"
      src="/assets/sliders/company-3.png"
      width={320}
      height={260}
      alt="company culture"
    />,
    <Image
      className="cursor-pointer"
      src="/assets/sliders/company-4.png"
      width={320}
      height={260}
      alt="company culture"
    />,
    <Image
      className="cursor-pointer"
      src="/assets/sliders/company-1.png"
      width={320}
      height={260}
      alt="company culture"
    />,
    <Image
      className="cursor-pointer"
      src="/assets/sliders/company-2.png"
      width={320}
      height={260}
      alt="company culture"
    />,
  ];
  return (
    <article>
      <section className='container'>
        <div className="mb-5 mt-10 md:mt-14 2xl:mt-20 gap-1 flex-wrap flex items-center text-[#4d4d4f]">
          <Breadcrumb root="Home" category="For Women" subCategory="Employer" subcategory2="Swiggy" />
        </div>
        <div className="flex flex-col sm:flex-row justify-between gap-5">
            <div className="grid place-items-center  max-h-[200px] 2xl:max-h-[280px]  min-h-full md:w-[350px] 2xl:max-w-[380px]  border-[#AEA3A3] border-[1px] rounded-[20px] p-[15px] lg:p-[20px] 2xl:p-[25px]">
                    <div className="relative w-[208] h-[65px] 2xl:w-[200px] 2xl:h-[81px]">
                      <Image
                          src={"/assets/banners/Swiggy-Symbol 1.png"}
                          fill
                          className='absolute'
                          alt='Swiggy-Symbol'
                          />
                    </div>
            </div>
            <div className="block xl:max-w-[480px] pl-3 md:pl-8 xl:pl-10 2xl:pl-14 2xl:max-w-[540px]">
              <p className="text-base md:text-lg 2xl:text-xl mb-3 md:mb-5">Swiggy is an Indian online food ordering and delivery platform. Founded in 2014, Swiggy is headquartered in Bangalore and operates in more than 580 Indian cities, as of July 2023. Besides food delivery, the platform also provides on-demand grocery deliveries under the name Instamart, and a same-day package delivery service called Swiggy Genie.</p>
              <div className="flex gap-3 items-center">
                <FaCheckCircle color="#5ABF8E" className="size-8 md:size-10 2xl:size-11"/>
                <p className="font-bold text-[#5ABF8E] text-base md:text-lg 2xl:text-xl">Kaabil Pledge Taken</p>
              </div>
            </div>
            <div className="block py-3 md:py6">
                <div className="block border-l border-l-black pl-3 md:pl-8 xl:pl-10 2xl:pl-14">
                  <div className="flex items-center gap-3 justify-start p-2 2xl:p-4">
                      <img src="/assets/icons/home.svg" alt="home icon" />
                      <p className='text-[#000] text-sm 2xl:text-base'>Food ordering and delivery platform</p>
                  </div>
                  <div className="flex items-center gap-3 justify-start p-2 2xl:p-4">
                      <img src="/assets/icons/group.svg" alt="home icon" />
                      <p className='text-[#000] text-sm 2xl:text-base'>5,001-10,000 employees</p>
                  </div>
                  <div className="flex items-center gap-3 justify-start p-2 2md:p-4">
                      <img src="/assets/icons/globe.svg" alt="home icon" />
                      <p className='text-[#000] text-sm 2xl:text-base'>Visit Swiggy Website</p>
                  </div>
                  <div className="flex justify-end items-center gap-2">
                      <FaInstagram className='size-5 2xl:size-6 text-[#000]'/> <FaTwitter className='size-5 2xl:size-6 text-[#000]'/> <FaYoutube className='size-5 2xl:size-6 text-[#000]'/> <FaFacebookF className='size-5 2xl:size-6 text-[#000]'/>
                  </div>
                </div>
            </div>
            
        </div>
      </section>

      <section className="container my-5 md:my-7 xl:my-9 2xl:my-11">
        <div className="flex flex-col xl:flex-row gap-5 md:gap-7 xl:gap-8 2xl:gap-10">
          <div className="block">
            <h2 className="text-2xl md:text-3xl xl:text-4xl 2xltext-[40px] mb-3 leading-normal font-extrabold">How we hire?</h2>
            <p className="font-bold text-lg md:text-xl 2xl:text-2xl">5 Steps to become a Swiggster</p>
            <div className="grid mb-2 md:mb-3 gap-8 md:grid-cols-2 mt-8 md:mt-10 xl:mt-12 2xl:mt-14">
              <div className="flex gap-2 md:gap-5">
                  <img
                    src={"/assets/icons/carerr_img1.png"}
                    className=' size-14 md:size-16 xl:size-24'
                    alt='Swiggy-Symbol'
                    />
                <div className="block ">
                  <p className="text-lg md:text-xl 2xl:text-2xl">Apply</p>
                  <p className="text-sm md:text-base">See something you want to be part of? Just select the job and apply in the above section.</p>
                </div>
              </div>
              <div className="flex gap-2 md:gap-5">
                  <img
                    src={"/assets/icons/carerr_img1.png"}
                    className=' size-14 md:size-16 xl:size-24'
                    alt='Swiggy-Symbol'
                    />
                <div className="block ">
                  <p className="text-lg md:text-xl 2xl:text-2xl">Apply</p>
                  <p className="text-sm md:text-base">See something you want to be part of? Just select the job and apply in the above section.</p>
                </div>
              </div>
              <div className="flex gap-2 md:gap-5">
                  <img
                    src={"/assets/icons/carerr_img1.png"}
                    className=' size-14 md:size-16 xl:size-24'
                    alt='Swiggy-Symbol'
                    />
                <div className="block ">
                  <p className="text-lg md:text-xl 2xl:text-2xl">Apply</p>
                  <p className="text-sm md:text-base">See something you want to be part of? Just select the job and apply in the above section.</p>
                </div>
              </div>
              <div className="flex gap-2 md:gap-5">
                  <img
                    src={"/assets/icons/carerr_img1.png"}
                    className=' size-14 md:size-16 xl:size-24'
                    alt='Swiggy-Symbol'
                    />
                <div className="block ">
                  <p className="text-lg md:text-xl 2xl:text-2xl">Apply</p>
                  <p className="text-sm md:text-base">See something you want to be part of? Just select the job and apply in the above section.</p>
                </div>
              </div>
              <div className="flex gap-2 md:gap-5">
                  <img
                    src={"/assets/icons/carerr_img1.png"}
                    className=' size-14 md:size-16 xl:size-24'
                    alt='Swiggy-Symbol'
                    />
                <div className="block ">
                  <p className="text-lg md:text-xl 2xl:text-2xl">Apply</p>
                  <p className="text-sm md:text-base">See something you want to be part of? Just select the job and apply in the above section.</p>
                </div>
              </div>

            </div>
            <h2 className="text-2xl md:text-3xl xl:text-4xl 2xltext-[40px] mb-3 leading-normal font-extrabold my-5 md:my-7 xl:my-9 2xl:my-10">Swiggy Employees Reviews</h2>
            <div className="flex xl:max-w-[calc(100vw_-560px)] overflow-x-auto custom-scrollbar gap-2 md:gap-3">
              {["","","",""].map(()=>(
                <div className="border min-w-[280px] px-4 py-7 border-black">
                <div className="flex items-center gap-2 md:gap-3 mb-3">
                  <div className="size-10 xl:size-14 rounded-full bg-[#D9D9D9]"></div>
                  <div className="flex gap-1">
                    <Image
                      src={"/assets/icons/Star - Full.svg"}
                      width={20}
                      height={20}
                      className='size-5'
                      alt='Star icon'
                      />
                    <Image
                      src={"/assets/icons/Star - Full.svg"}
                      width={20}
                      height={20}
                      className='size-5'
                      alt='Star icon'
                      />
                    <Image
                      src={"/assets/icons/Star - Full.svg"}
                      width={20}
                      height={20}
                      className='size-5'
                      alt='Star icon'
                      />
                    <Image
                      src={"/assets/icons/Star - Full.svg"}
                      width={20}
                      height={20}
                      className='size-5'
                      alt='Star icon'
                      />
                  </div>
                </div>
                <p className="font-bold text-xs mb-3">Anil  reviews Good company</p>
                <p className="text-xs">Dynamic workplace, flexible hours, rewarding challenges, excellent leadership</p>
              </div>
              ))}
            </div>
          </div>
          <div className="block">
            <strong className="block font-bold text-2xl py-5 md:py-6">
              Latest Jobs from Swiggy
            </strong>
            <div className="flex mt-4 mb-8 gap-4 md:gap-7 lg:flex-col overflow-auto custom-scrollbar">
              {["","",""].map(()=>(
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
                <div className="flex gap-2 flex-wrap">
                <button className="font-bold text-xs 2xl:text-sm py-2 mt-5 px-5 border-black border rounded-[20px]">
                  View Details
                </button>
                <button className="font-bold text-xs 2xl:text-sm py-2 mt-5 px-5 border-black border rounded-[20px]">
                  Save
                </button>
                <button className="font-bold text-white bg-[#E41C3B] text-xs 2xl:text-sm py-2 mt-5 px-5 border-[#E41C3B] border rounded-[20px]">
                  Apply Now
                </button>
                </div>
              </div>
              ))}
            </div>
            <div className="block text-end">
              <button type="button" className="mb-4 text-[#E41C3B] underline">
                  View all
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="container">
        <h2 className="text-2xl md:text-3xl xl:text-4xl 2xltext-[40px] mb-3 leading-normal font-bold my-5 md:my-7 xl:my-9 2xl:my-10">Life at Swiggy</h2>
        <GallerySlider
            slides={slides}
            freeMode={false}
            autoplayDuration={2000}
            speed={2000}
            spaceBetween={25}
            />
      </section>
      <section className="container">
        <strong className="text-2xl md:text-3xl xl:text-4xl 2xltext-[40px] font-bold block mt-10 lg:mt-20 mb-5 lg:mb-8">Explore Similar Jobs from Other Companies</strong>
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
                    View Details
                  </button>
                </div>
            </div>
          </div>
          ))}
        </div>
      </section>
      <PlayStoreAppAd/>        
    </article>
  );
}
