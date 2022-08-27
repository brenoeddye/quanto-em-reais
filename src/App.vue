<script>
import CustomThemeProvider from "./ThemeProvider.vue"

export default {
  components: { CustomThemeProvider },
  data() {
    return {
      title: 'Quanto em reais?'
    }
  }
}
</script>

<template>
  <CustomThemeProvider>
      {{ title }}
  </CustomThemeProvider>
</template>

<style lang="css">
@import "./assets/fonts/font.css";

body {
  font-family: 'Inter', sans-serif;
  margin: 0;
}
</style>