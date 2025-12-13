import { cn } from "@/lib/utils";

interface ProgressBarProps {
  totalQuestions: number;
  currentQuestion: number;
  answeredQuestions: number[];
}

const ProgressBar = ({ totalQuestions, currentQuestion, answeredQuestions }: ProgressBarProps) => {
  return (
    <div className="flex items-center gap-2 w-full max-w-md mx-auto mb-8">
      {Array.from({ length: totalQuestions }, (_, index) => (
        <div
          key={index}
          className={cn(
            "quiz-progress-segment flex-1",
            answeredQuestions.includes(index) || index < currentQuestion
              ? "completed"
              : "incomplete"
          )}
        />
      ))}
    </div>
  );
};

export default ProgressBar;
