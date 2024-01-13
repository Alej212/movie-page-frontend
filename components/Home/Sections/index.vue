<template>
    <div class="contentsections">
        <HomeSectionsUpcoming></HomeSectionsUpcoming>
        <HomeSectionsMovies></HomeSectionsMovies>
        <HomeSectionsSeries></HomeSectionsSeries>
    </div>
</template>

<script setup></script>

<style scoped lang="scss">
.contentsections {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    align-self: stretch;
    padding-top: 3rem;
    padding-bottom: 3rem;
    gap: 3rem;
}
</style>