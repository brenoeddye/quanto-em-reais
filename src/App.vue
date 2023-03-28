<script lang="ts">
export default defineComponent({
    data() {
      return {
        dolar: '',
        euro: '',
        bitcoin: '',
        convertedCoin: '1.00'
      }
    },
    methods: {
      getAll() {
        apiService.getDolar()
          .then((d: any) => {
            this.dolar = parseFloat(d).toFixed(2)
          })

        apiService.getEuro()
          .then((d: any) => {
            this.euro = parseFloat(d).toFixed(2)
          })

        apiService.getBitcoin()
          .then((d: any) => {
            this.bitcoin = parseFloat(d).toFixed(2)
          })
      }
    },
    mounted() {
      this.getAll()
    }
})
</script>

<template>
  <div>
    <LayoutLogo />
    <div class="qer__quickAccess">

    </div>
    <div class="qer__content">
      <Input type="number" label="US$" v-model:modelValue="convertedCoin" />
      <span class="qer__content--text">VALE</span>
      <Input type="number" label="R$" v-model:modelValue="dolar" />
    </div>

    {{ convertedCoin }}
    {{ dolar }}

    <Footer />
  </div>
</template>

<style lang="scss">
body {
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  background-color: $secondary;
  color: $font-color;
  max-width: 900px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;
}

a {
  text-decoration: none;
}

.inputForm:first-child input {
    text-align: right;
}

.qer {
  &__quickAccess {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  &__content {
    position: absolute;
    display: flex;
    align-items: center;
    transform: translateX(-20%);
    &--text {
      padding: 0 10px;
      position: relative;
    }
  }
}
</style>