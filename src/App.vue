<script>
import CustomThemeProvider from "./ThemeProvider.vue"
import Global from './App'

export default {
  components: { Global, CustomThemeProvider },
  data() {
    return {
      title: 'Quanto em reais?'
    }
  }
}
</script>

<template>
  <CustomThemeProvider>
    <Global>
      {{ title }}
    </Global>
  </CustomThemeProvider>
</template>

<style lang="css">
@import "./assets/fonts/font.css";

body {
  font-family: 'Inter', sans-serif;
  margin: 0;
}
</style>