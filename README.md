# ox-quiz

시험기간 감성으로 만든 모바일 OX 퀴즈 웹입니다.  
빠르게 보고 누르는 흐름에 맞춰 타이머, 즉시 피드백, 결과 화면, 마무리 모달까지 한 번에 이어지도록 구성했습니다.

## 실행 방법

1. `npm install`
2. `npm run dev`

배포용 빌드

1. `npm run build`
2. `npm run preview`

## 구조

```text
src/
├─ App.tsx
├─ main.tsx
├─ styles.css
├─ assets/
│  └─ hero.png
├─ components/
│  ├─ QuizCard.tsx
│  ├─ ResultScreen.tsx
│  └─ TimerBar.tsx
└─ data/
   └─ quizzes.ts
```

## 주요 포인트

- 모바일 세로 화면 기준으로 레이아웃을 맞췄습니다.
- 문제마다 제한 시간이 있고 시간이 끝나면 자동으로 다음 문제로 넘어갑니다.
- O/X 선택 직후 정답과 해설을 짧게 보여준 뒤 다음 문제로 진행합니다.
- 결과 화면에서는 총 소요 시간을 보여주고, 잠시 뒤 마무리 이미지를 모달로 띄웁니다.

## 수정 포인트

- 문제/정답/해설 수정: `src/data/quizzes.ts`
- 문제 진행 시간, 정답 표시 시간 수정: `src/App.tsx`
- 전체 모바일 UI 스타일 수정: `src/styles.css`
