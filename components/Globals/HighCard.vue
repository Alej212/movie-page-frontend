<template>
    <div class="card" v-for="movie in movies" :key="movie.id">
        <router-link :to="`/${props.type}/${movie.id}`">
            <img class="card_image" :src="'https://image.tmdb.org/t/p/w500' + movie.poster_path " alt="movie poster"><img/>
        </router-link>
        <div class="card_info">
            <h5 class="card_h5">{{ movie.title || movie.name }}</h5>
            <div class="card_date">
                <h6>{{ movie.release_date || movie.first_air_date }}</h6>
            </div>
            <div class="card_ranking">
                <Icon name="mdi:heart"></Icon>
                <h5 class="card_h5">{{ movie.vote_average * 10}}%</h5>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useMovieStore } from '../../store/FetchMovies'

const movieStore = useMovieStore()
const movies = ref([])

const props = defineProps({
  type: String,
})

onMounted(async () => {
  if (props.type === 'upcoming') {
    await movieStore.fetchUpcomingMovies()
    movies.value = movieStore.$state.upcoming
  } else if (props.type === 'movies') {
    await movieStore.fetchMovies()
    movies.value = movieStore.$state.movies
  } else if (props.type === 'series') {
    await movieStore.fetchSeries()
    movies.value = movieStore.$state.series
  }
})

console.log(movies.value)
</script>

<style scoped lang="scss">
.card {
        display: flex;
        width: 12.5rem;
        flex-direction: column;
        justify-content: flex-end;
        align-items: flex-start;

        &_image {
        display: flex;
        height: 15.625rem;
        //padding: 0.625rem;
        flex-direction: column;
        align-items: flex-end;
        gap: 0.625rem;
        align-self: stretch;
        //background: url('../../assets/images/image1.png'), lightgray 50% / cover no-repeat;
        }
        &_info {
            display: flex;
            height: 7.5rem;
            padding: 0.625rem;
            flex-direction: column;
            align-items: flex-start;
            gap: 0.625rem;
            align-self: stretch;
        }
        &_h5 {
            color: #000;
            font-family: 'InterBold';
            font-size: 1rem;
            font-style: normal;
            font-weight: 700;
            line-height: normal;
        }
        &_date {
            display: flex;
            padding: 0.1875rem;
            align-items: flex-start;
            gap: 0.625rem;
        }
        h6 {
            color: #000;
            font-family: 'InterBold';
            font-size: 0.75rem;
            font-style: normal;
            font-weight: 500;
            line-height: normal;
        }
        &_ranking {
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 0.3125rem;
        }
    }
    
</style>