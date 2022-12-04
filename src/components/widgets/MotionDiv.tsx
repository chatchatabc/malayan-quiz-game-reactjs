import React, { ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Props {
  className?: string;
  children?: ReactNode;
}

function MotionDiv({ className, children }: Props) {
  return (
    <AnimatePresence>
      <motion.div
        className={className}
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.5 }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}

export default MotionDiv;
