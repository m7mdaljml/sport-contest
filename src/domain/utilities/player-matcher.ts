import type { Locale } from "../../i18n";
import type { WhoAmIPlayer } from "../meta/i-who-am-i";

const ARABIC_RANGE = "\\u0600-\\u06ff";

const normalize = (value: string): string =>
  value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[.'`´’‘\-_/]/g, " ")
    .replace(new RegExp(`[^a-z0-9${ARABIC_RANGE}\\s]`, "g"), "")
    .replace(/\s+/g, " ")
    .trim();

const acceptedKeys = (player: WhoAmIPlayer): string[] =>
  [player.name.en, player.name.ar, ...player.aliases]
    .map(normalize)
    .filter((k) => k.length > 1);

const isCorrectPlayer = (input: string, player: WhoAmIPlayer): boolean => {
  const key = normalize(input);
  if (!key) return false;
  return acceptedKeys(player).some((k) => k === key);
};

interface PlayerHit {
  player: WhoAmIPlayer;
  rank: number;
}

const searchPlayers = (
  query: string,
  players: WhoAmIPlayer[],
  lang: Locale,
  limit: number = 6,
): WhoAmIPlayer[] => {
  const key = normalize(query);
  if (!key) return [];
  const hits: PlayerHit[] = [];
  players.forEach((player) => {
    const nameKey = normalize(player.name[lang]) || normalize(player.name.en);
    const aliasKeys = player.aliases.map(normalize);
    let rank = -1;
    if (nameKey.startsWith(key)) rank = 0;
    else if (aliasKeys.some((a) => a.startsWith(key))) rank = 1;
    else if (nameKey.includes(key) || aliasKeys.some((a) => a.includes(key)))
      rank = 2;
    if (rank >= 0) hits.push({ player, rank });
  });
  return hits
    .sort(
      (a, b) =>
        a.rank - b.rank ||
        a.player.name[lang].length - b.player.name[lang].length ||
        a.player.name[lang].localeCompare(b.player.name[lang]),
    )
    .slice(0, limit)
    .map((h) => h.player);
};

const normalizeName = normalize;

export { normalizeName, isCorrectPlayer, searchPlayers, acceptedKeys };
