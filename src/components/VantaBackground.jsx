import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";

const VantaBackground = () => {
  const [vantaEffect, setVantaEffect] = useState(null);
  const vantaRef = useRef(null);

  useEffect(() => {
    if (!vantaEffect && typeof window !== "undefined") {
      // Dynamically import VANTA
      import("vanta/dist/vanta.net.min")
        .then((VANTA) => {
          setVantaEffect(
            VANTA.default({
              el: vantaRef.current,
              THREE: THREE,
              mouseControls: true,
              touchControls: true,
              gyroControls: false,
              minWidth: 200.0,
              minHeight: 200.0,
              scale: 1.0,
              scaleMobile: 1.0,
              color: 0xff3f81, // Color from the image
              backgroundColor: 0x23153c, // Background color from the image
              points: 10, // Points from the image
              maxDistance: 20, // Max distance from the image
              spacing: 15, // Spacing from the image
              showDots: true, // Show dots option enabled in the image
            })
          );
        })
        .catch((error) => {
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
