<template>
  <Swiper
    :modules="[SwiperAutoplay, SwiperEffectCreative, SwiperPagination]"
    :slides-per-view="1"
    :loop="true"
    :effect="'creative'"
    :autoplay="{ delay: 4000, disableOnInteraction: true, }"
    :creative-effect="{ prev: { shadow: false, translate: ['-20%', 0, -1], }, next: { translate: ['100%', 0, 0], }, }"
  >
    <SwiperSlide v-for="movie in movies" :key="movie.id">
      <div class="imgtop" :style="{ backgroundImage: 'url(https://image.tmdb.org/t/p/w500' + movie.backdrop_path + ')' }">
        <div class="imgtop_content">
          <div class="imgtop_contentleft">
            <h1 class="imgtop_h1">{{ movie.title }}</h1>
            <h6 class="imgtop_h6">{{ movie.overview }}</h6>
          </div>
          <div class="imgtop_contentrigth">
            <img class="imgtop_movie" :src="'https://image.tmdb.org/t/p/w500' + movie.poster_path" alt="movie image">
          </div>
        </div>
      </div>
    </SwiperSlide>
  </Swiper>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useMovieStore } from '../../store/FetchMovies'

const movieStore = useMovieStore()
const movies = ref([])


onMounted(async () => {
    await movieStore.fetchPopularMovies()
    movies.value = movieStore.$state.popularMovies
})


</script>

<style scoped lang="scss">
.imgtop {
    display: flex;
    height: 45rem;
    flex-direction: column;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    &_content {
        display: flex;
        justify-content: center;
        gap: 0.625rem;
        flex: 1 0 0;
    }
    &_contentleft {
        display: flex;
        padding: 0rem 0rem 3.125rem 2.5rem;
        flex-direction: column;
        justify-content: flex-end;
        align-items: flex-start;
        gap: 0.625rem;
        flex: 1 0 0;
        align-self: stretch;
    }
    &_h1 {
        color: #FFF;
        font-family: 'InterExtraBold';
        font-size: 3.75rem;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
    }
    &_h6 {
        color: #FFF;
        font-family: 'InterBold';
        font-size: 1rem;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
    }
    &_contentrigth {
        display: flex;
        padding: 0rem 4.375rem 1.875rem 0rem;
        justify-content: flex-end;
        align-items: flex-end;
        gap: 0.625rem;
        flex: 1 0 0;
        align-self: stretch;
    }
    &_p {
        color: #000;
        font-family: 'InterBold';
        font-size: 1rem;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
    }
    &_p:hover {
        color: #FFF;
    }
    &_button {
        display: flex;
        padding: 0.3125rem 0.9375rem;
        justify-content: center;
        align-items: center;
        gap: 0.625rem;
        border-radius: 3.125rem;
        background: #980033;
    }
    &_icon {
        width: 1.875rem;
        height: 1.875rem;
        color: #000;
    }
    &_movie {
        display: flex;
        width: 13.125rem;
        height: 16.25rem;
        flex-direction: column;
        align-items: flex-end;
        gap: 0.625rem;
    }
    &_circles {
        display: flex;
        padding: 0.625rem;
        justify-content: center;
        align-items: center;
        gap: 0.625rem;
        align-self: stretch;
    }
    &_circle {
        width: 1.25rem;
        height: 1.25rem;
        border-radius: 3.125rem;
        background: #fff;
    }
    &_circle:nth-child(1) {
        background-color: #980033;
    }
}

@media screen and (max-width:900px) {
    .imgtop {
        display: flex;
        height: 30rem;
        flex-direction: column;
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;

        &_content {
            flex-flow: column nowrap;
        }
        &_contentleft {
            display: none;
        }

        &_contentrigth {
            display: flex;
            padding: 0;
            padding-bottom: 3rem;
            justify-content: flex-start;
            flex-flow: column-reverse;
            align-items: center;
            gap: 0.625rem;
            /* flex: 1 0 0; */
            align-self: stretch;
        }
        &_movie {
            display: flex;
            width: 9rem;
            height: 12rem;
            flex-direction: column;
            align-items: flex-end;
            gap: 0.625rem;
        }
    }
}
</style>