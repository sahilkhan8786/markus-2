import React from 'react'

import { useGLTF } from '@react-three/drei'
export default function ParkScene(props) {
    const model = useGLTF('/park_scene.glb')
    return (
        <primitive object={model.scene} {...props} />
    )
}
