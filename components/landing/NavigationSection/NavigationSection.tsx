import { PhoneIcon } from "lucide-react";
import React from "react";
import { Button } from "@/components/ui/button";

export const NavigationSection = (): JSX.Element => {
  return (
    <header className=" py-6 relative self-stretch w-full backdrop-blur-[20px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(20px)_brightness(100%)]">
      <div className="container mx-auto px-8 lg:px-16 2xl:px-0">
        <div className="flex w-full items-center justify-between gap-8 relative">
          {/* Logo Section */}
          <div className="logo">
            <img
              className="flex-shrink-0 w-[120px] md:w-[180px]"
              alt="Wordmark"
              src="/logo.svg"
            />
          </div>

          {/* CTA Button */}
          <div className="flex items-center justify-end gap-4 flex-1">
            <Button asChild className="flex items-center justify-center gap-2 px-[18px] py-2.5 bg-[#c6a664] text-[#1b1b1b] rounded-lg shadow-shadow-xs hover:bg-[#b39555] border border-gold">
              <a href="#footer">
                <PhoneIcon className="w-5 h-5" />
                <span className="font-poppins font-medium text-base">
                  Talk With Us
                </span>
              </a>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};
