import { useState, useEffect } from "react";
import { motion, useMotionValue, animate } from "framer-motion";
import { ArrowRight } from "lucide-react";

function App() {
  const x = useMotionValue(0);
  const [reset, setReset] = useState(false);

  const handleDragEnd = () => {
    if (x.get() >= 100) {
      window.open("https://www.genainetworks.in", "_blank");

      // Trigger reset after delay
      setTimeout(() => {
        setReset(true);
      }, 800); // Wait before resetting
    } else {
      // Animate back to 0 if not completed
      animate(x, 0, { type: "spring", stiffness: 300 });
    }
  };

  // Reset x motion value when reset state is true
  useEffect(() => {
    if (reset) {
      animate(x, 0, {
        type: "spring",
        stiffness: 300,
        onComplete: () => setReset(false), // clear reset
      });
    }
  }, [reset, x]);

  const gradient = "linear-gradient(to right, #8f00ff, #3b1e85, #001f3f)";

  return (
   <div className="flex flex-col items-center justify-center min-h-screen bg-black space-y-12">

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
