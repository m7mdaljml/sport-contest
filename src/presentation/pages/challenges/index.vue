<template>
  <div class="page">
    <div class="fun-bg" aria-hidden="true">
      <span v-for="(b, i) in funBg" :key="i" :style="b.style">{{ b.e }}</span>
    </div>

    <div class="quiz-wrap">
      <div class="panel p-4 p-md-5 text-center">
        <div class="quiz-logo mb-4">
          <font-awesome-icon icon="trophy" />
        </div>
        <h1 class="page-title mb-2">{{ t.challenges.title }}</h1>
        <p class="text-muted mb-4">{{ t.challenges.subtitle }}</p>

        <div class="challenge-grid">
          <router-link
            v-for="card in cards"
            :key="card.to"
            class="challenge-card panel p-4"
            :to="{ name: card.to }"
          >
            <span class="challenge-icon" :class="card.tone">
              <font-awesome-icon :icon="card.icon" />
            </span>
            <span class="challenge-name">{{ card.title }}</span>
            <span class="challenge-desc">{{ card.desc }}</span>
            <span class="challenge-meta">
              <span class="quiz-chip">
                <font-awesome-icon icon="star" />
                {{ card.badge }}
              </span>
            </span>
            <span class="challenge-go">
              {{ t.challenges.play }}
              <font-awesome-icon icon="arrow-right" class="ms-2" />
            </span>
          </router-link>
        </div>

        <p class="text-muted small mt-4 mb-0">{{ t.challenges.comingSoon }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { tGlobal } from "../../../i18n";
import { WHO_AM_I_PLAYERS } from "../../../domain/data/players";
import { FOOTBALL_QUESTIONS } from "../../../domain/data/questions";

const t = tGlobal;

const cards = computed(() => [
  {
    to: "who-am-i",
    icon: "user-secret",
    tone: "tone-indigo",
    title: tGlobal.value.whoAmI.title,
    desc: tGlobal.value.whoAmI.subtitle,
    badge: tGlobal.value.challenges.players.replace(
      "{n}",
      String(WHO_AM_I_PLAYERS.length),
    ),
  },
  {
    to: "contest",
    icon: "futbol",
    tone: "tone-green",
    title: tGlobal.value.quiz.title,
    desc: tGlobal.value.quiz.subtitle,
    badge: tGlobal.value.challenges.questions.replace(
      "{n}",
      String(FOOTBALL_QUESTIONS.length),
    ),
  },
]);

const funBg = [
  {
    e: "⚽",
    style: "left: 10%; --size: 1.6rem; --dur: 14s; --delay: 0s; --opa: .25",
  },
  {
    e: "🏆",
    style: "left: 27%; --size: 2rem; --dur: 18s; --delay: 3s; --opa: .2",
  },
  {
    e: "🥅",
    style: "left: 45%; --size: 1.4rem; --dur: 16s; --delay: 6s; --opa: .22",
  },
  {
    e: "📋",
    style: "left: 63%; --size: 1.9rem; --dur: 20s; --delay: 1s; --opa: .18",
  },
  {
    e: "🕵️",
    style: "left: 80%; --size: 1.5rem; --dur: 15s; --delay: 8s; --opa: .22",
  },
  {
    e: "⭐",
    style: "left: 92%; --size: 1.7rem; --dur: 17s; --delay: 4s; --opa: .18",
  },
];
</script>
