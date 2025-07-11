import { useEffect, useRef } from "react";
import lottie from "lottie-web";
import animationData from "./Flow6.json"; // Ensure it's in the same folder

const LottieFlow = () => {
  const container = useRef(null);

  useEffect(() => {
    if (!container.current) return;

    const anim = lottie.loadAnimation({
      container: container.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData,
    });

    return () => anim.destroy();
  }, []);

  return (
    <div
      style={{
        position: "absolute",
        top: "50%",
        left: 0,
        width: "100%",
        height: "80%",
        zIndex: 0,
        pointerEvents: "none",
        overflow: "hidden",
      }}
    >
      <div
        ref={container}
        style={{
          width: "100%",
          height: "100%",
          
        }}
      />
    </div>
  );
};

export default LottieFlow;
