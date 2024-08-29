import React, { useRef, useEffect } from 'react';
import { useGLTF, useAnimations } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { Vector3 } from 'three';

export function Lola(props) {
    const group = useRef();
    const { nodes, materials, animations } = useGLTF('/lola.glb');
    const { actions } = useAnimations(animations, group);

    useEffect(() => {
        actions['Idle'].play();
    }, [actions]);

    const target = new Vector3(-2, -0.8, 2);

    useFrame(() => {
        if (group.current) {
            group.current.lookAt(target);
        }
    });

    return (
        <group ref={group} {...props} dispose={null}>
            <group name="Scene">
                <group name="Armature" rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
                    <group name="Lola_New_Body">
                        <skinnedMesh
                            name="Mesh"
                            geometry={nodes.Mesh.geometry}
                            material={materials.Body}
                            skeleton={nodes.Mesh.skeleton}
                            castShadow
                            receiveShadow
                        />
                        <skinnedMesh
                            name="Mesh_1"
                            geometry={nodes.Mesh_1.geometry}
                            material={materials.Face}
                            skeleton={nodes.Mesh_1.skeleton}
                            castShadow
                            receiveShadow
                        />
                        <skinnedMesh
                            name="Mesh_2"
                            geometry={nodes.Mesh_2.geometry}
                            material={materials.Hand}
                            skeleton={nodes.Mesh_2.skeleton}
                            castShadow
                            receiveShadow
                        />
                        <skinnedMesh
                            name="Mesh_3"
                            geometry={nodes.Mesh_3.geometry}
                            material={materials.Material__24}
                            skeleton={nodes.Mesh_3.skeleton}
                            castShadow
                            receiveShadow
                        />
                        <skinnedMesh
                            name="Mesh_4"
                            geometry={nodes.Mesh_4.geometry}
                            material={materials.Material__104}
                            skeleton={nodes.Mesh_4.skeleton}
                            castShadow
                            receiveShadow
                        />
                        <skinnedMesh
                            name="Mesh_5"
                            geometry={nodes.Mesh_5.geometry}
                            material={materials.Hate}
                            skeleton={nodes.Mesh_5.skeleton}
                            castShadow
                            receiveShadow
                        />
                        <skinnedMesh
                            name="Mesh_6"
                            geometry={nodes.Mesh_6.geometry}
                            material={materials.Lola}
                            skeleton={nodes.Mesh_6.skeleton}
                            castShadow
                            receiveShadow
                        />
                        <skinnedMesh
                            name="Mesh_7"
                            geometry={nodes.Mesh_7.geometry}
                            material={materials['Material #135']}
                            skeleton={nodes.Mesh_7.skeleton}
                            castShadow
                            receiveShadow
                        />
                        <skinnedMesh
                            name="Mesh_8"
                            geometry={nodes.Mesh_8.geometry}
                            material={materials['Material #147']}
                            skeleton={nodes.Mesh_8.skeleton}
                            castShadow
                            receiveShadow
                        />
                    </group>
                    <primitive object={nodes.Lola_Pelvis} castShadow />
                    <primitive object={nodes.Lola_LPlatform} castShadow />
                    <primitive object={nodes.Lola_RPlatform} castShadow />
                </group>
            </group>
        </group>
    );
}

useGLTF.preload('/lola.glb');
