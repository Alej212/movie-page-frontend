<template>
    <section class="section" v-if="route.name === 'series-id'">
        <h3 class="section_h3">Seasons</h3>
        <ul class="section_content">
            <PagesIDWideLetter></PagesIDWideLetter>
        </ul>
    </section>
    <section class="section" v-else>
        <h3 class="section_h3">Movies</h3>
        <ul class="section_content">
            <PagesIDWideLetter></PagesIDWideLetter>
        </ul>
    </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router';
import { useMovieStore } from '~/store/FetchMovies';

const route = useRoute()
const movieStore = useMovieStore()
const movie = ref({})

const fetchData = async () => {
  const id = route.params.id
  if (route.name === 'movies-id' || route.name === 'upcoming-id') {
    await movieStore.fetchMovieDetail(id)
    movie.value = movieStore.$state.movieDetail
  } else if (route.name === 'series-id') {
    await movieStore.fetchSerieDetail(id)
    movie.value = movieStore.$state.serieDetail
  }
}

onMounted(fetchData)

</script>

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
        margin-left: .5rem;
    }
    &_ul {
        display: flex;
        gap: 2.5rem;
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