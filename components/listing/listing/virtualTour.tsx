"use client"
import React, { useState, useRef, useEffect } from 'react';
import { 
  ArrowLeft, 
  ArrowRight, 
  RotateCcw, 
  RotateCw, 
  ZoomIn, 
  ZoomOut, 
  Eye, 
  Minimize, 
  Maximize 
} from 'lucide-react';

interface VirtualTourProps {
  property: {
    name: string;
    floorPlanImage?: string;
    threeDplan?: string;
  };
}

const VirtualTour: React.FC<VirtualTourProps> = ({ property }) => {
  const [currentView, setCurrentView] = useState(0);
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [zoom, setZoom] = useState(1);
  
  // Placeholder views - you'll replace these with actual 3D tour images/scenes
  const views = [
    { 
      image: property.floorPlanImage || "/api/placeholder/800/600", 
      description: "Living Room" 
    },
    { 
      image: property.floorPlanImage || "/api/placeholder/800/600", 
      description: "Kitchen" 
    },
    { 
      image: property.floorPlanImage || "/api/placeholder/800/600", 
      description: "Master Bedroom" 
    }
  ];

  const handleNextView = () => {
    setCurrentView((prev) => (prev + 1) % views.length);
  };

  const handlePrevView = () => {
    setCurrentView((prev) => (prev - 1 + views.length) % views.length);
  };

  const handleZoomIn = () => {
    setZoom(Math.min(zoom * 1.2, 3));
  };

  const handleZoomOut = () => {
    setZoom(Math.max(zoom / 1.2, 1));
  };

  const handleFullScreen = () => {
    setIsFullScreen(!isFullScreen);
  };

  return (
    <div 
      className={`bg-black text-white relative transition-all duration-300 ${
        isFullScreen 
          ? 'fixed inset-0 z-50 w-full h-full' 
          : 'w-full rounded-lg overflow-hidden'
      }`}
    >
      <div className="absolute top-4 left-4 z-10">
        <h2 className="text-2xl font-bold">{property.name} - Virtual Tour</h2>
        <p className="text-gray-300">{views[currentView].description}</p>
      </div>

      <div 
        className="relative w-full h-[500px] overflow-hidden"
        style={{
          transform: `scale(${zoom})`,
          transition: 'transform 0.3s ease'
        }}
      >
        <img 
          src={views[currentView].image} 
          alt={`Virtual tour view of ${views[currentView].description}`}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-4 bg-black/50 p-3 rounded-full">
        <button 
          onClick={handlePrevView} 
          className="hover:bg-white/20 p-2 rounded-full transition"
        >
          <ArrowLeft />
        </button>
        <button 
          onClick={handleZoomOut} 
          className="hover:bg-white/20 p-2 rounded-full transition"
        >
          <ZoomOut />
        </button>
        <button 
          onClick={handleZoomIn} 
          className="hover:bg-white/20 p-2 rounded-full transition"
        >
          <ZoomIn />
        </button>
        <button 
          onClick={handleNextView} 
          className="hover:bg-white/20 p-2 rounded-full transition"
        >
          <ArrowRight />
        </button>
        <button 
          onClick={handleFullScreen} 
          className="hover:bg-white/20 p-2 rounded-full transition"
        >
          {isFullScreen ? <Minimize /> : <Maximize />}
        </button>
      </div>
    </div>
  );
};

export default VirtualTour;