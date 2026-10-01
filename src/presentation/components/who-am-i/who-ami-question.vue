<template>
  <div v-if="question" class="who-question">
    <div class="who-question-head">
      <h2 class="quiz-question mb-0">
        <span aria-hidden="true">🕵️</span>
        {{ t.whoAmI.title }}
      </h2>
      <span class="quiz-lvl" :class="'lvl-' + question.difficulty">
        {{ t.whoAmI.difficulty[question.difficulty] }}
      </span>
    </div>
    <p class="who-question-sub mb-3">{{ t.whoAmI.subtitle }}</p>

    <ol class="clue-list">
      <clue-card
        v-for="(clue, i) in question.clues"
        :key="question.id + '-' + i"
        :index="i"
        :text="clue.text"
        :revealed="i < game.state.revealedClues"
        :class="{ 'is-just-revealed': i === game.state.revealedClues - 1 }"
      />
    </ol>

    <div class="who-question-actions">
      <reveal-clue-button
        :remaining="question.clues.length - game.state.revealedClues"
        :disabled="!game.canReveal"
        @reveal="game.revealClue()"
      />
      <span v-if="hidden > 0" class="who-hidden-note">
        <font-awesome-icon icon="lock" />
        {{ t.whoAmI.cluesLeft.replace("{n}", String(hidden)) }}
      </span>
    </div>

    <div v-if="!game.answered" class="who-answer">
      <span class="who-answer-label">{{ t.whoAmI.searchLabel }}</span>
      <player-search
        ref="search"
        @submit="onSubmit"
        @input="(value) => (hasQuery = value.length > 0)"
      />
      <div class="who-answer-buttons">
        <button
          type="button"
          class="btn btn-primary rounded-pill px-4 flex-grow-1"
          :disabled="!hasQuery"
          @click="search?.submit()"
        >
          <font-awesome-icon icon="check" class="me-2" />
          {{ t.whoAmI.submit }}
        </button>
        <button type="button" class="btn-ghost" @click="game.giveUp()">
          <font-awesome-icon icon="flag" />
          {{ t.whoAmI.giveUp }}
        </button>
      </div>
      <p class="who-attempts">
        <font-awesome-icon icon="bullseye" class="me-1" />
        {{
          game.attempts <= 1
            ? t.whoAmI.lastAttempt
            : t.whoAmI.attemptsLeft.replace("{n}", String(game.attempts))
        }}
      </p>
    </div>

    <answer-feedback
      :outcome="game.outcome"
      :answer-name="game.solutionName"
      :points="lastPoints"
      :message="message"
      :revealed-clues="game.state.revealedClues"
      :attempts-left="game.attempts"
    />

    <div v-if="game.answered" class="who-next">
      <button
        type="button"
        class="btn btn-primary rounded-pill px-4 w-100"
        @click="game.next()"
      >
        {{ game.isLast ? t.whoAmI.finish : t.whoAmI.next }}
        <font-awesome-icon icon="arrow-right" class="ms-2" />
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, watch } from "vue";
import { tGlobal } from "../../../i18n";
import ClueCard from "./clue-card.vue";
import RevealClueButton from "./reveal-clue-button.vue";
import PlayerSearch from "./player-search.vue";
import AnswerFeedback from "./answer-feedback.vue";
import type { WhoAmIGameApi } from "../../composables/use-who-am-i-game";
import type { WhoAmIQuestion } from "../../../domain/meta/i-who-am-i";

const props = defineProps<{
  game: WhoAmIGameApi;
  question: WhoAmIQuestion | null;
}>();

const t = tGlobal;
const search = ref<InstanceType<typeof PlayerSearch> | null>(null);
const message = ref("");
const hasQuery = ref(false);
const lastPraise = ref(-1);
const lastBoo = ref(-1);

const hidden = computed(() =>
  Math.max(
    0,
    (props.question?.clues.length ?? 0) - props.game.state.revealedClues,
  ),
);

const lastPoints = computed(
  () => props.game.records[props.game.records.length - 1]?.points ?? 0,
);

const pick = (list: readonly string[], last: number): [string, number] => {
  if (list.length <= 1) return [list[0] ?? "", 0];
  let i = Math.floor(Math.random() * list.length);
  if (i === last) i = (i + 1) % list.length;
  return [list[i] as string, i];
};

watch(
  () => props.game.outcome,
  (outcome) => {
    if (outcome === "correct") {
      const [text, idx] = pick(tGlobal.value.whoAmI.praise, lastPraise.value);
      message.value = text;
      lastPraise.value = idx;
      return;
    }
    if (outcome === "wrong" || outcome === "gave-up" || outcome === "timeout") {
      const [text, idx] = pick(tGlobal.value.whoAmI.boo, lastBoo.value);
      message.value = text;
      lastBoo.value = idx;
    }
  },
);

const onSubmit = (value: string, playerId?: string) => {
  props.game.submit(value, playerId);
};

watch(
  () => props.game.state.currentQuestionIndex,
  () => {
    search.value?.clear();
    hasQuery.value = false;
    message.value = "";
  },
);
</script>
