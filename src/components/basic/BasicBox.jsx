import { useRef, useState } from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import { useSpring, animated, config } from '@react-spring/three'
import { TextureLoader } from "three";
import { Html } from "@react-three/drei";
const BasicBox = (props) => {
  const ref = useRef();
  const [color, setColor] = useState("orange");
  const [hover, setHover] = useState(false);

  const texture = useLoader(TextureLoader, props.texture);

  const handleSetHover = () => {
    setHover((prevState) => !prevState);
    console.log("isChangeing")
  };
  const handleSetColor = () => {
    setColor(props.color);
  };

  //   useFrame(() => {
  //     ref.current.rotation.x += 0.05;
  //   });
  const { scale } = useSpring({
    scale: hover? 2:1,
    config: config.wobbly
  });


  return (
    <animated.mesh
      ref={ref}
      {...props}
      scale={scale}

      castShadow
      receiveShadow
      onPointerEnter={handleSetColor}
      onPointerOut={() => setColor("orange")}
      onClick={handleSetHover}
    >
    
      <boxGeometry args={[1, 1, 1]}  />
      <meshPhongMaterial/>
    </animated.mesh>
  );
};
export default BasicBox;
