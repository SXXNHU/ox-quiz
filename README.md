# ox-quiz

시험기간 감성으로 만든 모바일 OX 퀴즈 웹앱입니다.  
빠르게 문제를 풀고, 제한 시간 안에 O/X를 고르면 즉시 결과와 마무리 화면까지 이어집니다.

## Stack

- React
- TypeScript
- Vite

## Features

- 모바일 우선 OX 퀴즈 UI
- 문제별 제한 시간 진행
- 정답 선택 직후 피드백 표시 후 다음 문제 이동
- 결과 화면에서 점수와 소요 시간 요약
- 시험기간 밈 톤의 카피와 비주얼

## Run

```bash
npm install
npm run dev
```

Production build:

```bash
npm run build
npm run preview
```

## Structure

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

## Edit Points

- 문제, 정답, 해설 수정: `src/data/quizzes.ts`
- 진행 시간과 화면 흐름 수정: `src/App.tsx`
- 결과 화면 문구 수정: `src/components/ResultScreen.tsx`
- 전체 스타일 수정: `src/styles.css`

## Deploy

Vercel에 정적 프론트엔드로 배포할 수 있습니다.
