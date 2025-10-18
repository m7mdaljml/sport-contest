<template>
  <div v-if="user" class="card m-4 border-0 shadow-lg p-4">
    <div class="row align-items-center">
      <div class="col-12 text-center">
        <img
          :src="user.imageUrl"
          alt="Profile"
          class="rounded-circle border"
          style="width: 150px; height: 150px; object-fit: cover"
        />
      </div>

      <div class="col-12">
        <h2 class="text-center mb-3">
          {{ user.firstname }} {{ user.lastname }}
        </h2>
        <div class="m-5">
          <p class="text-muted mb-2">
            <strong>{{ tGlobal.userType }} : </strong> {{ user.userType }}
          </p>
          <p class="text-muted mb-2">
            <strong>{{ tGlobal.phoneNumber }} : </strong>
            {{ user.phoneNumber }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { default as ar } from "../../../i18n/ar";
import { default as en } from "../../../i18n/en";
import { computed, onMounted, ref, type Ref } from "vue";
import { users } from "../../../domain/utilities/users";
import type { IUser } from "../../../domain/meta/i-user";

const props = defineProps<{
  lang: string;
}>();

const user = ref(null) as Ref<IUser | null>;

const tGlobal = computed(() => (props.lang === "en" ? en : ar));

onMounted(() => {
  const username = localStorage.getItem("username");
  username && (user.value = users[username]);
});
</script>
