// types.ts
export interface Property {
    id: string;
    name: string;
    address: string;
    type: string;
    price: string;
    image: string;
    status: 'For Rent' | 'For Sale';
  }
  
  export interface Category {
    title: string;
    available: number;
    properties: Property[];
  }
  
  // apartmentData.ts
  export const apartmentData: Category[] = [
    {
      title: 'Multi-Family Housing',
      available: 2,
      properties: [
        {
          id: 'mf-001',
          name: 'Riverview Apartments',
          address: '123 Hauptstraße, Berlin 10115, Germany',
          type: 'Multi Family',
          price: '$1,100 - $5,000/month',
          image: '/images/multiFamily2.png', // Add your image path here
          status: 'For Rent'
        },
        {
          id: 'mf-002',
          name: 'Urban Heights',
          address: '456 Hauptstraße, Berlin 10115, Germany',
          type: 'Multi Family',
          price: '$1,300 - $4,800/month',
          image: '/images/multiFamily1.png', // Add your image path here
          status: 'For Sale'
        }
      ]
    },
    {
      title: 'Single-Family Housing',
      available: 1,
      properties: [
        {
          id: 'sf-001',
          name: 'Parkview Residence',
          address: '789 Parkstraße, Berlin 10117, Germany',
          type: 'Single Family',
          price: '$2,500/month',
          image: '/images/single1.png', // Add your image path here
          status: 'For Rent'
        }
      ]
    },
    {
      title: 'Condominiums',
      available: 2,
      properties: [
        {
          id: 'c-001',
          name: 'City View Condos',
          address: '321 Stadtstraße, Berlin 10118, Germany',
          type: 'Condominium',
          price: '$1,800 - $3,200/month',
          image: '/images/condominiums2.png', // Add your image path here
          status: 'For Sale'
        },
        {
          id: 'c-002',
          name: 'Luxury Towers',
          address: '654 Luxusstraße, Berlin 10119, Germany',
          type: 'Condominium',
          price: '$2,200 - $4,500/month',
          image: '/images/condonimiums1.png', // Add your image path here
          status: 'For Rent'
        }
      ]
    },
    {
      title: 'Townhouses',
      available: 0,
      properties: []
    },
    {
      title: 'Green Homes',
      available: 0,
      properties: []
    },
    {
      title: 'Apartments',
      available: 0,
      properties: []
    },
    {
      title: 'Student Housing',
      available: 0,
      properties: []
    }
  ];