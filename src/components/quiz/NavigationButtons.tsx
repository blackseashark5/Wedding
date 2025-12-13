import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface NavigationButtonsProps {
  currentQuestion: number;
  totalQuestions: number;
  onPrevious: () => void;
  onNext: () => void;
  onSubmit: () => void;
  canGoNext: boolean;
  isLastQuestion: boolean;
}

const NavigationButtons = ({
  currentQuestion,
  onPrevious,
  onNext,
  onSubmit,
  canGoNext,
  isLastQuestion,
}: NavigationButtonsProps) => {
  const handlePrevClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    onPrevious();
  };

  const handleNextClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    onNext();
  };

  const handleSubmitClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    onSubmit();
  };

  return (
    <div className="flex items-center justify-end gap-2 mt-6">
      {isLastQuestion ? (
        <button
          type="button"
          onClick={handleSubmitClick}
          disabled={!canGoNext}
          className="quiz-submit-btn"
        >
          Submit
        </button>
      ) : (
        <>
          <button
            type="button"
            onClick={handlePrevClick}
            disabled={currentQuestion === 0}
            className={cn("quiz-nav-btn")}
            aria-label="Previous question"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            type="button"
            onClick={handleNextClick}
            disabled={!canGoNext}
            className={cn("quiz-nav-btn", canGoNext && "active")}
            aria-label="Next question"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </>
      )}
    </div>
  );
};

export default NavigationButtons;
