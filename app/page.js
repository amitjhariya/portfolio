"use client";

import { motion } from "framer-motion";

export default function Page() {
  return (
    <motion.div animate={{ x: 100 }} className="m-4">
        <h1 className="text-white">Amit Jhariya</h1>
        <h1 className="text-white text-3xl font-bold underline">Hello world!</h1>
      </motion.div>
  );
}
