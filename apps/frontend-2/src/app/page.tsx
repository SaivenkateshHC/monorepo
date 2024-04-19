'use client'
import Image from "next/image";
import React from "react";
import { Swiper, SwiperSlide, Pagination } from "@monorepo/swiper-wrapper";
import "swiper/css";
import "swiper/css/pagination";
import '@monorepo/shared-styles/typography.scss';
import '@monorepo/shared-styles/swiper-wrapper.scss';
import '@monorepo/shared-styles/shared-styles.scss' // overwritten the styles from typography.scssP

export default function Home() {
  // console.log(stylesheet)
  return (
    <div>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <p className={"typography-h1"}>This text styles is from shared styles/typography</p>
            <div className="relative z-[-1] flex place-items-center before:absolute before:h-[300px] before:w-full before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 sm:before:w-[480px] sm:after:w-[240px] before:lg:h-[360px]">
              <Image
                className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
                src="/next.svg"
                alt="Next.js Logo"
                width={180}
                height={37}
                priority
              />
            </div>
        <p className={"typography-body"}>The below shown slider is from Swiper-wrapper shared package</p>
        <>
          <Swiper
            slidesPerView={4}
            spaceBetween={30}
            // centeredSlides={true}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            <SwiperSlide>Slide 1 </SwiperSlide>
            <SwiperSlide>Slide 2 </SwiperSlide>
            <SwiperSlide>Slide 3 </SwiperSlide>
            <SwiperSlide>Slide 4 </SwiperSlide>
            <SwiperSlide>Slide 5 </SwiperSlide>
            <SwiperSlide>Slide 6 </SwiperSlide>
            <SwiperSlide>Slide 7 </SwiperSlide>
            <SwiperSlide>Slide 8 </SwiperSlide>
            <SwiperSlide>Slide 9 </SwiperSlide>
          </Swiper>
        </>

       

      </main>
    </div>
  );
}
