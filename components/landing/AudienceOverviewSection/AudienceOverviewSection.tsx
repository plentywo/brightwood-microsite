import { CheckIcon } from "lucide-react";
import React from "react";
import { Card, CardContent } from "@/components/ui/card";

export const AudienceOverviewSection = (): JSX.Element => {
  // Data for the features list to enable mapping
  const features = [
    "Holistic assessments beyond medical care: lifestyle, values, goals",
    "BrightAssist™: 24/7 virtual safety monitoring, wellness alerts, and proactive insights",
    "Hospitality-inspired concierge care management and support",
    "Industry-leading CarePro matching based on personality, energy, and skills",
    "Close in-home supervision, mentorship, and ongoing training",
    "Seamless coordination with physicians, home support staff (maid, gardener, other), & advisors",
    "Transparent communication and regular family updates",
  ];

  return (
    <section className="bg-[#f8f5f0] py-20 px-4 w-full">
      <div className="container px-2 sm:px-4 lg:px-16 2xl:px-0 mx-auto">
        <div className="grid grid-cols-12 items-stretch gap-8 sm:gap-10 md:gap-16 h-full">
          <div className="col-span-12 lg:col-span-6 h-full flex flex-col justify-center">
            <Card className="border-none shadow-none bg-transparent h-full flex flex-col justify-center">
              <CardContent className="p-0 h-full flex flex-col justify-center">
                <div className="flex flex-col gap-4 pb-4">
                  <h2 className="font-playfair font-bold text-[#1b1b1b] text-5xl tracking-[-0.96px]">
                    What We Offer
                  </h2>

                  <p className="font-montserrat font-normal text-[#1b1b1b] text-xl leading-[30px]">
                    We offer more than care. We create a seamless, high-touch
                    experience built around you. From essential support to
                    elevated services, everything is executed with precision and
                    intention.
                  </p>

                  <h3 className="font-montserrat font-bold text-[#1b1b1b] text-xl leading-[30px]">
                    What Sets Us Apart:
                  </h3>

                  <div className="flex flex-col gap-4">
                    {features.map((feature, index) => (
                      <div key={index} className="flex gap-3">
                        <div className="flex-shrink-0 mt-1">
                          <img src="/check-icon.svg" width="24" alt="" />
                        </div>
                        <p className="font-montserrat font-normal text-[#1b1b1b] text-xl leading-[30px]">
                          {feature}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="col-span-12 lg:col-span-6 h-full flex items-center">
            <img
              src="/what-we-offer-aside.png"
              className="w-full rounded-3xl object-cover h-full"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};
