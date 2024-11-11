

import Image from "next/image";
import { FaCheckCircle } from "react-icons/fa";
import { FiCamera } from "react-icons/fi";
import { HiOutlineCurrencyRupee } from "react-icons/hi";
import { MdAccessTime } from "react-icons/md";
import PlayStoreAppAd from "@/components/Banners/PlaystoreAppAd";
import SearchSection from "@/components/SearchSection";
import InfiniteSlider from "@/components/JobDetail/Slider/InfiniteSlider";
import Resources from "@/components/Resorces";

export default function Home() {
    return (
        <article>
            <section className=' '>
                <div className='container mb-5 xl:mb-6'>
                    <div className="flex flex-col sm:flex-row justify-between">
                        <div className="flex flex-col mb-8 mt-10 md:mt-14 2xl:mt-20 xl:max-w-[570px] 2xl:max-w-[770px]">
                            <p className="text-primary font-medium text-lg xl:text-xl 2xl:text-2xl">Transforming 1M Women's Lives</p>
                            <h1 className='my-6 text-2xl md:text-3xl xl:text-7xl 2xl:text-8xl  font-bold'>Women's Career Network</h1>
                            <p className="mt-2 md:mt-5 max-w-[700px] text-lg xl:text-xl">
                                Empowering women with the skills and opportunities they need for success in today’s workforce.
                            </p>
                            <div className="flex flex-wrap mt-8 md:mt-16 md:mb-16 gap-2">
                                <button className='py-2 px-4 xl:px-6 text-xs md:text-lg xl:text-xl font-bold rounded-3xl border-[1px] bg-white border-[#E41C3B] text-[#E41C3B]'>Explore Career Pathways</button>
                                <button className='py-2 px-4 xl:px-6 text-xs md:text-lg xl:text-xl font-bold rounded-3xl border-[1px] text-white border-[#E41C3B] bg-[#E41C3B]'>Take Kaabil Pledge</button>
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
                    <div className="seach-section bg-[#2C2C2C] rounded-3xl md:rounded-full px-5 py-8 md:px-14 md:py-12 xl:px-24 xl:py-14 2xl:px-20">
                        <p className='text-white text-center text-2xl md:text-3xl xl:text-4xl 2xl:text-[55px] font-bold'>Search for Latest Jobs</p>
                        <p className='text-white text-center text-base md:text-lg  xl:text-xl 2xl:text-2xl opacity-80 mb-5 xl:mb-7 2xl:mb-8'>More than  <strong>15,00,000+ L</strong>  jobs across different sector only for women.</p>
                        <SearchSection />
                    </div>
                    <div className="grid grid-cols-2 gap-14 lg:grid-cols-4 container my-5 md:my-8 xl:my-14 2xl:my-16">
                        <div className="grid place-items-center">
                            <strong className="font-bold text-3xl md:text-4xl xl:text-5xl 2xl:text-6xl">500+</strong>
                            <p className="text-lg xl:text-2xl 2xl:text-3xl font-normal">Companies</p>
                        </div>
                        <div className="grid place-items-center">
                            <strong className="font-bold text-3xl md:text-4xl xl:text-5xl 2xl:text-6xl">50k+</strong>
                            <p className="text-lg xl:text-2xl 2xl:text-3xl font-normal">Jobs Posted</p>
                        </div>
                        <div className="grid place-items-center">
                            <strong className="font-bold text-3xl md:text-4xl xl:text-5xl 2xl:text-6xl">1.6M+</strong>
                            <p className="text-lg xl:text-2xl 2xl:text-3xl font-normal">Women Registered</p>
                        </div>
                        <div className="grid place-items-center">
                            <strong className="font-bold text-3xl md:text-4xl xl:text-5xl 2xl:text-6xl">5M+</strong>
                            <p className="text-lg xl:text-2xl 2xl:text-3xl font-normal">View on Job Posts</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="border-t-black border-b-black border-b border-t py-5 md:py-8 xl:py-14 2xl:py-16">
                <h3 className="text-2xl md:text-3xl xl:text-4xl 2xl:text-[55px] font-bold container">Explore Jobs in Top Industries</h3>
                <div className="w-full my-5 md:my-8 xl:my-14 2xl:my-16 max-w-[1440px] mx-auto">
                    <InfiniteSlider direction="ltr" />
                    <InfiniteSlider direction="rtl" />
                </div>
            </section>
            <section className="border-t-black border-b-black border-b border-t py-5 md:py-8 xl:py-14 2xl:py-16">
                <h3 className="text-2xl md:text-3xl xl:text-4xl 2xl:text-[55px] font-bold container">Top Companies for Women's Career Development</h3>
                <div className="w-full my-5 md:my-8 xl:my-14 2xl:my-16 max-w-[1440px] mx-auto">
                    <InfiniteSlider direction="ltr" />
                </div>
                <div className="container block text-end">
                    <button type="button" className="mb-4 text-[#E41C3B] underline">
                        View all Companies
                    </button>
                </div>
            </section>
            <section className="border-t-black border-b-black border-b border-t py-5 md:py-8 xl:py-14 2xl:py-16">
                <div className="container">
                    <h3 className="text-2xl md:text-3xl xl:text-4xl 2xl:text-[55px] font-bold max-w-[745px]">Build Your Career with the Right Tools and Guidance`</h3>
                    <div className="w-full flex gap-5 md:gap-7 xl:gap-9 2xl:gap-10 overflow-auto my-5 md:my-8 xl:my-14 2xl:my-16">
                        <div className="block min-w-[289px] md:min-w-[339px] xl:min-w-[409px]">
                            <div className="relative aspect-w-409 aspect-h-279 mb-5 xl:mb-6">
                                <Image
                                    src={"/assets/sliders/community_slider1.png"}
                                    alt='Community image'
                                    width={409}
                                    height={279}
                                    draggable="false"
                                    className="object-cover w-full h-full"
                                />
                            </div>
                            <h4 className="font-bold text-xl md:text-2xl xl:text-3xl 2xl:text-4xl">Pathfinder</h4>
                            <p className="text-lg py-5 xl:py-6 md:text-xl xl:text-2xl 2xl:text-[26px] opacity-80 font-normal">Discover personalised career paths that match your strengths and skills.</p>
                            <button className="font-bold text-base xl:text-lg 2xl:text-xl px-4 py-2 xl:px-7 2xl:px-8 xl:py-3 border rounded-full text-white bg-[#E41C3B]">Find Your Path</button>
                        </div>
                        <div className="block min-w-[289px] md:min-w-[339px] xl:min-w-[409px]">
                            <div className="relative aspect-w-409 aspect-h-279 mb-5 xl:mb-6">
                                <Image
                                    src={"/assets/sliders/community_slider1.png"}
                                    alt='Community image'
                                    width={409}
                                    height={279}
                                    draggable="false"
                                    className="object-cover w-full h-full"
                                />
                            </div>
                            <h4 className="font-bold text-xl md:text-2xl xl:text-3xl 2xl:text-4xl">Pathfinder</h4>
                            <p className="text-lg py-5 xl:py-6 md:text-xl xl:text-2xl 2xl:text-[26px] opacity-80 font-normal">Discover personalised career paths that match your strengths and skills.</p>
                            <button className="font-bold text-base xl:text-lg 2xl:text-xl px-4 py-2 xl:px-7 2xl:px-8 xl:py-3 border rounded-full text-white bg-[#E41C3B]">Find Your Path</button>
                        </div>
                        <div className="block min-w-[289px] md:min-w-[339px] xl:min-w-[409px]">
                            <div className="relative aspect-w-409 aspect-h-279 mb-5 xl:mb-6">
                                <Image
                                    src={"/assets/sliders/community_slider1.png"}
                                    alt='Community image'
                                    width={409}
                                    height={279}
                                    draggable="false"
                                    className="object-cover w-full h-full"
                                />
                            </div>
                            <h4 className="font-bold text-xl md:text-2xl xl:text-3xl 2xl:text-4xl">Pathfinder</h4>
                            <p className="text-lg py-5 xl:py-6 md:text-xl xl:text-2xl 2xl:text-[26px] opacity-80 font-normal">Discover personalised career paths that match your strengths and skills.</p>
                            <button className="font-bold text-base xl:text-lg 2xl:text-xl px-4 py-2 xl:px-7 2xl:px-8 xl:py-3 border rounded-full text-white bg-[#E41C3B]">Find Your Path</button>
                        </div>
                        <div className="block min-w-[289px] md:min-w-[339px] xl:min-w-[409px]">
                            <div className="relative aspect-w-409 aspect-h-279 mb-5 xl:mb-6">
                                <Image
                                    src={"/assets/sliders/community_slider1.png"}
                                    alt='Community image'
                                    width={409}
                                    height={279}
                                    draggable="false"
                                    className="object-cover w-full h-full"
                                />
                            </div>
                            <h4 className="font-bold text-xl md:text-2xl xl:text-3xl 2xl:text-4xl">Pathfinder</h4>
                            <p className="text-lg py-5 xl:py-6 md:text-xl xl:text-2xl 2xl:text-[26px] opacity-80 font-normal">Discover personalised career paths that match your strengths and skills.</p>
                            <button className="font-bold text-base xl:text-lg 2xl:text-xl px-4 py-2 xl:px-7 2xl:px-8 xl:py-3 border rounded-full text-white bg-[#E41C3B]">Find Your Path</button>
                        </div>
                    </div>
                </div>
            </section>

            <section className="container py-5 md:py-8 xl:py-14 2xl:py-16">
                <h3 className="mb-5 max-w-[1044px] mx-auto md:mb-8 xl:mb-14 2xl:mb-16 text-center text-2xl md:text-3xl xl:text-4xl 2xl:text-[55px] font-bold ">Connect with Opportunities and Jobs That Fit Your Career Goals</h3>
                <div className="flex flex-col-reverse md:flex-row">
                    <div className="block max-w-[380px] mt-10 md:mt-0">
                        <h3 className="text-2xl md:text-3xl xl:text-4xl 2xl:text-[45px] font-bold ">Job Exchange</h3>
                        <p className="text-lg py-5 xl:py-6 md:text-xl xl:text-2xl 2xl:text-[26px] font-normal">Browse job listings from employers looking for skilled women like you`</p>
                        <button className="font-bold text-base xl:text-lg 2xl:text-xl px-4 py-2 xl:px-7 2xl:px-8 xl:py-3 border rounded-full text-white bg-[#E41C3B]">Find Jobs</button>
                    </div>
                    <div className="block w-full">
                        <div className="flex flex-col gap-4 md:gap-6">
                            {["", "", ""].map(() => (
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
                                            <span className='opacity-80 flex items-center gap-1 md:gap-2 text-xs md:text-[14px]'><MdAccessTime className='inline size-3 md:size-5' /> Full Time</span>
                                            <span className='opacity-80 flex items-center gap-1 md:gap-2 text-xs md:text-[14px]'><FiCamera className='inline size-3 md:size-5' /> 2-5 years of experience</span>
                                            <span className='opacity-80 flex items-center gap-1 md:gap-2 text-xs md:text-[14px]'><HiOutlineCurrencyRupee className='inline size-3 md:size-5' /> 3L-6 Lacs PA</span>
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
                            ))
                            }
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-[#FCCB76] py-5 md:py-8 xl:py-14 2xl:py-16">
                <h3 className="container text-2xl md:text-3xl xl:text-4xl 2xl:text-[55px] font-bold ">Success Stories</h3>
                <p className="container text-lg py-5 xl:py-6 md:text-xl xl:text-2xl 2xl:text-[26px] font-normal">Read inspiring stories of women who found success through <span className="font-bold text-[#E41C3B]">Kaabil</span>.</p>
                <div className="container-left flex py-3 xl:py-8 overflow-auto gap-5 xl:gap-8 2xl:gap-10">
                    <div className="block bg-[#FFEDCE] p-6 rounded-3xl min-w-[80%] xl:min-w-[780px] md:p-8 xl:p-10 2xl:p-12">
                        <Image
                            src={"/assets/icons/qoutes.png"}
                            width={100}
                            height={100}
                            alt="company logo"
                            className="hidden sm:block"
                        />
                        <p className="text-lg xl:text-2xl 2xl:text-3xl py-3 xl:py-8 md:w-[587px] 2xl:w-[787px]">Priya, a 12th-grade graduate, secured a Sales Associate job at a local retail chain via Kaabil. She’s now thriving and plans to pursue further studies in</p>
                        <div className="flex gap-4 xl:gap-6 2xl:gap-8">
                            <Image
                                src={"/assets/icons/profile.png"}
                                width={80}
                                height={73}
                                alt="company logo"
                                className="hidden sm:block"
                            />
                            <div className="block">
                                <p className="text-[#E41C3B] text-base xl:text-lg 2xl:text-2xl">Priya Sharma</p>
                                <p className="text-[#787878] text-base xl:text-lg 2xl:text-2xl">Retail Associates</p>
                                <p className="text-[#787878] text-base xl:text-lg 2xl:text-2xl">Kota, Rajasthan</p>
                            </div>
                        </div>
                    </div>
                    <div className="block bg-[#FFEDCE] p-6 rounded-3xl min-w-[80%] xl:min-w-[675px] md:p-8 xl:p-10 2xl:p-12">
                        <Image
                            src={"/assets/icons/qoutes.png"}
                            width={100}
                            height={100}
                            alt="company logo"
                            className="hidden sm:block"
                        />
                        <p className="text-lg xl:text-2xl 2xl:text-3xl py-3 xl:py-8 md:w-[587px] 2xl:w-[787px]">Priya, a 12th-grade graduate, secured a Sales Associate job at a local retail chain via Kaabil. She’s now thriving and plans to pursue further studies in</p>
                        <div className="flex gap-4 xl:gap-6 2xl:gap-8">
                            <Image
                                src={"/assets/icons/profile.png"}
                                width={80}
                                height={73}
                                alt="company logo"
                                className="hidden sm:block"
                            />
                            <div className="block">
                                <p className="text-[#E41C3B] text-base xl:text-lg 2xl:text-2xl">Priya Sharma</p>
                                <p className="text-[#787878] text-base xl:text-lg 2xl:text-2xl">Retail Associates</p>
                                <p className="text-[#787878] text-base xl:text-lg 2xl:text-2xl">Kota, Rajasthan</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex container">
                    <div className="block max-w-[380px]">
                        <button className="font-bold text-base xl:text-lg 2xl:text-xl px-4 py-2 xl:px-7 2xl:px-8 xl:py-3 border-none rounded-full text-white bg-[#E41C3B]">Find Jobs</button>
                    </div>
                </div>
            </section>

            <section className="container py-5 md:py-8 xl:py-14 2xl:py-16">
                <h3 className="text-2xl md:text-3xl xl:text-4xl 2xl:text-[55px] 2xl:leading-normal font-bold max-w-[700px]">Create a Future with Equal Opportunities</h3>
                <div className="grid gap-5 xl:gap-16">
                    <div className="flex flex-col gap-10 xl:gap-12 sm:flex-row justify-between mt-5 md:mt-8 xl:mt-14">
                        <div className="block md:w-[350px] xl:w-[400px] 2xl:w-[440px]">
                            <div className="h-[200px] xl:h-[230px] grid place-items-center border-[#AEA3A3] border-[1px] rounded-[20px] p-[15px] lg:p-[20px] 2xl:p-[25px] mb-3 md:mb-10">
                                <div className="relative w-[208] h-[65px] xl:w-[260px] xl:h-[81px] 2xl:w-[312px] 2xl:h-[97px]">
                                    <Image
                                        src={"/assets/banners/Swiggy-Symbol 1.png"}
                                        fill
                                        className='absolute'
                                        alt='Swiggy-Symbol'
                                    />
                                </div>
                            </div>
                            <div className="flex gap-3 items-end md:justify-end">
                                <FaCheckCircle color="#5ABF8E" className="size-8 md:size-10 2xl:size-11" />
                                <p className="font-bold text-[#5ABF8E] text-base md:text-lg 2xl:text-xl">Kaabil Pledge Taken</p>
                            </div>
                        </div>
                        <div className="flex gap-5 xl:gap-8">
                            <strong className="text-[#E41C3B] font-bold text-xl xl:text-3xl 2xl:text-4xl">1.</strong>
                            <div className="block">
                                <h4 className="font-bold text-xl md:text-2xl xl:text-3xl 2xl:text-4xl">The Kaabil Pledge</h4>
                                <p className="text-lg py-5 xl:py-6 md:text-xl xl:text-2xl 2xl:text-[26px] opacity-80 xl:max-w-[575px] font-normal">Join other companies in pledging to support women’s employment by creating inclusive workspaces</p>
                                <button className="font-bold text-base xl:text-lg 2xl:text-xl px-4 py-2 xl:px-7 2xl:px-8 xl:py-3 border rounded-full text-white bg-[#E41C3B]">Take the Pledge</button>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col sm:flex-row-reverse justify-between mt-10 md:mt-12 xl:mt-14">
                        <div className="block mb-3 md:mb-0">
                            <Image
                                src={"/assets/banners/opportunity_gfx.png"}
                                width={650}
                                height={432}
                                className='h-auto'
                                alt='Swiggy-Symbol'
                            />
                        </div>
                        <div className="flex gap-5 xl:gap-8 sm:mt-5 xl:mt-16">
                            <strong className="text-[#E41C3B] font-bold text-xl xl:text-3xl 2xl:text-4xl">1.</strong>
                            <div className="block">
                                <h4 className="font-bold text-xl md:text-2xl xl:text-3xl 2xl:text-4xl">The Kaabil Pledge</h4>
                                <p className="text-lg py-5 xl:py-6 md:text-xl xl:text-2xl 2xl:text-[26px] opacity-80 xl:max-w-[575px] font-normal">Join other companies in pledging to support women’s employment by creating inclusive workspaces</p>
                                <button className="font-bold text-base xl:text-lg 2xl:text-xl px-4 py-2 xl:px-7 2xl:px-8 xl:py-3 border rounded-full text-white bg-[#E41C3B]">Take the Pledge</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="bg-[#4D4D4F] py-5 md:py-8 xl:py-14 2xl:py-16">
                <h3 className="container text-white text-2xl md:text-3xl xl:text-4xl 2xl:text-[55px] font-bold max-w-[745px] mb-5 md:mb-8 xl:mb-14 2xl:mb-16">Resources</h3>
                <Resources/>
            </section>
            <PlayStoreAppAd />
            <section className="container pb-28 2xl:pb-40 lg:px-8">
                <h3 className="text-2xl md:text-3xl xl:text-4xl 2xl:text-[55px] font-bold max-w-[745px] mb-5 md:mb-8 xl:mb-14 2xl:mb-16">To empower <span className="text-[#E41C3B]">1 Million Women</span> through Skilling and Livelihood Opportunities</h3>
                <div className="flex flex-col gap-2 md:gap-3 xl:gap-4">
                    <div className="flex justify-center gap-2 md:gap-3 xl:gap-4">
                        <div className="rounded-full relative size-12 md:size-16 xl:size-20 2xl:size-24">
                            <Image
                                src={"/assets/icons/profile.png"}
                                fill
                                className="relative"
                                alt="icons"
                                />
                        </div>
                        <div className="rounded-full relative size-12 md:size-16 xl:size-20 2xl:size-24">
                            <Image
                                src={"/assets/icons/profile.png"}
                                fill
                                className="relative"
                                alt="icons"
                                />
                        </div>
                        <div className="rounded-full relative size-12 md:size-16 xl:size-20 2xl:size-24">
                            <Image
                                src={"/assets/icons/profile.png"}
                                fill
                                className="relative"
                                alt="icons"
                                />
                        </div>
                        <div className="rounded-full relative size-12 md:size-16 xl:size-20 2xl:size-24">
                            <Image
                                src={"/assets/icons/profile.png"}
                                fill
                                className="relative"
                                alt="icons"
                                />
                        </div>
                        <div className="rounded-full relative size-12 md:size-16 xl:size-20 2xl:size-24">
                            <Image
                                src={"/assets/icons/profile.png"}
                                fill
                                className="relative"
                                alt="icons"
                                />
                        </div>
                        <div className="rounded-full relative size-12 md:size-16 xl:size-20 2xl:size-24">
                            <Image
                                src={"/assets/icons/profile.png"}
                                fill
                                className="relative"
                                alt="icons"
                                />
                        </div>
                        <div className="rounded-full relative size-12 md:size-16 xl:size-20 2xl:size-24">
                            <Image
                                src={"/assets/icons/profile.png"}
                                fill
                                className="relative"
                                alt="icons"
                                />
                        </div>
                    </div>
                    <div className="flex justify-end gap-2 md:gap-3 xl:gap-4">
                        <div className="rounded-full relative size-12 md:size-16 xl:size-20 2xl:size-24">
                            <Image
                                src={"/assets/icons/profile.png"}
                                fill
                                className="relative"
                                alt="icons"
                                />
                        </div>
                        <div className="rounded-full relative size-12 md:size-16 xl:size-20 2xl:size-24">
                            <Image
                                src={"/assets/icons/profile.png"}
                                fill
                                className="relative"
                                alt="icons"
                                />
                        </div>
                        <div className="rounded-full relative size-12 md:size-16 xl:size-20 2xl:size-24">
                            <Image
                                src={"/assets/icons/profile.png"}
                                fill
                                className="relative"
                                alt="icons"
                                />
                        </div>
                        <div className="rounded-full relative size-12 md:size-16 xl:size-20 2xl:size-24">
                            <Image
                                src={"/assets/icons/profile.png"}
                                fill
                                className="relative"
                                alt="icons"
                                />
                        </div>
                        <div className="rounded-full relative size-12 md:size-16 xl:size-20 2xl:size-24">
                            <Image
                                src={"/assets/icons/profile.png"}
                                fill
                                className="relative"
                                alt="icons"
                                />
                        </div>
                        <div className="rounded-full relative size-12 md:size-16 xl:size-20 2xl:size-24">
                            <Image
                                src={"/assets/icons/profile.png"}
                                fill
                                className="relative"
                                alt="icons"
                                />
                        </div>
                        <div className="rounded-full relative size-12 md:size-16 xl:size-20 2xl:size-24">
                            <Image
                                src={"/assets/icons/profile.png"}
                                fill
                                className="relative"
                                alt="icons"
                                />
                        </div>
                    </div>
                    <div className="flex justify-start gap-2 md:gap-3 xl:gap-4">
                        <div className="rounded-full relative size-12 md:size-16 xl:size-20 2xl:size-24">
                            <Image
                                src={"/assets/icons/profile.png"}
                                fill
                                className="relative"
                                alt="icons"
                                />
                        </div>
                        <div className="rounded-full relative size-12 md:size-16 xl:size-20 2xl:size-24">
                            <Image
                                src={"/assets/icons/profile.png"}
                                fill
                                className="relative"
                                alt="icons"
                                />
                        </div>
                        <div className="rounded-full relative size-12 md:size-16 xl:size-20 2xl:size-24">
                            <Image
                                src={"/assets/icons/profile.png"}
                                fill
                                className="relative"
                                alt="icons"
                                />
                        </div>
                        <div className="rounded-full relative size-12 md:size-16 xl:size-20 2xl:size-24">
                            <Image
                                src={"/assets/icons/profile.png"}
                                fill
                                className="relative"
                                alt="icons"
                                />
                        </div>
                        <div className="rounded-full relative size-12 md:size-16 xl:size-20 2xl:size-24">
                            <Image
                                src={"/assets/icons/profile.png"}
                                fill
                                className="relative"
                                alt="icons"
                                />
                        </div>
                        <div className="rounded-full relative size-12 md:size-16 xl:size-20 2xl:size-24">
                            <Image
                                src={"/assets/icons/profile.png"}
                                fill
                                className="relative"
                                alt="icons"
                                />
                        </div>
                        <div className="rounded-full relative size-12 md:size-16 xl:size-20 2xl:size-24">
                            <Image
                                src={"/assets/icons/profile.png"}
                                fill
                                className="relative"
                                alt="icons"
                                />
                        </div>
                    </div>
                </div>
                <button className="mt-10 md:mt-12 xl:mt-14 2xl:mt-16 block font-bold text-base xl:text-lg mx-auto w-fit 2xl:text-xl px-4 py-2 xl:px-7 2xl:px-8 xl:py-3 border rounded-full text-white bg-[#E41C3B]">Take the Pledge</button>
            </section>
        </article>
    );
}
