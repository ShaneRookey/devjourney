import { PerspectiveCamera, useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { gsap } from "gsap";
import { useLayoutEffect, useRef } from "react";

function Camera(props) {
    const camRef = useRef();
    const tl = useRef();

    const scroll = useScroll();

    useFrame(() => {
        tl.current.seek(scroll.offset * tl.current.duration());
    });

    useLayoutEffect(() => {
        tl.current = gsap.timeline();
        
        tl.current.to(
        camRef.current.position,
        {
            duration: 4,
            z: 3,
            y:2,
        },
        0
        );
    })
    
    return ( 
        <group {...props}>
            <PerspectiveCamera makeDefault ref={camRef} position={[0,0,200]} fov={70} lookAt={[0,0,0]}/>
        </group>
    );
}

export default Camera;