import { useState } from 'react';
import QuizIntro from './QuizIntro';
import QuizQuestion from './QuizQuestion';
import QuizResult from './QuizResult';

export interface QuizAnswer {
  questionId: number;
  answer: string;
}

export interface ResultProfile {
  profileName: string;
  profileType: 'explorer' | 'transition' | 'resistant' | 'champion';
  description: string;
  chapters: string[];
  emoji: string;
}

const QUIZ_QUESTIONS = [
  {
    id: 1,
    question: 'Qual a idade do seu bebê?',
    options: [
      { value: 'a', label: '0 a 3 meses', weight: 0 },
      { value: 'b', label: '4 a 8 meses', weight: 0 },
      { value: 'c', label: '9 a 18 meses', weight: 0 },
      { value: 'd', label: '19 a 24 meses', weight: 0 },
    ],
  },
  {
    id: 2,
    question: 'Com que frequência seu bebê acorda durante a noite?',
    options: [
      { value: 'a', label: 'Acorda muitas vezes, parece que não dorme profundamente.', weight: 3 },
      { value: 'b', label: 'Acorda algumas vezes, mas volta a dormir com um pouco de ajuda.', weight: 2 },
      { value: 'c', label: 'Acorda raramente, mas tem dificuldade para adormecer sozinho.', weight: 1 },
      { value: 'd', label: 'Dorme a noite toda, mas as sonecas diurnas são um desafio.', weight: 0 },
    ],
  },
  {
    id: 3,
    question: 'Como seu bebê geralmente adormece?',
    options: [
      { value: 'a', label: 'Só no colo, mamando ou balançando.', weight: 3 },
      { value: 'b', label: 'No berço, mas precisa de muita ajuda (carinho, mão no peito).', weight: 2 },
      { value: 'c', label: 'Adormece sozinho, mas luta contra o sono antes de deitar.', weight: 1 },
      { value: 'd', label: 'Adormece sozinho e tranquilamente.', weight: 0 },
    ],
  },
  {
    id: 4,
    question: 'Como é o ambiente onde seu bebê dorme?',
    options: [
      { value: 'a', label: 'Tem luz, barulho e/ou muitos objetos no berço.', weight: 3 },
      { value: 'b', label: 'É escuro e silencioso, mas a temperatura varia.', weight: 2 },
      { value: 'c', label: 'É ideal, mas o bebê ainda tem dificuldade para relaxar.', weight: 1 },
      { value: 'd', label: 'É perfeito e o bebê dorme bem nele.', weight: 0 },
    ],
  },
  {
    id: 5,
    question: 'Você tem uma rotina noturna consistente com seu bebê?',
    options: [
      { value: 'a', label: 'Não, cada noite é diferente.', weight: 3 },
      { value: 'b', label: 'Tentamos ter uma rotina, mas nem sempre conseguimos seguir.', weight: 2 },
      { value: 'c', label: 'Sim, temos uma rotina, mas o bebê ainda resiste.', weight: 1 },
      { value: 'd', label: 'Sim, temos uma rotina e ela funciona bem.', weight: 0 },
    ],
  },
];

const RESULT_PROFILES: Record<string, ResultProfile> = {
  explorer: {
    profileName: 'Pequeno Explorador Noturno',
    profileType: 'explorer',
    description: 'Seu bebê ainda está se adaptando ao mundo e precisa de mais previsibilidade e um ambiente seguro para se sentir calmo.',
    chapters: ['Capítulo 3: Principais motivos que dificultam o sono', 'Capítulo 4: O Ambiente Ideal para o Sono'],
    emoji: '🌙',
  },
  transition: {
    profileName: 'Sonhador em Transição',
    profileType: 'transition',
    description: 'Seu bebê está quase lá, mas precisa de um empurrãozinho para ligar os ciclos de sono e adormecer com mais autonomia.',
    chapters: ['Capítulo 5: O Método "Caminho das Nuvens"', 'Capítulo 6: Dicas Práticas que Ajudam'],
    emoji: '☁️',
  },
  resistant: {
    profileName: 'Resistente ao Sono',
    profileType: 'resistant',
    description: 'Seu bebê sabe dormir, mas a luta antes de deitar é real. Provavelmente, ele precisa de mais desaceleração e um ajuste fino na rotina.',
    chapters: ['Capítulo 5: O Método "Caminho das Nuvens"', 'Capítulo 7: O que Evitar'],
    emoji: '⭐',
  },
  champion: {
    profileName: 'Campeão do Sono',
    profileType: 'champion',
    description: 'Parabéns! Você já está no caminho certo. O ebook pode te oferecer ainda mais insights para manter essa rotina e lidar com os desafios futuros.',
    chapters: ['Capítulo 8: Constância e Expectativas Reais'],
    emoji: '✨',
  },
};

export default function QuizContainer() {
  const [step, setStep] = useState<'intro' | 'quiz' | 'result'>('intro');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<QuizAnswer[]>([]);
  const [resultProfile, setResultProfile] = useState<ResultProfile | null>(null);

  const handleStartQuiz = () => {
    setStep('quiz');
  };

  const handleAnswerQuestion = (answer: string) => {
    const newAnswers = [...answers, { questionId: currentQuestionIndex + 1, answer }];
    setAnswers(newAnswers);

    if (currentQuestionIndex < QUIZ_QUESTIONS.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      // Calculate result
      const totalWeight = newAnswers.reduce((sum, ans) => {
        const question = QUIZ_QUESTIONS.find(q => q.id === ans.questionId);
        const option = question?.options.find(o => o.value === ans.answer);
        return sum + (option?.weight || 0);
      }, 0);

      let profile: ResultProfile;
      if (totalWeight >= 12) {
        profile = RESULT_PROFILES.explorer;
      } else if (totalWeight >= 8) {
        profile = RESULT_PROFILES.transition;
      } else if (totalWeight >= 4) {
        profile = RESULT_PROFILES.resistant;
      } else {
        profile = RESULT_PROFILES.champion;
      }

      setResultProfile(profile);
      setStep('result');
    }
  };

  const handleRetakeQuiz = () => {
    setStep('intro');
    setCurrentQuestionIndex(0);
    setAnswers([]);
    setResultProfile(null);
  };

  return (
    <div className="min-h-screen w-full">
      {step === 'intro' && <QuizIntro onStart={handleStartQuiz} />}
      {step === 'quiz' && (
        <QuizQuestion
          question={QUIZ_QUESTIONS[currentQuestionIndex]}
          progress={(currentQuestionIndex + 1) / QUIZ_QUESTIONS.length}
          onAnswer={handleAnswerQuestion}
        />
      )}
      {step === 'result' && resultProfile && (
        <QuizResult profile={resultProfile} onRetake={handleRetakeQuiz} />
      )}
    </div>
  );
}
