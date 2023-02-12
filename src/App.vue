<script setup lang="ts">

</script>

<template>
  <div>
    <LayoutLogo />
    <div class="qer__content">
      <Input type="text" placeholder="R$0,00"/>
      <span>vale</span>
      <Input type="text" placeholder="R$5,60" />
      <span>reais</span>
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
</style>