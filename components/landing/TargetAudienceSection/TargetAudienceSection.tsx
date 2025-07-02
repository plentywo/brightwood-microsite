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
      quote: `"Kristen has been a God-send. She feels just like a part of the family and her energy has transformed my outlook. We start every morning with breakfast and coffee, share a highlight of the previous day, and a goal for the day. Every day feels like an adventure."`,
      name: "Joan M.",
      location: "Phoenix",
      active: true,
    },
    {
      quote: `"These past few months have been really tough on the family, with some pretty big unexpected changes. Brightwood has been there, thinking through every detail, and guiding the way for my Dad from coordinating medical appointments to making sure he's eating well and getting out of the house and enjoying the outdoors. I used to be up at night worrying about him and feeling guilty. Now I feel confident that he's happy and loving his independence."`,
      name: "Michael B.",
      location: "Scottsdale",
      active: true,
    },
    {
      quote: `"My wife and I have been lucky to have lived a life full of travel and experiences. We're not able to hop on a plane like we used to, but every week is an experience with Cindy and Brightwood. Symphonies, museums, and talks at ASU - Brightwood makes it happen and it feels great to still be a part of the local scene."`,
      name: "Greg H.",
      location: "Scottsdale",
      active: true,
    },
    {
      quote: `"My Dad had a stroke and went to the hospital at 10pm, and my Mom couldn't be alone. Brightwood's team sprang into action and had a CarePro there within the hour and had amazing people there to stay with my Mom 24/7 for the next week until my Dad got home and then helped amazingly through Dad's recovery. I can't explain how much relief it was for our family to be able to know and trust that Mom was safe and cared for while we were focused on Dad's health."`,
      name: "Scott B.",
      location: "Paradise Valley",
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
              autoplay={{ delay: 1500, disableOnInteraction: false, pauseOnMouseEnter: true }}
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
