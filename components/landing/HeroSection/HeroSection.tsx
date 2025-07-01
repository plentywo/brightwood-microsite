import { PhoneIcon } from "lucide-react";
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

export const HeroSection = (): JSX.Element => {
  // Star rating data
  const stars = Array(5).fill(null);

  return (
    <section className="relative w-full overflow-hidden py-[124px] min-h-[600px] sm:min-h-[700px] lg:min-h-[800px]">
      <img
        src="/premier-care.jpg"
        className="w-full h-full start-0 top-0 absolute object-cover object-right-center sm:object-center-top lg:object-center"
        alt=""
      />
      <div className="header-bg-overlay absolute w-full h-full start-0 top-0"></div>
      <div className="container mx-auto px-4 sm:px-[56px] xl:px-[76px] flex flex-col items-center gap-2.5  relative">
        <div className="grid grid-cols-12 items-center gap-5 relative">
          <div className="col-span-12 lg:col-span-7 flex flex-col items-start gap-8 flex-1">
            <div className="flex flex-col items-start gap-8 w-full">
              <div className="relative  ">
                <h1 className="font-playfair font-normal text-[40px] sm:text-[48px] lg:text-[64px] leading-[1.1] sm:leading-[1.2] lg:leading-[64px]">
                  <span className="font-bold text-[#c6a664] tracking-[0] leading-[0.1px]">
                    In-Home Care Designed Around You
                  </span>
                </h1>
              </div>

              <h2 className="font-montserrat font-medium text-[#f8f5f0] text-lg sm:text-xl lg:text-2xl leading-[26px] sm:leading-[28px] lg:leading-[30px] w-full tracking-[0] max-w-[95%] sm:max-w-[90%] lg:max-w-[80%]">
                Because true independence means choosing how—and with whom—we
                age.
              </h2>

              <p className="font-montserrat font-normal text-[#f8f5f0] text-base sm:text-lg lg:text-xl leading-[24px] sm:leading-[28px] lg:leading-[30px] w-full tracking-[0] max-w-[95%] sm:max-w-[90%] lg:max-w-[80%]">
                Brightwood Health delivers compassionate, flexible in-home
                care—designed for families who want more than just care. We
                offer peace of mind, trusted professionals, and a better way to
                age at home.
              </p>
            </div>

            <div className="flex items-center gap-4 w-full">
              <div className="flex flex-col items-start gap-1">
                <div className="flex items-center gap-1.5">
                  <div className="flex items-center gap-1">
                    {stars.map((_, index) => (
                      <img
                        key={`star-${index}`}
                        className="w-4 h-4"
                        alt="Star"
                        src="/star.svg"
                      />
                    ))}
                  </div>

                  <div className="font-text-base-font-medium font-[number:var(--text-base-font-medium-font-weight)] text-[#f8f5f0] text-[length:var(--text-base-font-medium-font-size)] tracking-[var(--text-base-font-medium-letter-spacing)] leading-[var(--text-base-font-medium-line-height)] whitespace-nowrap [font-style:var(--text-base-font-medium-font-style)]">
                    5.0
                  </div>
                </div>

                <div className="font-montserrat font-normal text-[#f8f5f0] text-sm tracking-[0] leading-[21px] whitespace-nowrap">
                  Top Rated on Google
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-12 lg:col-span-5 lg:col-start-8 mt-8 lg:mt-0">
            <Card className="w-full bg-[#c8c6ba1a] rounded-lg backdrop-blur-[20px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(20px)_brightness(100%)] border-0">
              <CardContent className="flex flex-col items-center justify-center gap-6 p-6 border-b [border-bottom-style:solid] border-[#f8f5f04c]">
                <h3 className="font-montserrat font-bold text-[#f8f5f0] text-[16px] sm:text-[18px] text-center tracking-[0] leading-8 md:px-2 xl:px-8">
                  Call Now to Speak with a Brightwood Care Specialist
                </h3>

                <div className="flex flex-col items-center justify-center gap-2 w-full">
                  <div className="flex flex-col items-center justify-center gap-2 p-4 w-full bg-[#f8f5f0] rounded-lg">
                    <div className="flex items-center gap-2 ml-[-1.00px] mr-[-1.00px] flex-wrap justify-center">
                      <PhoneIcon className="w-6 h-6 sm:w-8 sm:h-8 text-[#1b1b1b] flex-shrink-0" />
                      <div className="font-montserrat font-bold text-[#1b1b1b] text-lg sm:text-xl lg:text-2xl tracking-[0] leading-8 text-center">
                        24/7 Care Line: <a href="tel:6234007528" className="whitespace-nowrap hover:underline">(623) 400-7528</a>
                      </div>
                    </div>

                    <div className="w-full font-montserrat font-normal text-base text-center tracking-[0] leading-4">
                      <a
                        href="mailto:care@brightwood.health"
                        rel="noopener noreferrer"
                        target="_blank"
                        className="font-bold text-[#2c2f4a] leading-6"
                      >
                        care@brightwood.health
                      </a>
                    </div>
                  </div>

                  <div className="w-full font-montserrat font-bold text-[#f8f5f0] text-base text-center tracking-[0] leading-6">
                    Available 24/7
                  </div>

                  <Button asChild className="px-[18px] py-2.5 bg-[#c6a664] h-auto hover:bg-[#b39555] active:bg-[#c6a664] rounded-lg text-[#1b1b1b]  shadow-shadow-xs w-full sm:w-auto">
                    <a href="#footer">
                      <span className=" font-poppins font-medium text-base whitespace-nowrap">
                        Talk to Us About Starting Care
                      </span>
                    </a>
                  </Button>
                </div>
              </CardContent>

              <CardFooter className="flex items-center justify-center p-6">
                <p className="flex-1  font-montserrat font-medium text-[#f8f5f0] text-sm sm:text-base text-center tracking-[0] leading-6">
                  We accept Long-Term Care Insurance and VA Benefits
                  <br />
                  Private Pay &amp; Flexible Funding Options Available
                </p>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
