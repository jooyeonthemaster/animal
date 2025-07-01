'use client';

import { motion } from 'framer-motion';
import { Question, QuestionOption } from '@/types';
import Card from '@/components/ui/Card';

interface QuestionCardProps {
  question: Question;
  onAnswer: (value: string | number | boolean | string[]) => void;
  selectedValue?: string | number | boolean | string[];
}

export default function QuestionCard({ question, onAnswer, selectedValue }: QuestionCardProps) {
  const renderOption = (option: QuestionOption, index: number) => {
    const isSelected = selectedValue === option.value;
    
    return (
      <motion.div
        key={index}
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: index * 0.1 }}
      >
        <Card
          hover
          onClick={() => onAnswer(option.value)}
          className={`cursor-pointer transition-all ${
            isSelected
              ? 'bg-primary text-primary-foreground transform scale-105'
              : 'hover:bg-muted'
          }`}
        >
          <div className="flex items-center gap-4">
            {option.emoji && (
              <span className="text-3xl animate-wiggle">{option.emoji}</span>
            )}
            <div className="flex-1">
              <h3 className="font-semibold text-lg">{option.label}</h3>
              {option.description && (
                <p className={`text-sm mt-1 ${
                  isSelected ? 'text-primary-foreground/80' : 'text-muted-foreground'
                }`}>
                  {option.description}
                </p>
              )}
            </div>
            {isSelected && (
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="text-2xl"
              >
                ✨
              </motion.div>
            )}
          </div>
        </Card>
      </motion.div>
    );
  };

  return (
    <div className="w-full max-w-3xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-8"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">{question.title}</h2>
        {question.description && (
          <p className="text-lg text-muted-foreground">{question.description}</p>
        )}
      </motion.div>

      <div className="space-y-4">
        {question.options?.map((option, index) => renderOption(option, index))}
      </div>
    </div>
  );
} 