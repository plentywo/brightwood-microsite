import { CheckIcon } from "lucide-react";
import React from "react";
import { Card, CardContent } from "@/components/ui/card";

export const ComponentNodeSection = (): JSX.Element => {
  // Data for the care services list
  const careServices = [
    "Dedicated Care Concierge to manage your entire experience",
    "Weekly family reports and personalized updates",
    "Lifestyle activity planning and CarePro planning sessions",
    "Customized meal plans and chef-prepared options",
    "In-home grooming, spa, or wellness services",
    "Vendor coordination: cleaning, gardening, errands",
    "Relocation or downsizing support",
    "Appointment scheduling, Rx pick-up, nutritionist access",
    "Cultural outings, nature walks, restaurant dining, and events",
    "Holistic options like massage, reiki, yoga, breathwork, pet/music therapy",
  ];

  return (
    <section className="w-full bg-[#2c2f4a] overflow-hidden py-20 relative">
      <img
        className=" absolute w-[310px] bottom-[-27px] end-[-41px]"
        alt="Vector"
        src="/vector.svg"
      />

      <div className="container mx-auto px-2 sm:px-8 xl:px-[60px] 2xl:px-0  relative">
        <div className="grid grid-cols-12 gap-8 sm:gap-10 md:gap-16">
          <div className="col-span-12 lg:col-span-6">
            <div className="flex flex-col items-center gap-4 pb-4 w-full">
              <h2 className="font-playfair font-bold text-[#c6a664] text-4xl lg:text-5xl tracking-[-0.96px] !leading-normal">
                Premier Care Concierge Support: Elevated and Effortless
              </h2>

              <h3 className="self-stretch font-montserrat font-bold text-[#f8f5f0] text-lg lg:text-xl leading-[30px] tracking-[0]">
                Premier Care May Include:
              </h3>

              <Card className="w-full bg-transparent border-none shadow-none">
                <CardContent className="p-0">
                  <ul className="flex flex-col items-start gap-4 w-full">
                    {careServices.map((service, index) => (
                      <li
                        key={index}
                        className="flex items-start gap-3 w-full"
                      >
                        <div className="flex-shrink-0 mt-1">
                          <img src="/check-icon.svg" width="24" alt="" />
                        </div>
                        <p className="flex-1 mt-[-1.00px] font-montserrat font-normal text-[#f8f5f0] text-lg lg:text-xl tracking-[0] leading-[30px]">
                          {service}
                        </p>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
          <div className="col-span-12 lg:col-span-6">
            <img
              src="/new-premier-care-aside.jpg"
              className="w-full rounded-3xl lg:h-[786px]"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};
