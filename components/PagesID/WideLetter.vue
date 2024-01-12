<template>
    <div class="letter" v-for="season in movie.seasons" :key="season.id">
        <img class="letter_img" :src="'https://image.tmdb.org/t/p/w500' + season.poster_path" alt="seasson poster">
        <div class="letter_info">
            <h6 class="letter_h6">{{ season.name }}</h6>
            <div class="letter_ranking">
                <Icon name="mdi:heart" class="letter_icon"></Icon>
                <p class="letter_p">{{ season.vote_average }}</p>
            </div>
        </div>
    </div>
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
.letter {
    display: flex;
    width: 15.625rem;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-start;

    &_img {
        display: flex;
        height: 20rem;
        padding: 0.625rem;
        flex-direction: column;
        align-items: flex-end;
        gap: 0.625rem;
        align-self: stretch;
    }
    &_info {
        display: flex;
        padding: 0.625rem;
        flex-direction: column;
        align-items: flex-start;
        gap: 0.625rem;
        align-self: stretch;
    }
    &_h6 {
        color: #000;
        font-family: 'InterBold';
        font-size: 1rem;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
    }
    &_ranking {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 0.3125rem;
    }
    &_icon {
        width: 1.25rem;
        height: 1.25rem;
    }
    &_p {
        color: #000;
        font-family: 'InterLight';
        font-size: 1rem;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
    }

}
</style>