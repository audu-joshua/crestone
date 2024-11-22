"use client";
import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

export const Faq = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqData = [
    {
      question: "Who are these services designed for?",
      answer:
        "Our services cater to homebuyers, sellers, investors, and renters looking for expert guidance in navigating the real estate market.",
    },
    {
      question: "Do you work with international buyers or investors?",
      answer:
        "Yes, we work with clients from around the globe. Whether you’re relocating or investing, we provide tailored support to meet your needs.",
    },
    {
      question: "How do you ensure I find the perfect property?",
      answer:
        "We start by understanding your unique preferences and goals, then leverage our market expertise and extensive listings to match you with properties that align with your vision.",
    },
    {
      question: "Do you assist with selling properties?",
      answer:
        "Absolutely! From setting the right price to marketing your property effectively, we offer end-to-end support to ensure a smooth and profitable sale.",
    },
    {
      question: "What kind of support can I expect during the buying or selling process?",
      answer:
        "We provide personalized assistance at every step, including property searches, negotiations, paperwork, and closing, ensuring a stress-free experience.",
    },
    {
      question: "Do you offer virtual tours or online property viewings?",
      answer:
        "Yes, we offer virtual tours for many of our listings, making it easy for you to explore properties from the comfort of your home.",
    },
    {
      question: "How do I get started with buying, selling, or renting a property?",
      answer:
        "It’s simple! Contact us to discuss your needs, and we’ll guide you through the process from start to finish, whether you’re buying, selling, or renting.",
    },
    {
      question: "Do you offer advice on property investments?",
      answer:
        "Yes, we provide expert advice on real estate investments, helping you identify opportunities that align with your financial goals.",
    },
    {
      question: "What if I’m not satisfied with the property options you provide?",
      answer:
        "Your satisfaction is our priority. If our initial options don’t meet your expectations, we’ll refine our search to find the perfect match.",
    },
  ];
  

  return (
    <div className="px-3 py-4 md:py-16 md:px-6 lg:px-12 bg-[#EFEFEF] md:flex md:justify-between md:gap-10 lg:gap-12 sm:px-[40]">

      <div className=" pt-12 pb-11 md:w-[40%]">
        <h3 className="text-[#EF0000] text-3xl font-bold leading-normal border-t-[1.5px] border-solid border-black pt-2 w-fit  lg:text-4xl">
          Frequently Asked Questions
        </h3>
        <p className="text-black font-semibold text-lg py-4"> 
            Still have questions?
        </p>
        <p className="text-black">
        Can't find the answers you re looking for?, Get in touch with us
        </p>
      </div>

      <div className="faq-dropdown md:w-[60%]">
        {faqData.map((item, index) => (
          <div
            key={index}
            className="grid mb-4 rounded-lg border-solid border-[#D7D7D7] border "
          >
            <button
              className="question bg-[#EDEDED] text-base font-semibold leading-normal text-black py-5 px-3 flex justify-between"
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            >
              <div className=" justify-start text-start text-base ">{item.question}</div>
              <div className="">
                <IoIosArrowDown />
              </div>
            </button>
            {openIndex === index && (
              <div className="p-2 text-sm bg-[#EDEDED] text-[#5C5C5C]">{item.answer}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
