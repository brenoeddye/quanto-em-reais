<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    setup() {
        
    },
})
</script>

<template>
    <h1 class="logo">
        <a href="/">
            <span class="logo__first">Quanto em</span>
            <p class="logo__second">Reais?</p>
        </a>
    </h1>
</template>

<style lang="scss" scoped>
.logo {
    position: relative;
    margin-bottom: 100px;
    cursor: pointer;

    &:hover {
        .logo__second {
            background: darken($primary, 15);
            left: 10px;
            padding: 5px 30px;
        }
    }

    &__first {
        color: $font-color;
    }

    &__second {
        position: absolute;
        left: 60px;
        background: $primary;
        color: $font-color;
        padding: 5px 10px;
        border-radius: 10px;
        margin: 0;
        max-width: 100px;
        transition: all .3s linear;
    }
}
</style>