<template>
    <div class="div">
        <div class="div_cards">
            <PagesIndexHighCard :type="contentType" ></PagesIndexHighCard>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
let contentType = ref('')

if (route.name === 'series') {
contentType.value = 'series'
} else if (route.name === 'movies') {
contentType.value = 'movies'
} else if (route.name === 'upcoming') {
contentType.value = 'upcoming'
}
</script>

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

@media screen and (max-width: 900px) {
    
}
</style>