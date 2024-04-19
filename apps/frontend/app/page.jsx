"use client";
import React from "react";
import styles from "./page.module.css";

import { Swiper, SwiperSlide, Pagination } from "@monorepo/swiper-wrapper";

import "swiper/css";
import "swiper/css/pagination";

import { add } from "math-helpers";

const Page = () => {
  console.log(add(1, 2));
  // console.log(swiper)
  return (
    <main className={styles.main}>
      <div className={styles.glowConic}>
        <h1> Here the swiper is from shared package</h1>
        <div className={styles.gradientLarge}></div>
      </div>
      <div className={styles.hero}>
        <div className={styles.heroContent}>
          <div className={styles.turborepoWordmarkContainer}>
            <h3>But the styles were used locally</h3>
            <div className={styles.glowConic}>
              <h3>
                Also another shared package is used to derive the functional
                purpose :{" "}
              </h3>
              <h3>
                A simple addition of 5 and 10 , and the result is from a utility
                function which is {parseInt(add(5, 10))}
              </h3>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.gradient} />

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
          <SwiperSlide>Slide 1</SwiperSlide>
          <SwiperSlide>Slide 2</SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
          <SwiperSlide>Slide 4</SwiperSlide>
          <SwiperSlide>Slide 5</SwiperSlide>
          <SwiperSlide>Slide 6</SwiperSlide>
          <SwiperSlide>Slide 7</SwiperSlide>
          <SwiperSlide>Slide 8</SwiperSlide>
          <SwiperSlide>Slide 9</SwiperSlide>
        </Swiper>
      </>
    </main>
  );
};

export default Page;
