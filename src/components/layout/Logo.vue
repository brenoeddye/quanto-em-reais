<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    props: {
        coin: String
    }
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

        .logo__coin {
            &::before {
                background: darken($primary, 15);
                height: 40px;
            }
        }
    }
    &__first {
        color: $font-color;
    }
    &__second {
        position: absolute;
        left: 60px;
        bottom: -60px;
        background: $primary;
        color: $font-color;
        padding: 5px 10px;
        border-radius: 10px;
        margin: 0;
        max-width: 100px;
        transition: all .25s linear;
    }
    &__coin {
        padding: 5px 10px;
        position: relative;
        &::before {
            content: '';
            position: absolute;
            bottom: 5px;
            height: 2px;
            left: 0;
            width: 100%;
            background: $primary;
            border-radius: 10px;
            transition: all .25s linear;
            z-index: -1;
        }
    }
}
</style>