import { CheckIcon } from "lucide-react";
import React from "react";
import { Card, CardContent } from "@/components/ui/card";

export const ContentSection = (): JSX.Element => {
  // Essential care services data for mapping
  const essentialCareServices = [
    "Bathing, grooming, mobility, and personal care",
    "Medication reminders & wellness monitoring",
    "Engaging companionship & safety support",
    "Light housekeeping & meal preparation",
    "Transportation to errands and appointments",
    "Memory care and chronic condition assistance",
    "End-of-life and comfort support",
    "Flexible care hours with weekly minimums",
  ];

  return (
    <section className="w-full bg-[#f8f5f0] py-20">
      <div className="container px-4 sm:px-8 xl:px-[60px] 2xl:px-0 mx-auto">
        <div className="grid grid-cols-12 items-stretch gap-8 sm:gap-10 md:gap-16 h-full">
          <div className="col-span-12 lg:col-span-6 h-full flex items-center">
            <img
              src="/new-what-we-provide-aside.jpg"
              className="w-full rounded-3xl object-cover h-full xl:object-[25%]"
              alt=""
            />
          </div>
          <div className="col-span-12 lg:col-span-6 h-full flex flex-col">
            <Card className="flex-1 border-none shadow-none bg-transparent h-full flex flex-col justify-center">
              <CardContent className="p-0 h-full flex flex-col justify-center">
                <div className="flex flex-col gap-4 pb-4">
                  <h2 className="font-playfair font-bold text-[#1b1b1b] text-5xl tracking-[-0.96px]">
                    What We Provide
                  </h2>

                  <p className="font-montserrat text-[#1b1b1b] text-xl leading-[30px]">
                    Brightwood offers two service tiers:
                    <span className="font-semibold"> Brightwood Essential Care </span>
                    and <span className="font-semibold">Premier Care</span>.
                    Both begin with high-quality support. Premier Care adds
                    enhanced lifestyle, wellness, and coordination benefits.
                  </p>

                  <h3 className="font-montserrat font-bold text-[#1b1b1b] text-xl leading-[30px]">
                    Included in Essential Care Plan:
                  </h3>

                  <ul className="flex flex-col gap-4 w-full">
                    {essentialCareServices.map((service, index) => (
                      <li
                        key={index}
                        className="flex gap-3 w-full"
                      >
                        <div className="flex-shrink-0 mt-1">
                          <img src="/check-icon.svg" width="24" alt="" />
                        </div>
                        <span className="font-montserrat text-[#1b1b1b] text-xl leading-[30px]">
                          {service}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
