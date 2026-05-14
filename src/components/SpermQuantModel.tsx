"use client";

import { RoundedBox, Text, Float } from "@react-three/drei";

// Dimensions: 410mm × 300mm × 214mm → scale to ~4.1 × 3 × 2.14 units
const W = 3.0; // width (300mm)
const H = 2.14; // height (214mm)
const L = 4.1; // length (410mm)

interface DeviceProps {
  exploded?: boolean;
  showLabels?: boolean;
  showInternals?: boolean;
}

function Casing({ exploded }: { exploded: boolean }) {
  const offset = exploded ? 0.6 : 0;
  return (
    <group position={[0, offset, 0]}>
      {/* Main body */}
      <RoundedBox args={[L, H, W]} radius={0.12} smoothness={4}>
        <meshStandardMaterial
          color="#f1f0ee"
          roughness={0.35}
          metalness={0.1}
          transparent
          opacity={exploded ? 0.15 : 0.85}
        />
      </RoundedBox>
      {/* Bottom accent strip */}
      <mesh position={[0, -H / 2 + 0.05, 0]}>
        <boxGeometry args={[L - 0.02, 0.1, W - 0.02]} />
        <meshStandardMaterial color="#d3d1c7" roughness={0.4} metalness={0.1} />
      </mesh>
    </group>
  );
}

function Touchscreen({ exploded }: { exploded: boolean }) {
  const offset = exploded ? 1.5 : 0;
  return (
    <group position={[0, H / 2 - 0.06 + offset, 0]}>
      {/* Bezel */}
      <RoundedBox args={[L - 0.1, 0.08, W - 0.1]} radius={0.04} smoothness={4}>
        <meshStandardMaterial color="#3d3d3a" roughness={0.6} metalness={0.15} />
      </RoundedBox>
      {/* Screen */}
      <mesh position={[0, 0.045, 0]}>
        <boxGeometry args={[L - 0.4, 0.01, W - 0.4]} />
        <meshStandardMaterial
          color="#1a1a2e"
          roughness={0.1}
          metalness={0.3}
          emissive="#1a1a3e"
          emissiveIntensity={0.15}
        />
      </mesh>
      {/* Screen glow line */}
      <mesh position={[0, 0.052, 0]}>
        <boxGeometry args={[L - 1.5, 0.002, 0.02]} />
        <meshStandardMaterial
          color="#5dcaa5"
          emissive="#5dcaa5"
          emissiveIntensity={0.8}
        />
      </mesh>
    </group>
  );
}

function CartridgeSlot({ exploded }: { exploded: boolean }) {
  const offset = exploded ? -1.2 : 0;
  return (
    <group position={[-L / 2 + 0.15, -0.2 + offset, 0]}>
      {/* Slot opening */}
      <RoundedBox args={[0.08, 0.5, 1.2]} radius={0.02} smoothness={2}>
        <meshStandardMaterial color="#ffffff" roughness={0.3} metalness={0.05} />
      </RoundedBox>
      {/* Cartridge */}
      <RoundedBox
        args={[0.06, 0.45, 1.0]}
        radius={0.02}
        smoothness={2}
        position={[-0.15, 0, 0]}
      >
        <meshStandardMaterial color="#f8f7f5" roughness={0.25} metalness={0.05} />
      </RoundedBox>
      {/* Sample wells */}
      <mesh position={[-0.16, 0.1, 0]}>
        <boxGeometry args={[0.04, 0.12, 0.12]} />
        <meshStandardMaterial color="#f1f0ee" roughness={0.3} />
      </mesh>
      <mesh position={[-0.16, -0.15, 0]}>
        <boxGeometry args={[0.04, 0.12, 0.12]} />
        <meshStandardMaterial color="#f1f0ee" roughness={0.3} />
      </mesh>
    </group>
  );
}

