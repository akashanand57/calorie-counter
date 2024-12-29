import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three"; // Import Three.js explicitly

const VantaBackground = () => {
  const [vantaEffect, setVantaEffect] = useState(null);
  const vantaRef = useRef(null);

  useEffect(() => {
    if (!vantaEffect && typeof window !== "undefined") {
      // Dynamically import VANTA
      import("vanta/dist/vanta.birds.min").then((VANTA) => {
        setVantaEffect(
          VANTA.default({ // Use `.default` for the default export
            el: vantaRef.current,
            THREE: THREE, // Pass Three.js instance explicitly
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minWidth: 200.0,
            minHeight: 200.0,
            scale: 1.0,
            scaleMobile: 1.0,
            backgroundColor: 0x7192f,
            color1: 0xff0000,
            color2: 0x00ffff,
            colorMode: "varianceGradient",
            quantity: 5,
            birdSize: 1.0,
            wingSpan: 30,
            speedLimit: 5,
            separation: 20.0,
            alignment: 20.0,
            cohesion: 20.0,
          })
        );
      }).catch((error) => {
        console.error("Failed to load Vanta.js: ", error);
      });
    }

    return () => {
      if (vantaEffect) vantaEffect.destroy(); // Cleanup effect on unmount
    };
  }, [vantaEffect]);

  return <div ref={vantaRef} style={{ width: "100%", height: "100vh" }}></div>;
};

export default VantaBackground;
