import { Outlines } from "@react-three/drei";
import { useState } from "react";

function Hanger(props) {
    const [hover, setHover] = useState(false);

    return ( 
        <group onPointerOver={() => setHover(true)} onPointerOut={()=>setHover(false)}>
            <mesh
                castShadow
                receiveShadow
                geometry={props.nodes.holder_001.geometry}
                material={props.materials["Material.023"]}
                position={[-0.309, -0.215, 0.497]}
                rotation={[Math.PI / 2, 0, 0]}
                scale={0.073}
            >
                {hover ? <Outlines thickness={0.01}/> : undefined}
            </mesh>
        </group>
    );
}

export default Hanger;