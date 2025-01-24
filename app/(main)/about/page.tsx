import React from 'react'
import AboutHero from '@/components/About/hero'
import { InvestmentImages } from '@/components/About/sliderimages'
import { OurMission } from '@/components/About/mission'
import { OurValues } from '@/components/About/values'
import { Operate } from '@/components/About/operate'
import { Testimonials } from '@/components/About/testimonials'
import { Faq } from '@/components/Home/faq'

export default function page() {
  return (
    <div>
      <AboutHero/>
      <InvestmentImages/>
      <OurMission/>
      <OurValues/>
      <Operate/>
      <Testimonials/>
      <Faq/>
    </div>
  )
}
