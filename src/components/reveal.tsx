

// "use client";

// import { motion } from "framer-motion";
// import { fadeInUp } from "@/lib/animations";

// export default function Reveal({ children }: { children: React.ReactNode }) {
//   return (
//     <motion.div
//       variants={fadeInUp}
//       initial="hidden"
//       whileInView="visible"
//       viewport={{ once: true, amount: 0.3 }}
//     >
//       {children}
//     </motion.div>
//   );
// }

"use client";

import { motion } from "framer-motion";

export default function Reveal({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 40 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: false, amount: 0.3 }}  // 🔥 repeat every scroll
    >
      {children}
    </motion.div>
  );
}
