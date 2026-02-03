"use client";
import React, { Suspense } from "react";
import Spline from "@splinetool/react-spline";

export default function WindmillCanvas() {
  return (
    <div className="w-full h-[300px] md:h-[400px] flex items-center justify-center overflow-hidden scale-75 md:scale-100">
      <Suspense fallback={<div className="text-white/20 animate-pulse uppercase text-[10px] tracking-widest">Loading 3D...</div>}>
        <Spline 
          scene="https://prod.spline.design/vGAv3DYhtomiDrBS/scene.splinecode" 
          className="w-full h-full"
        />
      </Suspense>
    </div>
  );
}