import React, { useState, useEffect, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Float } from '@react-three/drei';
import { easing } from 'maath';

import HeroText from '../components/HeroText';
import ParallaxBackground from '../components/ParallaxBackground';
import { Astronaut } from '../components/Astronaut';
import Loader from '../components/Loader';


const Hero = () => {
  const [astroProps, setAstroProps] = useState({
    scale: 0.2,
    position: [0, -1.7, 0],
  });

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        // --- THIS IS THE LINE TO CHANGE ---
        // Desktop: Moved up (Y from -1.7 to 1.5) and right (X from 1.8 to 2.2)
        setAstroProps({
          scale: 0.36,
          position: [2.2, 1.5, 0], 
        });
      } else {
        // Mobile props (unchanged)
        setAstroProps({
          scale: 0.2,
          position: [0, -1.7, 0],
        });
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section id="home" className="flex items-start 
    justify-center min-h-screen overflow-hidden 
    md:items-start md:justify-start c-space">

      <HeroText />
      <ParallaxBackground />

      <figure className="absolute inset-0 z-0" 
      style={{width:"100vw",height:"100vh"}}>
        <Canvas camera={{position:[0,1,3]}}>
          <Suspense fallback={<Loader />}>
            <Float speed={1} rotationIntensity={1} floatIntensity={1}>
              <Astronaut scale={astroProps.scale} position={astroProps.position} />
            </Float>
          </Suspense>

          <OrbitControls 
            enableZoom={false} 
            enablePan={false}
            enableRotate={false}
          />
          
          <Rig/>
        </Canvas>
      </figure>
      
    </section>
  );
};


function Rig(){
  return useFrame((state, delta) => {
    easing.damp3(
      state.camera.position,
      [state.mouse.x / 5, 1 + state.mouse.y / 5, 3],
      0.5, 
      delta 
    );
  });
}

export default Hero;