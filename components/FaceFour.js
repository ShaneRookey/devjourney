import { useGLTF } from "@react-three/drei";
import Grass from "./Grass";
import Bags from "./facefour_components/Bags";
import Hanger from "./facefour_components/Hanger";
import Houses from "./facefour_components/Houses";

export function FaceFour(props) {
    const { nodes, materials } = useGLTF("/face4.glb");
    return (
        <group {...props} dispose={null}>
            <group  scale={2}>
                <Bags nodes={nodes} materials={materials}/> 
                <Hanger nodes={nodes} materials={materials} />
                <Houses nodes={nodes} materials={materials}/>
            </group>
            <Grass />
        </group>
);
}

useGLTF.preload("/face4.glb");
