'use client';

import React from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import './swiper-custom.css'; // Custom CSS for Swiper dots

export const TargetAudienceSection = (): JSX.Element => {
  // Testimonial data that can be expanded for a carousel
  const testimonials = [
    {
      quote:`"These past few months have been really tough on the family, with some pretty big unexpected changes. Brightwood has been there, thinking through every detail, and guiding the way for my Dad from coordinating medical appointments to making sure he's eating well and getting out of the house and enjoying the outdoors. I used to be up at night worrying about him and feeling guilty. Now I feel confident that he's happy and loving his independence."`,
      name: "Ahmad Vetrovs",
      location: "Paradise Valley",
      active: true,
    },
    {
      quote:`"These past few months have been really tough on the family, with some pretty big unexpected changes. Brightwood has been there, thinking through every detail, and guiding the way for my Dad from coordinating medical appointments to making sure he's eating well and getting out of the house and enjoying the outdoors. I used to be up at night worrying about him and feeling guilty. Now I feel confident that he's happy and loving his independence."`,
      name: "Angel Press",
      location: "Fountain Hills",
      active: true,
    },
    {
      quote:`"These past few months have been really tough on the family, with some pretty big unexpected changes. Brightwood has been there, thinking through every detail, and guiding the way for my Dad from coordinating medical appointments to making sure he's eating well and getting out of the house and enjoying the outdoors. I used to be up at night worrying about him and feeling guilty. Now I feel confident that he's happy and loving his independence."`,
      name: "Skylar Siphron",
      location: "Scottsdale",
      active: true,
    },
  ];

  return (
    <section className="w-full bg-[#f8f5f0] py-20 relative overflow-hidden">
      
      <div className="container px-8 lg:px-16 2xl:px-0 mx-auto text-center relative">
        <div className="flex flex-col items-center">
          <Badge className="bg-[#c6a664] hover:bg-[#c6a664] text-[#f8f5f0] font-bold rounded-2xl mb-8 px-6 py-1 text-sm font-montserrat">
            What Families are Saying
          </Badge>
        </div>

        <Card className="border-none bg-transparent shadow-none w-full">
          <CardContent className="px-4 flex flex-col items-center gap-8">
            <Swiper
              modules={[Pagination, Autoplay]}
              pagination={{ clickable: true, el: '.swiper-pagination-custom' }}
              spaceBetween={32}
              slidesPerView={1}
              className="w-full"
              autoplay={{ delay: 1500, disableOnInteraction: false }}
              loop={true}
            >
              {testimonials.map((testimonial, idx) => (
                <SwiperSlide key={idx}>
                  <div className="text-[#1b1b1b] text-base sm:text-xl lg:text-2xl font-medium text-center tracking-[-0.3%] leading-[34px] font-montserrat">
                    {testimonial.quote}
                  </div>
                  <div className="flex flex-col items-center gap-4 w-full mt-6">
                    <div className="flex flex-col items-center gap-1 w-full">
                      <p className="text-[#c6a664] text-lg font-medium text-center leading-7 font-montserrat">
                        {testimonial.name}
                      </p>
                      <p className="text-[#2c2f4a] text-base font-bold text-center leading-6 font-montserrat">
                        {testimonial.location}
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="flex justify-center mt-4">
              <div className="swiper-pagination swiper-pagination-custom" />
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
