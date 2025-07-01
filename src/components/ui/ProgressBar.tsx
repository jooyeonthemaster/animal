'use client';

import { motion } from 'framer-motion';

interface ProgressBarProps {
  current: number;
  total: number;
}

export default function ProgressBar({ current, total }: ProgressBarProps) {
  const progress = (current / total) * 100;

  return (
    <div className="w-full">
      <div className="flex justify-between mb-2">
        <span className="text-sm font-medium text-muted-foreground">
          질문 {current} / {total}
        </span>
        <span className="text-sm font-medium text-muted-foreground">
          {Math.round(progress)}%
        </span>
      </div>
      <div className="w-full h-3 bg-muted rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-gradient-to-r from-primary to-secondary rounded-full"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        />
      </div>
      <div className="flex justify-between mt-3">
        {Array.from({ length: total }).map((_, index) => (
          <div
            key={index}
            className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-semibold transition-all duration-300 ${
              index < current
                ? 'bg-primary text-primary-foreground scale-110'
                : index === current
                ? 'bg-secondary text-secondary-foreground animate-pulse scale-125'
                : 'bg-muted text-muted-foreground'
            }`}
          >
            {index + 1}
          </div>
        ))}
      </div>
    </div>
  );
} 