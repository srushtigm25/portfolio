"use client";

import { motion } from "framer-motion";

export default function FloatingBlobs() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Blob 1 */}
      <motion.div
        className="absolute w-72 h-72 bg-purple-500/40 dark:bg-purple-600/30 rounded-full blur-3xl"
        animate={{ x: [0, 30, -20, 0], y: [0, -20, 20, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        style={{ top: "10%", left: "15%" }}
      />

      {/* Blob 2 */}
      <motion.div
        className="absolute w-64 h-64 bg-blue-400/30 dark:bg-blue-500/20 rounded-full blur-3xl"
        animate={{ x: [0, -40, 20, 0], y: [0, 25, -25, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        style={{ top: "40%", right: "10%" }}
      />

      {/* Blob 3 */}
      <motion.div
        className="absolute w-80 h-80 bg-pink-400/30 dark:bg-pink-500/20 rounded-full blur-3xl"
        animate={{ x: [0, 20, -20, 0], y: [0, 30, -15, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        style={{ bottom: "10%", left: "25%" }}
      />
    </div>
  );
}
