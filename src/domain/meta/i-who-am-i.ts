type LocalizedText = { en: string; ar: string };

type WhoAmIDifficulty = "easy" | "medium" | "hard";

type WhoAmIGameStatus = "idle" | "playing" | "answered" | "finished";

type WhoAmIAnswerOutcome = "correct" | "wrong" | "gave-up" | "timeout";

type PlayerPosition = "GK" | "DF" | "MF" | "FW";

type WhoAmICluetype =
  | "nationality"
  | "birthplace"
  | "position"
  | "club"
  | "formerClub"
  | "league"
  | "transfer"
  | "trophy"
  | "competition"
  | "record"
  | "career"
  | "international"
  | "manager"
  | "teammate"
  | "season"
  | "achievement";

interface WhoAmIPlayer {
  id: string;
  name: LocalizedText;
  aliases: string[];
  image: string;
  nationality: { code: string; name: LocalizedText };
  position: { code: PlayerPosition; name: LocalizedText };
  difficulty: WhoAmIDifficulty;
  clues: { type: WhoAmICluetype; text: LocalizedText }[];
}

interface WhoAmIQuestion {
  id: string;
  playerId: string;
  playerName: string;
  image: string;
  nationality: string;
  position: string;
  difficulty: WhoAmIDifficulty;
  clues: { text: string; type: WhoAmICluetype; sourceIndex: number }[];
}

interface WhoAmIAnswerRecord {
  questionId: string;
  playerId: string;
  outcome: WhoAmIAnswerOutcome;
  attempts: number;
  revealedClues: number;
  points: number;
  durationMs: number;
}

interface WhoAmIGameState {
  questions: WhoAmIQuestion[];
  currentQuestionIndex: number;
  revealedClues: number;
  score: number;
  correctAnswers: number;
  wrongAnswers: number;
  currentStreak: number;
  bestStreak: number;
  questionStartedAt: number;
  gameStatus: WhoAmIGameStatus;
}

interface WhoAmISummary {
  score: number;
  total: number;
  correct: number;
  wrong: number;
  accuracy: number;
  bestStreak: number;
  averageClues: number;
  perfectRounds: number;
}

interface WhoAmISettings {
  questions: number;
  attempts: number;
  seconds: number;
  clueCount: number;
}

interface WhoAmIDifficultyRule {
  difficulty: WhoAmIDifficulty;
  clueCount: number;
  seconds: number;
  stars: number;
}

type WhoAmIGameMode = "classic";

interface WhoAmIResult {
  visitorId: string;
  mode: WhoAmIGameMode;
  difficulty: WhoAmIDifficulty;
  score: number;
  total: number;
  correct: number;
  accuracy: number;
  bestStreak: number;
  answers: WhoAmIAnswerRecord[];
  date: string;
}

export type {
  LocalizedText,
  WhoAmIDifficulty,
  WhoAmIGameStatus,
  WhoAmIAnswerOutcome,
  PlayerPosition,
  WhoAmICluetype,
  WhoAmIPlayer,
  WhoAmIQuestion,
  WhoAmIAnswerRecord,
  WhoAmIGameState,
  WhoAmISummary,
  WhoAmISettings,
  WhoAmIDifficultyRule,
  WhoAmIGameMode,
  WhoAmIResult,
};
