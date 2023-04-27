import { useRef, useState } from 'react'
import { Canvas, extend, useFrame } from '@react-three/fiber'
import { useGLTF, SoftShadows, PerformanceMonitor, Html } from '@react-three/drei'
import { easing, geometry } from 'maath'
import GracesModel from './GracesModel'
import './Graces.css'

export default function Graces(){
    const [enabled, setEnabled] = useState(true)
    return(
        <Canvas shadows="basic" eventPrefix="client" camera={{position: [0, 1.5, 14], fov: 45}} style={{height: "100vh", width: "100vw"}}>
            <fog attach="fog" args={['black', 0, 20]}></fog>
            <color attach="background" args={["#1a1b27"]}/>
            <pointLight position={[10, -5, -5]} intensity={30} />
            <pointLight position={[-10, -10, -20]} intensity={10} />
            <GracesModel position={[0, -5.5, 3]} rotation={[0, -0.2, 0]} />
            {enabled && <SoftShadows />}
            <PerformanceMonitor onDecline={()=> setEnabled(false)} />
        </Canvas>
    )
}