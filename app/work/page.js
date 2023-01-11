'use client'
import { motion } from 'framer-motion'
export default function Page() {
  return <motion.div animate={{ x: 100 }} >
    <h1>About</h1>
  </motion.div>
}