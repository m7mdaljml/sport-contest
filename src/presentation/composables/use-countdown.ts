import {
  computed,
  onUnmounted,
  ref,
  toValue,
  type MaybeRefOrGetter,
} from "vue";

const useCountdown = (
  seconds: MaybeRefOrGetter<number>,
  onExpire?: () => void,
) => {
  const remaining = ref(0);
  const running = ref(false);
  let handle: number | undefined;

  const clear = () => {
    if (handle !== undefined) {
      window.clearInterval(handle);
      handle = undefined;
    }
    running.value = false;
  };

  const start = (override?: number) => {
    clear();
    remaining.value = Math.max(1, Math.round(override ?? toValue(seconds)));
    running.value = true;
    handle = window.setInterval(() => {
      remaining.value = Math.max(0, remaining.value - 1);
      if (remaining.value <= 0) {
        clear();
        onExpire?.();
      }
    }, 1000);
  };

  onUnmounted(clear);

  const total = computed(() => Math.max(1, Math.round(toValue(seconds))));

  return {
    remaining,
    running,
    start,
    clear,
    total,
    ratio: computed(() =>
      Math.max(0, Math.min(1, remaining.value / total.value)),
    ),
  };
};

export { useCountdown };
