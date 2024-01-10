<template>
    <section class="section">
        <h3 class="section_h3">Capitules</h3>
        <ul class="section_ul">
            <li class="section_li">temporada</li>
            <li class="section_li">temporada</li>
            <li class="section_li">temporada</li>
            <li class="section_li">temporada</li>
        </ul>
        <ul class="section_content">
            <GlobalsWideLetter></GlobalsWideLetter>
        </ul>
    </section>
</template>

<script setup></script>

<style scoped lang="scss">
.section {
    display: flex;
    padding: 3.125rem 0rem 3.125rem 1.25rem;
    flex-direction: column;
    align-items: flex-start;
    gap: 2.5rem;
    align-self: stretch;
    overflow: hidden;

    &_h3 {
        color: #000;
        font-family: 'InterBold';
        font-size: 2rem;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
    }
    &_ul {
        display: flex;
        align-items: flex-start;
        gap: 0.625rem;
    }
    &_li {
        color: #000;
        font-family: 'InterBold';
        font-size: 1rem;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
    }
    &_content {
        display: flex;
        align-items: flex-start;
        gap: 3.125rem;
    }
}
</style>