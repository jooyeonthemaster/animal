'use client';

import { motion } from 'framer-motion';
import { Animal } from '@/types';
import Card from '@/components/ui/Card';
import { FaHeart, FaDollarSign, FaClock, FaHome } from 'react-icons/fa';

interface AnimalCardProps {
  animal: Animal;
  matchScore: number;
  matchReasons: string[];
  delay?: number;
}

export default function AnimalCard({ 
  animal, 
  matchScore, 
  matchReasons,
  delay = 0 
}: AnimalCardProps) {
  const getScoreColor = (score: number) => {
    if (score >= 80) return 'text-green-500';
    if (score >= 60) return 'text-yellow-500';
    return 'text-orange-500';
  };

  const getScoreEmoji = (score: number) => {
    if (score >= 90) return '🌟';
    if (score >= 80) return '⭐';
    if (score >= 70) return '✨';
    return '💫';
  };

  return (
    <Card delay={delay} className="max-w-2xl mx-auto">
      <div className="flex flex-col md:flex-row gap-6">
        {/* 동물 정보 */}
        <div className="flex-1">
          <div className="flex items-center gap-4 mb-4">
            <motion.span 
              className="text-6xl"
              animate={{ 
                rotate: [0, -10, 10, -10, 0],
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                repeatDelay: 3
              }}
            >
              {animal.emoji}
            </motion.span>
            <div>
              <h3 className="text-2xl font-bold">{animal.name}</h3>
              {animal.breed && (
                <p className="text-muted-foreground">{animal.breed}</p>
              )}
            </div>
          </div>

          <p className="text-gray-600 mb-4">{animal.description}</p>

          {/* 매치 점수 */}
          <div className="mb-4">
            <div className="flex items-center gap-2 mb-2">
              <span className="font-semibold">매치 점수:</span>
              <span className={`text-2xl font-bold ${getScoreColor(matchScore)}`}>
                {matchScore}%
              </span>
              <span className="text-2xl">{getScoreEmoji(matchScore)}</span>
            </div>
            <div className="w-full bg-muted rounded-full h-3 overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-primary to-secondary"
                initial={{ width: 0 }}
                animate={{ width: `${matchScore}%` }}
                transition={{ duration: 1, delay: delay + 0.5 }}
              />
            </div>
          </div>

          {/* 매치 이유 */}
          {matchReasons.length > 0 && (
            <div className="mb-4">
              <h4 className="font-semibold mb-2">왜 이 친구가 어울릴까요?</h4>
              <ul className="space-y-1">
                {matchReasons.map((reason, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: delay + 0.7 + index * 0.1 }}
                    className="flex items-center gap-2 text-sm text-muted-foreground"
                  >
                    <span className="text-primary">✓</span>
                    {reason}
                  </motion.li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* 특성 정보 */}
        <div className="md:w-72">
          <div className="bg-muted rounded-2xl p-4 space-y-3">
            <h4 className="font-semibold text-center mb-3">특성</h4>
            
            <div className="flex items-center justify-between">
              <span className="flex items-center gap-2">
                <FaHome className="text-primary" />
                크기
              </span>
              <span className="font-medium capitalize">
                {animal.characteristics.size === 'tiny' && '아주 작음'}
                {animal.characteristics.size === 'small' && '작음'}
                {animal.characteristics.size === 'medium' && '중간'}
                {animal.characteristics.size === 'large' && '큼'}
                {animal.characteristics.size === 'giant' && '아주 큼'}
              </span>
            </div>

            <div className="flex items-center justify-between">
              <span className="flex items-center gap-2">
                <FaHeart className="text-primary" />
                활동량
              </span>
              <span className="font-medium">
                {animal.characteristics.energyLevel === 'very-low' && '매우 낮음'}
                {animal.characteristics.energyLevel === 'low' && '낮음'}
                {animal.characteristics.energyLevel === 'moderate' && '보통'}
                {animal.characteristics.energyLevel === 'high' && '높음'}
                {animal.characteristics.energyLevel === 'very-high' && '매우 높음'}
              </span>
            </div>

            <div className="flex items-center justify-between">
              <span className="flex items-center gap-2">
                <FaClock className="text-primary" />
                수명
              </span>
              <span className="font-medium">{animal.characteristics.lifespan}</span>
            </div>

            <div className="flex items-center justify-between">
              <span className="flex items-center gap-2">
                <FaDollarSign className="text-primary" />
                월 비용
              </span>
              <span className="font-medium">
                {animal.costs.monthly === 'low' && '낮음'}
                {animal.costs.monthly === 'medium' && '보통'}
                {animal.costs.monthly === 'high' && '높음'}
                {animal.costs.monthly === 'very-high' && '매우 높음'}
              </span>
            </div>
          </div>

          {/* 성격 태그 */}
          <div className="mt-4">
            <h4 className="font-semibold mb-2">성격</h4>
            <div className="flex flex-wrap gap-2">
              {animal.personality.map((trait, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: delay + 1 + index * 0.1 }}
                  className="px-3 py-1 bg-pastel-purple text-xs font-medium rounded-full"
                >
                  {trait}
                </motion.span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
} 