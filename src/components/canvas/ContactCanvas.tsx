"use client";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Sphere, PerspectiveCamera } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";
import Spline from "@splinetool/react-spline";

function ContactSphere() {
  const meshRef = useRef<THREE.Mesh>(null!);

  useFrame((state) => {
    const { clock } = state;
    meshRef.current.rotation.y = clock.getElapsedTime() * 0.5;
  });

  return (
    <Float speed={5} rotationIntensity={2} floatIntensity={2}>
      <Sphere ref={meshRef} args={[1, 100, 100]} scale={2.4}>
        <MeshDistortMaterial
          color="#a855f7"
          distort={0.4}
          speed={4}
          roughness={0}
          metalness={1}
        />
      </Sphere>
    </Float>
  );
}

export default function ContactCanvas() {
    return (
      <div className="h-[100px] md:h-[300px] w-full">
        <main>
        <Spline
        className="w-72 h-72 md:w-[500px] md:h-[500px] mx-auto"

        scene="https://prod.spline.design/CcC9cl778BBWiIlx/scene.splinecode" 
        />
      </main>
      <Canvas>
        <ContactSphere />
      </Canvas>
    </div>
  );
}
