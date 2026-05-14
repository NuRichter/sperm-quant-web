"use client";

import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  Environment,
  ContactShadows,
  PerspectiveCamera,
} from "@react-three/drei";
import SpermQuantModel from "./SpermQuantModel";

interface Props {
  exploded: boolean;
  showLabels: boolean;
  showInternals: boolean;
  cameraPos: [number, number, number];
}

export default function ExplorerScene({
  exploded,
  showLabels,
  showInternals,
  cameraPos,
}: Props) {
  return (
    <Canvas dpr={[1, 2]} gl={{ antialias: true, alpha: true }}>
      <PerspectiveCamera makeDefault position={cameraPos} fov={35} />
      <ambientLight intensity={0.5} />
      <directionalLight position={[8, 10, 5]} intensity={1.2} castShadow />
      <directionalLight position={[-5, 5, -5]} intensity={0.3} />
      <pointLight position={[0, 3, 0]} intensity={0.4} />

      <Suspense fallback={null}>
        <SpermQuantModel
          exploded={exploded}
          showLabels={showLabels}
          showInternals={showInternals}
        />
        <ContactShadows
          position={[0, -1.3, 0]}
          opacity={0.12}
          scale={14}
          blur={2.5}
        />
        <Environment preset="studio" />
      </Suspense>

      <OrbitControls
        enablePan={true}
        minDistance={3}
        maxDistance={16}
        minPolarAngle={0.2}
        maxPolarAngle={Math.PI / 2}
      />
    </Canvas>
  );
}
