<template>
    <div class="seriescontent">
        <div class="seriescontent_contenttitle">
            <h3 class="seriescontent_title">Most popular Series</h3>
        </div>
        <div class="seriescontent_card">
            <GlobalsHighCard></GlobalsHighCard>
        </div>
    </div>
</template>

<script setup></script>

<style scoped lang="scss">
.seriescontent {
    display: flex;
    padding: 3.125rem 0rem 3.125rem 1.25rem;
    flex-direction: column;
    align-items: flex-start;
    gap: 2.5rem;
    align-self: stretch;
    overflow: hidden;

    &_contenttitle {
        display: flex;
        align-items: flex-start;
        gap: 0.625rem;
        align-self: stretch;
    }
    &_title {
        color: #000;
        font-family: 'InterBold';
        font-size: 2rem;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
    }
    &_card {
        display: flex;
        align-items: flex-end;
        gap: 2.5rem;
    }
}
</style>