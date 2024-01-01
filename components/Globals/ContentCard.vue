<template>
    <div class="div">
        <div class="div_cards">
            <GlobalsHighCard></GlobalsHighCard>
        </div>
    </div>
</template>

<script setup></script>

<style scoped lang="scss">
.div {
    display: flex;
    padding: 3.125rem 0rem 3.125rem 1.25rem;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2.5rem;
    align-self: stretch;

    &_cards {
        display: flex;
        justify-content: center;
        align-items: center;
        align-content: center;
        gap: 2.5rem;
        align-self: stretch;
        flex-wrap: wrap;
    }
}
</style>