import { useState } from "react";
import { quizQuestions } from "@/data/quizData";
import ProgressBar from "./ProgressBar";
import QuestionCard from "./QuestionCard";
import NavigationButtons from "./NavigationButtons";
import Mascot from "./Mascot";
import ResultsScreen from "./ResultsScreen";

const QuizContainer = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [showResults, setShowResults] = useState(false);

  const handleSelectAnswer = (answer: string) => {
    setAnswers((prev) => ({
      ...prev,
      [currentQuestion]: answer,
    }));
  };

  const handleNext = () => {
    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion((prev) => prev + 1);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion((prev) => prev - 1);
    }
  };

  const handleSubmit = () => {
    setShowResults(true);
  };

  const handleRestart = () => {
    setCurrentQuestion(0);
    setAnswers({});
    setShowResults(false);
  };

  const calculateScore = () => {
    return quizQuestions.reduce((score, question, index) => {
      if (answers[index] === question.correctAnswer) {
        return score + 1;
      }
      return score;
    }, 0);
  };

  const answeredQuestions = Object.keys(answers).map(Number);
  const canGoNext = answers[currentQuestion] !== undefined;
  const isLastQuestion = currentQuestion === quizQuestions.length - 1;

  if (showResults) {
    return (
      <ResultsScreen
        score={calculateScore()}
        totalQuestions={quizQuestions.length}
        onRestart={handleRestart}
      />
    );
  }

  return (
    <div className="min-h-screen quiz-gradient-bg flex items-center justify-center p-4 md:p-8">
      <div className="quiz-card w-full max-w-2xl p-8 md:p-12 relative overflow-visible">
        {/* Mascot - bottom left corner */}
        <Mascot show={currentQuestion === 0} />

        {/* Header */}
        <div className="text-center mb-6">
          <h1 className="mb-2">
            <span className="quiz-title text-3xl md:text-4xl">Test </span>
            <span className="quiz-title-italic text-3xl md:text-4xl">Your Knowledge</span>
          </h1>
          <p className="text-muted-foreground text-sm">
            Answer all questions to see your results
          </p>
        </div>

        {/* Progress Bar */}
        <ProgressBar
          totalQuestions={quizQuestions.length}
          currentQuestion={currentQuestion}
          answeredQuestions={answeredQuestions}
        />

        {/* Question */}
        <QuestionCard
          question={quizQuestions[currentQuestion]}
          selectedAnswer={answers[currentQuestion] || null}
          onSelectAnswer={handleSelectAnswer}
          questionNumber={currentQuestion + 1}
        />

        {/* Navigation */}
        <NavigationButtons
          currentQuestion={currentQuestion}
          totalQuestions={quizQuestions.length}
          onPrevious={handlePrevious}
          onNext={handleNext}
          onSubmit={handleSubmit}
          canGoNext={canGoNext}
          isLastQuestion={isLastQuestion}
        />
      </div>
    </div>
  );
};

export default QuizContainer;
