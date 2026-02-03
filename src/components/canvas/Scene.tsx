"use client";
import { Float, MeshDistortMaterial, OrbitControls, Sphere } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense, useEffect, useState } from "react";

export default function Scene3D() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
  }, []);

  if (isMobile) return <div className="bg-gradient-to-b from-blue-900 to-black h-full w-full" />;

  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <Suspense fallback={null}>
        <Float speed={2} rotationIntensity={1} floatIntensity={2}>
          <Sphere args={[1, 100, 200]} scale={1.5}>
            <MeshDistortMaterial color="#4f46e5" distort={0.3} speed={3} />
          </Sphere>
        </Float>
      </Suspense>
      <OrbitControls enableZoom={false} />
    </Canvas>
  );
}