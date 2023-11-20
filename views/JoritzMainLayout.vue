<template>
  <q-layout view="hHh lpR fFf">
    <j-header :dark-mode="theme.darkMode" @theme-mode-change="setThemeMode($event)"/>
    <q-page-container class="">
      <div class="j-page-container q-pa-md q-mr-xs"><router-view /></div>
    </q-page-container>
    <j-footer />
  </q-layout>
</template>

<script setup>
import { ref, onMounted, watch } from "vue";
import { useQuasar, setCssVar } from "quasar";
import { useRouter } from "vue-router";
import { useThemeStore } from "../stores/THEME";

const $q = useQuasar();
const theme = useThemeStore();
const router = useRouter();

watch(
  () => theme.darkMode,
  (val) => {
    $q.dark.set(val);
    var brand = theme.getBrand();
    for (var col in brand) {
      setCssVar(col, brand[col]);
    }
  }
);
onMounted(() => {
  console.log(window);
});
function setThemeMode(darkMode){
  theme.darkMode = darkMode
}
const tab = ref("mails");
</script>
