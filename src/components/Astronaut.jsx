import React, { useRef, useEffect } from 'react';
// FIX 1: Added missing imports for animation
import { useMotionValue, useSpring } from "framer-motion";
import { useGLTF, useAnimations } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

export function Astronaut(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF('/models/tenhun_falling_spaceman_fanart.glb');
  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    if (animations.length > 0) {
      actions[animations[0].name]?.play();
    }
  }, [actions, animations]);

  // --- Corrected Animation Logic ---
  // Starts the astronaut at a high position (y=5)
  const yPosition = useMotionValue(5); 
  // Creates a spring animation that will follow the yPosition value
  const ySpring = useSpring(yPosition, { damping: 30 }); 

  useEffect(() => {
    // When the component loads, we set the target position for the spring to animate to.
    yPosition.set(-1.8);
  }, [yPosition]);

  // On every frame, update the 3D model's actual y-position to match the spring's current value
  useFrame(() => {
    if (group.current) {
      group.current.position.y = ySpring.get();
    }
  });
  // ------------------------------------

  return (
    <group ref={group} 
    {...props} 
    dispose={null}
    rotation={[Math.PI-1.5, Math.PI+.3, -.7]}
    scale={props.scale || 1.3}
    >
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" >
          <group name="Root">
            <group name="metarig">
              <primitive object={nodes.metarig_rootJoint} />
              <skinnedMesh name="Cube001_0" geometry={nodes.Cube001_0.geometry} material={materials['AstronautFallingTexture.png']} skeleton={nodes.Cube001_0.skeleton} />
              <skinnedMesh name="Cube005_0" geometry={nodes.Cube005_0.geometry} material={materials['AstronautFallingTexture.png']} skeleton={nodes.Cube005_0.skeleton} />
              <skinnedMesh name="Cube002_0" geometry={nodes.Cube002_0.geometry} material={materials['AstronautFallingTexture.png']} skeleton={nodes.Cube002_0.skeleton} />
              <skinnedMesh name="Plane_0" geometry={nodes.Plane_0.geometry} material={materials['AstronautFallingTexture.png']} skeleton={nodes.Plane_0.skeleton} />
              <skinnedMesh name="Cube008_0" geometry={nodes.Cube008_0.geometry} material={materials['AstronautFallingTexture.png']} skeleton={nodes.Cube008_0.skeleton} />
              <skinnedMesh name="Cube004_0" geometry={nodes.Cube004_0.geometry} material={materials['AstronautFallingTexture.png']} skeleton={nodes.Cube004_0.skeleton} />
              <skinnedMesh name="Cube003_0" geometry={nodes.Cube003_0.geometry} material={materials['AstronautFallingTexture.png']} skeleton={nodes.Cube003_0.skeleton} />
              <skinnedMesh name="Cube_0" geometry={nodes.Cube_0.geometry} material={materials['AstronautFallingTexture.png']} skeleton={nodes.Cube_0.skeleton} />
              <skinnedMesh name="Cube009_0" geometry={nodes.Cube009_0.geometry} material={materials['AstronautFallingTexture.png']} skeleton={nodes.Cube009_0.skeleton} />
              <skinnedMesh name="Cube011_0" geometry={nodes.Cube011_0.geometry} material={materials['AstronautFallingTexture.png']} skeleton={nodes.Cube011_0.skeleton} />
              <group name="Cube001" />
              <group name="Cube005" />
              <group name="Cube002" />
              <group name="Plane" />
              <group name="Cube008" />
              <group name="Cube004" />
              <group name="Cube003" />
              <group name="Cube" />
              <group name="Cube009" rotation={[-2.708, 0.013, -1.447]} scale={1.307} />
              <group name="Cube011" />
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/models/tenhun_falling_spaceman_fanart.glb');