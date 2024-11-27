"use client"

import React, { useEffect, useState } from 'react';
import { useParams, usePathname } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { apartmentData } from '@/utils/apatrment';
import { Property } from '@/utils/types';
import ApartmentDetailNav from '@/components/listing/listing/nav';

const ApartmentDetail = () => {
  const params = useParams();
  const pathname = usePathname();
  const [property, setProperty] = useState<Property | undefined>(undefined);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Extract slug from params or pathname as fallback
    let slug: string | undefined;
    
    if (params?.apartmentSlug) {
      // If params has the slug directly
      slug = Array.isArray(params.apartmentSlug) 
        ? params.apartmentSlug[0] 
        : params.apartmentSlug;
    } else {
      // Fallback to extracting from pathname
      const pathParts = pathname.split('/');
      slug = pathParts[pathParts.length - 1];
    }

    console.log('Debug - Params:', params);
    console.log('Debug - Pathname:', pathname);
    console.log('Debug - Extracted slug:', slug);

    if (slug) {
      // Find the property
      for (const category of apartmentData) {
        const foundProperty = category.properties.find((p: Property) => p.slug === slug);
        if (foundProperty) {
          setProperty(foundProperty);
          break;
        }
      }
    }

    setIsLoading(false);
  }, [params, pathname]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Loading...</h1>
        </div>
      </div>
    );
  }

  if (!property) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Property Not Found</h1>
          <p className="mb-4 text-gray-600">Unable to find property with the specified URL</p>
          <Link 
            href="/apartments"
            className="text-red-600 hover:text-red-800 flex items-center justify-center gap-2"
          >
            <ArrowLeft size={20} />
            Back to Listings
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white">
      <ApartmentDetailNav property={property} />
    </div>
  );
};

export default ApartmentDetail;