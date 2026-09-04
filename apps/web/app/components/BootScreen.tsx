"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function BootScreen({ onComplete }: { onComplete: () => void }) {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const sequence = [
      { delay: 100, set: 1 }, // Initializing
      { delay: 300, set: 2 }, // Progress bar
      { delay: 450, set: 3 }, // Loading workspace
      { delay: 600, set: 4 }, // Loading projects
      { delay: 750, set: 5 }, // Ready
      { delay: 900, set: 6 }, // Complete
    ];

    let totalDelay = 0;
    const timeouts: NodeJS.Timeout[] = [];

    sequence.forEach(({ delay, set }) => {
      totalDelay = delay;
      timeouts.push(
        setTimeout(() => {
          if (set === 6) {
            onComplete();
          } else {
            setStep(set);
          }
        }, totalDelay)
      );
    });

    return () => timeouts.forEach(clearTimeout);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 bg-[#000000] text-[#00ff00] font-mono text-[14px] p-8 z-50 flex flex-col">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.1 }}
      >
        <p className="mb-2">Initializing Ayush Portfolio...</p>
        
        {step >= 2 && (
          <p className="mb-4">
            [████████████████████] 100%
          </p>
        )}
        
        {step >= 3 && <p className="mb-1">Loading workspace...</p>}
        {step >= 4 && <p className="mb-1">Loading projects...</p>}
        {step >= 5 && <p className="mb-1 text-white">✓ Ready</p>}
      </motion.div>
    </div>
  );
}
