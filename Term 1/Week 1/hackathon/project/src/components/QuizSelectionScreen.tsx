import { ArrowLeft } from 'lucide-react';
import type { Quiz, Level } from '@/data/questions';
import { quizzesByLevel } from '@/data/questions';
import type { QuizLevel } from '@/components/QuizLevelCard';

interface QuizSelectionScreenProps {
  level: QuizLevel;
  onSelectQuiz: (quiz: Quiz) => void;
  onBack: () => void;
}

export default function QuizSelectionScreen({ level, onSelectQuiz, onBack }: QuizSelectionScreenProps) {
  const quizzes = quizzesByLevel[level.id as Level];

  return (
    <div className="math-texture animated-gradient animate-gradient-drift flex min-h-full flex-col items-center px-6 py-12">
      <div className="w-full max-w-2xl opacity-0 animate-fade-in-up">
        {/* Header */}
        <div className="mb-8 flex items-center justify-between">
          <button
            onClick={onBack}
            className="flex items-center gap-2 rounded-full border border-brand-200/60 bg-white/50 px-4 py-2 text-sm font-medium text-brand-700 backdrop-blur-sm transition-all hover:bg-white/80 hover:border-brand-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-400"
          >
            <ArrowLeft className="h-4 w-4" strokeWidth={2} />
            Back
          </button>
          <span className={`rounded-full bg-gradient-to-r ${level.gradient} px-5 py-2 text-sm font-semibold text-brand-800`}>
            {level.name}
          </span>
        </div>

        {/* Title */}
        <div className="mb-8 text-center">
          <h2 className="text-2xl font-bold text-brand-800">Choose a quiz</h2>
          <p className="mt-2 text-sm text-brand-600/70">
            Select one of the {quizzes.length} quizzes in this level to begin.
          </p>
        </div>

        {/* Quiz list */}
        <div className="flex flex-col gap-4">
          {quizzes.map((quiz, index) => (
            <button
              key={quiz.id}
              onClick={() => onSelectQuiz(quiz)}
              style={{ animationDelay: `${index * 100}ms` }}
              className="group flex items-center justify-between rounded-2xl border border-brand-100/60 bg-white/50 p-5 backdrop-blur-md shadow-sm opacity-0 animate-fade-in-up transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-brand-200/30 hover:border-brand-300/50 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 focus-visible:ring-offset-2"
            >
              <div className="flex items-center gap-4">
                <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-brand-100 text-sm font-bold text-brand-600 transition-colors group-hover:bg-brand-200">
                  {index + 1}
                </span>
                <div className="text-left">
                  <h3 className="text-base font-semibold text-brand-800">{quiz.title}</h3>
                  <p className="mt-0.5 text-xs text-brand-500/70">
                    {quiz.questions.length} questions
                  </p>
                </div>
              </div>
              <span className="text-sm font-medium text-brand-400 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                Start &rarr;
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
