<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    data() {
      return {
        coin: 'Dolares'
      }
    }
})
</script>

<template>
  <div>
    <LayoutLogo :coin="this.coin" />
    <div class="qer__content">
      <Input type="text" placeholder="R$0,00"/>
      <span class="qer__content--text">vale</span>
      <Input type="text" placeholder="R$5,60" />
      <span class="qer__content--text">reais</span>
    </div>
  </div>
</template>

<style lang="scss">
body {
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  background-color: $secondary;
  color: $font-color;
  max-width: 900px;
  margin: auto;
}

a {
  text-decoration: none;
}

input {
  &:first-child {
    text-align: right;
  }
}

.qer {
  &__content {
    &--text {
      padding: 0 10px;
    }
  }
}
</style>