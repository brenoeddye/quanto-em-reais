<script>
import { App } from './App.js';

export default {
  components: { App },
  data() {
    return {
      theme: 'theme-light',
      title: 'Quanto em reais?'
    }
  },
  methods: {
    setTheme(theme) {
      this.theme = theme;
      return localStorage.setItem('theme', this.theme);
    },
    toggleTheme() {
      if(localStorage.getItem('theme') === 'theme-dark')
        setTheme('theme-light')
      else
        setTheme('theme-dark')
    }
  },
  mounted() {
    this.setTheme(this.theme)
  }
}
</script>

<template :class="this.theme">
  <app>
    {{ title }}
  </app>
</template>
