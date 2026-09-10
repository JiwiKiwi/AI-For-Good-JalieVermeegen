export type QuestionType = 'multiple-choice' | 'open-answer';
export type Level = 'beginner' | 'intermediate' | 'advanced';

export interface Question {
  id: string;
  type: QuestionType;
  prompt: string;
  options?: string[];
  correctAnswer: string;
  acceptedAnswers?: string[];
}

export interface Quiz {
  id: string;
  level: Level;
  title: string;
  questions: Question[];
}

export const quizzesByLevel: Record<Level, Quiz[]> = {
  beginner: [
    {
      id: 'beginner-1',
      level: 'beginner',
      title: 'Equations & Arithmetic',
      questions: [
        { id: 'b1-1', type: 'open-answer', prompt: 'Solve for x:  2x + 5 = 13', correctAnswer: '4' },
        { id: 'b1-2', type: 'open-answer', prompt: 'Solve for x:  x − 7 = 3', correctAnswer: '10' },
        { id: 'b1-3', type: 'open-answer', prompt: 'What is 15% of 200?', correctAnswer: '30' },
        { id: 'b1-4', type: 'open-answer', prompt: 'What is the value of 2³?', correctAnswer: '8' },
        { id: 'b1-5', type: 'open-answer', prompt: 'What is 7 × 8?', correctAnswer: '56' },
        { id: 'b1-6', type: 'open-answer', prompt: 'What is 144 ÷ 12?', correctAnswer: '12' },
        { id: 'b1-7', type: 'multiple-choice', prompt: 'Simplify:  3/4 + 1/4', options: ['1', '3/4', '1/2', '7/4'], correctAnswer: '1' },
        { id: 'b1-8', type: 'open-answer', prompt: 'Solve for x:  5x = 45', correctAnswer: '9' },
        { id: 'b1-9', type: 'open-answer', prompt: 'What is −3 + 8?', correctAnswer: '5' },
        { id: 'b1-10', type: 'multiple-choice', prompt: 'Which fraction is equivalent to 0.5?', options: ['1/2', '1/3', '1/4', '2/5'], correctAnswer: '1/2' },
      ],
    },
    {
      id: 'beginner-2',
      level: 'beginner',
      title: 'Geometry Basics',
      questions: [
        { id: 'b2-1', type: 'open-answer', prompt: 'What is the area of a rectangle with length 6 and width 4?', correctAnswer: '24' },
        { id: 'b2-2', type: 'open-answer', prompt: 'What is the perimeter of a square with side length 5?', correctAnswer: '20' },
        { id: 'b2-3', type: 'open-answer', prompt: 'In a right triangle with legs of length 3 and 4, what is the length of the hypotenuse?', correctAnswer: '5' },
        { id: 'b2-4', type: 'open-answer', prompt: 'What is the area of a triangle with base 8 and height 5?', correctAnswer: '20' },
        { id: 'b2-5', type: 'open-answer', prompt: 'What is the circumference of a circle with radius 5?  (Use π ≈ 3.14)', correctAnswer: '31.4' },
        { id: 'b2-6', type: 'open-answer', prompt: 'What is the area of a circle with radius 3?  (Use π ≈ 3.14)', correctAnswer: '28.26' },
        { id: 'b2-7', type: 'multiple-choice', prompt: 'How many degrees are in a triangle?', options: ['180°', '360°', '90°', '270°'], correctAnswer: '180°' },
        { id: 'b2-8', type: 'open-answer', prompt: 'What is the volume of a cube with side length 3?', correctAnswer: '27' },
        { id: 'b2-9', type: 'open-answer', prompt: 'What is the perimeter of a rectangle with length 7 and width 3?', correctAnswer: '20' },
        { id: 'b2-10', type: 'open-answer', prompt: 'In a right triangle with legs of length 6 and 8, what is the length of the hypotenuse?', correctAnswer: '10' },
      ],
    },
    {
      id: 'beginner-3',
      level: 'beginner',
      title: 'Numbers & Roots',
      questions: [
        { id: 'b3-1', type: 'open-answer', prompt: 'What is the square root of 144?', correctAnswer: '12' },
        { id: 'b3-2', type: 'open-answer', prompt: 'What is the square root of 81?', correctAnswer: '9' },
        { id: 'b3-3', type: 'open-answer', prompt: 'What is 5²?', correctAnswer: '25' },
        { id: 'b3-4', type: 'open-answer', prompt: 'What is 10³?', correctAnswer: '1000' },
        { id: 'b3-5', type: 'open-answer', prompt: 'What is the cube root of 27?', correctAnswer: '3' },
        { id: 'b3-6', type: 'open-answer', prompt: 'What is 3/5 as a percentage?', correctAnswer: '60%' },
        { id: 'b3-7', type: 'multiple-choice', prompt: 'Which number is a prime?', options: ['9', '15', '17', '21'], correctAnswer: '17' },
        { id: 'b3-8', type: 'open-answer', prompt: 'What is the least common multiple of 4 and 6?', correctAnswer: '12' },
        { id: 'b3-9', type: 'open-answer', prompt: 'What is the greatest common divisor of 12 and 18?', correctAnswer: '6' },
        { id: 'b3-10', type: 'open-answer', prompt: 'What is 0.25 as a fraction?', correctAnswer: '1/4' },
      ],
    },
  ],
  intermediate: [
    {
      id: 'intermediate-1',
      level: 'intermediate',
      title: 'Algebra & Factoring',
      questions: [
        { id: 'i1-1', type: 'open-answer', prompt: 'Solve for x:  3x − 7 = 2x + 5', correctAnswer: '12' },
        { id: 'i1-2', type: 'multiple-choice', prompt: 'Factor:  x² − 9', options: ['(x − 3)(x + 3)', '(x − 9)(x + 1)', '(x + 3)²', '(x − 3)²'], correctAnswer: '(x − 3)(x + 3)' },
        { id: 'i1-3', type: 'multiple-choice', prompt: 'Simplify:  (2x²)(3x³)', options: ['6x⁵', '6x⁶', '5x⁵', '5x⁶'], correctAnswer: '6x⁵' },
        { id: 'i1-4', type: 'open-answer', prompt: 'Solve for x (x > 0):  x² = 49', correctAnswer: '7' },
        { id: 'i1-5', type: 'open-answer', prompt: 'Simplify:  12x ÷ 3x', correctAnswer: '4' },
        { id: 'i1-6', type: 'open-answer', prompt: 'Factor:  x² + 5x + 6', correctAnswer: '(x + 2)(x + 3)' },
        { id: 'i1-7', type: 'open-answer', prompt: 'Solve for x:  4(x − 2) = 2x + 6', correctAnswer: '7' },
        { id: 'i1-8', type: 'open-answer', prompt: 'Simplify:  (x³)²', correctAnswer: 'x⁶' },
        { id: 'i1-9', type: 'multiple-choice', prompt: 'Factor:  x² − 4x − 21', options: ['(x − 7)(x + 3)', '(x + 7)(x − 3)', '(x − 7)(x − 3)', '(x + 7)(x + 3)'], correctAnswer: '(x − 7)(x + 3)' },
        { id: 'i1-10', type: 'open-answer', prompt: 'Solve for x:  x/3 + 2 = 5', correctAnswer: '9' },
      ],
    },
    {
      id: 'intermediate-2',
      level: 'intermediate',
      title: 'Lines & Functions',
      questions: [
        { id: 'i2-1', type: 'open-answer', prompt: 'What is the slope of the line passing through (1, 2) and (3, 8)?', correctAnswer: '3' },
        { id: 'i2-2', type: 'open-answer', prompt: 'What is the y-intercept of the line  y = 2x + 5?', correctAnswer: '5' },
        { id: 'i2-3', type: 'open-answer', prompt: 'If  f(x) = 2x + 3,  what is  f(4)?', correctAnswer: '11' },
        { id: 'i2-4', type: 'open-answer', prompt: 'Solve the system:  x + y = 10,  x − y = 4.  What is x?', correctAnswer: '7' },
        { id: 'i2-5', type: 'open-answer', prompt: 'What is the slope of a vertical line?', correctAnswer: 'undefined' },
        { id: 'i2-6', type: 'open-answer', prompt: 'What is the slope of the line  y = −3x + 7?', correctAnswer: '-3' },
        { id: 'i2-7', type: 'open-answer', prompt: 'If  g(x) = x² − 1,  what is  g(3)?', correctAnswer: '8' },
        { id: 'i2-8', type: 'multiple-choice', prompt: 'Which equation represents a horizontal line?', options: ['y = 5', 'x = 5', 'y = x + 5', 'y = −x'], correctAnswer: 'y = 5' },
        { id: 'i2-9', type: 'open-answer', prompt: 'Solve the system:  2x + y = 7,  x − y = 2.  What is y?', correctAnswer: '1' },
        { id: 'i2-10', type: 'open-answer', prompt: 'If  f(x) = 3x − 2,  what value of x gives  f(x) = 10?', correctAnswer: '4' },
      ],
    },
    {
      id: 'intermediate-3',
      level: 'intermediate',
      title: 'Trigonometry & Exponents',
      questions: [
        { id: 'i3-1', type: 'multiple-choice', prompt: 'What is the value of  sin(30°)?', options: ['1/2', '√2 / 2', '√3 / 2', '1'], correctAnswer: '1/2' },
        { id: 'i3-2', type: 'multiple-choice', prompt: 'What is the value of  cos(0°)?', options: ['1', '0', '1/2', '√2 / 2'], correctAnswer: '1' },
        { id: 'i3-3', type: 'open-answer', prompt: 'Simplify:  2³ × 2⁴', correctAnswer: '128' },
        { id: 'i3-4', type: 'open-answer', prompt: 'Simplify:  5⁷ ÷ 5⁴', correctAnswer: '125' },
        { id: 'i3-5', type: 'open-answer', prompt: 'What is  27^(1/3)?', correctAnswer: '3' },
        { id: 'i3-6', type: 'multiple-choice', prompt: 'What is  sin(90°)?', options: ['1', '0', '1/2', '√3 / 2'], correctAnswer: '1' },
        { id: 'i3-7', type: 'open-answer', prompt: 'Simplify:  (2²)³', correctAnswer: '64' },
        { id: 'i3-8', type: 'open-answer', prompt: 'What is  16^(1/2)?', correctAnswer: '4' },
        { id: 'i3-9', type: 'open-answer', prompt: 'In a right triangle, if the opposite side is 3 and the hypotenuse is 5, what is sin(θ)?', correctAnswer: '3/5' },
        { id: 'i3-10', type: 'open-answer', prompt: 'Simplify:  x⁵ ÷ x²', correctAnswer: 'x³' },
      ],
    },
  ],
  advanced: [
    {
      id: 'advanced-1',
      level: 'advanced',
      title: 'Quadratics & Polynomials',
      questions: [
        { id: 'a1-1', type: 'multiple-choice', prompt: 'Solve for x:  2x² − 5x − 3 = 0', options: ['x = 3 or x = −1/2', 'x = 3 or x = 1/2', 'x = −3 or x = 1/2', 'x = −3 or x = −1/2'], correctAnswer: 'x = 3 or x = −1/2' },
        { id: 'a1-2', type: 'open-answer', prompt: 'Solve for x:  x² + 5x + 6 = 0.  Give the larger root.', correctAnswer: '-2' },
        { id: 'a1-3', type: 'open-answer', prompt: 'What is the discriminant of  3x² + 2x − 1 = 0?', correctAnswer: '16' },
        { id: 'a1-4', type: 'open-answer', prompt: 'Solve for x:  x² − 7x + 12 = 0.  Give the smaller root.', correctAnswer: '3' },
        { id: 'a1-5', type: 'open-answer', prompt: 'Simplify:  (x² + 2x − 8) / (x + 4)', correctAnswer: 'x − 2', acceptedAnswers: ['x-2'] },
        { id: 'a1-6', type: 'open-answer', prompt: 'Solve for x:  x⁴ − 16 = 0.  Give the positive real root.', correctAnswer: '2' },
        { id: 'a1-7', type: 'open-answer', prompt: 'What is the vertex x-coordinate of  y = x² − 6x + 5?', correctAnswer: '3' },
        { id: 'a1-8', type: 'multiple-choice', prompt: 'How many real roots does  x² + 4 = 0  have?', options: ['0', '1', '2', '4'], correctAnswer: '0' },
        { id: 'a1-9', type: 'open-answer', prompt: 'Solve for x:  x² = 2x.  Give the nonzero root.', correctAnswer: '2' },
        { id: 'a1-10', type: 'open-answer', prompt: 'Expand:  (x + 3)(x − 3)', correctAnswer: 'x² − 9' },
      ],
    },
    {
      id: 'advanced-2',
      level: 'advanced',
      title: 'Calculus',
      questions: [
        { id: 'a2-1', type: 'multiple-choice', prompt: 'What is the derivative of  f(x) = 3x² + 2x − 7?', options: ['6x + 2', '3x + 2', '6x² + 2', '6x − 7'], correctAnswer: '6x + 2' },
        { id: 'a2-2', type: 'open-answer', prompt: 'Evaluate:  lim(x→0) sin(x) / x', correctAnswer: '1' },
        { id: 'a2-3', type: 'multiple-choice', prompt: 'What is the integral of  2x dx?', options: ['x² + C', 'x²', '2x² + C', 'x + C'], correctAnswer: 'x² + C' },
        { id: 'a2-4', type: 'open-answer', prompt: 'If  f(x) = x² − 3x + 2,  find  f′(2).', correctAnswer: '1' },
        { id: 'a2-5', type: 'open-answer', prompt: 'What is the area under  y = x²  from  x = 0  to  x = 2?', correctAnswer: '8/3', acceptedAnswers: ['2 2/3'] },
        { id: 'a2-6', type: 'open-answer', prompt: 'What is the derivative of  f(x) = 5x⁴?', correctAnswer: '20x³' },
        { id: 'a2-7', type: 'open-answer', prompt: 'Evaluate:  lim(x→2) (x² − 4) / (x − 2)', correctAnswer: '4' },
        { id: 'a2-8', type: 'open-answer', prompt: 'What is the integral of  3x² dx?', correctAnswer: 'x³ + C' },
        { id: 'a2-9', type: 'open-answer', prompt: 'Find  f′(x)  if  f(x) = √x.', correctAnswer: '1/(2√x)' },
        { id: 'a2-10', type: 'open-answer', prompt: 'What is the derivative of  f(x) = eˣ?', correctAnswer: 'eˣ' },
      ],
    },
    {
      id: 'advanced-3',
      level: 'advanced',
      title: 'Logarithms, Limits & Sequences',
      questions: [
        { id: 'a3-1', type: 'open-answer', prompt: 'Solve for x:  log₂(x) = 5', correctAnswer: '32' },
        { id: 'a3-2', type: 'multiple-choice', prompt: 'Solve for x:  |2x − 3| = 7', options: ['x = 5 or x = −2', 'x = 5 or x = 2', 'x = −5 or x = 2', 'x = 3 or x = −2'], correctAnswer: 'x = 5 or x = −2' },
        { id: 'a3-3', type: 'open-answer', prompt: 'What is the sum of the first 10 terms of the arithmetic sequence  2, 5, 8, …?', correctAnswer: '155' },
        { id: 'a3-4', type: 'open-answer', prompt: 'Solve for x:  log₁₀(x) = 3', correctAnswer: '1000' },
        { id: 'a3-5', type: 'open-answer', prompt: 'Evaluate:  lim(x→1) (x³ − 1) / (x − 1)', correctAnswer: '3' },
        { id: 'a3-6', type: 'open-answer', prompt: 'What is the 5th term of the geometric sequence  2, 6, 18, …?', correctAnswer: '162' },
        { id: 'a3-7', type: 'open-answer', prompt: 'Simplify:  log₂(8) + log₂(4)', correctAnswer: '5' },
        { id: 'a3-8', type: 'open-answer', prompt: 'Solve for x:  2ˣ = 32', correctAnswer: '5' },
        { id: 'a3-9', type: 'open-answer', prompt: 'What is the sum of the infinite geometric series  1 + 1/2 + 1/4 + …?', correctAnswer: '2' },
        { id: 'a3-10', type: 'open-answer', prompt: 'Solve for x:  ln(x) = 0', correctAnswer: '1' },
      ],
    },
  ],
};

export function normalizeAnswer(answer: string): string {
  return answer.trim().toLowerCase().replace(/\s+/g, ' ');
}

export function checkAnswer(userAnswer: string, question: Question): boolean {
  const normalized = normalizeAnswer(userAnswer);
  if (normalized === '') return false;
  if (normalized === normalizeAnswer(question.correctAnswer)) return true;
  if (question.acceptedAnswers) {
    return question.acceptedAnswers.some(a => normalizeAnswer(a) === normalized);
  }
  return false;
}
