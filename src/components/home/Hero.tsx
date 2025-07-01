'use client';

import { motion } from 'framer-motion';
import Button from '@/components/ui/Button';
import { FaPaw } from 'react-icons/fa';

interface HeroProps {
  onStart: () => void;
}

export default function Hero({ onStart }: HeroProps) {
  const animals = ['🐕', '🐈', '🐰', '🦜', '🐹', '🐠', '🦎', '🐢'];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          나의 완벽한 동물친구 찾기
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          당신의 라이프스타일에 맞는 최고의 반려동물을 찾아드려요! 🌟
        </p>
      </motion.div>

      <div className="grid grid-cols-4 gap-4 mb-12">
        {animals.map((animal, index) => (
          <motion.div
            key={index}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{
              delay: index * 0.1,
              type: 'spring',
              stiffness: 200,
            }}
            whileHover={{ 
              scale: 1.2,
              rotate: [0, -10, 10, -10, 0],
              transition: { duration: 0.5 }
            }}
            className="text-4xl md:text-6xl cursor-pointer"
          >
            {animal}
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
      >
        <Button
          size="large"
          onClick={onStart}
          icon={<FaPaw />}
          className="animate-bounce-slow"
        >
          시작하기
        </Button>
      </motion.div>

      <motion.div
        className="absolute bottom-10 text-muted-foreground text-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        ✨ AI가 당신을 위한 완벽한 동물 친구를 찾아드립니다 ✨
      </motion.div>
    </div>
  );
} 