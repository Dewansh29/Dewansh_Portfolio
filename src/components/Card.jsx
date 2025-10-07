// FIX: Changed import to 'framer-motion' to match the syntax used
import { motion } from "framer-motion";

const Card = ({ style, text, image, containerRef }) => {
  // FIX: Logic improved to prioritize showing the image if it exists
  return image ? (
    <motion.img
      // FIX: Changed w-15 to a valid Tailwind size w-16
      className="absolute w-16 cursor-grab"
      src={image}
      style={style}
      // FIX: Added alt tag for accessibility
      alt={text || "logo"}
      whileHover={{ scale: 1.05 }}
      drag
      dragConstraints={containerRef}
      dragElastic={1}
    />
  ) : (
    <motion.div
      className="absolute px-4 py-2 text-lg text-center rounded-full ring ring-gray-700 font-extralight bg-gray-900/50 text-white w-auto cursor-grab backdrop-blur-sm"
      style={style}
      whileHover={{ scale: 1.05 }}
      drag
      dragConstraints={containerRef}
      dragElastic={1}
    >
      {text}
    </motion.div>
  );
};

export default Card;