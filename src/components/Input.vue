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
    padding: 10px;
    max-width: 50px;
    border-radius: 10px;
    outline: 1px solid lighten($secondary, 20);
    transition: all .25s linear;
    &::placeholder {
        color: $font-color;
    }
    &:focus {
        max-width: 100px;
        outline: 1px solid lighten($secondary, 20);
        background: lighten($secondary, 10);
    }
}
</style>