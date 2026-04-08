type TimerBarProps = {
  remainingMs: number
  totalMs: number
}

export function TimerBar({ remainingMs, totalMs }: TimerBarProps) {
  const progress = Math.max(0, Math.min(remainingMs / totalMs, 1))
  const remainingSeconds = (remainingMs / 1000).toFixed(1)

  return (
    <div className="timer-wrap" aria-label={`남은 시간 ${remainingSeconds}초`}>
      <div
        className="timer-bar"
        role="progressbar"
        aria-valuemin={0}
        aria-valuemax={totalMs}
        aria-valuenow={remainingMs}
        aria-valuetext={`${remainingSeconds}초 남음`}
      >
        <div
          className="timer-bar-fill"
          style={{ transform: `scaleX(${progress})` }}
        />
      </div>
      <span className="timer-seconds" aria-hidden="true">
        {remainingSeconds}s
      </span>
    </div>
  )
}
