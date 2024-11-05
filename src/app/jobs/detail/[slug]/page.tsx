import PlayStoreAppAd from "@/components/Banners/PlaystoreAppAd";
import Breadcrumb from "@/components/Breadcrumb";
import Footer from "@/components/Footer";
import CompanyAboutSection from "@/components/JobDetail/CompanyAboutSection";
import JobdetailBanner from "@/components/JobDetail/JobdetailBanner";
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
              <div className="flex overflow-x-auto lg:w-[calc(100vw-663px)] lg:max-w-[calc(1440px-663px)]">
                <div className="whitespace-nowrap text-lg py-2 md:py-4 font-bold text-[#E41C3B] md:text-2xl px-3 md:px-6 border-b-[4px] border-[#E41C3B]">
                  Job Description
                </div>
                <div className="whitespace-nowrap text-lg py-2 md:py-4 font-bold text-[#4D4D4F] md:text-2xl px-3 md:px-6 border-b-[2px] border-[#4D4D4F]">
                  About Company
                </div>
                <div className="whitespace-nowrap text-lg py-2 md:py-4 font-bold text-[#4D4D4F] md:text-2xl px-3 md:px-6 border-b-[2px] border-[#4D4D4F]">
                  Benefits
                </div>
                <div className="whitespace-nowrap text-lg py-2 md:py-4 font-bold text-[#4D4D4F] md:text-2xl px-3 md:px-6 border-b-[2px] border-[#4D4D4F]">
                  Reviews
                </div>
              </div>
              <div className="block mt-8">
                <strong className="font-bold text-lg mt-8 block">Role & responsibilities</strong>
                <ul className="list-disc ml-6 text-base">
                  <li>Recommend and advise on best practices of picking and packing to improve Cx experience.</li>
                  <li>Advise partner stores on mechanisms/ processes leading to correct picking/ packing/ billing of Cx orders using appropriate tools and dashboards.</li>
                  <li>Guide partners on proper usage of dashboards and other portals to prevent any inaccuracies leading to Cx impact.</li>
                  <li>Assess the quality of Pods on cleanliness, hygiene and DE issues and suggest measures to enhance smooth Ops leading to better Cx experience.</li>
                  <li>Advise partner stores on speed perception and order fulfillment. Recommend best practices of the same to improve Cx.</li>
                  <li>Provide recommendations to partners for continuous improvement on delivering best Cx metrics.</li>
                  <li>Provide recommendations on the training aspects required to deliver/improve Cx metrics.</li>
                  <li>Provide recommendations to the partners regarding the change in demand pattern/ spike in order volumes due to holidays/ peak season and suggest/ propose measures to prevent any Cx impact.</li>
                </ul>
                
                <strong className="font-bold text-lg mt-8 block">Preferred candidate profile</strong>
                <ul className="list-disc ml-6 text-base">
                  <li>Graduate / 3-5 years of retail management experience</li>
                  <li>Must have led 15+ people/ employees at Retail/ Store.</li>
                  <li>Problem solving, data-driven decision-making</li>
                  <li>Adaptability to dynamic situations.</li>
                  <li>Experience from retail/FMCG/ quick commerce Industry.</li>
                </ul>

                <strong className="font-bold text-lg mt-8 block">Perks and benefits</strong>
                <ul className="list-disc ml-6 text-base">
                  <li>
                    Monthly Incentives
                  </li>
                  <li>
                    Medical Benefits
                  </li>
                  
                </ul>

                <strong className="font-bold text-lg mt-6 block">Role & responsibilities:</strong>
                Outline the day-to-day responsibilities for this role.

                <strong className="font-bold text-lg mt-6 block">Preferred candidate profile:</strong>
                Specify required role expertise, previous job experience, or relevant certifications.

                <strong className="font-bold text-lg mt-6 block">Perks and benefits:</strong>
                Mention available facilities and benefits the company is offering with this job.

                <strong className="font-bold text-lg mt-6 block">Role:</strong>
                 Retail Store Manager
                <strong className="font-bold text-lg block">Industry Type:</strong>
                 Retail
                <strong className="font-bold text-lg block">Department:</strong>
                 Merchandising, Retail & eCommerce
                <strong className="font-bold text-lg block">Employment Type:</strong>
                 Full Time, Permanent
                <strong className="font-bold text-lg block">Role Category:</strong>
                 Retail Store Operations
                Education
                <strong className="font-bold text-lg block">UG:</strong>
                 Any Graduate
                Key Skills
                Skills highlighted with ‘‘ are preferred keyskills
              </div>
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
              <div className="flex mt-4 mb-8 gap-4 md:gap-7 lg:flex-col overflow-auto">
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
        </section>
        <PlayStoreAppAd/>        
    </main>
  );
}
