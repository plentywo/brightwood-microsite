import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import HubSpotForm from "@/components/HubSpotForm";

export const CallToActionSection = (): JSX.Element => {
  return (
    <section className="flex flex-col items-center pt-24 pb-16 px-0 relative self-stretch w-full flex-[0_0_auto] bg-[#2c2f4a] overflow-hidden">
      <img
        className="absolute w-[310px]   bottom-0 end-0"
        alt="Vector"
        src="/vector.svg"
      />

      <div className="container px-4 lg:px-16 2xl:px-0 mx-auto">
        <div className="grid grid-cols-12 items-start gap-8 md:gap-8">
          <div className="col-span-12 lg:col-span-6">
            {/* Left Column */}
            <div className="flex-1 grow flex flex-col relative">
              <h2 className="relative self-stretch font-playfair font-bold text-[#c6a664] text-4xl lg:text-5xl tracking-[-0.96px] leading-normal mb-4">
                Let's Build a Care Experience Around You
              </h2>

              <p className="relative self-stretch font-montserrat font-normal text-[#f8f5f0] text-base lg:text-xl tracking-[0] leading-[30px] pr-8 mb-[45px]">
                Discover how Brightwood Health brings peace of mind,
                personalized support, and unmatched care to families like yours.
              </p>

              <Card className="items-end self-stretch w-full flex-[0_0_auto] mb-[-1.00px] ml-[-1.00px] mr-[-1.00px] bg-[#c8c6ba1a] rounded-lg backdrop-blur-[20px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(20px)_brightness(100%)] border-0">
                <CardHeader className="flex flex-col items-start gap-8 p-6 relative self-stretch w-full flex-[0_0_auto] border-b [border-bottom-style:solid] border-[#f8f5f04c]">
                  <h3 className="relative self-stretch mt-[-1.00px] font-montserrat font-bold text-[#f8f5f0] text-lg lg:text-2xl text-center tracking-[0] leading-8">
                    Call Now to Speak with a Brightwood Care Specialist
                  </h3>

                  <div className="flex flex-col items-start gap-2 self-stretch w-full relative flex-[0_0_auto]">
                    <div className="flex flex-col items-center justify-center gap-2 p-4 self-stretch w-full bg-[#f8f5f0] rounded-lg relative flex-[0_0_auto]">
                      <div className="relative w-fit mt-[-1.00px] font-montserrat font-bold text-[#1b1b1b] text-base md:text-lg lg:text-2xl tracking-[0] leading-8 text-center">
                        <div className="flex items-center justify-center mb-1">
                          <img src="/phone.jpg" className="mr-2" alt="phone" /> 
                          <span>24/7 Care Line:</span>
                        </div>
                        <div>
                          <a href="tel:6234007528" className="whitespace-nowrap hover:underline">(623) 400-7528</a>
                        </div>
                      </div>

                      <div className="relative self-stretch font-montserrat font-normal text-transparent text-base text-center tracking-[0] leading-4">
                        <a
                          href="mailto:care@brightwood.health"
                          rel="noopener noreferrer"
                          target="_blank"
                        >
                          <span className="font-bold text-[#2c2f4a] leading-6">
                            care@brightwood.health
                          </span>
                        </a>
                      </div>
                    </div>

                    <div className="relative self-stretch font-montserrat font-bold text-[#f8f5f0] text-base text-center tracking-[0] leading-6">
                      Available 24/7
                    </div>
                  </div>
                </CardHeader>

                <CardFooter className="flex-col items-center  justify-center gap-2.5 p-6 self-stretch w-full relative flex-[0_0_auto]">
                  <div className="w-[100px]">
                    <img src="/AB-seal.svg" className="w-[100%]" alt="" />
                  </div>
                  <div className="relative flex-1 mt-[-1.00px] font-montserrat font-bold text-[#f8f5f0] text-sm lg:text-base text-center tracking-[0] leading-6">
                    We accept Long-Term Care Insurance and VA Benefits
                    <br />
                    Private Pay &amp; Flexible Funding Options Available
                  </div>
                </CardFooter>
              </Card>
            </div>
          </div>
          <div className="col-span-12 lg:col-span-6 !h-full">
            {/* Right Column - Contact Form */}
            <Card className="h-full flex flex-col bg-[#f8f5f01a] rounded-lg backdrop-blur-[20px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(20px)_brightness(100%)] border-0">
              <CardContent className="p-6 pt-6 flex-1 flex flex-col">
                <HubSpotForm className="w-full h-full" />
              </CardContent>
            </Card>
          </div>
        </div>
        

        
      </div>
    </section>
  );
};
