import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

interface ParticleCloudProps {
  count?: number;
  size?: number;
  radius?: number;
}

function ParticleCloud({ count = 3000, size = 0.015, radius = 5 }: ParticleCloudProps): JSX.Element {
  const pointsRef = useRef<THREE.Points>(null);

  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      const r = radius * (0.5 + Math.random() * 0.5);
      arr[i * 3]     = r * Math.sin(phi) * Math.cos(theta);
      arr[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      arr[i * 3 + 2] = r * Math.cos(phi);
    }
    return arr;
  }, [count, radius]);

  useFrame((state) => {
    if (!pointsRef.current) return;
    const t = state.clock.getElapsedTime();
    pointsRef.current.rotation.y = t * 0.05;
    pointsRef.current.rotation.x = Math.sin(t * 0.1) * 0.1;
  });

  return (
    <Points ref={pointsRef} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#22d3ee"
        size={size}
        sizeAttenuation
        depthWrite={false}
        opacity={0.8}
      />
    </Points>
  );
}

function FloatingGeometry(): JSX.Element {
  const meshRef  = useRef<THREE.Mesh>(null);
  const mesh2Ref = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (meshRef.current) {
      meshRef.current.rotation.x = t * 0.15;
      meshRef.current.rotation.y = t * 0.2;
      meshRef.current.position.y = Math.sin(t * 0.5) * 0.3;
    }
    if (mesh2Ref.current) {
      mesh2Ref.current.rotation.x = -t * 0.1;
      mesh2Ref.current.rotation.z =  t * 0.15;
      mesh2Ref.current.position.y = Math.cos(t * 0.4) * 0.4;
    }
  });

  return (
    <>
      <mesh ref={meshRef} position={[2, 0, 0]}>
        <icosahedronGeometry args={[0.8, 1]} />
        <meshStandardMaterial color="#22d3ee" wireframe transparent opacity={0.3} />
      </mesh>
      <mesh ref={mesh2Ref} position={[-2.2, 0.5, -1]}>
        <octahedronGeometry args={[0.6, 0]} />
        <meshStandardMaterial color="#3b82f6" wireframe transparent opacity={0.25} />
      </mesh>
    </>
  );
}

/** Single full-page canvas that sits fixed behind all content */
export default function ParticleField(): JSX.Element {
  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 60 }}
      dpr={[1, 1.5]}
      gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
      style={{ position: 'fixed', inset: 0, width: '100%', height: '100%' }}
    >
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]}   intensity={1}   color="#22d3ee" />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#3b82f6" />
      <ParticleCloud count={2500} />
      <FloatingGeometry />
    </Canvas>
  );
}
