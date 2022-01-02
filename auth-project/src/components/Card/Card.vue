<template>
    <div class="card">
        <div class="card__wrapper">
            <slot />
        </div>
    </div>
</template>

<script>
export default {
    name: 'Card'
}
</script>

<style scoped lang="scss">
    @import 'Card'
</style>