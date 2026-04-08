export type QuizItem = {
  id: number
  question: string
  answer: boolean
  explanation: string
}

export const quizzes: QuizItem[] = [
  {
    id: 1,
    question: '하마는 땀이 분홍색이라서, 사실상 분홍 땀을 흘리는 동물이다.',
    answer: true,
    explanation:
      '진짜다. 피부를 보호하는 붉은빛 분비액 때문에 "피땀"처럼 보이는 유명한 동물이다.',
  },
  {
    id: 2,
    question: '문어는 심장이 하나뿐이라 놀라면 심장이 멎을 수도 있다.',
    answer: false,
    explanation:
      '문어는 심장이 3개다. 몸통용 1개, 아가미로 피 보내는 심장 2개가 따로 있다.',
  },
  {
    id: 3,
    question: '바나나는 딸기보다 유전적으로 인간과 더 가깝다.',
    answer: false,
    explanation:
      '둘 다 꽤 많은 기본 유전자를 공유하지만, "바나나가 인간과 더 가깝다"는 식의 밈은 과장에 가깝다.',
  },
  {
    id: 4,
    question: '상어는 방귀를 뀔 수 없지만, 청어는 의사소통용 방귀 소리를 낸다.',
    answer: true,
    explanation:
      '청어는 공기를 배출하며 소리를 내는 것으로 알려져 있다. 쓸데없이 놀라운 해양 상식이다.',
  },
  {
    id: 5,
    question: '코알라의 지문은 사람 지문이랑 너무 비슷해서 구별이 어려울 수 있다.',
    answer: true,
    explanation:
      '현미경 수준에서 꽤 비슷해 보일 수 있다고 알려져 있다. 정말 쓸데없는데 묘하게 무섭다.',
  },
  {
    id: 6,
    question: '벌꿀은 절대 상하지 않는 음식으로 알려져 있다.',
    answer: true,
    explanation:
      '수분이 적고 산성이며 항균 성질이 있어 매우 오래 보존된다. 고대 무덤의 꿀도 먹을 수 있었다는 얘기가 있을 정도다.',
  },
  {
    id: 7,
    question: '고양이는 단맛을 거의 느끼지 못한다.',
    answer: true,
    explanation:
      '고양이는 단맛 수용체 기능이 약해서 사람처럼 달콤함을 즐기지 못하는 편이다.',
  },
  {
    id: 8,
    question: '플라밍고는 원래 깃털이 파란색인데 햇빛 때문에 분홍색으로 바뀐다.',
    answer: false,
    explanation:
      '플라밍고의 분홍빛은 먹이 속 색소 영향이 크다. 새우, 조류 같은 먹이를 먹으며 물들어간다.',
  },
  {
    id: 9,
    question: '인간의 위산은 면도날도 녹일 만큼 강한 산성에 가깝다.',
    answer: true,
    explanation:
      '위산은 아주 강한 산성이다. 물론 몸은 점막으로 보호하지만, 표현만 놓고 보면 꽤 섬뜩하다.',
  },
  {
    id: 10,
    question: '와플 콘은 아이스크림을 위해 처음부터 계획적으로 발명된 음식이다.',
    answer: false,
    explanation:
      '유명한 일화로는 박람회 현장에서 접시가 부족해 과자를 말아 대체했다는 이야기가 널리 퍼져 있다.',
  },
]
