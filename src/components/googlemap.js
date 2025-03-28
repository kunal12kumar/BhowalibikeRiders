import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const containerStyle = {
  width: "full",
  height: "400px", // Adjust the height as needed
};

const center = {
  lat: 29.386259802240843, // Replace with your office latitude  29.386259802240843, 79.51407294083182
  lng: 79.51407294083182, // Replace with your office longitude
};

const GoogleMapComponent = () => {


  // function to convert the office address to the the lat and lng

  const getDirections = () => {
    window.open(
      `https://www.google.com/maps/dir/?api=1&destination=${center.lat},${center.lng}`,
      "_blank"
    );
  };





  return (
    <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}>
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={15}>
        {/* Marker to indicate your office location */}
        <Marker position={center} />
      </GoogleMap>

      <button
        className="mt-3 cursor-pointer sm:hover:scale-110 px-4 py-2 bg-blue-500 text-white rounded"
        onClick={getDirections}
      >
        Get Directions
      </button>

    </LoadScript>
  );
};

export default GoogleMapComponent;
