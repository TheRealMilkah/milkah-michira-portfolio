import { Canvas, useFrame } from '@react-three/fiber';
import { Environment, Float, MeshTransmissionMaterial, Sparkles } from '@react-three/drei';
import { Suspense, useRef } from 'react';
import * as THREE from 'three';

function Sculpture() {
  const mesh = useRef<THREE.Mesh>(null);
  useFrame((state, delta) => {
    if (!mesh.current) return;
    mesh.current.rotation.y += delta * 0.13;
    mesh.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.22) * 0.12;
  });
  return (
    <Float speed={1.1} rotationIntensity={0.22} floatIntensity={0.45}>
      <mesh ref={mesh} scale={1.12}>
        <torusKnotGeometry args={[0.82, 0.25, 220, 32, 2, 5]} />
        <MeshTransmissionMaterial backside samples={8} thickness={0.7} roughness={0.16} transmission={0.92} ior={1.28} chromaticAberration={0.035} anisotropy={0.25} color="#d9c7b0" />
      </mesh>
    </Float>
  );
}

export default function OrbScene() {
  return (
    <div className="orb-scene" aria-label="An animated translucent 3D sculpture" role="img">
      <Canvas camera={{ position: [0, 0, 4.2], fov: 42 }} dpr={[1, 1.6]} gl={{ alpha: true, antialias: true }}>
        <ambientLight intensity={1.5} />
        <directionalLight position={[3, 4, 3]} intensity={2.3} />
        <pointLight position={[-3, -2, 2]} intensity={1.5} color="#c7b5df" />
        <Suspense fallback={null}>
          <Sculpture />
          <Sparkles count={34} scale={4.4} size={1.6} speed={0.18} opacity={0.35} color="#b69a76" />
          <Environment preset="studio" />
        </Suspense>
      </Canvas>
      <span className="orb-caption">A LITTLE STRUCTURE. A LOT OF POSSIBILITY.</span>
    </div>
  );
}
