import React, { Suspense, useMemo } from "react";
import { Canvas, useLoader } from "@react-three/fiber";
import { OrbitControls, Html } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const Loader = () => (
  <Html center>
    <div className="loader">Loading...</div>
  </Html>
);

const ChairModel = ({ position, rotation }) => {
  const gltf = useLoader(GLTFLoader, "/models/chair.glb");
  const clone = useMemo(() => gltf.scene.clone(), [gltf]);

  return (
    <primitive
      object={clone}
      position={position}
      rotation={rotation}
      scale={9}
      castShadow
    />
  );
};

const TableModel = ({ position }) => {
  const gltf = useLoader(GLTFLoader, "/models/table.glb");
  const clone = useMemo(() => gltf.scene.clone(), [gltf]);
  return <primitive object={clone} position={position} scale={4} />;
};
const Scene = () => {
  const numTables = 20; // Total number of tables
  const numChairsPerTable = 6;
  const tableSpacing = 15;
  const chairRadius = 3.5;
  const columns = 4; // Number of columns in the grid

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

  return (
    <Suspense fallback={<Loader />}>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} castShadow />
      {Array.from({ length: numTables }).map((_, index) => {
        const row = Math.floor(index / columns);
        const col = index % columns;
        const tablePosition = [col * tableSpacing, 0, row * tableSpacing];
        const chairsPositions = generateChairPositions(
          numChairsPerTable,
          chairRadius,
        );

        return (
          <React.Fragment key={index}>
            <TableModel position={tablePosition} />
            {chairsPositions.map((chair, chairIndex) => (
              <ChairModel
                key={`${index}-${chairIndex}`}
                position={[
                  chair.position[0] + tablePosition[0],
                  chair.position[1],
                  chair.position[2] + tablePosition[2],
                ]}
                rotation={chair.rotation}
              />
            ))}
          </React.Fragment>
        );
      })}
    </Suspense>
  );
};

const ThreeDScene = () => {
  return (
    <Canvas
      camera={{ position: [0, 10, 20], fov: 50, near: 0.1, far: 1000 }}
      style={{ height: "100%", cursor: "grab" }}
      shadows
    >
      <OrbitControls enableZoom={true} enableRotate={true} />
      <Scene />
    </Canvas>
  );
};

export default ThreeDScene;
