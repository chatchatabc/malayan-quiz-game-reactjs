import React, { CSSProperties, ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Props {
  className?: string;
  initial?: Object extends CSSProperties ? Object : CSSProperties;
  animate?: Object extends CSSProperties ? Object : CSSProperties;
  transition?: Object extends CSSProperties ? Object : CSSProperties;
  children?: ReactNode;
}

function MotionDiv({
  className,
  initial = { opacity: 0 },
  animate = { opacity: 1 },
  transition = { duration: 0.5 },
  children,
}: Props) {
  return (
    <motion.div
      className={className}
      initial={initial}
      animate={animate}
      transition={transition}
    >
      {children}
    </motion.div>
  );
}

export default MotionDiv;
