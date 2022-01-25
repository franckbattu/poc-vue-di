<template>
  <template v-if="user">
    <h1>Salut {{ user.name }}</h1>
    <p>Voici tes informations :</p>
    <p v-for="entry of Object.entries(user)">
      {{ entry }}
    </p>
  </template>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import { container, TYPES, User, UserFacade } from "./providers";

const userFacade: UserFacade = container.get(TYPES.UserFacade);
const user = ref<User>()

onMounted(async () => {
  user.value = await userFacade.getUser();
})
</script>

