"use client"
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper';
import { timelineSlider } from "./data"

const Carousels = () => {
  return (
    <Swiper
      className="testimonialSlider items-center justify-center"
      modules={[Navigation]}
      navigation={true}
    >
      {timelineSlider.slideins.map((slidein, index) => {

        // Destructure items data from data.js
        const { timeline, header, subheader, message } = slidein;
        return (
          <SwiperSlide key={index}>
            <div className="flex flex-col items-center justify-center">          
              <div>
                <div className="flex flex-col items-center gap-x-5 mb-9">
                  {/* Timeline */}
                  <Image
                    src={timeline.type}
                    className=""
                    alt="timeline picture"
                  />
                  <div>
                    <h3 className="text-xl font-semibold">{header}</h3>
                    <p className="text-gray-500">{subheader}</p>
                    <div></div>
                  </div>
                </div>
                <div className="text-lg max-w-[570px]">{message}</div>
              </div>
            </div>
            <div className='swiper-button-next' id='slide'>
                    <span className='text-bold'>Next</span>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

// create a skip button going to the next page
// and add these class to the skip button
// swiper-button-next


export default Carousels;

