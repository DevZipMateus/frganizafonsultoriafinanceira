
import React, { useEffect, useRef } from 'react';

const Map = () => {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Only run this code on the client-side
    if (typeof window !== 'undefined' && mapRef.current) {
      // Initialize Google Maps embed
      const iframe = document.createElement('iframe');
      iframe.style.width = '100%';
      iframe.style.height = '100%';
      iframe.style.border = '0';
      iframe.style.borderRadius = '8px';
      iframe.setAttribute('allowfullscreen', '');
      iframe.setAttribute('loading', 'lazy');
      iframe.setAttribute('referrerpolicy', 'no-referrer-when-downgrade');
      
      // Set the Google Maps embed URL with the exact coordinates from the user's link
      iframe.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3840.736981173577!2d-44.53060432563712!3d-15.748731723478826!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x75598302f92e77%3A0xd09f44442a2e825a!2sAv.%20Brasiliano%20Br%C3%A1s%2C%20778%20-%20Centro%2C%20S%C3%A3o%20Francisco%20-%20MG%2C%2039300-000!5e0!3m2!1spt-BR!2sbr!4v1715869878091!5m2!1spt-BR!2sbr";
      
      // Append to the map container
      if (mapRef.current.childElementCount === 0) {
        mapRef.current.appendChild(iframe);
      }
    }
  }, []);

  return <div ref={mapRef} className="h-full w-full"></div>;
};

export default Map;
