import { CloudSunIcon, HeartIcon, ShieldIcon, UserIcon } from "lucide-react";
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export const ContentWrapperSection = (): JSX.Element => {
  const featureCards = [
    {
      icon: <HeartIcon className="w-6 h-6" />,
      title: "We Take the Time to Get It Right",
      description:
        "From your first call to your CarePro match, everything is designed to feel seamless, personal, and responsive.",
    },
    {
      icon: <img src="/cloud-sun.svg" className="w-6 h-6" />,
      title: "Elevated, Not Complicated",
      description:
        "We bring together professionalism, warmth, and ease—so you can focus on life, not logistics.",
    },
    {
      icon: <UserIcon className="w-6 h-6" />,
      title: "Real People, Real Support",
      description:
        "Our 24/7 care line is staffed by our team—not a call center—so you can get answers, updates, or care fast.",
    },
    {
      icon: <ShieldIcon className="w-6 h-6" />,
      title: "Built by Health Industry Leaders",
      description:
        "Brightwood's management staff has decades of experience working in the in-home supportive care industry and brings a wealth of experience, knowledge and best practices. Our executive team helped built and led Veyo, a healthcare logistics platform that supported millions of patients across the country. Today, we bring that same level of reliability, coordination, and compassion into the home—with care that's built around people, not systems.",
    },
  ];

  return (
    <section className="gap-16 w-full bg-[#2c2f4a] overflow-hidden flex flex-col items-center px-0 py-20 relative">
      <img
        className=" absolute w-[310px] bottom-[21px] end-0"
        alt="Vector"
        src="/vector.svg"
      />
      <div className="container px-8 lg:px-16 2xl:px-0 mx-auto">
        <h2 className="font-playfair font-bold text-[#c6a664] text-4xl lg:text-5xl text-center tracking-[-0.96px] leading-[normal] mb-16">
          Why Families Choose Brightwood
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 w-full gap-8">
          {featureCards.slice(0, 4).map((card, index) => (
            <Card
              key={`feature-card-top-${index}`}
              className={cn(
                "bg-[#c8c6ba1a] border-none rounded-lg backdrop-blur-[20px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(20px)_brightness(100%)]",
                { "md:col-span-3": index === 3 }
              )}
            >
              <CardContent className="flex flex-col items-start gap-6 p-6">
                <div className="relative w-12 h-12 bg-[#c6a664] rounded-[10px] flex items-center justify-center text-white">
                  {card.icon}
                </div>

                <div className="flex flex-col items-start gap-2 w-full">
                  <h3 className="self-stretch mt-[-1.00px] font-montserrat font-medium text-[#f8f5f0] text-xl tracking-[0] leading-[30px]">
                    {card.title}
                  </h3>
                  <p className="font-normal text-[#f8f5f0] text-base leading-6 self-stretch font-montserrat tracking-[0]">
                    {card.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
