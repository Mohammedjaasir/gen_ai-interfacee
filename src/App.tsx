import { useState } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";

function App() {
  const x = useMotionValue(0);
  const [completed, setCompleted] = useState(false);

  const handleDragEnd = () => {
    if (x.get() >= 180) {
      setCompleted(true);
      window.open("https://www.google.com", "_blank");
    }
  };

  const gradient = useTransform(
    x,
    [0, 180],
    [
      "linear-gradient(to right, #7F00FF, #E100FF)",
      "linear-gradient(to right, #00c6ff, #0072ff)",
    ]
  );

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white space-y-12">
      {/* Logo at Top */}
      <img
        src="/logo.png"
        alt="Main Logo"
        className="h-44 w-44 object-contain animate-pulse"
      />

      {/* Slide Button */}
      <motion.div
        className="relative h-14 w-[270px] rounded-full flex items-center justify-between overflow-hidden shadow-lg"
        style={{ background: gradient }}
      >
        {/* Drag Arrow */}
        <motion.div
          style={{ x }}
          drag="x"
          dragConstraints={{ left: 0, right: 180 }}
          onDragEnd={handleDragEnd}
          className="absolute z-10 h-14 w-14 flex items-center justify-center rounded-full bg-white"
        >
          <ArrowRight className="text-black w-6 h-6" />
        </motion.div>

        {/* Text */}
        <div className="text-white text-sm ml-auto mr-5">
          Slide to open Google
        </div>

        {/* Google Logo - High quality, cross-browser-safe */}
      <img
  src="/image.png"
  alt="Google"
  className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-sm"
/>



      </motion.div>
    </div>
  );
}

export default App;
