import React from 'react'
import { BsArrowLeftShort, BsStar, BsStarFill } from 'react-icons/bs'
import { BlogsData } from '@/utils/blogsData'

export default function Individualblog() {
    return (
        <div className='bg-white py-16 md:pb-12 pt-24 md:pt-36 text-black px-3 md:px-6 lg:px-12'>
            <div>
                <div>
                    <div className=' hidden md:flex'>
                        <BsArrowLeftShort />
                    </div>
                    <h1 className=' text-3xl font-bold'>
                        Maximizing Income: Property Owners
                    </h1>
                </div>
                <p className=' py-3 text-[#bbbbbb]'>
                    Learn proven strategies to optimize rental income, attract quality tenants, and maximize returns on your investment properties
                </p>
            </div>

            <div>
                <img src={BlogsData[0].img} className=' rounded-xl' />

                <div>

                    <div className=' grid gap-4 py-4'>
                        <p>
                            Are you a property owner looking to maximize your
                            rental income and optimize your investment
                            returns? In today's competitive real estate market,
                            strategic planning and proactive management are
                            key to achieving financial success. Whether you're a
                            seasoned landlord or new to the game, there are
                            several effective strategies you can implement to
                            boost your rental income and make the most of
                            your investment property.
                        </p>

                        <p>
                            In this blog post, we'll explore actionable tips and
                            proven techniques for property owners to increase
                            their rental income and enhance their profitability.
                            From setting competitive rental rates to leveraging
                            technology and optimizing property maintenance,
                            we'll cover everything you need to know to
                            maximize your income and unlock the full potential
                            of your investment property.
                        </p>

                        <p>
                            Stay tuned for expert insights, practical advice, and
                            real-world examples that will empower you to take
                            your property investment to the next level. Don't
                            miss out on this valuable resource for property
                            owners looking to achieve financial success in the
                            world of real estate. Let's dive in and start
                            maximizing your rental income today!
                        </p>

                        <h3 className=' text-lg font-bold'>
                            Full Potential of your Investment
                            Property
                        </h3>

                        <p>
                            Stay tuned for expert insights, practical advice, and
                            real-world examples that will empower you to take your
                            property investment to the next level. Don't miss out on
                            this valuable resource for property owners looking to
                            achieve financial success in the world of real estate.
                            Let's dive in and start maximizing your rental income
                            today! In this blog post, we'll explore actionable tips
                            and proven techniques for property owners to increase
                            their rental income and enhance their profitability. From
                            setting competitive rental rates to leveraging
                            technology and optimizing property maintenance,
                            we'll cover everything you need to know to maximize
                            your income and unlock the full potential of your
                            investment property.
                        </p>
                    </div>

                    <div className='bg-black rounded-xl p-4'>
                        <div className=' flex justify-between'>
                        <div className='flex items-center'>
                            <img
                                src={"/images/T5.png"}
                                className='w-16 h-16 rounded-full object-cover mr-4'
                            />
                            <div className='gap-0'>
                                <h4 className='text-white font-medium text-sm'>
                                Jina Annabelle
                                </h4>
                                <h5 className='text-[#bbbbbb] font-medium text-xs'>
                                Senior Content Writer
                                </h5>
                            </div>
                        </div>

                        <div className='flex items-center h-fit gap-3 bg-slate-800 p-0.5 px-2 rounded-xl border border-solid border-orange-400'>
                            <BsStarFill className='fill-orange-400'/>
                            <p className=' text-orange-400'> Writer </p>
                        </div>

                        </div>

                    </div>
                </div>



            </div>

        </div>
    )
}
