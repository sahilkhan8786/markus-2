import React, { useRef, useEffect } from 'react';
import { useThree } from '@react-three/fiber';

export function CameraController() {
    const { camera } = useThree();

    useEffect(() => {
        // Move the camera slightly
        camera.position.set(1, 1, 7); // Adjust these values as needed
        camera.lookAt(1, 1, 7); // Ensure the camera is looking at the origin or desired point
    }, [camera]);

    return null; // This component does not render anything
}
