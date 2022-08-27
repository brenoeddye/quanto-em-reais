<script>
import { global } from './App.js';
import CustomThemeProvider from "./ThemeProvider.vue";

export default {
  components: { global, CustomThemeProvider },
  data() {
    return {
      title: 'Quanto em reais?'
    }
  }
}
</script>

<template :class="this.theme">
  <CustomThemeProvider>
    <global>  
     {{ title }}
    </global>
  </CustomThemeProvider>
</template>
