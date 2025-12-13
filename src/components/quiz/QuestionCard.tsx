import { cn } from "@/lib/utils";
import { Question } from "@/data/quizData";

interface QuestionCardProps {
  question: Question;
  selectedAnswer: string | null;
  onSelectAnswer: (answer: string) => void;
  questionNumber: number;
}

const QuestionCard = ({
  question,
  selectedAnswer,
  onSelectAnswer,
  questionNumber,
}: QuestionCardProps) => {
  return (
    <div className="w-full animate-fade-in-up">
      {/* Question Pill */}
      <div className="quiz-question-pill rounded-xl py-3.5 px-6 mb-5">
        <p className="text-center text-sm font-medium">
          {questionNumber}. {question.question}
        </p>
      </div>

      {/* Answer Options */}
      <div className="space-y-3">
        {question.options.map((option, index) => (
          <button
            key={index}
            onClick={() => onSelectAnswer(option)}
            className={cn(
              "quiz-answer-option w-full text-sm font-medium",
              selectedAnswer === option && "selected"
            )}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};

export default QuestionCard;
