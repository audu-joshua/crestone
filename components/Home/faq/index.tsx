"use client";
import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

export const Faq = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqData = [
    {
      question: "Who are these courses designed for?",
      answer:
        "Our courses cater to a wide audience, including beginners looking to start their real estate journey, experienced investors seeking to expand their knowledge, and anyone interested in real estate as an investment avenue.",
    },
    {
      question: "Are these courses suitable for international students?",
      answer:
        "Absolutely! Our courses are designed to be accessible to students from around the world. While some content may be region-specific, the core principles of real estate investment are applicable globally.",
    },
    {
      question: "How long are the courses, and can I study at my own pace?",
      answer:
        "Course lengths vary depending on the subject matter and depth of coverage. Most courses are self-paced, allowing you to study at a pace that suits your schedule.",
    },
    {
      question:
        "Do I need prior experience in real estate to enroll in your courses?",
      answer:
        "No prior experience is required. Our courses are structured to accommodate both beginners and experienced individuals. We start with the basics and progress to advanced topics.",
    },
    {
      question: "What kind of support can I expect during the course? ",
      answer:
        "We provide comprehensive support, including access to instructors for course-related questions and assistance. You'll also have access to discussion forums where you can interact with fellow students.",
    },
    {
      question: "Is there a certification upon course completion?",
      answer:
        "Yes, upon successfully completing a course, you will receive a certificate from SV Investment. This certificate can be a valuable addition to your professional profile.r 2",
    },
    {
      question: "Are there any prerequisites for enrollment?",
      answer:
        "Most of our courses have no specific prerequisites. However, we recommend having a basic understanding of real estate concepts if you're enrolling in more advanced courses.",
    },
    {
      question:
        "What is the enrollment process, and how do I access the course materials?",
      answer:
        "The enrollment process is straightforward. Once you choose a course and complete the payment, you will receive login credentials to access the course materials on our platform.",
    },
    {
      question: "Do you offer refunds if I'm not satisfied with the course?",
      answer:
        "We strive to ensure your satisfaction. If you find that a course does not meet your expectations, please reach out to our support team.",
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
