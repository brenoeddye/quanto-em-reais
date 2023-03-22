<script lang="ts">
import icons from '../core/icons'

export default defineComponent({
    props: {
        icon: String
    },
    computed: {
        path() {
            return icons[this.icon]
        }
    }
})
</script>

<template>
    <svg>
        <path :d="path()" />
    </svg>
</template>