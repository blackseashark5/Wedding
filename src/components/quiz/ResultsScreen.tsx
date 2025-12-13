interface ResultsScreenProps {
  score: number;
  totalQuestions: number;
  onRestart: () => void;
}

const ResultsScreen = ({ score, totalQuestions, onRestart }: ResultsScreenProps) => {
  const percentage = Math.round((score / totalQuestions) * 100);

  return (
    <div className="min-h-screen quiz-gradient-bg flex items-center justify-center p-8">
      <div className="text-center animate-scale-in">
        {/* Keep Learning Badge */}
        <div className="inline-block mb-8">
          <span className="quiz-badge">Keep Learning!</span>
        </div>

        {/* Score Display */}
        <div className="mb-10">
          <h2 className="quiz-title-italic text-2xl md:text-3xl mb-4">
            Your Final score is
          </h2>
          <div className="flex items-end justify-center gap-1">
            <span className="score-display text-8xl md:text-9xl font-semibold leading-none">
              {percentage}
            </span>
            <span className="score-display text-4xl md:text-5xl font-medium mb-4">%</span>
          </div>
        </div>

        {/* Start Again Button */}
        <button onClick={onRestart} className="quiz-start-btn">
          Start Again
        </button>
      </div>
    </div>
  );
};

export default ResultsScreen;

