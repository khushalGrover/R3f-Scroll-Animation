import { useGLTF, useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { gsap } from "gsap";
import React, { useLayoutEffect, useRef } from "react";

export const FLOOR_HEIGHT = 2;
export const NB_FLOORS = 3;

export function Prototype4(props) {
  const { nodes, materials } = useGLTF("./models/prototype4.gltf");

  const ref = useRef();
  const tl = useRef();
  const floorThreeRef = useRef();
  const floorTwoRef = useRef();
  const floorOneRef = useRef();
  const scroll = useScroll();

  useFrame(() => {
    tl.current.seek(scroll.offset * tl.current.duration());
  });

  useLayoutEffect(() => {
    tl.current = gsap.timeline();

    // FLOOR One ANIMATION
    tl.current.from(
        floorOneRef.current.position,
        {
            duration: 0.5,
            y: -1,
        },
        0,
    );
    tl.current.from(
        floorOneRef.current.rotation,
        {
            duration: 0.5,
            z: 0,
        },
        0,
    );

    tl.current.to(

        floorOneRef.current.rotation,
        {
            duration: 0.5,
            z: -Math.PI/2,
        },
        0.5
    );
    tl.current.to(
        floorOneRef.current.position,
        {
            duration: 1,
            y: 3,
        },
        0.5
    );

    // FLOOR Two ANIMATION
    tl.current.from(
        floorTwoRef.current.position,
        {
            duration: 0.5,
            y: -2,
        },
        0.5,
    );
    tl.current.from(
        floorTwoRef.current.rotation,
        {
            duration: 0.5,
            z: Math.PI/2,
        },
        0.5,
    );

    tl.current.to(

        floorTwoRef.current.rotation,
        {
            duration: 0.5,
            z: -Math.PI/2,
        },
        1.5
    );
    tl.current.to(
        floorTwoRef.current.position,
        {
            duration: 1,
            y: 3,
        },
        1.5
    );

    // FLOOR Three ANIMATION
    tl.current.from(
        floorThreeRef.current.position,
        {
            duration: 0.5,
            y: -3,
        },
        1.6,
    );
    tl.current.from(
        floorThreeRef.current.rotation,
        {
            duration: 0.5,
            z: Math.PI/2,
        },
        1.6,
    );
  
    
  }, []);

  return (
    <group {...props} dispose={null} ref={ref} castShadow={true} >
      <group position={[0, -1, 0]} ref={floorOneRef}>
        <mesh geometry={nodes.Cube002.geometry} material={materials['Material.001']} />
        <mesh geometry={nodes.Cube002_1.geometry} material={materials['Material.000']} />
      </group>
      <group position={[0, -1, 0]} ref={floorTwoRef}>
        <mesh geometry={nodes.Cube005.geometry} material={materials['Material.002']} />
        <mesh geometry={nodes.Cube005_1.geometry} material={materials['Material.003']} />
      </group>
      <group position={[0, -1, 2]} ref={floorThreeRef}>
        <mesh geometry={nodes.Cube003.geometry} material={materials['Material.004']} />
        <mesh geometry={nodes.Cube003_1.geometry} material={materials['Material.005']} />
      </group>
      
    </group>
  );
}

useGLTF.preload("./models/prototype4.gltf");
