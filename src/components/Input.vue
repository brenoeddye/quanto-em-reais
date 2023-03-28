<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    props: {
        type: String,
        name: String,
        label: String,
        modelValue: String,
        placeholder: String,
    }
})
</script>

<template>
    <div class="inputForm">
        <label :for="name">{{ label }}</label>
        <input 
            :id="name"
            class="inputValue"
            :type="type"
            :value="modelValue"
            @input="$emit('update:modelValue', $event.target.value)"
            :placeholder="placeholder"
            step=".01"
        />
    </div>
</template>

<style lang="scss" scoped>
.inputForm {
    display: flex;

    label {
        position: absolute;
        top: 5px;
        font-size: 24px;
        padding-left: 10px;
        opacity: .4;
        z-index: 9;
    }
}
.inputValue {
    background: transparent;
    border: 0;
    color: $font-color;
    padding: 10px;
    padding-left: 45px;
    font-size: 24px;
    max-width: 80px;
    border-radius: 10px;
    outline: 1px solid lighten($secondary, 20);
    transition: all .25s linear;
    z-index: 1;
    &::placeholder {
        color: $font-color;
    }
    &:focus {
        max-width: 120px;
        outline: 1px solid lighten($secondary, 20);
        background: lighten($secondary, 10);
    }
}

input[type="number"] {
  -webkit-appearance: textfield;
     -moz-appearance: textfield;
          appearance: textfield;
}
input[type=number]::-webkit-inner-spin-button, 
input[type=number]::-webkit-outer-spin-button { 
  -webkit-appearance: none;
}
</style>