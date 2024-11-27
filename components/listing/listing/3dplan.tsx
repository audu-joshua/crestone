import React from 'react';
import { Property } from '@/utils/types';

interface ThreeDPlanProps {
  property: Property;
}

const ThreeDPlan: React.FC<ThreeDPlanProps> = ({ property }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">3D Floor Plan</h2>
      <div className="aspect-square bg-gray-200 rounded-lg flex items-center justify-center relative">
        {/* 
        {property.threeDPlanUrl ? (
          <iframe 
            src={property.threeDPlanUrl} 
            className="absolute inset-0 w-full h-full"
            allowFullScreen 
            title="3D Floor Plan"
          />
        ) : (
          <p className="text-gray-600">No 3D Plan Available</p>
        )}
          */}
      </div>
    </div>
  );
};

export default ThreeDPlan;