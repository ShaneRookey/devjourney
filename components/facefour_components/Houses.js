import { Outlines, Text } from "@react-three/drei";
import { useState } from "react";

function Houses(props) {
    const [hover, setHover] = useState(false);

    return ( 
        <group onPointerOver={() => setHover(true)} onPointerOut={()=>setHover(false)}>
            <mesh
                castShadow
                receiveShadow
                geometry={props.nodes.house_002.geometry}
                material={props.materials["Material.018"]}
                position={[-0.282, 0.25, 0.497]}
                rotation={[Math.PI / 2, -Math.PI / 3, Math.PI]}
                scale={-0.055}
            >            
                {hover ? <Outlines angle={0}/> : undefined}
            </mesh>
            <mesh
                castShadow
                receiveShadow
                geometry={props.nodes.house_003.geometry}
                material={props.materials["Material.019"]}
                position={[0.274, 0.225, 0.498]}
                rotation={[-Math.PI / 2, -0.96, Math.PI]}
                scale={0.06}
            >            
                {hover ? <Outlines angle={0}/> : undefined}
            </mesh>
            {hover ? <Text position={[0,0.5,0.85]} rotation={[1,0,0]} scale={0.25} color={'white'}>Home</Text> : undefined}
        </group>
    );
}

export default Houses;