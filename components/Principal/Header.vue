<template>
    <nav class="header">
      <Icon name="mingcute:menu-fill" class="header_iconXl"></Icon>
      <form @submit.prevent="search" class="header_search">
        <input type="text" v-model="query" class="header_input header_input--click">
        <button class="header_button header_button--click">
          <Icon name="charm:search" class="header_iconsearch"></Icon>
        </button>
      </form>
      <ul class="header_ul">
        <li class="header_li">
          <a href="https://github.com/Alej212" target="_blank">
            <Icon name="uil:github" class="header_iconXl2"></Icon>
          </a>
        </li>
      </ul>
    </nav>
    <div :class="{'div_search': true, 'full-height': query.trim() !== ''}">
      <ul v-if="query.trim() !== ''" class="ul_search">
        <li v-for="movie in movieStore.movies" :key="movie.id">
            <nuxt-link :to="`/movies/${movie.id}`" @click="clearInput">
            {{ movie.title }}
            </nuxt-link>
        </li>
    </ul>
    <ul v-if="query.trim() !== ''" class="ul_search">
        <li v-for="serie in movieStore.series" :key="serie.id">
            <nuxt-link :to="`/series/${serie.id}`" @click="clearInput">
            {{ serie.name }}
            </nuxt-link>
        </li>
    </ul>
    <ul v-if="query.trim() !== ''" class="ul_search">
        <li v-for="movie in movieStore.upcoming" :key="movie.id">
            <nuxt-link :to="`/upcoming/${movie.id}`" @click="clearInput">
            {{ movie.title }}
            </nuxt-link>
        </li>
    </ul>
    </div>
</template>

<script setup>
  import { ref, watch } from 'vue'
  import { useMovieStore } from '~/store/FetchMovies.js'

  const movieStore = useMovieStore()
  const query = ref('')

  let lastQuery = ''

  const clearInput = () => {
    query.value = ''
  }

  watch(query, async (newQuery) => {
    if (newQuery.trim() === '') {
      movieStore.movies = []
      movieStore.series = []
      movieStore.upcoming = []
    } else if (newQuery !== lastQuery) {
      try {
        await movieStore.searchMovies(newQuery)
        await movieStore.searchSeries(newQuery)
        await movieStore.searchUpcomingMovies(newQuery)
        lastQuery = newQuery
        // Filtrar los resultados de la búsqueda
        movieStore.movies = movieStore.movies.filter(movie => movie.title.toLowerCase().startsWith(newQuery.toLowerCase()))
        movieStore.series = movieStore.series.filter(serie => serie.name.toLowerCase().startsWith(newQuery.toLowerCase()))
        movieStore.upcoming = movieStore.upcoming.filter(movie => movie.title.toLowerCase().startsWith(newQuery.toLowerCase()))
      } catch (error) {
        console.error('Error al buscar:', error)
      }
    }
  })

  const search = async () => {
    if (query.value.trim() !== '') {
      try {
        await movieStore.searchMovies(query.value)
        await movieStore.searchSeries(query.value)
        await movieStore.searchUpcomingMovies(query.value)
      } catch (error) {
        console.error('Error al buscar:', error)
      }
    }
  }

</script>

<style scoped lang="scss">
.header {
    display: flex;
    padding: .9375rem 0 .9375rem 0;
    justify-content: space-between;
    gap: 2rem;
    align-items: center;
    background: #161616;

    &_icon {
        width: 1.50rem;
        height: 1.50rem;
        color: hsla(340, 100%, 30%, 1);
    }
    &_iconsearch {
        width: 1.30rem;
        height: 1.30rem;
        color:  hsla(340, 100%, 30%, 1);
    }
    &_iconXl {
        width: 2.5rem;
        height: 2.5rem;
        margin-left: 1.875rem;
        color: hsla(340, 100%, 30%, 1);
        display: none;
    }
    &_iconXl2 {
        width: 2.5rem;
        height: 2.5rem;
        color: hsla(340, 100%, 30%, 1);
        margin-right: 1rem;
    }
    &_iconXl2:hover {
      color: rgb(215, 29, 91);
    }
    &_search {
        display: flex;
        width: 29.9375rem;
        justify-content: center;
        align-items: center;
        align-self: stretch;
        border: 1px solid hsla(340, 100%, 30%, 1);
        border-radius: 5px;
        margin-left: 1rem;
    }
    &_input {
        display: flex;
        align-items: center;
        align-self: stretch;
        padding-left: 1rem;
        background: transparent;
        border: none;
        color: hsla(340, 100%, 50%, 1);
        font-family: 'InterBold';
        width: 100%;
    }
    &_button {
        display: flex;
        padding: 0rem 1rem;
        justify-content: center;
        align-items: center;
        align-self: stretch;
        border-radius: 0rem 0.625rem 0.625rem 0rem;
        background: transparent;
    }
    &_ul {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 1.1875rem;
    }
}

.div_search {
  background-color:#161616;
}

.full-height {
  height: 100vh;
}

.ul_search {
  display: flex;
  flex-flow: column wrap;
  gap: 1rem;
}

.ul_search li {
//  color: aliceblue;
  color: hsla(340, 100%, 50%, 1);
  font-family: 'InterBold';
  font-size: 1rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-left: 1rem;
}
@media screen and (max-width: 900px) {
    .header_iconXl {
      display: none;
    }
    .header_search {
      flex-flow: row-reverse nowrap;
      margin-left: 1.25rem;

    }
    .header_input {
      padding-left: 0;
    }
    .header_input--click {
      border-radius: 0 0.625rem 0.625rem 0;
    }
    .header_button {
      border-radius: 0.625rem;
      padding: 0 1rem;
    }
    .header_button--click {
      border-radius: 0.625rem 0 0 0.625rem;
      padding: 0 1rem;
    }
}
</style>