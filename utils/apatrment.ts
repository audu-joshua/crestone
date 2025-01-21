// utils/apartment.ts
import { Property, Category, CategoryWithMetrics, PropertyWithMetrics  } from './types';
import { slugify } from './slugify';

export const apartmentData: CategoryWithMetrics[] = [  
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
        },
        financialMetrics: {
          projectedAnnualRevenue: 1200000,
          operatingExpenseRatio: 45.2,
          capitalizationRate: 5.8,
          cashOnCashReturn: 7.2,
          internalRateOfReturn: 12.5,
          grossRentMultiplier: 8.4,
          monthlyMetrics: [
            { month: 'Jan', appreciationRate: 0.5, vacancyRate: 3.2 },
            { month: 'Feb', appreciationRate: 0.6, vacancyRate: 2.8 },
            { month: 'Mar', appreciationRate: 0.7, vacancyRate: 2.5 },
            { month: 'Apr', appreciationRate: 0.8, vacancyRate: 2.2 },
            { month: 'May', appreciationRate: 0.9, vacancyRate: 2.0 },
            { month: 'Jun', appreciationRate: 1.0, vacancyRate: 1.8 },
            { month: 'Jul', appreciationRate: 1.1, vacancyRate: 1.9 },
            { month: 'Aug', appreciationRate: 1.2, vacancyRate: 2.1 },
            { month: 'Sep', appreciationRate: 1.1, vacancyRate: 2.3 },
            { month: 'Oct', appreciationRate: 1.0, vacancyRate: 2.5 },
            { month: 'Nov', appreciationRate: 0.9, vacancyRate: 2.8 },
            { month: 'Dec', appreciationRate: 0.8, vacancyRate: 3.0 }
          ]
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
        },
        financialMetrics: {
          projectedAnnualRevenue: 850000,
          operatingExpenseRatio: 42.5,
          capitalizationRate: 6.2,
          cashOnCashReturn: 8.1,
          internalRateOfReturn: 11.8,
          grossRentMultiplier: 7.9,
          monthlyMetrics: [
            { month: 'Jan', appreciationRate: 0.4, vacancyRate: 4.0 },
            { month: 'Feb', appreciationRate: 0.5, vacancyRate: 3.8 },
            { month: 'Mar', appreciationRate: 0.6, vacancyRate: 3.5 },
            { month: 'Apr', appreciationRate: 0.7, vacancyRate: 3.2 },
            { month: 'May', appreciationRate: 0.8, vacancyRate: 3.0 },
            { month: 'Jun', appreciationRate: 0.9, vacancyRate: 2.8 },
            { month: 'Jul', appreciationRate: 1.0, vacancyRate: 2.9 },
            { month: 'Aug', appreciationRate: 1.1, vacancyRate: 3.1 },
            { month: 'Sep', appreciationRate: 1.0, vacancyRate: 3.3 },
            { month: 'Oct', appreciationRate: 0.9, vacancyRate: 3.5 },
            { month: 'Nov', appreciationRate: 0.8, vacancyRate: 3.8 },
            { month: 'Dec', appreciationRate: 0.7, vacancyRate: 4.0 }
          ]
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
        },
        financialMetrics: {
          projectedAnnualRevenue: 450000,
          operatingExpenseRatio: 38.5,
          capitalizationRate: 5.5,
          cashOnCashReturn: 6.8,
          internalRateOfReturn: 10.2,
          grossRentMultiplier: 9.2,
          monthlyMetrics: [
            { month: 'Jan', appreciationRate: 0.3, vacancyRate: 2.0 },
            { month: 'Feb', appreciationRate: 0.4, vacancyRate: 1.8 },
            { month: 'Mar', appreciationRate: 0.5, vacancyRate: 1.5 },
            { month: 'Apr', appreciationRate: 0.6, vacancyRate: 1.2 },
            { month: 'May', appreciationRate: 0.7, vacancyRate: 1.0 },
            { month: 'Jun', appreciationRate: 0.8, vacancyRate: 0.8 },
            { month: 'Jul', appreciationRate: 0.9, vacancyRate: 0.9 },
            { month: 'Aug', appreciationRate: 1.0, vacancyRate: 1.1 },
            { month: 'Sep', appreciationRate: 0.9, vacancyRate: 1.3 },
            { month: 'Oct', appreciationRate: 0.8, vacancyRate: 1.5 },
            { month: 'Nov', appreciationRate: 0.7, vacancyRate: 1.8 },
            { month: 'Dec', appreciationRate: 0.6, vacancyRate: 2.0 }
          ]
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
        },
        financialMetrics: {
          projectedAnnualRevenue: 720000,
          operatingExpenseRatio: 40.5,
          capitalizationRate: 5.9,
          cashOnCashReturn: 7.5,
          internalRateOfReturn: 11.2,
          grossRentMultiplier: 8.8,
          monthlyMetrics: [
            { month: 'Jan', appreciationRate: 0.4, vacancyRate: 3.5 },
            { month: 'Feb', appreciationRate: 0.5, vacancyRate: 3.2 },
            { month: 'Mar', appreciationRate: 0.6, vacancyRate: 2.9 },
            { month: 'Apr', appreciationRate: 0.7, vacancyRate: 2.6 },
            { month: 'May', appreciationRate: 0.8, vacancyRate: 2.4 },
            { month: 'Jun', appreciationRate: 0.9, vacancyRate: 2.2 },
            { month: 'Jul', appreciationRate: 1.0, vacancyRate: 2.3 },
            { month: 'Aug', appreciationRate: 1.1, vacancyRate: 2.5 },
            { month: 'Sep', appreciationRate: 1.0, vacancyRate: 2.7 },
            { month: 'Oct', appreciationRate: 0.9, vacancyRate: 2.9 },
            { month: 'Nov', appreciationRate: 0.8, vacancyRate: 3.2 },
            { month: 'Dec', appreciationRate: 0.7, vacancyRate: 3.5 }
          ]
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
        },
        financialMetrics: {
          projectedAnnualRevenue: 980000,
          operatingExpenseRatio: 43.8,
          capitalizationRate: 6.1,
          cashOnCashReturn: 7.8,
          internalRateOfReturn: 12.1,
          grossRentMultiplier: 8.2,
          monthlyMetrics: [
            { month: 'Jan', appreciationRate: 0.6, vacancyRate: 3.0 },
            { month: 'Feb', appreciationRate: 0.7, vacancyRate: 2.7 },
            { month: 'Mar', appreciationRate: 0.8, vacancyRate: 2.4 },
            { month: 'Apr', appreciationRate: 0.9, vacancyRate: 2.1 },
            { month: 'May', appreciationRate: 1.0, vacancyRate: 1.9 },
            { month: 'Jun', appreciationRate: 1.1, vacancyRate: 1.7 },
            { month: 'Jul', appreciationRate: 1.2, vacancyRate: 1.8 },
            { month: 'Aug', appreciationRate: 1.3, vacancyRate: 2.0 },
            { month: 'Sep', appreciationRate: 1.2, vacancyRate: 2.2 },
            { month: 'Oct', appreciationRate: 1.1, vacancyRate: 2.4 },
            { month: 'Nov', appreciationRate: 1.0, vacancyRate: 2.7 },
            { month: 'Dec', appreciationRate: 0.9, vacancyRate: 3.0 }
          ]
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
        },
        financialMetrics: {
          projectedAnnualRevenue: 550000,
          operatingExpenseRatio: 39.5,
          capitalizationRate: 5.7,
          cashOnCashReturn: 7.0,
          internalRateOfReturn: 10.8,
          grossRentMultiplier: 9.0,
          monthlyMetrics: [
            { month: 'Jan', appreciationRate: 0.3, vacancyRate: 2.8 },
            { month: 'Feb', appreciationRate: 0.4, vacancyRate: 2.5 },
            { month: 'Mar', appreciationRate: 0.5, vacancyRate: 2.2 },
            { month: 'Apr', appreciationRate: 0.6, vacancyRate: 1.9 },
            { month: 'May', appreciationRate: 0.7, vacancyRate: 1.7 },
            { month: 'Jun', appreciationRate: 0.8, vacancyRate: 1.5 },
            { month: 'Jul', appreciationRate: 0.9, vacancyRate: 1.6 },
            { month: 'Aug', appreciationRate: 1.0, vacancyRate: 1.8 },
            { month: 'Sep', appreciationRate: 0.9, vacancyRate: 2.0 },
            { month: 'Oct', appreciationRate: 0.8, vacancyRate: 2.2 },
            { month: 'Nov', appreciationRate: 0.7, vacancyRate: 2.5 },
            { month: 'Dec', appreciationRate: 0.6, vacancyRate: 2.8 }
          ]
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

export function findPropertyBySlug(slug: string): PropertyWithMetrics | undefined {
  console.log('Searching for slug:', slug);

  for (const category of apartmentData) {
    console.log('Searching in category:', category.title);

    const property = category.properties.find((p: PropertyWithMetrics) => {
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
