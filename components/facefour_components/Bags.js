import { Outlines } from "@react-three/drei";
import { useState } from "react";

function Bags(props) {
    const [hover, setHover] = useState(false);

    return ( 
        <group onPointerOver={() => setHover(true)} onPointerOut={()=>setHover(false)}>
            <mesh
                castShadow
                receiveShadow
                geometry={props.nodes.bag_001.geometry}
                material={props.materials["Material.022"]}
                position={[0.325, -0.308, 0.5]}
                rotation={[Math.PI / 2, 0, 0]}
                scale={0.12}
            >
                {hover ? <Outlines thickness={0.01}/> : undefined}
            </mesh>
            <group
                position={[0.276, -0.183, 0.497]}
                rotation={[Math.PI / 2, 0, 0]}
                scale={0.071}
            >
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={props.nodes.Mesh2136.geometry}
                        material={props.materials["Material.020"]}
                    >
                        {hover ? <Outlines thickness={0.01}/> : undefined}
                    </mesh>
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={props.nodes.Mesh2136_1.geometry}
                        material={props.materials["Material.021"]}
                    >
                        {hover ? <Outlines thickness={0.01}/> : undefined}
                </mesh>
                </group>
        </group>
    );
}

export default Bags;