"use client";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, MeshDistortMaterial, Sphere } from "@react-three/drei";

export default function HeroCanvas() {
  return (
    <div className="h-[500px] w-full">
      <Canvas>
        <ambientLight intensity={1} />
        <directionalLight position={[2, 3, 1]} />
        <Sphere args={[1, 100, 200]} scale={2.5}>
          <MeshDistortMaterial color="#3d1c8d" attach="material" distort={0.5} speed={2} />
        </Sphere>
        <OrbitControls enableZoom={false} />
      </Canvas>
    </div>
  );
}