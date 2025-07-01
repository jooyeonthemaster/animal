import { Question } from '@/types';

export const questions: Question[] = [
  {
    id: 'living-space',
    title: '어떤 곳에서 살고 계신가요? 🏠',
    description: '당신의 주거 환경을 알려주세요',
    type: 'single',
    propertyPath: 'livingSpace',
    options: [
      {
        value: 'apartment',
        label: '아파트',
        description: '도시의 아파트나 빌라',
        emoji: '🏢',
      },
      {
        value: 'house',
        label: '단독주택',
        description: '마당이 있는 주택',
        emoji: '🏡',
      },
      {
        value: 'studio',
        label: '원룸/오피스텔',
        description: '작은 공간',
        emoji: '🏠',
      },
      {
        value: 'farm',
        label: '전원주택/농장',
        description: '넓은 야외 공간',
        emoji: '🌾',
      },
    ],
  },
  {
    id: 'has-yard',
    title: '마당이나 야외 공간이 있나요? 🌳',
    type: 'boolean',
    propertyPath: 'hasYard',
    options: [
      {
        value: true,
        label: '네, 있어요',
        emoji: '✅',
      },
      {
        value: false,
        label: '아니요, 없어요',
        emoji: '❌',
      },
    ],
  },
  {
    id: 'space-size',
    title: '집의 크기는 어느 정도인가요? 📏',
    type: 'single',
    propertyPath: 'spaceSize',
    options: [
      {
        value: 'small',
        label: '작음',
        description: '~20평',
        emoji: '🏠',
      },
      {
        value: 'medium',
        label: '중간',
        description: '20~40평',
        emoji: '🏡',
      },
      {
        value: 'large',
        label: '넓음',
        description: '40평 이상',
        emoji: '🏰',
      },
    ],
  },
  {
    id: 'activity-level',
    title: '평소 활동량은 어떤가요? 🏃',
    description: '당신의 일상적인 활동 수준을 선택해주세요',
    type: 'single',
    propertyPath: 'activityLevel',
    options: [
      {
        value: 'very-low',
        label: '매우 적음',
        description: '집에서 주로 휴식',
        emoji: '🛋️',
      },
      {
        value: 'low',
        label: '적음',
        description: '가벼운 산책 정도',
        emoji: '🚶',
      },
      {
        value: 'moderate',
        label: '보통',
        description: '규칙적인 운동',
        emoji: '🚴',
      },
      {
        value: 'high',
        label: '많음',
        description: '매일 운동',
        emoji: '🏃',
      },
      {
        value: 'very-high',
        label: '매우 많음',
        description: '고강도 활동',
        emoji: '🏋️',
      },
    ],
  },
  {
    id: 'work-schedule',
    title: '일하는 패턴은 어떤가요? 💼',
    type: 'single',
    propertyPath: 'workSchedule',
    options: [
      {
        value: 'home',
        label: '재택근무/프리랜서',
        description: '집에서 주로 일해요',
        emoji: '🏠',
      },
      {
        value: 'office-regular',
        label: '정규 출퇴근',
        description: '9시-6시 근무',
        emoji: '🏢',
      },
      {
        value: 'office-long',
        label: '야근이 많음',
        description: '늦게까지 일해요',
        emoji: '🌙',
      },
      {
        value: 'travel-frequent',
        label: '출장이 잦음',
        description: '자주 집을 비워요',
        emoji: '✈️',
      },
    ],
  },
  {
    id: 'daily-free-time',
    title: '하루에 펫과 보낼 수 있는 시간은? ⏰',
    type: 'range',
    propertyPath: 'dailyFreeTime',
    options: [
      {
        value: 1,
        label: '1시간 미만',
        emoji: '⏰',
      },
      {
        value: 2,
        label: '1-2시간',
        emoji: '⏱️',
      },
      {
        value: 4,
        label: '2-4시간',
        emoji: '🕐',
      },
      {
        value: 6,
        label: '4-6시간',
        emoji: '🕑',
      },
      {
        value: 8,
        label: '6시간 이상',
        emoji: '🕒',
      },
    ],
  },
  {
    id: 'pet-experience',
    title: '반려동물 경험이 있으신가요? 🐾',
    type: 'single',
    propertyPath: 'petExperience',
    options: [
      {
        value: 'none',
        label: '처음이에요',
        description: '반려동물을 키워본 적 없어요',
        emoji: '🌱',
      },
      {
        value: 'beginner',
        label: '초보자',
        description: '조금 키워봤어요',
        emoji: '🌿',
      },
      {
        value: 'intermediate',
        label: '중급자',
        description: '여러 번 키워봤어요',
        emoji: '🌳',
      },
      {
        value: 'expert',
        label: '전문가',
        description: '오랜 경험이 있어요',
        emoji: '🌲',
      },
    ],
  },
  {
    id: 'noise-tolerance',
    title: '소음에 대한 허용도는? 🔊',
    type: 'single',
    propertyPath: 'noiseToleranceLevel',
    options: [
      {
        value: 'low',
        label: '조용한 게 좋아요',
        description: '소음에 민감해요',
        emoji: '🤫',
      },
      {
        value: 'medium',
        label: '적당한 소리는 괜찮아요',
        description: '일반적인 수준',
        emoji: '🔉',
      },
      {
        value: 'high',
        label: '소음은 상관없어요',
        description: '시끄러워도 괜찮아요',
        emoji: '🔊',
      },
    ],
  },
  {
    id: 'has-children',
    title: '어린이가 있나요? 👶',
    type: 'boolean',
    propertyPath: 'hasChildren',
    options: [
      {
        value: true,
        label: '네, 있어요',
        emoji: '👨‍👩‍👧‍👦',
      },
      {
        value: false,
        label: '아니요, 없어요',
        emoji: '👫',
      },
    ],
  },
  {
    id: 'monthly-budget',
    title: '한 달 예산은 어느 정도인가요? 💰',
    description: '사료, 용품, 병원비 등을 포함한 예산',
    type: 'single',
    propertyPath: 'monthlyBudget',
    options: [
      {
        value: 'low',
        label: '5만원 이하',
        description: '최소한의 비용',
        emoji: '💵',
      },
      {
        value: 'medium',
        label: '5-15만원',
        description: '일반적인 수준',
        emoji: '💶',
      },
      {
        value: 'high',
        label: '15-30만원',
        description: '여유있는 편',
        emoji: '💷',
      },
      {
        value: 'premium',
        label: '30만원 이상',
        description: '충분한 예산',
        emoji: '💸',
      },
    ],
  },
  {
    id: 'interaction-preference',
    title: '펫과의 상호작용은 얼마나 원하시나요? 🤝',
    type: 'single',
    propertyPath: 'interactionPreference',
    options: [
      {
        value: 'minimal',
        label: '최소한',
        description: '관찰 위주',
        emoji: '👀',
      },
      {
        value: 'moderate',
        label: '적당히',
        description: '하루 1-2번 교감',
        emoji: '🤗',
      },
      {
        value: 'high',
        label: '자주',
        description: '여러 번 놀아주기',
        emoji: '🎾',
      },
      {
        value: 'constant',
        label: '항상',
        description: '늘 함께하고 싶어요',
        emoji: '💕',
      },
    ],
  },
  {
    id: 'grooming-willingness',
    title: '털 관리나 목욕은 얼마나 할 수 있나요? 🧼',
    type: 'single',
    propertyPath: 'groomingWillingness',
    options: [
      {
        value: 'minimal',
        label: '최소한만',
        description: '거의 안 해도 되는 게 좋아요',
        emoji: '🚿',
      },
      {
        value: 'moderate',
        label: '가끔',
        description: '주 1-2회 정도는 가능',
        emoji: '🧽',
      },
      {
        value: 'high',
        label: '자주',
        description: '매일 관리도 괜찮아요',
        emoji: '✨',
      },
    ],
  },
  {
    id: 'training-commitment',
    title: '훈련에 얼마나 시간을 쓸 수 있나요? 🎓',
    type: 'single',
    propertyPath: 'trainingCommitment',
    options: [
      {
        value: 'low',
        label: '적게',
        description: '기본적인 것만',
        emoji: '📖',
      },
      {
        value: 'medium',
        label: '보통',
        description: '필요한 만큼',
        emoji: '📚',
      },
      {
        value: 'high',
        label: '많이',
        description: '적극적으로 훈련',
        emoji: '🎯',
      },
    ],
  },
]; 