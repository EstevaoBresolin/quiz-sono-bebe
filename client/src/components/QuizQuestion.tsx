import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

interface QuestionOption {
  value: string;
  label: string;
  weight: number;
}

interface Question {
  id: number;
  question: string;
  options: QuestionOption[];
}

interface QuizQuestionProps {
  question: Question;
  progress: number;
  onAnswer: (answer: string) => void;
}

export default function QuizQuestion({
  question,
  progress,
  onAnswer,
}: QuizQuestionProps) {
  return (
    <div
      className="min-h-screen w-full flex items-center justify-center px-4 py-8"
      style={{
        backgroundImage: "url(/images/hero-background.png)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="max-w-2xl w-full">
        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-3">
            <span className="text-sm font-semibold text-muted-foreground">
              Pergunta {question.id} de 5
            </span>
            <span className="text-sm font-semibold text-accent">
              {Math.round(progress * 100)}%
            </span>
          </div>
          <Progress value={progress * 100} className="h-2 rounded-full" />
        </div>

        {/* Question Card */}
        <div className="bg-white/95 backdrop-blur rounded-3xl shadow-2xl p-8 md:p-12 animate-in fade-in duration-300">
          {/* Question */}
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 leading-tight">
            {question.question}
          </h2>

          {/* Options */}
          <div className="space-y-4">
            {question.options.map(option => (
              <Button
                key={option.value}
                onClick={() => onAnswer(option.value)}
                variant="outline"
                className="w-full justify-start h-auto p-6 text-left hover:bg-accent/10 hover:border-accent transition-all duration-200 hover:scale-102 group"
              >
                <div className="flex items-center gap-4 w-full min-w-0">
                  <div className="w-6 h-6 min-w-6 min-h-6 rounded-full border-2 border-accent group-hover:bg-accent group-hover:border-accent transition-all flex-shrink-0" />
                  <span className="text-base md:text-lg text-foreground group-hover:text-accent font-medium break-words">
                    {option.label}
                  </span>
                </div>
              </Button>
            ))}
          </div>

          {/* Footer */}
          <p className="text-sm text-muted-foreground mt-8 text-center px-4">
            Selecione a opção que melhor descreve a situação do seu bebê
          </p>
        </div>
      </div>
    </div>
  );
}
