<script lang="ts">
export default defineComponent({
    props: {
        coin: String
    }
})
</script>

<template>
    <div class="card">
        <i :class="'card__' + coin"></i>
    </div>
</template>

<style lang="scss" scoped>
.card {

}
</style>