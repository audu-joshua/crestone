import React, { useState, useEffect } from 'react';
import Map, { Marker } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { HomeIcon } from 'lucide-react';
import { Property } from '@/utils/types';

interface MapProps {
  property: Property;
}

const PropertyMap: React.FC<MapProps> = ({ property }) => {
  const [isMapLoaded, setIsMapLoaded] = useState(false);
  const [viewState, setViewState] = useState({
    latitude: property.mapCoordinates?.lat || 0,
    longitude: property.mapCoordinates?.lng || 0,
    zoom: 12,
  });

  useEffect(() => {
    // Ensure coordinates exist before rendering
    if (property.mapCoordinates) {
      // Optional: Add a slight delay to ensure other components are loaded
      const timer = setTimeout(() => {
        setIsMapLoaded(true);
      }, 100);

      return () => clearTimeout(timer);
    }
  }, [property.mapCoordinates]);

  // Prevent rendering if coordinates are not available
  if (!property.mapCoordinates || !isMapLoaded) {
    return null;
  }

  return (
    <div className="w-full h-64 md:h-96 rounded-lg overflow-hidden">
      <Map
        key={`map-${property.id}`} // Force re-render if property changes
        initialViewState={viewState}
        onMove={evt => setViewState(evt.viewState)}
        mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN}
        mapStyle="mapbox://styles/mapbox/streets-v11"
        style={{ width: '100%', height: '100%' }}
        renderWorldCopies={false} // Reduce unnecessary rendering
        minZoom={5}
        maxZoom={15}
      >
        <Marker
          longitude={property.mapCoordinates.lng}
          latitude={property.mapCoordinates.lat}
          anchor="bottom"
        >
          <div className="p-2 bg-red-600 rounded-full">
            <HomeIcon size={20} color="white" />
          </div>
        </Marker>
      </Map>
    </div>
  );
};

export default PropertyMap;