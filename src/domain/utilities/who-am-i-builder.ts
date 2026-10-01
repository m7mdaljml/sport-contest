import type { Locale } from "../../i18n";
import { WHO_AM_I_PLAYERS } from "../data/players";
import type {
  WhoAmIDifficulty,
  WhoAmIPlayer,
  WhoAmIQuestion,
} from "../meta/i-who-am-i";
import { difficultyRules } from "./who-am-i-rules";

const USED_KEY = (visitorId: string) => `visca_whoami_used_${visitorId}`;
const MAX_USED = 60;
const MIN_CLUES = 3;
const DIFFICULTIES: WhoAmIDifficulty[] = ["easy", "medium", "hard"];

const shuffle = <T>(items: T[]): T[] =>
  [...items].sort(() => Math.random() - 0.5);

const readUsed = (visitorId: string): string[] => {
  if (!visitorId) return [];
  try {
    const raw = localStorage.getItem(USED_KEY(visitorId));
    const parsed = raw ? JSON.parse(raw) : [];
    return Array.isArray(parsed)
      ? parsed.filter((id: unknown): id is string => typeof id === "string")
      : [];
  } catch {
    return [];
  }
};

const saveUsed = (visitorId: string, used: string[]) => {
  if (!visitorId) return;
  try {
    localStorage.setItem(USED_KEY(visitorId), JSON.stringify(used));
  } catch {}
};

const isValidPlayer = (player: WhoAmIPlayer): boolean =>
  Boolean(
    player.id &&
    player.name?.en &&
    player.name?.ar &&
    player.image &&
    new Set(player.clues.map((c) => c.text.en)).size === player.clues.length &&
    player.clues.length >= MIN_CLUES &&
    player.clues.every((c) => Boolean(c.text.en) && Boolean(c.text.ar)),
  );

const pickClues = (player: WhoAmIPlayer, count: number) => {
  const head = player.clues.slice(0, -1);
  const easiest = player.clues[player.clues.length - 1];
  const picked = shuffle(head)
    .slice(0, Math.max(0, count - 1))
    .map((c) => c);
  return easiest ? [...picked, easiest] : picked;
};

const toQuestion = (
  player: WhoAmIPlayer,
  lang: Locale,
  count: number,
  difficulty: WhoAmIDifficulty = player.difficulty,
): WhoAmIQuestion => ({
  id: player.id,
  playerId: player.id,
  playerName: player.name[lang],
  image: player.image,
  nationality: player.nationality.name[lang],
  position: player.position.name[lang],
  difficulty,
  clues: pickClues(player, count).map((c) => ({
    text: c.text[lang],
    type: c.type,
    sourceIndex: player.clues.indexOf(c),
  })),
});

const fresh = (pool: WhoAmIPlayer[], used: string[]) =>
  pool.filter((p) => !used.includes(p.id));

const DIFFICULTY_ORDER: WhoAmIDifficulty[] = ["easy", "medium", "hard"];

const poolFor = (difficulty: WhoAmIDifficulty): WhoAmIPlayer[] => {
  const max = DIFFICULTY_ORDER.indexOf(difficulty);
  return WHO_AM_I_PLAYERS.filter(
    (p) => isValidPlayer(p) && DIFFICULTY_ORDER.indexOf(p.difficulty) <= max,
  );
};

const buildGame = (
  lang: Locale,
  count: number,
  difficulty: WhoAmIDifficulty,
  visitorId: string = "",
): WhoAmIQuestion[] => {
  const used = readUsed(visitorId);
  const pool = shuffle(poolFor(difficulty));
  if (!pool.length) return [];

  const chosen = [...fresh(pool, used), ...pool]
    .filter((p, i, all) => all.findIndex((x) => x.id === p.id) === i)
    .slice(0, count);

  if (chosen.length) {
    saveUsed(
      visitorId,
      [...chosen.map((p) => p.id), ...used].slice(0, MAX_USED),
    );
  }

  const clueCount = difficultyRules(difficulty).clueCount;
  return shuffle(chosen).map((p) => toQuestion(p, lang, clueCount, difficulty));
};

const retranslate = (
  questions: WhoAmIQuestion[],
  lang: Locale,
): WhoAmIQuestion[] =>
  questions.map((q) => {
    const player = WHO_AM_I_PLAYERS.find((p) => p.id === q.playerId);
    if (!player) return q;
    return {
      ...q,
      playerName: player.name[lang],
      nationality: player.nationality.name[lang],
      position: player.position.name[lang],
      clues: q.clues.map((c) => {
        const source = player.clues[c.sourceIndex];
        return source ? { ...c, text: source.text[lang] } : c;
      }),
    };
  });

export {
  buildGame,
  toQuestion,
  retranslate,
  isValidPlayer,
  poolFor,
  DIFFICULTIES,
};
