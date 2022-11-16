<script>
import Input from './Input'

export default {
    components: { Input },
    props: { type: String, placeholder: String, value: String }
}
</script>

<template>
    <Input>
        <input :v-model="this.value" :type="this.type" :placeholder="this.placeholder">
    </Input>
</template>