"use client";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Fix for missing marker icons in React Leaflet
const icon = L.icon({
  iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
  iconRetinaUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png",
  shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
});

export default function Map({ projects }) {
  // Kenya Coordinates
  const center = [-1.2921, 36.8219]; 

  return (
    <div className="h-[600px] w-full rounded-sm overflow-hidden shadow-xl border border-olive/20 relative z-0">
      <MapContainer 
        center={center} 
        zoom={6} 
        scrollWheelZoom={false} 
        style={{ height: "100%", width: "100%" }}
      >
        {/* The Map Tiles (Skin) - Using a nice clean OpenStreetMap */}
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {/* Dynamic Markers from Sanity Data */}
        {projects.map((project) => (
            project.geo ? (
                <Marker 
                    key={project._id} 
                    position={[project.geo.lat, project.geo.lng]} 
                    icon={icon}
                >
                    <Popup>
                        <div className="font-sans text-moss">
                            <strong className="block text-sm font-bold uppercase mb-1">{project.title}</strong>
                            <span className="text-xs text-cedar block">{project.location}</span>
                            <span className="text-xs font-bold text-olive block mt-2">
                                {project.treesPlanted} Trees Planted
                            </span>
                        </div>
                    </Popup>
                </Marker>
            ) : null
        ))}

      </MapContainer>
    </div>
  );
}
