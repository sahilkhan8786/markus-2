import React, { useRef, useEffect } from 'react';
import { useGLTF, useAnimations } from '@react-three/drei';
import { useFrame, useThree } from '@react-three/fiber';
import { Vector3 } from 'three';

export function Lola(props) {
    const group = useRef();
    const { nodes, materials, animations } = useGLTF('/lola.glb');
    const { actions } = useAnimations(animations, group);
    const { camera } = useThree();  // Access camera directly from context

    useEffect(() => {
        actions['Idle'].play();

        if (group.current) {
            group.current.rotation.y = -Math.PI / 2; // Rotate 45 degrees to the left
        }

    }, [actions]);

    useFrame(() => {
        if (group.current && camera) {
            // Safely handle the camera position

            const cameraPosition = new Vector3().copy(camera.position);

            group.current.lookAt(cameraPosition);
        }
    });

    return (
        <group ref={group} {...props} dispose={null}>
            <group name="Scene">
                <group name="Armature" rotation={[Math.PI / 2, 0, Math.PI / 7]} scale={0.01}>
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
