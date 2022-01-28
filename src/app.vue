<template>
  <template v-if="user">
    <h1>Hello {{ user.name }}</h1>
    <p>This is your description: {{ user.description }}</p>
  </template>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import { User } from "./models";
import { container, TYPES, UserFacade } from "./providers";

const userFacade: UserFacade = container.get(TYPES.UserFacade);
const user = ref<User>()

onMounted(async () => {
  user.value = await userFacade.getUser(1);
});
</script>
