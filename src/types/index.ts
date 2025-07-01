// 사용자 프로필 타입
export interface UserProfile {
  // 기본 정보
  livingSpace: 'apartment' | 'house' | 'studio' | 'farm';
  hasYard: boolean;
  spaceSize: 'small' | 'medium' | 'large';
  
  // 라이프스타일
  activityLevel: 'very-low' | 'low' | 'moderate' | 'high' | 'very-high';
  workSchedule: 'home' | 'office-regular' | 'office-long' | 'travel-frequent';
  dailyFreeTime: number; // 시간 단위
  
  // 경험 및 선호도
  petExperience: 'none' | 'beginner' | 'intermediate' | 'expert';
  allergies: string[];
  noiseToleranceLevel: 'low' | 'medium' | 'high';
  
  // 가족 구성
  hasChildren: boolean;
  childrenAge?: 'baby' | 'toddler' | 'school' | 'teen';
  otherPets: string[];
  
  // 예산
  monthlyBudget: 'low' | 'medium' | 'high' | 'premium';
  
  // 선호하는 상호작용
  interactionPreference: 'minimal' | 'moderate' | 'high' | 'constant';
  groomingWillingness: 'minimal' | 'moderate' | 'high';
  trainingCommitment: 'low' | 'medium' | 'high';
}

// 동물 타입
export interface Animal {
  id: string;
  name: string;
  category: 'dog' | 'cat' | 'bird' | 'fish' | 'reptile' | 'small-mammal' | 'exotic';
  breed?: string;
  emoji: string;
  
  // 특성
  characteristics: {
    size: 'tiny' | 'small' | 'medium' | 'large' | 'giant';
    energyLevel: 'very-low' | 'low' | 'moderate' | 'high' | 'very-high';
    noiseLevel: 'silent' | 'quiet' | 'moderate' | 'loud';
    lifespan: string; // e.g., "10-15 years"
    maintenanceLevel: 'very-low' | 'low' | 'moderate' | 'high' | 'very-high';
  };
  
  // 요구사항
  requirements: {
    space: 'minimal' | 'small' | 'medium' | 'large' | 'extensive';
    exercise: 'minimal' | 'low' | 'moderate' | 'high' | 'intensive';
    socialNeeds: 'independent' | 'moderate' | 'social' | 'very-social';
    grooming: 'minimal' | 'weekly' | 'regular' | 'daily';
    training: 'minimal' | 'basic' | 'moderate' | 'extensive';
  };
  
  // 비용
  costs: {
    initial: 'low' | 'medium' | 'high' | 'very-high';
    monthly: 'low' | 'medium' | 'high' | 'very-high';
  };
  
  // 적합성
  goodWith: {
    children: boolean;
    otherPets: boolean;
    beginners: boolean;
    apartments: boolean;
  };
  
  // 설명
  description: string;
  personality: string[];
  pros: string[];
  cons: string[];
  
  // 이미지 (나중에 추가할 예정)
  imageUrl?: string;
  color?: string; // 카드 배경색
}

// 추천 결과
export interface RecommendationResult {
  animal: Animal;
  matchScore: number; // 0-100
  matchReasons: string[];
  considerations: string[];
}

// 질문 타입
export interface Question {
  id: string;
  title: string;
  description?: string;
  type: 'single' | 'multiple' | 'range' | 'boolean';
  options?: QuestionOption[];
  propertyPath: keyof UserProfile;
  illustration?: string; // 귀여운 일러스트레이션
}

export interface QuestionOption {
  value: any;
  label: string;
  description?: string;
  emoji?: string;
} 