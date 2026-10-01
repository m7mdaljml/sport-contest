<template>
  <div class="who-search">
    <div class="who-search-field">
      <font-awesome-icon icon="magnifying-glass" class="who-search-icon" />
      <input
        :id="inputId"
        ref="inputEl"
        v-model="query"
        type="text"
        class="who-search-input"
        role="combobox"
        autocomplete="off"
        spellcheck="false"
        :aria-label="t.whoAmI.searchLabel"
        :aria-expanded="open"
        :aria-controls="listId"
        :aria-activedescendant="activeId"
        :placeholder="t.whoAmI.search"
        :disabled="disabled"
        @keydown="onKeydown"
        @focus="onFocus"
        @blur="onBlur"
      />
      <button
        v-if="query && !disabled"
        type="button"
        class="who-search-clear"
        :aria-label="t.whoAmI.clear"
        @click="clear"
      >
        <font-awesome-icon icon="xmark" />
      </button>
    </div>

    <ul
      v-show="open"
      :id="listId"
      class="who-search-list"
      role="listbox"
      :aria-label="t.whoAmI.searchLabel"
    >
      <li
        v-for="(player, i) in suggestions"
        :id="optionId(i)"
        :key="player.id"
        class="who-search-option"
        :class="{ 'is-active': i === activeIndex }"
        role="option"
        :aria-selected="i === activeIndex"
        @mousedown.prevent="choose(player)"
        @mouseenter="activeIndex = i"
      >
        <img :src="player.image" alt="" class="who-search-face" />
        <span class="who-search-name">{{ player.name[locale] }}</span>
        <span class="who-search-meta">{{
          player.nationality.name[locale]
        }}</span>
      </li>
    </ul>

    <p v-if="typed && !suggestions.length && !open" class="who-search-empty">
      {{ t.whoAmI.noResults.replace("{q}", typed) }}
    </p>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, useId, watch } from "vue";
import { locale, tGlobal } from "../../../i18n";
import { WHO_AM_I_PLAYERS } from "../../../domain/data/players";
import {
  searchPlayers,
  normalizeName,
} from "../../../domain/utilities/player-matcher";
import type { WhoAmIPlayer } from "../../../domain/meta/i-who-am-i";

const props = defineProps<{ disabled?: boolean }>();
const emit = defineEmits<{
  submit: [value: string, playerId: string | undefined];
  input: [value: string];
}>();

const t = tGlobal;
const inputId = useId();
const listId = `${inputId}-list`;
const optionId = (i: number) => `${inputId}-opt-${i}`;

const inputEl = ref<HTMLInputElement | null>(null);
const query = ref("");
const typed = ref("");
const open = ref(false);
const activeIndex = ref(-1);

const suggestions = computed<WhoAmIPlayer[]>(() =>
  typed.value ? searchPlayers(typed.value, WHO_AM_I_PLAYERS, locale.value) : [],
);

const activeId = computed(() =>
  open.value && activeIndex.value >= 0
    ? optionId(activeIndex.value)
    : undefined,
);

watch(query, (value) => {
  typed.value = value.trim();
  const list = suggestions.value;
  activeIndex.value = list.length ? 0 : -1;
  if (!props.disabled) open.value = typed.value.length > 0 && list.length > 0;
  emit("input", typed.value);
});

const openList = () => {
  if (!props.disabled && suggestions.value.length) open.value = true;
};

const onFocus = openList;
const onBlur = () => {
  open.value = false;
};

const choose = (player: WhoAmIPlayer) => {
  query.value = player.name[locale.value];
  open.value = false;
  activeIndex.value = -1;
  emit("submit", query.value, player.id);
};

const send = () => {
  const value = query.value.trim();
  if (!value) return;
  open.value = false;
  const exact = suggestions.value.find(
    (p) => normalizeName(p.name[locale.value]) === normalizeName(value),
  );
  emit("submit", value, exact?.id);
};

const onKeydown = (event: KeyboardEvent) => {
  if (props.disabled) return;
  if (event.key === "ArrowDown") {
    event.preventDefault();
    if (!open.value) openList();
    else
      activeIndex.value =
        (activeIndex.value + 1) % Math.max(1, suggestions.value.length);
    return;
  }
  if (event.key === "ArrowUp") {
    event.preventDefault();
    const size = Math.max(1, suggestions.value.length);
    activeIndex.value =
      activeIndex.value <= 0 ? size - 1 : activeIndex.value - 1;
    return;
  }
  if (event.key === "Enter") {
    event.preventDefault();
    const active = suggestions.value[activeIndex.value];
    if (open.value && active) choose(active);
    else send();
    return;
  }
  if (event.key === "Escape") {
    open.value = false;
  }
};

const clear = () => {
  query.value = "";
  open.value = false;
  inputEl.value?.focus();
};

defineExpose({ focus: () => inputEl.value?.focus(), clear, submit: send });
</script>
