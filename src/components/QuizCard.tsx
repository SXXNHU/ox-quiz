import type { QuizItem } from '../data/quizzes'
import { TimerBar } from './TimerBar'

type QuizCardProps = {
  quiz: QuizItem
  index: number
  total: number
  progressLabel: string
  remainingMs: number
  selectedAnswer: boolean | null
  isTimedOut: boolean
  isLocked: boolean
  onAnswer: (answer: boolean | null) => void
}

const QUESTION_TIME_LIMIT_MS = 7_000

export function QuizCard({
  quiz,
  index,
  total,
  progressLabel,
  remainingMs,
  selectedAnswer,
  isTimedOut,
  isLocked,
  onAnswer,
}: QuizCardProps) {
  const isCorrect = selectedAnswer === quiz.answer
  const feedbackTitle = isTimedOut
    ? '시간 초과'
    : isCorrect
      ? '오, 이건 맞혔네요'
      : '아쉽게도 반대입니다'

  return (
    <section className="quiz-screen" aria-labelledby={`quiz-title-${quiz.id}`}>
      <header className="quiz-topbar">
        <p className="quiz-progress" aria-label={`현재 ${index + 1}번째 문제`}>
          {progressLabel}
        </p>
        <p className="quiz-caption">OX 신박한 상식 퀴즈</p>
      </header>

      <TimerBar remainingMs={remainingMs} totalMs={QUESTION_TIME_LIMIT_MS} />

      <article className="quiz-card">
        <p className="quiz-eyebrow">Q{index + 1}. 오늘의 쓸데없이 궁금한 것</p>
        <h1 id={`quiz-title-${quiz.id}`} className="quiz-question">
          {quiz.question}
        </h1>

        <div
          className={`quiz-feedback ${isLocked ? 'is-visible' : ''}`}
          aria-live="polite"
        >
          <p className="quiz-feedback-title">{feedbackTitle}</p>
          <p className="quiz-feedback-answer">
            정답은 {quiz.answer ? 'O' : 'X'}
          </p>
          <p className="quiz-feedback-copy">{quiz.explanation}</p>
        </div>
      </article>

      <div
        className="answer-grid"
        role="group"
        aria-label={`${total}문제 중 ${index + 1}번째 문제 답안 선택`}
      >
        <button
          type="button"
          className={`answer-button answer-button-o ${
            selectedAnswer === true ? 'is-selected' : ''
          }`}
          onClick={() => onAnswer(true)}
          disabled={isLocked}
          aria-pressed={selectedAnswer === true}
        >
          <span className="answer-button-label">O</span>
          <span className="answer-button-copy">이건 진짜다</span>
        </button>
        <button
          type="button"
          className={`answer-button answer-button-x ${
            selectedAnswer === false ? 'is-selected' : ''
          }`}
          onClick={() => onAnswer(false)}
          disabled={isLocked}
          aria-pressed={selectedAnswer === false}
        >
          <span className="answer-button-label">X</span>
          <span className="answer-button-copy">에이 설마</span>
        </button>
      </div>

      <p className="quiz-hint">시간 초과 시 자동 진행</p>
    </section>
  )
}
