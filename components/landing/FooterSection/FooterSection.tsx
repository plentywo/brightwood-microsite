import React from "react";
export const FooterSection = (): JSX.Element => {
  return (
    <footer id="footer" className="py-16 bg-[#1b1b1b]">
      <div className="container mx-auto px-4  ">
        <div className="w-full flex flex-col justify-center items-center gap-5  ">
          <div className="logo">
              <img width="180"                className="flex-shrink-0"
                    alt="Wordmark"
                    src="/logo.svg"
                  />
            </div>

            <p className="text-[#f8f5f0] text-center font-poppins font-normal text-base leading-6">
              © 2025 Brightwood Health. All rights reserved.
            </p>
        </div>
      </div>
    </footer>
  );
};
