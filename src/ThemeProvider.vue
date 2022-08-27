<script>
import theme from "@/assets/theme/theme";
import { ThemeProvider } from "vue3-styled-components";

export default {
  name: "CustomThemeProvider",
  components: {
    ThemeProvider
  },
  data: function() {
    return { theme };
  }
};
</script>

<template>
  <div id="theme-provider">
    <ThemeProvider :theme="theme">
      <slot></slot>
    </ThemeProvider>
  </div>
</template>