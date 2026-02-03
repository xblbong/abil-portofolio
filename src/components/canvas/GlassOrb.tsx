"use client";
import { Canvas } from "@react-three/fiber";
import { Float, MeshTransmissionMaterial, OrbitControls } from "@react-three/drei";

export default function GlassOrb() {
  return (
    <div className="h-full w-full min-h-[400px]">
      <Canvas camera={{ position: [0, 0, 5] }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <Float speed={5} rotationIntensity={2} floatIntensity={2}>
          <mesh scale={1.5}>
            <torusKnotGeometry args={[1, 0.3, 128, 32]} />
            <MeshTransmissionMaterial
              backside
              samples={4}
              thickness={1}
              chromaticAberration={0.05}
              anisotropy={0.1}
              distortion={0.5}
              color="#a855f7"
            />
          </mesh>
        </Float>
        <OrbitControls enableZoom={false} />
      </Canvas>
    </div>
  );
}