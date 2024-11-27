import React from 'react';
import { Property } from '@/utils/types';

interface VirtualTourProps {
  property: Property;
}

const VirtualTour: React.FC<VirtualTourProps> = ({ property }) => {
  return (
    <div className="bg-gray-100 p-6 rounded-lg">
      <h2 className="text-xl font-semibold mb-4">Virtual Tour</h2>
      <div className="aspect-video bg-gray-300 rounded-lg flex items-center justify-center relative">
        {property.virtualTourUrl ? (
          <iframe 
            src={property.virtualTourUrl} 
            className="absolute inset-0 w-full h-full"
            allowFullScreen 
            title="Virtual Tour"
          />
        ) : (
          <p className="text-gray-600">No Virtual Tour Available</p>
        )}
      </div>
    </div>
  );
};

export default VirtualTour;