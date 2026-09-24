import { FOOTBALL_QUESTIONS } from "../data/questions";
import type {
  LocalizedQuestion,
  QuestionLevel,
  QuizQuestion,
  QuizResult,
} from "../meta/i-quiz";
import type { Locale } from "../../i18n";

const KEY = (visitorId: string) => `visca_quiz_results_${visitorId}`;
const USED_KEY = (visitorId: string) => `visca_quiz_used_${visitorId}`;

const shuffle = <T>(arr: T[]): T[] => [...arr].sort(() => Math.random() - 0.5);

const resolveLocale =
  (lang: Locale) =>
  (q: LocalizedQuestion): QuizQuestion => ({
    q: q.q[lang],
    o: q.o[lang],
    a: q.a,
    lvl: q.lvl,
    img: q.img,
  });

type UsedState = Record<QuestionLevel, number[]> & { images: number[] };

const readUsed = (visitorId: string): UsedState => {
  const empty: UsedState = { low: [], medium: [], high: [], images: [] };
  if (!visitorId) return empty;
  try {
    const raw = localStorage.getItem(USED_KEY(visitorId));
    const parsed = raw ? JSON.parse(raw) : {};
    const arr = (k: keyof UsedState) =>
      Array.isArray(parsed?.[k])
        ? parsed[k].filter((n: unknown): n is number => typeof n === "number")
        : [];
    return {
      low: arr("low"),
      medium: arr("medium"),
      high: arr("high"),
      images: arr("images"),
    };
  } catch {
    return empty;
  }
};

const saveUsed = (visitorId: string, used: UsedState) => {
  try {
    localStorage.setItem(USED_KEY(visitorId), JSON.stringify(used));
  } catch {
    /* storage unavailable, ignore */
  }
};

const drawIndices = (
  pool: LocalizedQuestion[],
  filter: (q: LocalizedQuestion) => boolean,
  count: number,
  used: number[],
): number[] => {
  const indices = pool
    .map((q, i) => ({ q, i }))
    .filter(({ q }) => filter(q))
    .map(({ i }) => i);
  const fresh = indices.filter((i) => !used.includes(i));
  const candidates = fresh.length >= count ? fresh : indices;
  return shuffle(candidates).slice(0, count);
};

const shuffleOptions = (q: QuizQuestion): QuizQuestion => {
  const order = shuffle([0, 1, 2, 3]);
  return {
    q: q.q,
    o: order.map((i) => q.o[i]) as QuizQuestion["o"],
    a: order.indexOf(q.a),
    lvl: q.lvl,
    img: q.img,
  };
};

const resolveQuiz = (
  indices: number[],
  lang: Locale,
  pool: LocalizedQuestion[] = FOOTBALL_QUESTIONS,
): QuizQuestion[] => indices.map((i) => shuffleOptions(resolveLocale(lang)(pool[i])));

const pickQuiz = (
  lang: Locale,
  perLevel: number = 5,
  imageCount: number = 5,
  pool: LocalizedQuestion[] = FOOTBALL_QUESTIONS,
  visitorId: string = "",
): { questions: QuizQuestion[]; indices: number[] } => {
  const levels: QuestionLevel[] = ["low", "medium", "high"];
  const used = readUsed(visitorId);

  const pickedIndices: number[] = [];

  levels.forEach((lvl) => {
    const chosen = drawIndices(
      pool,
      (q) => q.lvl === lvl && !q.img,
      perLevel,
      used[lvl],
    );
    used[lvl] = shuffle([...used[lvl], ...chosen]).slice(0, 150);
    pickedIndices.push(...chosen);
  });

  const chosenImages = drawIndices(
    pool,
    (q) => Boolean(q.img),
    imageCount,
    used.images,
  );
  used.images = shuffle([...used.images, ...chosenImages]).slice(0, 300);
  pickedIndices.push(...chosenImages);

  if (visitorId) saveUsed(visitorId, used);
  return { questions: resolveQuiz(pickedIndices, lang, pool), indices: pickedIndices };
};

const readResults = (visitorId: string): QuizResult[] => {
  try {
    const raw = localStorage.getItem(KEY(visitorId));
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
};

const saveResult = (
  visitorId: string,
  score: number,
  total: number,
): QuizResult => {
  const result: QuizResult = {
    visitorId,
    score,
    total,
    date: new Date().toISOString().slice(0, 10),
  };
  const all = [result, ...readResults(visitorId)].slice(0, 50);
  localStorage.setItem(KEY(visitorId), JSON.stringify(all));
  return result;
};

const bestScore = (visitorId: string): QuizResult | null => {
  const all = readResults(visitorId);
  if (!all.length) return null;
  return all.reduce((best, r) => (r.score > best.score ? r : best), all[0]);
};

const attempts = (visitorId: string): number => readResults(visitorId).length;

export { pickQuiz, resolveQuiz, saveResult, bestScore, attempts };
