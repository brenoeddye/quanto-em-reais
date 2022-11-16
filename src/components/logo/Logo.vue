<script>
import Logo from './Logo';

export default {
    components: { Logo },
    data() {
        return {
            title: 'Quanto em',
            finish: 'Reais?'
        }
    }
}
</script>

<template>
    <Logo>
        <h1>{{ title }}</h1>
        <h2>{{ finish }}</h2>
    </Logo>
</template>