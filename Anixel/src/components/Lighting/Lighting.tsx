const Lighting: React.FC = () => {
  return (
    <>
      <ambientLight intensity={0.2} color={"#E7D99C"} />
      <directionalLight
        intensity={2}
        color={"brown"}
        castShadow
        position={[-0.5, 0.3, 0]}
      />
      <directionalLight
        intensity={1}
        color={"red"}
        castShadow
        position={[0.5, 0.1, 0.2]}
      />
      <directionalLight
        intensity={2}
        color={"yellow"}
        castShadow
        position={[0, 25, -130]}
        shadow-mapSize={[2048, 2048]}
      >
        <orthographicCamera
          attach={"shadow-camera"}
          args={[-10, 10, 10, -10]}
        />
      </directionalLight>
    </>
  );
};

export default Lighting;
