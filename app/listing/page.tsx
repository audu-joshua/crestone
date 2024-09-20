import React from 'react'
import { ListingHero } from '@/components/listing/hero'
import { Houses } from '@/components/listing/house'


export default function page() {
  return (
    <div>
      <ListingHero/>
      <Houses/>
    </div>
  )
}
