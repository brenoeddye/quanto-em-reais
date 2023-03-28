<script lang="ts">
export default defineComponent({
    setup() {
        
    },
})
</script>

<template>
    <div class="footer">
        <a href="#">
            developed by: Breno Pereira
        </a>
    </div>
</template>

<style lang="scss" scoped>
.footer {
    position: fixed;
    bottom: 0;
    left: 0;
    margin-bottom: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    
    a {
        color: $font-color;
        padding: 20px 60px;
        border-radius: 40px;
        background-color: lighten($secondary, 8);
    }
}
</style>