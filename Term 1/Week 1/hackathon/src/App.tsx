import { useState } from 'react';
import { Sprout, FunctionSquare, Sigma } from 'lucide-react';
import Logo from '@/components/Logo';
import QuizLevelCard, { QuizLevel } from '@/components/QuizLevelCard';
import QuizSelectionScreen from '@/components/QuizSelectionScreen';
import QuizScreen from '@/components/QuizScreen';
import ResultsScreen from '@/components/ResultsScreen';
import { Quiz } from '@/data/questions';

const levels: QuizLevel[] = [
  {
    id: 'beginner',
    name: 'Beginner',
    description: 'Build your foundation with core algebra and geometry.',
    icon: Sprout,
    gradient: 'from-brand-100 to-brand-200',
    iconColor: 'text-brand-600',
  },
  {
    id: 'intermediate',
    name: 'Intermediate',
    description: 'Sharpen your skills with functions and trigonometry.',
    icon: FunctionSquare,
    gradient: 'from-brand-200 to-accent-200',
    iconColor: 'text-brand-700',
  },
  {
    id: 'advanced',
    name: 'Advanced',
    description: 'Challenge yourself with calculus and complex topics.',
    icon: Sigma,
    gradient: 'from-accent-200 to-accent-300',
    iconColor: 'text-accent-700',
  },
];

type View = 'frontpage' | 'quiz-selection' | 'quiz' | 'results';

function App() {
  const [view, setView] = useState<View>('frontpage');
  const [selectedLevel, setSelectedLevel] = useState<QuizLevel | null>(null);
  const [selectedQuiz, setSelectedQuiz] = useState<Quiz | null>(null);
  const [answers, setAnswers] = useState<(string | null)[]>([]);
  const [retryCount, setRetryCount] = useState(0);

  const handleSelectLevel = (id: string) => {
    const level = levels.find(l => l.id === id);
    if (level) {
      setSelectedLevel(level);
      setView('quiz-selection');
    }
  };

  const handleSelectQuiz = (quiz: Quiz) => {
    setSelectedQuiz(quiz);
    setView('quiz');
  };

  const handleSubmit = (submittedAnswers: (string | null)[]) => {
    setAnswers(submittedAnswers);
    setView('results');
  };

  const handleRetry = () => {
    setAnswers([]);
    setRetryCount(c => c + 1);
    setView('quiz');
  };

  const handleBackToLevels = () => {
    setView('frontpage');
    setSelectedLevel(null);
    setSelectedQuiz(null);
    setAnswers([]);
  };

  const handleBackToSelection = () => {
    setView('quiz-selection');
    setSelectedQuiz(null);
    setAnswers([]);
  };

  if (view === 'quiz-selection' && selectedLevel) {
    return (
      <QuizSelectionScreen
        level={selectedLevel}
        onSelectQuiz={handleSelectQuiz}
        onBack={handleBackToLevels}
      />
    );
  }

  if (view === 'quiz' && selectedLevel && selectedQuiz) {
    return (
      <QuizScreen
        key={retryCount}
        levelName={selectedLevel.name}
        quizTitle={selectedQuiz.title}
        questions={selectedQuiz.questions}
        onSubmit={handleSubmit}
        onQuit={handleBackToSelection}
      />
    );
  }

  if (view === 'results' && selectedLevel && selectedQuiz) {
    return (
      <ResultsScreen
        levelName={selectedLevel.name}
        quizTitle={selectedQuiz.title}
        questions={selectedQuiz.questions}
        answers={answers}
        onRetry={handleRetry}
        onBackToLevels={handleBackToLevels}
      />
    );
  }

  return (
    <div className="math-texture animated-gradient animate-gradient-drift flex min-h-full flex-col items-center justify-center px-6 py-16">
      <div className="mb-16 flex flex-col items-center gap-6">
        <Logo />
      </div>
      <div className="flex flex-col items-center gap-6 sm:flex-row sm:gap-8">
        {levels.map((level, index) => (
          <QuizLevelCard key={level.id} level={level} index={index} onClick={handleSelectLevel} />
        ))}
      </div>
    </div>
  );
}

export default App;
