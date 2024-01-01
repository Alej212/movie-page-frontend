<template>
    <section class="section">
        <div class="section_info">
            <h3 class="section_h3">Info Seasson</h3>
            <p class="section_p">
                is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
        </div>
        <div class="section_categories">
            <h4 class="section_h4">Categories</h4>
            <ul class="section_ul">
                <li class="section_li">category</li>
                <li class="section_li">category</li>
                <li class="section_li">category</li>
                <li class="section_li">category</li>
            </ul>
        </div>
    </section>
</template>

<script setup></script>

<style scoped lang="scss">
.section {
    display: flex;
height: 25.5625rem;
padding: 0.625rem 1.875rem;
flex-direction: column;
align-items: flex-start;
gap: 2.5rem;
align-self: stretch;

    &_info {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 0.625rem;
        align-self: stretch;
    }
    &_h3 {
        color: #000;
        font-family: 'InterBold';
        font-size: 2rem;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
    }
    &_p {
        color: #000;
        font-family: 'InterLight';
        font-size: 1rem;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
    }
    &_categories {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 0.625rem;
    }
    &_h4 {
        color: #000;
        font-family: 'InterBold';
        font-size: 1rem;
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
        font-family: 'InterLight';
        font-size: 1rem;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
    }
}
</style>