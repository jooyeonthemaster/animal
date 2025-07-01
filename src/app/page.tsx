'use client';

import { useState } from 'react';
import Hero from '@/components/home/Hero';
import QuestionCard from '@/components/quiz/QuestionCard';
import AnimalCard from '@/components/result/AnimalCard';
import ProgressBar from '@/components/ui/ProgressBar';
import Button from '@/components/ui/Button';
import { questions } from '@/data/questions';
import { UserProfile, RecommendationResult } from '@/types';
import { getRecommendations } from '@/lib/matching';
import { motion } from 'framer-motion';
import { FaArrowLeft, FaArrowRight, FaRedo } from 'react-icons/fa';

export default function Home() {
  const [currentStep, setCurrentStep] = useState(0);
  const [isQuizStarted, setIsQuizStarted] = useState(false);
  const [isQuizCompleted, setIsQuizCompleted] = useState(false);
  const [userProfile, setUserProfile] = useState<Partial<UserProfile>>({
    allergies: [],
    otherPets: [],
  });
  const [recommendations, setRecommendations] = useState<RecommendationResult[]>([]);

  const handleStart = () => {
    setIsQuizStarted(true);
  };

  const handleAnswer = (value: any) => {
    const question = questions[currentStep];
    setUserProfile(prev => ({
      ...prev,
      [question.propertyPath]: value,
    }));
  };

  const handleNext = () => {
    if (currentStep < questions.length - 1) {
      setCurrentStep(prev => prev + 1);
    } else {
      completeQuiz();
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(prev => prev - 1);
    }
  };

  const completeQuiz = () => {
    const profile = userProfile as UserProfile;
    const results = getRecommendations(profile);
    setRecommendations(results.slice(0, 5)); // 상위 5개만 표시
    setIsQuizCompleted(true);
  };

  const handleRestart = () => {
    setCurrentStep(0);
    setIsQuizStarted(false);
    setIsQuizCompleted(false);
    setUserProfile({
      allergies: [],
      otherPets: [],
    });
    setRecommendations([]);
  };

  if (!isQuizStarted) {
    return <Hero onStart={handleStart} />;
  }

  if (isQuizCompleted) {
    return (
      <div className="min-h-screen py-8 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              당신을 위한 완벽한 친구들을 찾았어요! 🎉
            </h1>
            <p className="text-xl text-muted-foreground">
              AI가 분석한 당신과 가장 잘 맞는 동물 친구들입니다
            </p>
          </motion.div>

          <div className="space-y-6">
            {recommendations.map((result, index) => (
              <AnimalCard
                key={result.animal.id}
                animal={result.animal}
                matchScore={result.matchScore}
                matchReasons={result.matchReasons}
                delay={index * 0.2}
              />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="text-center mt-12"
          >
            <Button
              onClick={handleRestart}
              icon={<FaRedo />}
              variant="secondary"
              size="large"
            >
              다시 시작하기
            </Button>
          </motion.div>
        </div>
      </div>
    );
  }

  const currentQuestion = questions[currentStep];
  const currentValue = userProfile[currentQuestion.propertyPath];

  return (
    <div className="min-h-screen py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mb-8"
        >
          <ProgressBar current={currentStep + 1} total={questions.length} />
        </motion.div>

        <QuestionCard
          question={currentQuestion}
          onAnswer={handleAnswer}
          selectedValue={currentValue}
        />

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="flex justify-between mt-8"
        >
          <Button
            onClick={handlePrevious}
            disabled={currentStep === 0}
            variant="ghost"
            icon={<FaArrowLeft />}
          >
            이전
          </Button>
          
          <Button
            onClick={handleNext}
            disabled={currentValue === undefined || currentValue === null}
            icon={<FaArrowRight />}
          >
            {currentStep === questions.length - 1 ? '결과 보기' : '다음'}
          </Button>
        </motion.div>
      </div>
    </div>
  );
}
