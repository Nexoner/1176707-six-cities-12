import { useEffect, useRef } from 'react';
import useMap from '../../hooks/useMap';
import { City, Point, Points } from '../../types/types';
import leaflet from 'leaflet';

type MapProps = {
    city: City;
    points: Points;
    selectedPoint: Point | undefined;
  };

function Map({ city, points, selectedPoint }: MapProps) {
  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  useEffect(() => {
    if (map) {
      points.forEach((point) => {
        leaflet
          .marker(
            {
              lat: point.lat,
              lng: point.lng,
            }
          )
          .addTo(map);
      });
    }
  }, [map, points, selectedPoint]);
  return <div style={{ height: '500px' }} ref={mapRef}></div>;
}

export default Map;
