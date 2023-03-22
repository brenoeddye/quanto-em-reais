<script lang="ts">
import ApiService from "./core/data/ApiService"

export default defineComponent({
    data() {
      return {
        coin: 'Dolares'
      }
    },
    methods: {
      getCoinName(coin: string) {
        ApiService.get(coin)
          .then((response: responseData) => {
            console.log(response.data)
          })
          .catch((e: Error) => {
            console.log(e)
          })
      }
    }
})
</script>

<template>
  <div>
    <LayoutLogo :coin="this.coin" />
    <div class="qer__quickAccess">

    </div>
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
  display: flex;
  align-items: center;
  justify-content: center;
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
  &__quickAccess {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  &__content {
    position: absolute;
    &--text {
      padding: 0 10px;
    }
  }
}
</style>