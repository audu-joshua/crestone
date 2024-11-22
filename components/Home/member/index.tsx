import Image from "next/image";
import Link from "next/link";
import { BsArrowUpRight } from "react-icons/bs";

export function BecomeMember() {
  return (
    <section className="mt-[94px] bg-white">
      <div className="w-full md:w-[600px] lg:w-[871px] lg:h-[512px] ">
        <img src="./images/beautiful-house.png" alt="" className="w-[100%] " />
      </div>

      <div className="bg-[#171717] py-[32px] lg:py-[56px] px-[32px] transform translate-y-[-20%] h-[328px] max-w-[385px] mx-auto md:translate-y-[-130%] lg:translate-y-[-50%] md:translate-x-[50%] lg:translate-x-[50%] lg:max-w-[505px] lg:h-[403px] ">
        <p className="text-[#FFBA00] text-[20px] lg:text-[32px] font-[700] mb-[15px]  ">
          Take Control of Your Financial Future Today
        </p>

        <p className="text-[#F5F5F5] text-[16px] mb-[30px] lg:mb-[51px] ">
        Ready to dive into the world of real estate investment but unsure where to begin? With Credstone, you'll gain the knowledge and tools to build a prosperous future.Join today and unlock exclusive benefits designed to kickstart your journey.
        </p>

        <Link
          href={"/member"}
          className="text-[#FFBA00] flex items-center gap-[20px] text-[16px] font-[500] border-b-[1px] border-b-[#FFBA00] pb-[2px] mb-[59px] md:mb-0 "
        >
          Become a Member <BsArrowUpRight />
        </Link>
      </div>
    </section>
  );
}
