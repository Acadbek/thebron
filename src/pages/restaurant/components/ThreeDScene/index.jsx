import React, { Suspense } from "react";
import { Canvas, useLoader } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { a, useSpring } from "@react-spring/three";
import { SceneContext } from "../../context";

const ChairModel = ({ chair }) => {
  const gltf = useLoader(GLTFLoader, "/public/chair.glb");
  const clone = React.useMemo(() => gltf.scene.clone(), [gltf]);

  const props = useSpring({
    position: chair.position,
    rotation: chair.rotation,
    config: { mass: 1, tension: 170, friction: 26 },
  });

  return <a.primitive object={clone} scale={9} {...props} />;
};

const TableModel = () => {
  const gltf = useLoader(GLTFLoader, "/public/table.glb");
  return <primitive object={gltf.scene} position={[0, 0, 0]} scale={4} />;
};

const Scene = () => {
  const { chair } = React.useContext(SceneContext);

  const calculateRotation = (position) => {
    const [x, , z] = position;
    return [0, Math.atan2(x, z) + Math.PI, 0];
  };

  const generateChairPositions = (numChairs, radius) => {
    const angleStep = (2 * Math.PI) / numChairs;
    const positions = [];

    for (let i = 0; i < numChairs; i++) {
      const angle = i * angleStep;
      const x = radius * Math.sin(angle);
      const z = radius * Math.cos(angle);
      const position = [x, 0, z];
      const rotation = calculateRotation(position);

      positions.push({ position, rotation });
    }

    return positions;
  };

  const radius = 3.7;

  const chairsPositions = generateChairPositions(chair, radius);

  return (
    <Suspense fallback={null}>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      {chairsPositions.map((chair, index) => (
        <ChairModel key={index} chair={chair} />
      ))}
      <TableModel />
    </Suspense>
  );
};

const ThreeDScene = () => {
  return (
    <Canvas
      camera={{ position: [0, 5, 10], fov: 50, near: 0.1, far: 1000 }}
      style={{ height: "100%", background: "#fff", cursor: "grab" }}
    >
      <OrbitControls enableZoom={true} enableRotate={true} />
      <Scene />
    </Canvas>
  );
};

export default ThreeDScene;
