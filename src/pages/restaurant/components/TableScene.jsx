import React, { Suspense, useMemo } from "react";
import { Canvas, useLoader, useFrame } from "@react-three/fiber";
import { OrbitControls, Html } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Skeleton } from "@/components/ui/skeleton";
import { SceneContext } from "../context";

const Loader = () => {
  return (
    <Html center>
      <Skeleton className="h-[580px] w-[1080px]" />
    </Html>
  );
};

const ChairModel = ({ chair }) => {
  const gltf = useLoader(GLTFLoader, "/models/chair.glb");
  const clone = useMemo(() => gltf.scene.clone(), [gltf]);

  return (
    <primitive
      object={clone}
      scale={9}
      position={chair.position}
      rotation={chair.rotation}
    />
  );
};

const TableModel = () => {
  const gltf = useLoader(GLTFLoader, "/models/table.glb");
  return <primitive object={gltf.scene} position={[0, 0, 0]} scale={4} />;
};

const Box = () => {
  const meshRef = React.useRef();

  useFrame(() => {
    // meshRef.current.rotation.x += 0.01;
    meshRef.current.rotation.y += 0.01;
  });

  meshRef.current.rotation.x = 0.01;

  return (
    <mesh scale={0.5} position={[0, 0, 5]} ref={meshRef} castShadow>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="orange" />
    </mesh>
  );
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

  const radius = 3.5;
  const numChairs = chair;

  const chairsPositions = generateChairPositions(numChairs, radius);

  return (
    <Suspense fallback={<Loader />}>
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
  const changeZoom = (e) => {
    console.log(e);
  };

  return (
    <Canvas
      camera={{ position: [0, 5, 10], fov: 50, near: 0.1, far: 1000 }}
      style={{ height: "100%", cursor: "grab" }}
    >
      <OrbitControls
        onChange={(e) => changeZoom(e)}
        enableZoom={true}
        enableRotate={true}
      />
      <Scene />
    </Canvas>
  );
};

export default ThreeDScene;
