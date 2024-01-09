import { defineStore } from 'pinia'
import axios from 'axios'

export const useMovieStore = defineStore('movie', {
  state: () => ({
    movies: [],
    popularMovies: [],
    series: [],
  }),
  actions: {
    async fetchMovies() {
      const response = await axios.get('https://api.themoviedb.org/3/movie/popular', {
        params: {
          api_key: '0b424004cc638a79ae8c6d443318e705',
        },
      })
      this.movies = response.data.results
    },
    async fetchPopularMovies() {
      const response = await axios.get('https://api.themoviedb.org/3/movie/upcoming', {
        params: {
          api_key: '0b424004cc638a79ae8c6d443318e705',
        },
      })
      this.popularMovies = response.data.results
    },
    async fetchSeries() {
      const response = await axios.get('https://api.themoviedb.org/3/tv/popular', {
        params: {
          api_key: '0b424004cc638a79ae8c6d443318e705',
        },
      })
      this.series = response.data.results
    },
  },
})
