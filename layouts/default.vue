<template>
    <header>
        <PrincipalHeader></PrincipalHeader>
    </header>
    <main>
        <slot></slot>
    </main>
</template>

<script setup></script>

<style scoped lang="scss">
header {
    position: fixed;
    z-index: 2;
    width: 100%;
}

main {
    padding-top: 4.4rem;
}
</style>