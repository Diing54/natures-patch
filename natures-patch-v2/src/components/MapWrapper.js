"use client"; // <--- This magic line makes ssr: false allowed

import dynamic from 'next/dynamic';

// Dynamically import the actual Map component
const Map = dynamic(() => import('./Map'), {
  ssr: false,
  loading: () => (
    <div className="h-[600px] w-full bg-cedar/10 flex items-center justify-center text-moss font-bold animate-pulse">
      Loading Map Data...
    </div>
  )
});

export default function MapWrapper({ projects }) {
  return <Map projects={projects} />;
}