function ComputeZone({ exploded }: { exploded: boolean }) {
  const offset = exploded ? -0.8 : 0;
  return (
    <group position={[0.8, offset * 0.5, -0.5]}>
      {/* Jetson module */}
      <RoundedBox args={[1.2, 0.25, 0.9]} radius={0.03} smoothness={2}>
        <meshStandardMaterial
          color="#85B7EB"
          roughness={0.4}
          metalness={0.1}
          transparent
          opacity={0.7}
        />
      </RoundedBox>
      {/* Heatsink fins */}
      {Array.from({ length: 8 }).map((_, i) => (
        <mesh key={i} position={[-0.45 + i * 0.13, 0.18, 0]}>
          <boxGeometry args={[0.04, 0.12, 0.7]} />
          <meshStandardMaterial
            color="#a8c8e8"
            roughness={0.5}
            metalness={0.3}
          />
        </mesh>
      ))}
      {/* Fan */}
      <mesh position={[0.8, 0, 0]}>
        <cylinderGeometry args={[0.22, 0.22, 0.15, 16]} />
        <meshStandardMaterial
          color="#b5d4f4"
          roughness={0.4}
          metalness={0.2}
          transparent
          opacity={0.6}
        />
      </mesh>
      {/* SSD */}
      <mesh position={[0, -0.2, 0.2]}>
        <boxGeometry args={[0.8, 0.04, 0.22]} />
        <meshStandardMaterial color="#2c6090" roughness={0.3} metalness={0.3} />
      </mesh>
    </group>
  );
}

function WirelessZone({ exploded }: { exploded: boolean }) {
  const offset = exploded ? -0.8 : 0;
  return (
    <group position={[0.8, offset * 0.3, 0.8]}>
      {/* Wi-Fi module */}
      <RoundedBox args={[0.6, 0.1, 0.35]} radius={0.02} smoothness={2}>
        <meshStandardMaterial
          color="#97C459"
          roughness={0.4}
          metalness={0.1}
          transparent
          opacity={0.7}
        />
      </RoundedBox>
      {/* Antenna */}
      <mesh position={[0.4, 0, 0]}>
        <boxGeometry args={[0.3, 0.08, 0.25]} />
        <meshStandardMaterial
          color="#b8dc82"
          roughness={0.4}
          transparent
          opacity={0.6}
        />
      </mesh>
    </group>
  );
}

function OpticalZone({ exploded }: { exploded: boolean }) {
  const offset = exploded ? -0.8 : 0;
  return (
    <group position={[-0.6, offset * 0.4, 0.2]}>
      {/* Optical body */}
      <RoundedBox args={[1.8, 1.2, 1.6]} radius={0.04} smoothness={2}>
        <meshStandardMaterial
          color="#FAC775"
          roughness={0.4}
          metalness={0.05}
          transparent
          opacity={0.3}
        />
      </RoundedBox>
      {/* Objective lens 10x */}
      <mesh position={[-0.3, 0.25, 0]}>
        <cylinderGeometry args={[0.1, 0.08, 0.5, 12]} />
        <meshStandardMaterial
          color="#2c2c2a"
          roughness={0.2}
          metalness={0.4}
        />
      </mesh>
      {/* Objective lens 40x */}
      <mesh position={[0.3, 0.25, 0]}>
        <cylinderGeometry args={[0.1, 0.08, 0.6, 12]} />
        <meshStandardMaterial
          color="#2c2c2a"
          roughness={0.2}
          metalness={0.4}
        />
      </mesh>
      {/* Camera bodies (top) */}
      <mesh position={[-0.3, 0.6, 0]}>
        <boxGeometry args={[0.25, 0.2, 0.25]} />
        <meshStandardMaterial color="#3d3d3a" roughness={0.3} metalness={0.3} />
      </mesh>
      <mesh position={[0.3, 0.6, 0]}>
        <boxGeometry args={[0.25, 0.2, 0.25]} />
        <meshStandardMaterial color="#3d3d3a" roughness={0.3} metalness={0.3} />
      </mesh>
      {/* LED illuminator (bottom) */}
      <mesh position={[0, -0.5, 0]}>
        <boxGeometry args={[1.2, 0.12, 0.8]} />
        <meshStandardMaterial
          color="#fce8c0"
          roughness={0.3}
          emissive="#fac775"
          emissiveIntensity={0.15}
        />
      </mesh>
      {/* Condenser */}
      <mesh position={[0, -0.35, 0]}>
        <cylinderGeometry args={[0.18, 0.25, 0.15, 16]} />
        <meshStandardMaterial color="#444441" roughness={0.2} metalness={0.5} />
      </mesh>
    </group>
  );
}

function PowerZone({ exploded }: { exploded: boolean }) {
  const offset = exploded ? -0.8 : 0;
  return (
    <group position={[1.2, offset * 0.6, 0.2]}>
      {/* PSU module */}
      <RoundedBox args={[0.7, 0.4, 0.5]} radius={0.03} smoothness={2}>
        <meshStandardMaterial
          color="#F09595"
          roughness={0.4}
          metalness={0.05}
          transparent
          opacity={0.6}
        />
      </RoundedBox>
      {/* Battery pack */}
      <mesh position={[-0.05, -0.05, 0]}>
        <boxGeometry args={[0.5, 0.25, 0.35]} />
        <meshStandardMaterial color="#e07575" roughness={0.4} metalness={0.1} />
      </mesh>
    </group>
  );
}

