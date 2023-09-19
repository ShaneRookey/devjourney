'use client'
import { PresentationControls, RoundedBox, useScroll } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { gsap } from 'gsap'
import { useLayoutEffect, useRef } from 'react'
import { FaceFour } from './FaceFour'
import { FaceOne } from './FaceOne'
import { FaceThree } from './FaceThree'
import { FaceTwo } from './FaceTwo'

export default function World(props) {
    const meshRef = useRef()
    const tl = useRef();

    const scroll = useScroll();

    useFrame(() => {
        tl.current.seek(scroll.offset * tl.current.duration());
    });

    useLayoutEffect(() => {
        tl.current = gsap.timeline();

        // VERTICAL ANIMATION
        tl.current.to(
            meshRef.current.rotation,
            {
                duration:1,
            },
            0
        )
        tl.current.to(
        meshRef.current.rotation,
        {
            duration: 4,
            x: (3*Math.PI/2) +0.5,
        },
        "<1"
        );
    })
    
    return (
        <PresentationControls
            config={{ mass: 2, tension: 500 }}
            snap={{ mass: 4, tension: 1500 }}
            polar={[-Math.PI / 3, Math.PI / 3]}
            azimuth={[-Math.PI / 1.4, Math.PI / 2]}
        >
            <group {...props} dispose={null} ref={meshRef}>
                <group>
                    <FaceOne />
                </group>
                <group>
                    <FaceTwo />
                </group>
                <group>
                    <FaceThree />
                </group>
                <group>
                    <FaceFour />
                </group>
                <group>
                    <RoundedBox args={[1.2,1.2,1]} castShadow receiveShadow scale={2}>
                        <meshStandardMaterial color='green' />
                    </RoundedBox>
                </group>
            </group>
        </PresentationControls>
    )
}