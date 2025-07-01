import React from "react";
import { CardContent } from "@/components/ui/card";

export const MainContentSection = (): JSX.Element => {
  // Data for the bullet points to enable mapping
  const careProFeatures = [
    "Fully insured, bonded W-2 employees",
    "Specialized training for dementia and chronic conditions",
    "Lifestyle and personality-aligned matching",
    "In-field supervision and continued education",
    "Chosen for warmth, reliability, and emotional intelligence",
  ];

  return (
    <section className="py-20 relative w-full  bg-[#f8f5f0]">
       <div className="container px-2 sm:px-4 lg:px-16 2xl:px-0 mx-auto">
        <div className="grid grid-cols-12 items-stretch gap-8 sm:gap-10 md:gap-16 h-full">
          <div className="col-span-12 lg:col-span-6 h-full flex flex-col justify-center">
              <CardContent className="flex flex-col items-center gap-4 pt-0 pb-4 px-0 relative self-stretch w-full flex-[0_0_auto] h-full">
            <h2 className="font-playfair relative self-stretch mt-[-1.00px] font-bold text-[#1b1b1b] text-5xl tracking-[-0.96px] leading-[normal]">
              Care That Feels Personal—Because It Is
            </h2>

            <p className="relative self-stretch font-normal text-[#1b1b1b] text-xl tracking-[0] leading-[30px] max-w-[95%] font-montserrat">
              We recruit Care Professionals who are empathetic, accountable,
              experienced, and respectful. Every CarePro receives
              industry-leading training and is backed with the tools to deliver
              care that goes beyond expectations.
            </p>

            <h3 className="font-bold text-[#1b1b1b] text-xl leading-[30px] relative self-stretch font-montserrat tracking-[0]">
              What Sets Them Apart:
            </h3>

            <div className="flex flex-col items-start gap-4 relative self-stretch w-full flex-[0_0_auto] font-montserrat">
              {careProFeatures.map((feature, index) => (
                <div
                  key={index}
                  className="flex gap-3 relative self-stretch w-full flex-[0_0_auto]"
                >
                  <div className="flex-shrink-0 mt-1">
                    <img src="/check-icon.svg" width="24"  alt="" />
                  </div>
                  <p className="relative flex-1 mt-[2px] font-normal text-[#1b1b1b] text-xl tracking-[0] leading-[30px]">
                    {feature}
                  </p>
                </div>
              ))}
            </div>
          </CardContent>
          </div>
          <div className="col-span-12 lg:col-span-6 h-full flex items-center">
            <img src="new-care-that-side.jpg" className="w-full rounded-3xl object-cover h-full" alt="" />    
          </div>
        </div>
       
      </div>
    </section>
  );
};
