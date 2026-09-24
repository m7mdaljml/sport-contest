type QuestionLevel = "low" | "medium" | "high";

interface QuizQuestion {
  q: string;
  o: [string, string, string, string];
  a: number;
  lvl: QuestionLevel;
  img?: string;
}

interface LocalizedQuestion {
  q: { en: string; ar: string };
  o: {
    en: [string, string, string, string];
    ar: [string, string, string, string];
  };
  a: number;
  lvl: QuestionLevel;
  img?: string;
}

interface QuizResult {
  visitorId: string;
  score: number;
  total: number;
  date: string;
}

export type { QuestionLevel, QuizQuestion, LocalizedQuestion, QuizResult };
