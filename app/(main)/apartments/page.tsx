import React from 'react'
import { ListingHero } from '@/components/listing/hero'
import { Houses } from '@/components/listing/house'
import Insight from '@/components/listing/insight'
import Listing from '@/components/listing/listing'
import Blogs from '@/components/listing/blogs'

export default function page() {
  return (
    <div>
      <ListingHero/>
      <Houses/>
      <Insight/>
      <Listing/>
      <Blogs/>
    </div>
  )
}
