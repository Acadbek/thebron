import React, { Suspense } from "react";
import { Canvas, useLoader } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const chairsPositions = [
  {
    position: [0, 0, 0],
    rotate: [0, Math.PI / 2, 0],
  },
  {
    position: [0, 0, 0],
    rotate: [0, Math.PI / 2, 0],
  },
];

const ChairModel = ({ position }) => {
  const gltf = useLoader(GLTFLoader, "/models/chair.glb"); // Ensure this path is correct

  return (
    <primitive
      rotation={[0, Math.PI / 1, 0]} // Adjust rotation if needed
      object={gltf.scene}
      position={[0, 0, 2]}
      scale={8} // Adjust scale if necessary
    />
  );
};

const TableModel = () => {
  const gltf = useLoader(GLTFLoader, "/models/table.glb"); // Ensure this path is correct

  // Optional: Debug by logging the loaded GLTF
  console.log(gltf);

  return (
    <primitive
      object={gltf.scene}
      position={[0, 0, 0]}
      scale={[1.7, 1.7, 1.7]} // Adjust scale if necessary
    />
  );
};

const Scene = () => {
  return (
    <Suspense fallback={null}>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <ChairModel />
      <TableModel />
    </Suspense>
  );
};

const ThreeDScene = () => {
  return (
    <Canvas
      camera={{ position: [0, 5, 10], fov: 50, near: 0.1, far: 1000 }}
      style={{ height: "100vh", background: "#eee" }}
    >
      <OrbitControls enableZoom={true} enableRotate={true} />
      <Scene />
    </Canvas>
  );
};

export default ThreeDScene;
