"use client";

import { motion, AnimatePresence } from "framer-motion";

export const PageWrapper = ({ children }) => (
  <>
    <AnimatePresence
    mode="wait"
    initial={true}
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 50 }}
        
        transition={{ delay: 0.25,duration:0.25 }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  </>
);