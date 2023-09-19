import { RoundedBox } from "@react-three/drei";

function Background(props) {
    return (
        <group {...props} dispose={null}>
            <RoundedBox args={[1.2,1.2,1]} castShadow receiveShadow scale={20} position={[-150,50,-200]}>
                <meshStandardMaterial color='blue' />
            </RoundedBox>
            <RoundedBox args={[0.5,0.5,0.5]} castShadow receiveShadow scale={20} position={[0,0,160]}>
                <meshStandardMaterial color='red' />
            </RoundedBox>
            <RoundedBox args={[0.5,0.5,0.5]} castShadow receiveShadow scale={10} position={[0,100,-50]}>
                <meshStandardMaterial color='yellow' />
            </RoundedBox>
            <RoundedBox args={[0.5,0.5,0.5]} castShadow receiveShadow scale={1} position={[Math.random()*2,Math.random()*2,60]}>
                <meshStandardMaterial color='green' />
            </RoundedBox>
            <RoundedBox args={[0.5,0.5,0.5]} castShadow receiveShadow scale={1} position={[Math.random()*2,Math.random()*2,59]}>
                <meshStandardMaterial color='pink' />
            </RoundedBox>
            <RoundedBox args={[0.5,0.5,0.5]} castShadow receiveShadow scale={1} position={[Math.random()*2,Math.random()*2,61]}>
                <meshStandardMaterial color='purple' />
            </RoundedBox>
        </group>
    );
}

export default Background;