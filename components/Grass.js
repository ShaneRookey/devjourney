import { Instance, Instances, useGLTF } from "@react-three/drei";
import { useLayoutEffect, useRef } from "react";

function Grass({props, count = 1000}) {
    const { nodes, materials } = useGLTF("/grass.glb");
    
    return (
        <group {...props} dispose={null}>
            <Instances material={materials["Material.004"]} geometry={nodes.NurbsPath001.geometry}>
                <group position={[0,0,1]}>
                    {Array.from({length: count}).map((data,i) => {
                        return <Blade key={i} />
                    })}
                </group>
            </Instances>
        </group>
    );
}

function Blade() {
    const ref = useRef();
    useLayoutEffect(() => {
        ref.current.position.x = Math.random() - Math.random();
        ref.current.position.y = Math.random() - Math.random();
        ref.current.position.z = 0;
        ref.current.rotation.x = -(3*Math.PI/2);
    })

    return (
        <group>
            <Instance ref={ref} scale={Math.random()/2}/>
        </group>
    )
}

useGLTF.preload("/grass.glb");

export default Grass;