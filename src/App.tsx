import { useState, useEffect } from "react";
import { motion, useMotionValue, animate } from "framer-motion";
import { ArrowRight } from "lucide-react";

function App() {
  const x = useMotionValue(0);
  const [reset, setReset] = useState(false);

  const handleDragEnd = () => {
    if (x.get() >= 100) {
      window.open("https://www.genainetworks.in", "_blank");
      setTimeout(() => setReset(true), 800); // Wait before resetting
    } else {
      animate(x, 0, { type: "spring", stiffness: 300 });
    }
  };

  useEffect(() => {
    if (reset) {
      animate(x, 0, {
        type: "spring",
        stiffness: 300,
        onComplete: () => setReset(false),
      });
    }
  }, [reset, x]);

  const gradient = "linear-gradient(to right, #8f00ff, #3b1e85, #001f3f)";

  return (
    <div className="w-screen h-screen overflow-hidden fixed top-0 left-0 bg-black flex flex-col items-center justify-center space-y-12">
      {/* Main Logo */}
      <img
        src="/logo.png"
        alt="Main Logo"
        className="h-60 w-60 object-contain animate-pulse"
      />

      {/* Slide Bar */}
      <div
        className="relative w-[220px] h-12 rounded-full flex items-center px-2 overflow-hidden"
        style={{ background: gradient }}
      >
        {/* Slide Text */}
        <div className="absolute inset-0 flex items-center justify-center z-0 pr-1">
          <span className="text-white text-sm font-medium tracking-wide">
            Slide to Google
          </span>
        </div>

        {/* Draggable Arrow */}
        <motion.div
          style={{ x }}
          drag="x"
          dragConstraints={{ left: 0, right: 100 }}
          onDragEnd={handleDragEnd}
          className="z-10 h-10 w-10 flex items-center justify-center rounded-full bg-[#1a1a1a] shadow-md"
        >
          <ArrowRight className="text-white w-4 h-4" />
        </motion.div>

        {/* Google Logo */}
        <div className="ml-auto mr-[-20px] z-10">
          <img
            src="/image.png"
            alt="Google"
            className="w-20 h-20 rounded-full object-cover shadow-sm"
          />
        </div>
      </div>
    </div>
  );
}

export default App;
