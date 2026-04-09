import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import endingImage from './assets/please.png'
import { QuizCard } from './components/QuizCard'
import { ResultScreen } from './components/ResultScreen'
import { quizzes } from './data/quizzes'

const QUESTION_TIME_LIMIT_MS = 7_000
const FEEDBACK_DELAY_MS = 3_000
const ENDING_MODAL_DELAY_MS = 3_000

function App() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<boolean | null>(null)
  const [isTimedOut, setIsTimedOut] = useState(false)
  const [isLocked, setIsLocked] = useState(false)
  const [remainingMs, setRemainingMs] = useState(QUESTION_TIME_LIMIT_MS)
  const [elapsedMs, setElapsedMs] = useState<number | null>(null)
  const [isEndingModalVisible, setIsEndingModalVisible] = useState(false)

  const startedAtRef = useRef<number | null>(null)
  const advanceTimeoutRef = useRef<number | null>(null)
  const endingModalTimeoutRef = useRef<number | null>(null)

  const currentQuiz = quizzes[currentIndex]
  const isFinished = elapsedMs !== null

  const clearAdvanceTimeout = useCallback(() => {
    if (advanceTimeoutRef.current !== null) {
      window.clearTimeout(advanceTimeoutRef.current)
      advanceTimeoutRef.current = null
    }
  }, [])

  const clearEndingModalTimeout = useCallback(() => {
    if (endingModalTimeoutRef.current !== null) {
      window.clearTimeout(endingModalTimeoutRef.current)
      endingModalTimeoutRef.current = null
    }
  }, [])

  const moveToNextQuestion = useCallback(() => {
    clearAdvanceTimeout()
    setSelectedAnswer(null)
    setIsTimedOut(false)
    setIsLocked(false)

    if (currentIndex === quizzes.length - 1) {
      const startedAt = startedAtRef.current ?? performance.now()
      setElapsedMs(performance.now() - startedAt)
      return
    }

    setRemainingMs(QUESTION_TIME_LIMIT_MS)
    setCurrentIndex((previousIndex) => previousIndex + 1)
  }, [clearAdvanceTimeout, currentIndex])

  const handleAnswer = useCallback(
    (answer: boolean | null) => {
      if (isLocked || isFinished) {
        return
      }

      setSelectedAnswer(answer)
      setIsTimedOut(answer === null)
      setIsLocked(true)
      clearAdvanceTimeout()
      advanceTimeoutRef.current = window.setTimeout(
        moveToNextQuestion,
        FEEDBACK_DELAY_MS,
      )
    },
    [clearAdvanceTimeout, isFinished, isLocked, moveToNextQuestion],
  )

  useEffect(() => {
    if (startedAtRef.current === null) {
      startedAtRef.current = performance.now()
    }
  }, [])

  useEffect(() => {
    if (isFinished || isLocked) {
      return
    }

    const questionStartedAt = performance.now()
    const intervalId = window.setInterval(() => {
      const nextRemainingMs = Math.max(
        QUESTION_TIME_LIMIT_MS - (performance.now() - questionStartedAt),
        0,
      )
      setRemainingMs(nextRemainingMs)
    }, 100)

    const timeoutId = window.setTimeout(() => {
      setRemainingMs(0)
      setSelectedAnswer(null)
      setIsTimedOut(true)
      setIsLocked(true)
      clearAdvanceTimeout()
      advanceTimeoutRef.current = window.setTimeout(
        moveToNextQuestion,
        FEEDBACK_DELAY_MS,
      )
    }, QUESTION_TIME_LIMIT_MS)

    return () => {
      window.clearInterval(intervalId)
      window.clearTimeout(timeoutId)
    }
  }, [clearAdvanceTimeout, currentIndex, isFinished, isLocked, moveToNextQuestion])

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [currentIndex])

  useEffect(() => {
    clearEndingModalTimeout()

    if (!isFinished) {
      setIsEndingModalVisible(false)
      return
    }

    endingModalTimeoutRef.current = window.setTimeout(() => {
      setIsEndingModalVisible(true)
    }, ENDING_MODAL_DELAY_MS)

    return () => {
      clearEndingModalTimeout()
    }
  }, [clearEndingModalTimeout, isFinished])

  useEffect(() => {
    return () => {
      clearAdvanceTimeout()
      clearEndingModalTimeout()
    }
  }, [clearAdvanceTimeout, clearEndingModalTimeout])

  const progressLabel = useMemo(
    () => `${Math.min(currentIndex + 1, quizzes.length)} / ${quizzes.length}`,
    [currentIndex],
  )

  return (
    <main className="app-shell">
      <div className="mobile-frame">
        {!isFinished && currentQuiz ? (
          <QuizCard
            quiz={currentQuiz}
            index={currentIndex}
            total={quizzes.length}
            progressLabel={progressLabel}
            remainingMs={remainingMs}
            selectedAnswer={selectedAnswer}
            isTimedOut={isTimedOut}
            isLocked={isLocked}
            onAnswer={handleAnswer}
          />
        ) : (
          <>
            <ResultScreen elapsedMs={elapsedMs ?? 0} />
            {isEndingModalVisible ? (
              <div
                className="ending-modal-backdrop"
                role="presentation"
                onClick={() => setIsEndingModalVisible(false)}
              >
                <section
                  className="ending-image-section ending-modal"
                  role="dialog"
                  aria-modal="true"
                  aria-labelledby="ending-image-title"
                  onClick={(event) => event.stopPropagation()}
                >
                  <button
                    type="button"
                    className="ending-modal-close"
                    onClick={() => setIsEndingModalVisible(false)}
                    aria-label="닫기"
                  >
                    ×
                  </button>
                  <p className="ending-image-kicker">공부하러 간다며...</p>
                  <h2 id="ending-image-title">그래도 마지막 인사는 보고 가야죠</h2>
                  <figure className="ending-figure">
                    <img
                      src={endingImage}
                      alt="마지막에 보여주는 인사 이미지"
                    />
                  </figure>
                </section>
              </div>
            ) : null}
          </>
        )}
      </div>
    </main>
  )
}

export default App
