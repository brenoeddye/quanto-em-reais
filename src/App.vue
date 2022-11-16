<script>
import CustomThemeProvider from "./ThemeProvider.vue"
import Global from './App'
import Container from '@/utils/Container'
import Input from '@/components/input/Input.vue'
import Logo from '@/components/logo/Logo.vue'

export default {
  components: { Global, CustomThemeProvider, Input, Logo, Container }
}
</script>

<template>
  <CustomThemeProvider>
    <Global>
      <Container>
        <Logo />
        <Input type="text" placeholder="R$0,00" />
      </Container>
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