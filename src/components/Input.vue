<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    props: {
        type: String,
        placeholder: String,
    },
    setup() {
        
    },
})
</script>

<template>
    <input 
        class="inputValue"
        :type="this.type"
        :placeholder="this.placeholder"
    />
</template>

<style lang="scss" scoped>
.inputValue {
    background: transparent;
    border: 0;
    color: $font-color;
    &::placeholder {
        color: $font-color;
    }
}
</style>