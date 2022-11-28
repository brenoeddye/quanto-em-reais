<script>
import theme from "@/assets/theme/theme";
import { ThemeProvider } from "vue3-styled-components";

export default {
  name: "CustomThemeProvider",
  components: {
    ThemeProvider
  },
  data: function() {
    return { theme, userTheme: '' };
  },
  methods: {
    changeTheme() {
      if(this.userTheme == 'light')
        return this.userTheme = 'dark'
      else this.userTheme = 'light'
    },

    setTheme(theme) {
      this.userTheme = theme
      localStorage.setItem('data-theme', theme)
    }
  },
  created() {
    this.userTheme = localStorage.getItem('data-theme')
    if(this.userTheme == '' || this.userTheme == null)
      return this.setTheme('dark');
  }
};
</script>

<template>
  <div id="theme-provider" :data-theme="this.userTheme">
    <ThemeProvider :theme="this.userTheme != 'light' ? theme.dark : theme.light">
      <slot></slot> 
    </ThemeProvider>
  </div>
</template>