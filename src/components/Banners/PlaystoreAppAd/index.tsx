import Image from 'next/image'
import React from 'react'

export default function PlayStoreAppAd() {
  return (
    <section className="py-28 2xl:py-40 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between bg-[#E41C3B] px-4 md:px-20 pt-6 md:pt-9 lg:px-40 lg:pt-16 2xl:pt-20 lg:rounded-full">
            <div className="block">
              <p className="text-2xl max-w-[700px] md:text-lg lg:text-2xl 2xl:text-4xl font-bold mb-4 md:mb-8 text-white">Download the Misson Even app to find your next job opportunity or connect with the <span className="text-[#2C2C2C]">best women</span> talent in the across any industry in India</p>
              <Image
                    src={"/assets/logos/Google Play.png"}
                    width={215}
                    height={62}
                    alt="company logo"
                    className="mb-6 md:mb-9 lg:mb-20 md:max-w-[100px] lg:max-w-[180px] 2xl:max-w-[215px] h-auto"
                    />
            </div>
            <div className="block w-2/3 ">
              <Image
              src={"/assets/banners/mobile-image.png"}
              width={363}
              height={62}
              alt="company logo"
              className="mobile app graphic"
              />
            </div>
          </div>
        </section>
  )
}