function RearIO({ exploded }: { exploded: boolean }) {
  const offset = exploded ? 1.2 : 0;
  return (
    <group position={[L / 2 - 0.08 + offset, -0.1, 0]}>
      {/* IO panel */}
      <mesh>
        <boxGeometry args={[0.06, 0.5, 1.2]} />
        <meshStandardMaterial color="#3d3d3a" roughness={0.5} metalness={0.15} />
      </mesh>
      {/* USB-C port */}
      <mesh position={[0.04, 0.1, -0.25]}>
        <boxGeometry args={[0.02, 0.06, 0.14]} />
        <meshStandardMaterial color="#1a1a2e" roughness={0.3} />
      </mesh>
      {/* USB-A port */}
      <mesh position={[0.04, 0.1, 0.05]}>
        <boxGeometry args={[0.02, 0.08, 0.16]} />
        <meshStandardMaterial color="#1a1a2e" roughness={0.3} />
      </mesh>
      {/* Power port */}
      <mesh position={[0.04, 0.1, 0.3]}>
        <boxGeometry args={[0.02, 0.06, 0.14]} />
        <meshStandardMaterial color="#1a1a2e" roughness={0.3} />
      </mesh>
    </group>
  );
}

function Labels3D() {
  const labelStyle = {
    fontSize: 0.12,
    color: "#185fa5",
    anchorX: "center" as const,
    anchorY: "middle" as const,
    font: undefined,
  };

  return (
    <group>
      <Float speed={1} rotationIntensity={0} floatIntensity={0.3}>
        <Text position={[0, 1.8, 0]} {...labelStyle}>
          Touchscreen 10.1&quot;
        </Text>
        <mesh position={[0, 1.55, 0]}>
          <sphereGeometry args={[0.03, 8, 8]} />
          <meshStandardMaterial color="#185fa5" />
        </mesh>
      </Float>

      <Float speed={1} rotationIntensity={0} floatIntensity={0.3}>
        <Text position={[-2.8, -0.2, 0]} {...labelStyle}>
          Cartridge
        </Text>
        <mesh position={[-2.55, -0.2, 0]}>
          <sphereGeometry args={[0.03, 8, 8]} />
          <meshStandardMaterial color="#BA7517" />
        </mesh>
      </Float>

      <Float speed={1} rotationIntensity={0} floatIntensity={0.3}>
        <Text position={[0.8, -1.6, -0.5]} {...labelStyle} color="#0C447C">
          Compute Edge
        </Text>
      </Float>

      <Float speed={1} rotationIntensity={0} floatIntensity={0.3}>
        <Text position={[0.8, -1.6, 0.8]} {...labelStyle} color="#27500A">
          Wi-Fi 6E
        </Text>
      </Float>

      <Float speed={1} rotationIntensity={0} floatIntensity={0.3}>
        <Text position={[-0.6, -1.6, 0.2]} {...labelStyle} color="#854F0B">
          Optical Microscope
        </Text>
      </Float>

      <Float speed={1} rotationIntensity={0} floatIntensity={0.3}>
        <Text position={[1.2, -1.6, 0.2]} {...labelStyle} color="#A32D2D">
          Power Supply
        </Text>
      </Float>

      <Float speed={1} rotationIntensity={0} floatIntensity={0.3}>
        <Text position={[2.8, -0.1, 0]} {...labelStyle} color="#3d3d3a">
          Rear I/O
        </Text>
      </Float>
    </group>
  );
}

export default function SpermQuantModel({
  exploded = false,
  showLabels = false,
  showInternals = false,
}: DeviceProps) {
  return (
    <group>
      <Casing exploded={exploded} />
      <Touchscreen exploded={exploded} />
      <CartridgeSlot exploded={exploded} />
      <RearIO exploded={exploded} />

      {(showInternals || exploded) && (
        <>
          <ComputeZone exploded={exploded} />
          <WirelessZone exploded={exploded} />
          <OpticalZone exploded={exploded} />
          <PowerZone exploded={exploded} />
        </>
      )}

      {showLabels && <Labels3D />}
    </group>
  );
}
