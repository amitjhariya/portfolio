"use client";
import { motion } from "framer-motion";
export default function Page() {
  return (
    <motion.div animate={{ x: 100 }}>
      <h1>Contact</h1>
    </motion.div>
  );
}
