'use client';
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";


export const FrequentlyAskedQuestionsSection = (): JSX.Element => {
  const faqItems = [
    {
      question: "What is Brightwood Premier?",
      answer:
        "Brightwood Premier is our elevated, concierge-level in-home care service designed for families who value discretion, customization, and consistent excellence. It combines trusted caregiving with thoughtful lifestyle enhancements, built to meet the standards of legacy-minded clients.",
      defaultOpen: true,
    },
    {
      question: "What types of care do you provide?",
      answer: (
        <div>
          <p className="mb-3">We offer two tiers of care:</p>
          <div className="mb-4">
            <p className="font-medium mb-2">• Essential Care:</p>
            <p className="ml-4 mb-3">Reliable, compassionate support for daily needs—bathing, grooming, meals, medication reminders, and safety monitoring.</p>
          </div>
          <div>
            <p className="font-medium mb-2">• Premier Care:</p>
            <p className="ml-4 mb-2">Includes everything in Essential Care, plus a refined, hospitality-inspired experience with:</p>
            <ul className="ml-8 space-y-1">
              <li>Dedicated Care Concierge</li>
              <li>Chef-prepared meals and lifestyle planning</li>
              <li>In-home spa/wellness services</li>
              <li>Appointment and vendor coordination</li>
              <li>Weekly family reports and 24/7 support</li>
            </ul>
          </div>
        </div>
      ),
      defaultOpen: false,
    },
    {
      question: "What makes Brightwood Premier different from traditional home care?",
      answer: (
        <ul className="space-y-2">
          <li>• Concierge-level coordination, discretion, and presentation</li>
          <li>• Proactive communication and lifestyle alignment</li>
          <li>• Elite CarePros selected through a rigorous, multi-step process</li>
          <li>• Seamless collaboration with physicians, fiduciaries, and private staff</li>
          <li>• BrightAssist™: real-time virtual wellness and safety support</li>
        </ul>
      ),
      defaultOpen: false,
    },
    {
      question: "Who are your Care Professionals?",
      answer: (
        <div>
          <p className="mb-3">For both our Essential and Premier levels, we provide outstanding care quality and professional, well-vetted, and well trained CarePros, carefully matched to your needs and personality. All of our CarePros are:</p>
          <ul className="space-y-2">
            <li>• Required to have 3+ years of professional experience, most have much more</li>
            <li>• Trained in advanced dementia, chronic care, and emotional intelligence</li>
            <li>• Thoroughly vetted with criminal, DMV, and reference checks</li>
            <li>• Carefully matched based on personality, values, and lifestyle</li>
            <li>• Fully insured, W2-employed, and mentored in the field</li>
          </ul>
        </div>
      ),
      defaultOpen: false,
    },
    {
      question: "Do you coordinate with physicians, advisors, or estate managers?",
      answer: (
        <div>
          <p className="mb-3">Yes. We actively partner with:</p>
          <ul className="space-y-1 mb-3">
            <li>• Concierge physicians</li>
            <li>• Estate planners and fiduciaries</li>
            <li>• Lifestyle advisors and aging-in-place consultants</li>
            <li>• Hospital discharge planners and hospice teams</li>
          </ul>
          <p>We ensure our care supports and enhances each client's broader plan.</p>
        </div>
      ),
      defaultOpen: false,
    },
    {
      question: "How does BrightAssist™ work?",
      answer: (
        <div>
          <p className="mb-3">BrightAssist™ is our 24/7 virtual care companion. It provides:</p>
          <ul className="space-y-1">
            <li>• Real-time insights and proactive safety alerts</li>
            <li>• Support for medication timing and behavioral patterns</li>
            <li>• Enhanced peace of mind for families and care teams</li>
          </ul>
        </div>
      ),
      defaultOpen: false,
    },
    {
      question: "Where do you offer services?",
      answer: (
        <div>
          <p className="mb-3">Brightwood Premier serves discerning families across:</p>
          <ul className="space-y-1 text-base font-montserrat font-semibold">
            <li>• Phoenix, Scottsdale, and Paradise Valley</li>
            <li>• Tucson and Oro Valley</li>
            <li>• Flagstaff, Bellemont, Sedona, and Northern AZ estates</li>
          </ul>
        </div>
      ),
      defaultOpen: false,
    },
    {
      question: "How do we get started?",
      answer: (
        <div>
          <p className="mb-3 text-base font-montserrat">Call us at <a href="tel:6234007528" className="font-semibold whitespace-nowrap hover:underline">(623) 400-7528</a> or visit <span className="font-semibold">premier.brightwood.health</span>. A Care Concierge will:</p>
          <ul className="space-y-1 list-disc pl-4">
            <li>Learn your family's goals and lifestyle needs</li>
            <li>Recommend a customized care plan</li>
            <li>Coordinate a seamless in-home start—often the same day</li>
          </ul>
        </div>
      ),
      defaultOpen: false,
    },
    {
      question: "Do you accept insurance?",
      answer:
        "In-home supportive care is generally not covered by Medicare plans and most clients and families in the United States pay for in-home supportive services out of pocket. Please note that Medicare does cover Home Health in some cases, but Home Health is different from in-home supportive care. Home Health is for short, skilled visits (like physical therapy) to treat a specific illness or injury. Many clients need both Home Health and in-home supportive care, and we frequently partner with Home Health providers to meet comprehensive needs. We accept long-term care insurance and VA benefits and are proud to honorably support our Veterans.",
      defaultOpen: false,
    },
    {
      question: "Do I have to sign a long-term contract?",
      answer:
        "No. We do not require long-term contracts. Services are flexible and can be adjusted, paused, or discontinued with 7-days notice in most cases.",
      defaultOpen: false,
    },
    {
      question: "What happens if the caregiver you send isn't a good fit?",
      answer:
        "We are committed to matching each client with the right Care Professional and have a 100% match guarantee. If something doesn't feel right, we will make it right—quickly and respectfully. You can request a change at any time.",
      defaultOpen: false,
    },
    {
      question: "How quickly can you get care started?",
      answer:
        "In many cases, we can begin care within a few hours of your initial consultation for urgent situations, but more advanced consultation always helps run our full process to ensure the best possible CarePro fit on the first visit.",
      defaultOpen: false,
    },
    {
      question: "Do you have any minimums?",
      answer:
        "Yes. To ensure consistency and quality of care, we do require a minimum number of hours per shift and per week. We recommend scheduling a consultation so we can assess your needs and recommend a curated care plan.",
      defaultOpen: false,
    },
    {
      question: "Will you send the same caregiver every time?",
      answer:
        "Whenever possible, yes. Continuity is key to the Brightwood experience. We prioritize consistent caregiver placements to build trust and familiarity. Occasionally, if there is a scheduling conflict we may send a substitute, however we always honor your preferences and will provide advance notice of any changes. We also always ensure any substitute is thoroughly briefed and held to the same high standard.",
      defaultOpen: false,
    },
    {
      question: "What does it cost? (Premier)",
      answer:
        "Every Brightwood Premier care plan is thoughtfully customized based on each client's needs, lifestyle, and preferences. Because no two situations are the same, we do not publish standard pricing online. The pricing will be based on a standard hourly rate structure, plus a flat monthly fee to cover all the planning and coordination that will go on behind the scenes to ensure seamless delivery of our Premier services. Some individual Premier services (like chef prepared meals) will also incur direct costs. We invite you to schedule a private consultation with our Care Concierge to discuss your goals, explore options, and receive a tailored proposal that aligns with your family's expectations.",
      defaultOpen: false,
    },
    {
      question: "What does it cost? (Essential)",
      answer:
        "We offer a standard hourly rate structure. While we do not publish specific pricing on our website, our team would be happy to provide current rates during a brief phone call. We invite you to schedule a private consultation with our Care Team to discuss your goals, explore options, and receive a tailored proposal that aligns with your family's expectations.",
      defaultOpen: false,
    },
  ];

  return (
    <section className="flex flex-col items-center gap-2.5 py-20 relative self-stretch w-full bg-[#f8f5f0] overflow-hidden">
      <div className="container px-8 lg:px-16 2xl:px-0 mx-auto">
        <div className="max-w-[872px] mx-auto">
            <div className="flex flex-col gap-4 pb-4 relative">
            <h2 className="font-playfair font-bold text-[#1b1b1b] text-5xl tracking-[-0.96px] leading-[normal]">
              Frequently Asked Questions
            </h2>

            <p className="self-stretch font-montserrat font-normal text-[#1b1b1b] text-lg lg:text-xl tracking-[0] leading-[30px]">
              Answers to questions about our home care services, caregivers, and
              how we support your loved ones at home.
            </p>

            <div className="w-full max-w-[872px]">
              <Accordion type="single" collapsible defaultValue="item-0">
                {faqItems.map((item, index) => (
                  <AccordionItem
                    key={`item-${index}`}
                    value={`item-${index}`}
                    className="rounded-lg mb-4 border-none shadow-none bg-transparent"
                  >
                    <AccordionTrigger className="px-4 py-3 font-montserrat font-medium text-[#1b1b1b] text-sm lg:text-base leading-6 hover:no-underline bg-[#c8c6ba] data-[state=closed]:bg-[#C8C6BA4D] rounded-lg transition-colors">
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent className="px-4 pb-0 pt-3 font-montserrat font-normal text-[#1b1b1b] text-sm lg:text-base leading-6 bg-[#f8f5f0] rounded-lg data-[state=closed]:hidden">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
