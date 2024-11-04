import PlayStoreAppAd from "@/components/Banners/PlaystoreAppAd";
import Breadcrumb from "@/components/Breadcrumb";
import FilterSidebar from "@/components/Filter";
import LoadMoreAccordian from "@/components/Filter/LoadMoreAccordian";
import SearchSection from "@/components/SearchSection";
import Image from "next/image";
import { BiFilterAlt } from "react-icons/bi";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { FiCamera } from "react-icons/fi";
import { HiOutlineCurrencyRupee, HiOutlineFilter } from "react-icons/hi";
import { MdAccessTime } from "react-icons/md";
import { TbFilter } from "react-icons/tb";
import { TiFilter } from "react-icons/ti";

export default function Home() {

  return (
    <div className="">
      <div className='container mb-5 xl:mb-6'>
        <div className="flex flex-col sm:flex-row justify-between  mt-5 md:mt-8">
            <div className="flex flex-col my-8 xl:max-w-[570px] 2xl:max-w-[770px]">
                  <Breadcrumb root="Home" category="For Women" />
                <div className="block">
                    <h1 className='my-6 text-2xl md:text-3xl xl:text-7xl 2xl:text-8xl  font-bold'>Find a jobs that works for you</h1>
                    <p className="mt-2 md:mt-5 max-w-[700px] text-lg xl:text-xl">
                        <span className='font-bold text-base'>Kaabil </span> is India's First Women's Growth Hub focusing on Women's Jobs, Skills, and Networking.
                    </p>
                </div>
            </div>
            <div className="block">
                        <Image
                            src={"/assets/banners/job-banner.png"}
                            width={280}
                            height={350}
                            className='w-[280px] xl:w-[350px] !h-auto'
                            alt='Jobs for Women'
                            />
            </div>
        </div>
      </div>
      <div className="container xl:!px-7">
        <SearchSection/>
      </div>

      <section className="container">
        <div className="my-5 md:my-8 2xl:my-10 flex items-center gap-5 md:gap-7 xl:gap-10 2xl:gap-12">
          <h2 className="font-bold text-lg md:text-3xl 2xl:text-4xl">Popular Jobs</h2>
          <ul className="flex gap-2 md:gap-4">
            <li className="rounded-[36px] px-4 md:px-6 py-2 md:py-4 border font-medium border-black text-base md:text-lg 2xl:text-2xl min-w-[70px] text-center capitalize">Retail</li>
            <li className="rounded-[36px] px-4 md:px-6 py-2 md:py-4 border font-medium border-black text-base md:text-lg 2xl:text-2xl min-w-[70px] text-center capitalize">Manufacturing</li>
            <li className="rounded-[36px] px-4 md:px-6 py-2 md:py-4 border font-medium border-black text-base md:text-lg 2xl:text-2xl min-w-[70px] text-center capitalize">IT</li>
            <li className="rounded-[36px] px-4 md:px-6 py-2 md:py-4 border font-medium border-black text-base md:text-lg 2xl:text-2xl min-w-[70px] text-center capitalize">Healthcare</li>
            <li className="rounded-[36px] px-4 md:px-6 py-2 md:py-4 border font-medium border-black text-base md:text-lg 2xl:text-2xl min-w-[70px] text-center capitalize">Hospitality</li>
            <li className="rounded-[36px] px-4 md:px-6 py-2 md:py-4 border font-medium border-black text-base md:text-lg 2xl:text-2xl min-w-[70px] text-center capitalize">Travel</li>
          </ul>
        </div>
        <div className="mt-10 md:mt-16 2xl:mt-[70px] flex gap-5 md:gap-7 xl:gap-10">
            <FilterSidebar/>
          <div style={{width:"-webkit-fill-available"}}>
            <div className="flex justify-between mb-5 xl:mb-12">
              <p className="block">170 similar jobs found for “Store Manager” in Delhi</p>
              <p className="block">Sort BY <HiOutlineFilter className="inline size-5"/></p>
            </div>
            <div className="flex flex-col gap-4 md:gap-6">
              <div className="border sm:flex w-full max-w-[920px] border-[#A7A7A7] rounded-[20px] justify-between px-3 sm:px-8 py-3 sm:py-7">
                <div className="block">
                  <Image
                      src={"/assets/logos/caratlane.png"}
                      width={64}
                      height={58.4}
                      alt="company logo"
                      className="block sm:hidden mb-2"
                      />
                  <strong className="font-bold text-lg md:text-xl mb-2 block">Store Floor Manager | Noida</strong>
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
                    src={"/assets/logos/caratlane.png"}
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
              <div className="border sm:flex w-full max-w-[920px] border-[#A7A7A7] rounded-[20px] justify-between px-3 sm:px-8 py-3 sm:py-7">
                <div className="block">
                  <Image
                      src={"/assets/logos/caratlane.png"}
                      width={64}
                      height={58.4}
                      alt="company logo"
                      className="block sm:hidden mb-2"
                      />
                  <strong className="font-bold text-lg md:text-xl mb-2 block">Store Floor Manager | Noida</strong>
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
                    src={"/assets/logos/caratlane.png"}
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
              <div className="border sm:flex w-full max-w-[920px] border-[#A7A7A7] rounded-[20px] justify-between px-3 sm:px-8 py-3 sm:py-7">
                <div className="block">
                  <Image
                      src={"/assets/logos/caratlane.png"}
                      width={64}
                      height={58.4}
                      alt="company logo"
                      className="block sm:hidden mb-2"
                      />
                  <strong className="font-bold text-lg md:text-xl mb-2 block">Store Floor Manager | Noida</strong>
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
                    src={"/assets/logos/caratlane.png"}
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
            </div>
          </div>
        </div>
      </section>

      <PlayStoreAppAd/>
    </div>
  );
}
