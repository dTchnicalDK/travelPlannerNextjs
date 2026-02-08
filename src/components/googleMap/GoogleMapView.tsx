"use client";
import React from "react";
import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";

import { TripWithLocationsNonNull } from "@/types/tripsTypes";

const containerStyle = {
  width: "100%",
  height: "400px",
};

type googleMapLocatinProps = {
  tripLocations: TripWithLocationsNonNull;
};

const GoogleMapView = ({ tripLocations }: googleMapLocatinProps) => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY! || "",
  });
  if (!isLoaded) {
    return <div>Loading map...</div>;
  }
  if (loadError) {
    return <div>Error Loading map!</div>;
  }
  const center =
    tripLocations.locations.length > 0
      ? {
          lat: tripLocations?.locations[0].lat,
          lng: tripLocations?.locations[0].lng,
        }
      : { lat: 0, lng: 0 };
  console.log("locations", tripLocations);
  return (
    <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10}>
      {tripLocations.locations.map((location, key) => (
        <Marker
          position={{ lat: location.lat, lng: location.lng }}
          title={location.locationTitle}
          key={key}
        />
      ))}
    </GoogleMap>
  );
};

export default GoogleMapView;
