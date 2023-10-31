import { useState, Suspense } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { Canvas } from '@react-three/fiber'
import { Environment, OrbitControls } from '@react-three/drei'
import Earth from '../public/Earth'
import Info from './components/Info'
import Footer from './components/Footer'

function App() {

  return (
    <>
      <Canvas>
        <ambientLight intensity={1}/>
        <OrbitControls enableZoom={false}/>
        <Suspense callback={null}>
          <Earth />
        </Suspense>
        <Environment preset='city' />
      </Canvas>
      <Info h1="Earth"/>
      <Footer />
    </>
  )
}

export default App
