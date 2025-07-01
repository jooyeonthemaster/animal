import { Animal, UserProfile, RecommendationResult } from '@/types';
import { animals } from '@/data/animals';

export function calculateMatchScore(animal: Animal, profile: UserProfile): number {
  let score = 100;
  const penalties: number[] = [];

  // 공간 적합성 체크
  if (profile.livingSpace === 'studio' || profile.livingSpace === 'apartment') {
    if (!animal.goodWith.apartments) {
      penalties.push(30);
    }
    if (animal.requirements.space === 'large' || animal.requirements.space === 'extensive') {
      penalties.push(20);
    }
  }

  // 마당 요구사항
  if (!profile.hasYard && animal.requirements.space === 'extensive') {
    penalties.push(25);
  }

  // 활동량 매칭
  const activityDiff = Math.abs(
    getActivityLevel(profile.activityLevel) - getActivityLevel(animal.characteristics.energyLevel)
  );
  penalties.push(activityDiff * 10);

  // 시간 가용성
  if (profile.dailyFreeTime < 2 && animal.requirements.socialNeeds === 'very-social') {
    penalties.push(20);
  }
  if (profile.workSchedule === 'travel-frequent' && animal.requirements.socialNeeds !== 'independent') {
    penalties.push(15);
  }

  // 경험 수준
  if (profile.petExperience === 'none' && !animal.goodWith.beginners) {
    penalties.push(25);
  }

  // 소음 허용도
  if (profile.noiseToleranceLevel === 'low' && 
      (animal.characteristics.noiseLevel === 'loud' || animal.characteristics.noiseLevel === 'moderate')) {
    penalties.push(20);
  }

  // 아이들과의 적합성
  if (profile.hasChildren && !animal.goodWith.children) {
    penalties.push(30);
  }

  // 예산 고려
  const budgetScore = getBudgetScore(profile.monthlyBudget);
  const costScore = getBudgetScore(animal.costs.monthly);
  if (costScore > budgetScore) {
    penalties.push((costScore - budgetScore) * 15);
  }

  // 관리 의지
  if (profile.groomingWillingness === 'minimal' && 
      (animal.requirements.grooming === 'daily' || animal.requirements.grooming === 'regular')) {
    penalties.push(15);
  }

  // 훈련 의지
  if (profile.trainingCommitment === 'low' && animal.requirements.training === 'extensive') {
    penalties.push(20);
  }

  // 총 점수 계산
  const totalPenalty = penalties.reduce((sum, penalty) => sum + penalty, 0);
  score = Math.max(0, Math.min(100, score - totalPenalty));

  return Math.round(score);
}

function getActivityLevel(level: string): number {
  const levels: Record<string, number> = {
    'very-low': 1,
    'low': 2,
    'moderate': 3,
    'high': 4,
    'very-high': 5,
  };
  return levels[level] || 3;
}

function getBudgetScore(budget: string): number {
  const scores: Record<string, number> = {
    'low': 1,
    'medium': 2,
    'high': 3,
    'premium': 4,
    'very-high': 3,
  };
  return scores[budget] || 2;
}

export function getMatchReasons(animal: Animal, profile: UserProfile): string[] {
  const reasons: string[] = [];

  // 공간 적합성
  if (animal.goodWith.apartments && (profile.livingSpace === 'apartment' || profile.livingSpace === 'studio')) {
    reasons.push('아파트 생활에 적합해요');
  }

  // 초보자 적합성
  if (profile.petExperience === 'none' && animal.goodWith.beginners) {
    reasons.push('초보자도 키우기 쉬워요');
  }

  // 활동량 매칭
  if (Math.abs(getActivityLevel(profile.activityLevel) - getActivityLevel(animal.characteristics.energyLevel)) <= 1) {
    reasons.push('당신의 활동량과 잘 맞아요');
  }

  // 시간 매칭
  if (profile.workSchedule === 'home' && animal.requirements.socialNeeds === 'very-social') {
    reasons.push('재택근무로 충분한 관심을 줄 수 있어요');
  }

  // 조용한 환경
  if (profile.noiseToleranceLevel === 'low' && animal.characteristics.noiseLevel === 'silent') {
    reasons.push('매우 조용한 동물이에요');
  }

  // 아이들과 함께
  if (profile.hasChildren && animal.goodWith.children) {
    reasons.push('아이들과 잘 지내요');
  }

  // 예산 적합
  if (getBudgetScore(profile.monthlyBudget) >= getBudgetScore(animal.costs.monthly)) {
    reasons.push('예산에 부담이 없어요');
  }

  // 관리 용이
  if (animal.characteristics.maintenanceLevel === 'low' || animal.characteristics.maintenanceLevel === 'very-low') {
    reasons.push('관리가 쉬워요');
  }

  return reasons;
}

export function getRecommendations(profile: UserProfile): RecommendationResult[] {
  const results: RecommendationResult[] = animals.map(animal => {
    const matchScore = calculateMatchScore(animal, profile);
    const matchReasons = getMatchReasons(animal, profile);
    const considerations: string[] = [];

    // 고려사항 추가
    if (animal.characteristics.lifespan.includes('20') || animal.characteristics.lifespan.includes('30')) {
      considerations.push('장기간의 책임이 필요해요');
    }
    if (animal.requirements.grooming === 'daily') {
      considerations.push('매일 털 관리가 필요해요');
    }
    if (animal.characteristics.noiseLevel === 'loud') {
      considerations.push('소음이 발생할 수 있어요');
    }

    return {
      animal,
      matchScore,
      matchReasons,
      considerations,
    };
  });

  // 점수 순으로 정렬
  return results.sort((a, b) => b.matchScore - a.matchScore);
} 