import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Home, Video, Box, ChevronLeft } from 'lucide-react';
import { Property } from '@/utils/types';
import Overview from '../overview';
import VirtualTour from '../virtualTour';
import ThreeDPlan from '../3dplan';

interface ApartmentDetailNavProps {
  property: Property;
}

const ApartmentDetailNav: React.FC<ApartmentDetailNavProps> = ({ property }) => {
  const [activeTab, setActiveTab] = useState('overview');

  const navItems = [
    { id: 'overview', label: 'Overview', icon: <Home size={20} /> },
    { id: 'virtual-tour', label: 'Virtual Tour', icon: <Video size={20} /> },
    { id: '3d-plan', label: '3D Plan', icon: <Box size={20} /> },
  ];

  const tabContentVariants = {
    initial: { opacity: 0, x: 50 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -50 }
  };

  return (
    <div className="bg-white py-16 md:pb-12 pt-24 md:pt-36 text-black px-3 md:px-6 lg:px-12">
      {/* Back button and title */}
      <div className="flex items-center mb-6 gap2">
        <button 
          className="mr-4 text-gray-600 hover:text-gray-900 transition-colors p-2 border border-solid rounded-full w-fit"
          onClick={() => window.history.back()}
        >
          <ChevronLeft size={24} />
        </button>
        <h1 className="text-2xl font-bold">{property.name}</h1>
      </div>

      {/* Navigation Menu */}
      <div className="flex justify-between md:w-1/2 border-b mb-6">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveTab(item.id)}
            className={`flex items-center gap-2 py-4 px-4 relative ${
              activeTab === item.id
                ? 'text-red-600 border-b-2 border-red-600'
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            {item.icon}
            <span className="hidden md:inline">{item.label}</span>
          </button>
        ))}
      </div>

      {/* Content container with animations */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial="initial"
          animate="animate"
          exit="exit"
          variants={tabContentVariants}
          transition={{ duration: 0.3 }}
        >
          {activeTab === 'overview' && <Overview property={property} />}
          {activeTab === 'virtual-tour' && <VirtualTour property={property} />}
          {activeTab === '3d-plan' && <ThreeDPlan property={property} />}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default ApartmentDetailNav;