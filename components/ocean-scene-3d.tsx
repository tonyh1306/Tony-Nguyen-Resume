"use client"

import { Canvas, useFrame, useThree } from "@react-three/fiber"
import { Sphere, MeshDistortMaterial, Float, Text3D, Center, OrbitControls, Points } from "@react-three/drei"
import { useRef, Suspense, useEffect, useMemo } from "react"
import type { Mesh } from "three"
import * as THREE from "three"

function AnimatedSphere() {
  const meshRef = useRef<Mesh>(null)

  useFrame((_, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.2
      meshRef.current.rotation.y += delta * 0.3
    }
  })

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <Sphere ref={meshRef} args={[1, 64, 64]} scale={1.5}>
        <MeshDistortMaterial
          color="var(--primary)"
          attach="material"
          distort={0.4}
          speed={2}
          roughness={0.2}
          metalness={0.8}
        />
      </Sphere>
      {/* Pink ring */}
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[2.8, 0.03, 16, 100]} />
        <meshStandardMaterial color="#e84393" emissive="#e84393" emissiveIntensity={0.5} />
      </mesh>
      {/* Yellow ring */}
      <mesh rotation={[Math.PI / 3, Math.PI / 4, 0]}>
        <torusGeometry args={[3.2, 0.02, 16, 100]} />
        <meshStandardMaterial color="#ffeaa7" emissive="#ffeaa7" emissiveIntensity={0.5} />
      </mesh>
    </Float>
  )
}

function FloatingText() {
  return (
    <Center position={[0, -3.5, 0]}>
      <Text3D
        font="/fonts/Inter_Bold.json"
        size={0.3}
        height={0.05}
        curveSegments={12}
      >
        DRAG TO ROTATE
        <meshStandardMaterial color="#666666" />
      </Text3D>
    </Center>
  )
}

function Particles() {
  const particlesRef = useRef<THREE.Points>(null)
  const count = 200

  const [positions, colors] = useMemo(() => {
    const positions = new Float32Array(count * 3)
    const colors = new Float32Array(count * 3)

    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 15
      positions[i * 3 + 1] = (Math.random() - 0.5) * 15
      positions[i * 3 + 2] = (Math.random() - 0.5) * 15

      // Alternate between pink and yellow
      if (Math.random() > 0.5) {
        colors[i * 3] = 0.91
        colors[i * 3 + 1] = 0.26
        colors[i * 3 + 2] = 0.58
      } else {
        colors[i * 3] = 1
        colors[i * 3 + 1] = 0.92
        colors[i * 3 + 2] = 0.65
      }
    }

    return [positions, colors]
  }, [count])

  useFrame((_, delta) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y += delta * 0.05
    }
  })

  return (
    <Points ref={particlesRef} positions={positions} colors={colors} stride={3} frustumCulled={false}>
      <pointsMaterial size={0.05} vertexColors transparent opacity={0.8} />
    </Points>
  )
}

function CustomOrbitControls() {
  const controlsRef = useRef<any>(null)
  const isDragging = useRef(false)

  useEffect(() => {
    if (controlsRef.current) {
      const controls = controlsRef.current
      controls.enableZoom = false
      controls.enablePan = false
      controls.enableDamping = true
      controls.dampingFactor = 0.05
      
      const onStart = () => { isDragging.current = true }
      const onEnd = () => { isDragging.current = false }
      
      controls.addEventListener('start', onStart)
      controls.addEventListener('end', onEnd)
    }
  }, [])

  useFrame((_, delta) => {
    if (controlsRef.current) {
      // Manual auto-rotation using delta (frame-rate independent)
      if (!isDragging.current) {
        controlsRef.current.azimuthAngle += delta * 0.3
      }
      controlsRef.current.update()
    }
  })

  return <OrbitControls ref={controlsRef} />
}

export function OceanScene3D() {
  return (
    <div className="w-full h-[500px] md:h-[600px] relative">
      <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
        <Suspense fallback={null}>
          <ambientLight intensity={0.3} />
          <pointLight position={[10, 10, 10]} intensity={1} color="#e84393" />
          <pointLight position={[-10, -10, -10]} intensity={0.5} color="#ffeaa7" />
          <spotLight position={[0, 10, 0]} intensity={0.5} />
          <AnimatedSphere />
          <Particles />
          {/* <FloatingText /> */}
          <CustomOrbitControls />
        </Suspense>
      </Canvas>
    </div>
  )
}
