import React from 'react'
import ContactHero from '@/components/contact/hero'
import ContactInfo from '@/components/contact/contactInfo'
import CommunityForum from '@/components/contact/community'
import { Faq } from '@/components/Home/faq'

export default function page() {
  return (
    <div>
      <ContactHero/>
      <ContactInfo/>
      <CommunityForum/>
      <Faq/>
    </div>
  )
}
