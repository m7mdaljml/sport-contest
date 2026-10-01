import { summarize, totalScore } from "./who-am-i-rules";
import type {
  WhoAmIDifficulty,
  WhoAmIGameMode,
  WhoAmIResult,
} from "../meta/i-who-am-i";

const KEY = (visitorId: string) => `visca_whoami_results_${visitorId}`;

const readResults = (visitorId: string): WhoAmIResult[] => {
  if (!visitorId) return [];
  try {
    const raw = localStorage.getItem(KEY(visitorId));
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? (parsed as WhoAmIResult[]) : [];
  } catch {
    return [];
  }
};

const saveResult = (result: Omit<WhoAmIResult, "date">): WhoAmIResult => {
  const entry: WhoAmIResult = {
    ...result,
    score: totalScore(result.answers),
    correct: result.answers.filter((r) => r.outcome === "correct").length,
    bestStreak: summarize(result.answers, result.total).bestStreak,
    date: new Date().toISOString().slice(0, 10),
  };
  const all = [entry, ...readResults(entry.visitorId)].slice(0, 50);
  try {
    localStorage.setItem(KEY(entry.visitorId), JSON.stringify(all));
  } catch {}
  return entry;
};

const bestResult = (
  visitorId: string,
  difficulty: WhoAmIDifficulty = "medium",
): WhoAmIResult | null => {
  const scoped = readResults(visitorId).filter(
    (r) => r.difficulty === difficulty,
  );
  if (!scoped.length) return null;
  return scoped.reduce(
    (best, r) => (r.score > best.score ? r : best),
    scoped[0],
  );
};

const attempts = (
  visitorId: string,
  mode: WhoAmIGameMode = "classic",
): number => readResults(visitorId).filter((r) => r.mode === mode).length;

export { saveResult, bestResult, attempts };
