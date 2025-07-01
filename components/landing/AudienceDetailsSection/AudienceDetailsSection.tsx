import { CheckIcon } from "lucide-react";
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
// Define the features data for mapping
const features = [
  "Discovery of your care needs, lifestyle, and values",
  "Meticulous, personality-based matching and customized care plans",
  "Carefully screened, top quality care staff backed by our attentive support team",
  "Flexible plans that evolve with you",
  "Ongoing supervision and communication",
];

export const AudienceDetailsSection = (): JSX.Element => {
  return (
    <section className="w-full bg-[#2c2f4a] py-20 relative overflow-hidden">
      <img
        className=" absolute w-[310px] bottom-0 end-0"
        alt="Vector"
        src="/vector.svg"
      />

      <div className="container px-2 sm:px-8 xl:px-[60px] 2xl:px-0 mx-auto relative">
        <div className="grid grid-cols-12 items-stretch gap-8 sm:gap-10 md:gap-16 h-full">
          <div className="col-span-12 lg:col-span-6 h-full flex items-center">
            <img
              src="/batter-match-aside.png"
              className="w-full rounded-3xl object-cover h-full"
              alt=""
            />
          </div>

          <div className="col-span-12 lg:col-span-6 h-full flex flex-col">
            <div className="flex flex-col items-center gap-4 pb-4 w-full">
              <h2 className="font-playfair self-stretch mt-[-1.00px] font-bold text-4xl lg:text-5xl tracking-[-0.96px] text-[#c6a664] !leading-normal">
                A Better Match, A Brighter Experience
              </h2>

              <p className="self-stretch font-normal text-lg lg:text-xl leading-[30px] text-[#f8f5f0] font-montserrat">
                Our proprietary matching process ensures your Care Professional
                isn&apos;t just qualified—they&apos;re the right fit for your
                home, personality, and pace of life.
              </p>

              <h3 className="self-stretch font-bold text-xl leading-[30px] text-[#f8f5f0] font-montserrat">
                What&apos;s Included:
              </h3>

              <div className="flex flex-col items-start gap-4 w-full">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3 w-full">
                    <div className="flex-shrink-0 mt-1">
                      <img src="/check-icon.svg" width="24" alt="" />
                    </div>
                    <p className="flex-1 mt-[2px] font-normal text-lg lg:text-xl leading-[30px] text-[#f8f5f0] font-montserrat">
                      {feature}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
