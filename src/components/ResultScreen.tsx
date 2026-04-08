type ResultScreenProps = {
  elapsedMs: number
}

export function ResultScreen({ elapsedMs }: ResultScreenProps) {
  const elapsedSeconds = (elapsedMs / 1000).toFixed(2)

  return (
    <section className="result-screen" aria-labelledby="result-title">
      <p className="result-kicker">퀴즈 종료</p>
      <h1 id="result-title" className="result-title">
        당신은 {elapsedSeconds}초 만에
        <br />
        이 퀴즈를 완주했어요!
      </h1>
      <p className="result-copy">
        은근 빠르게 끝냈네요.
        <br />
        이제 다시 공부하러 가볼까요?
      </p>
      <div className="result-time-card" aria-live="polite">
        <span className="result-time-label">방금 낭비한 시험기간</span>
        <strong className="result-time-value">{elapsedSeconds}s</strong>
      </div>
    </section>
  )
}
