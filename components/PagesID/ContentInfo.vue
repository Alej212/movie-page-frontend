<template>
    <section class="section">
        <div class="section_contentinfo">
            <div class="section_info">
                <h3 class="section_h3">{{ movie.title }}</h3>
                <p class="section_p">
                    {{ movie.overview }}
                </p>
            </div>
            <div class="section_categories">
                <h4 class="section_h4">Categories</h4>
                <ul class="section_ul" v-for="category in movie.genres">
                    <li class="section_li">{{ category.name }}</li>
                </ul>
            </div>
        </div>
        <div class="section_img">
            <img src="" alt="image movie">
        </div>
    </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { useMovieStore } from '../../store/FetchMovies'

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
    height: 25.5625rem;
    padding: 0.625rem 1.875rem;
    gap: 2.5rem;

    &_contentinfo {
        display: flex;
        flex-flow: column nowrap;
        gap: 2rem;
        padding-top: 2rem;
        width: 50%;
    }
    &_img {
        background-color: aquamarine;
        width: 100%;
        height: 100%;
    }
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