// utils/apartment.ts
import { Property, Category } from './types';
import { slugify } from './slugify';

export const apartmentData: Category[] = [
  {
    title: 'Multi-Family Housing',
    slug: 'multi-family-housing',
    available: 2,
    properties: [
      {
        id: 'mf-001',
        slug: 'riverview-apartments',
        name: 'Riverview Apartments',
        address: '123 Hauptstraße, Berlin 10115, Germany',
        type: 'Multi Family',
        price: '$1,100 - $5,000/month',
        image: '/images/multiFamily2.png',
        status: 'For Rent',
        description: 'Luxurious riverside apartments featuring modern amenities.',
        virtualTourUrl: '/virtual-tours/riverview',
        floorPlanImage: '/floorplans/riverview-3d.png',
        builtIn: 2020,
        livingRoom: 3,
        bedroom: 3,
        bathroom: 2,
        propertySize: '1,200 sqft',
        stairs: 1,
        threeDplan: 'Yes',
        floorType: 'Hardwood',
        builtBy: 'Riverside Developers',
        propertyFloors: 5,
        condition: 'Excellent',
        petsAllowed: 'Yes',
        mapCoordinates: {
          lat: 52.5200,
          lng: 13.4050
        }
      },
      {
        id: 'mf-002',
        slug: 'urban-heights',
        name: 'Urban Heights',
        address: '456 Hauptstraße, Berlin 10115, Germany',
        type: 'Multi Family',
        price: '$40,000',
        image: '/images/multiFamily1.png',
        status: 'For Sale',
        description: 'Modern urban living spaces with premium finishes.',
        virtualTourUrl: '/virtual-tours/urban-heights',
        floorPlanImage: '/floorplans/urban-heights-3d.png',
        builtIn: 2015,
        livingRoom: 1,
        bedroom: 2,
        bathroom: 1,
        threeDplan: 'No',
        propertySize: '950 sqft',
        stairs: 0,
        floorType: 'Tile',
        builtBy: 'Urban Spaces Ltd',
        propertyFloors: 3,
        condition: 'Good',
        petsAllowed: 'Yes',
        mapCoordinates: {
          lat: 52.5202,
          lng: 13.4080
        }
      }
    ]
  },
  {
    title: 'Single-Family Housing',
    slug: 'single-family-housing',
    available: 1,
    properties: [
      {
        id: 'sf-001',
        slug: 'parkview-residence',
        name: 'Parkview Residence',
        address: '789 Parkstraße, Berlin 10117, Germany',
        type: 'Single Family',
        price: '$2,500/month',
        image: '/images/single1.png',
        status: 'For Rent',
        description: 'Spacious single-family home overlooking the park.',
        virtualTourUrl: '/virtual-tours/parkview',
        floorPlanImage: '/floorplans/parkview-3d.png',
        builtIn: 2018,
        livingRoom: 5,
        bedroom: 4,
        threeDplan: 'Yes',
        bathroom: 3,
        propertySize: '2,000 sqft',
        stairs: 2,
        floorType: 'Carpet',
        builtBy: 'Green Developers',
        propertyFloors: 2,
        condition: 'Excellent',
        petsAllowed: 'No',
        mapCoordinates: {
          lat: 52.5236,
          lng: 13.3918
        }
      }
    ]
  },
  {
    title: 'Condominiums',
    slug: 'condominiums',
    available: 2,
    properties: [
      {
        id: 'c-001',
        slug: 'city-view-condos',
        name: 'City View Condos',
        address: '321 Stadtstraße, Berlin 10118, Germany',
        type: 'Condominium',
        price: '$60,000',
        image: '/images/condominiums2.png',
        status: 'For Sale',
        description: 'Luxury condominiums with panoramic city views.',
        virtualTourUrl: '/virtual-tours/city-view',
        floorPlanImage: '/floorplans/city-view-3d.png',
        builtIn: 2019,
        livingRoom: 2,
        threeDplan: 'Yes',
        bedroom: 2,
        bathroom: 2,
        propertySize: '1,100 sqft',
        stairs: 1,
        floorType: 'Laminate',
        builtBy: 'Skyline Builders',
        propertyFloors: 10,
        condition: 'New',
        petsAllowed: 'Yes',
        mapCoordinates: {
          lat: 52.5224,
          lng: 13.4132
        }
      },
      {
        id: 'c-002',
        slug: 'luxury-towers',
        name: 'Luxury Towers',
        address: '654 Luxusstraße, Berlin 10119, Germany',
        type: 'Condominium',
        price: '$2,200 - $4,500/month',
        image: '/images/multiFamily1.png',
        status: 'For Rent',
        description: 'Premium tower residences offering urban luxury living.',
        virtualTourUrl: '/virtual-tours/luxury-towers',
        floorPlanImage: '/floorplans/luxury-towers-3d.png',
        builtIn: 2017,
        livingRoom: 9,
        threeDplan: 'Yes',
        bedroom: 3,
        bathroom: 2,
        propertySize: '1,400 sqft',
        stairs: 4,
        floorType: 'Hardwood',
        builtBy: 'Elite Properties',
        propertyFloors: 12,
        condition: 'Excellent',
        petsAllowed: 'Yes',
        mapCoordinates: {
          lat: 52.5203,
          lng: 13.4098
        }
      }
    ]
  },
  {
    title: 'Townhouses',
    slug: 'townhouses',
    available: 1,
    properties: [
      {
        id: 'th-001',
        slug: 'maple-townhouse',
        name: 'Maple Townhouse',
        address: '111 Maple Lane, Berlin 10120, Germany',
        type: 'Townhouse',
        price: '$3,500/month',
        image: '/images/multiFamily1.png',
        status: 'For Rent',
        description: 'Beautiful townhouse with a private yard and parking.',
        virtualTourUrl: '/virtual-tours/maple-townhouse',
        floorPlanImage: '/floorplans/maple-townhouse-3d.png',
        builtIn: 2012,
        livingRoom: 2,
        threeDplan: 'No',
        bedroom: 3,
        bathroom: 3,
        propertySize: '1,800 sqft',
        stairs: 1,
        floorType: 'Tile',
        builtBy: 'Townhome Experts',
        propertyFloors: 2,
        condition: 'Good',
        petsAllowed: 'Yes',
        mapCoordinates: {
          lat: 52.5232,
          lng: 13.3945
        }
      }
    ]
  },
  {
    title: 'Green Homes',
    slug: 'green-homes',
    available: 0,
    properties: []
  },
  {
    title: 'Apartments',
    slug: 'apartments',
    available: 0,
    properties: []
  },
  {
    title: 'Student Housing',
    slug: 'student-housing',
    available: 0,
    properties: []
  }
];

export function findPropertyBySlug(slug: string): Property | undefined {
  console.log('Searching for slug:', slug);

  for (const category of apartmentData) {
    console.log('Searching in category:', category.title);

    const property = category.properties.find((p: Property) => {
      const match = p.slug === slug;
      console.log(`Comparing ${p.slug} with ${slug}: ${match}`);
      return match;
    });

    if (property) {
      console.log('Found property:', property.name);
      return property;
    }
  }

  console.log('No property found with slug:', slug);
  return undefined;
}
