'use client'
import Camera from '@/components/Camera'
import World from '@/components/World'
import Background from '@/components/background'
import { Environment, Float, ScrollControls, Stars, Text } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'



export default function App() {
  return (
    <main className='h-screen'>
      <Canvas dpr={[1, 1.5]} className='bg-black'>
        <ScrollControls pages={5}>
          <ambientLight />
          <Float>
            <World scale={12} position={[0, -10, -20]}/>
            <Background />
          </Float>
          <Text position={[0,0,180]} scale={1} color={'white'}>Hey, Thanks for visiting my project. Scroll to interact.</Text>
          <Camera />
          <Environment preset='sunset'/>
          <Stars />
        </ScrollControls>
      </Canvas>
    </main>
  )
}
