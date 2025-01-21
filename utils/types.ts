// utils/types.ts

export interface Property {
  id: string;
  slug: string;
  name: string;
  address: string;
  type: string;
  price: string;
  image: string;
  status: 'For Rent' | 'For Sale';
  description?: string;
  virtualTourUrl?: string;
  floorPlanImage?: string;
  builtIn?: number;
  livingRoom?: number;
  bedroom?: number;
  bathroom?: number;
  propertySize?: string;
  stairs?: number;
  floorType?: string;
  builtBy?: string;
  propertyFloors?: number;
  condition?: 'New' | 'Good' | 'Excellent';
  threeDplan?: 'Yes' | 'No';
  petsAllowed?: 'Yes' | 'No';
  mapCoordinates?: {
    lat: number;
    lng: number;
  };
}

export interface Category {
  title: string;
  slug: string;
  available: number;
  properties: Property[];
}

export interface MonthlyMetrics {
  month: string;
  appreciationRate: number;  // Percentage
  vacancyRate: number;      // Percentage
}

export interface FinancialMetrics {
  projectedAnnualRevenue: number;
  operatingExpenseRatio: number;    // Percentage
  capitalizationRate: number;       // Percentage
  cashOnCashReturn: number;         // Percentage
  internalRateOfReturn: number;     // Percentage
  grossRentMultiplier: number;
  monthlyMetrics: MonthlyMetrics[];
}

export interface PropertyWithMetrics extends Property {
  financialMetrics: FinancialMetrics;
}

export interface CategoryWithMetrics extends Category {
  properties: PropertyWithMetrics[];
}