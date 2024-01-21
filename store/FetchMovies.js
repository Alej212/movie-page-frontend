import { defineStore } from 'pinia'
import axios from 'axios'

export const useMovieStore = defineStore('movie', {
  state: () => ({
    movies: [],
    popularMovies: [],
    series: [],
    upcoming: [],
    movieDetail: [],
    serieDetail: [],
    imageResource: [],
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
      const response = await axios.get('https://api.themoviedb.org/3/movie/popular', {
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
    async fetchUpcomingMovies() {
      const response = await axios.get('https://api.themoviedb.org/3/movie/upcoming', {
        params: {
          api_key: '0b424004cc638a79ae8c6d443318e705',
        },
      })
      this.upcoming = response.data.results
    },
    async fetchMovieDetail(id) {
      const response = await axios.get(`https://api.themoviedb.org/3/movie/${id}`, {
        params: {
          api_key: '0b424004cc638a79ae8c6d443318e705',
        },
      })
      this.movieDetail = response.data
    },
    async fetchSerieDetail(id) {
      const response = await axios.get(`https://api.themoviedb.org/3/tv/${id}`, {
        params: {
          api_key: '0b424004cc638a79ae8c6d443318e705',
        }
      })
      this.serieDetail = response.data
    },
    async searchMovies(query) {
      const response = await axios.get(`https://api.themoviedb.org/3/search/movie`, {
        params: {
          api_key: '0b424004cc638a79ae8c6d443318e705',
          query: query
        },
      })
      this.movies = response.data.results
    },
    async searchSeries(query) {
      const response = await axios.get(`https://api.themoviedb.org/3/search/tv`, {
        params: {
          api_key: '0b424004cc638a79ae8c6d443318e705',
          query: query
        },
      })
      this.series = response.data.results
    },
    async searchUpcomingMovies(query) {
      const response = await axios.get(`https://api.themoviedb.org/3/search/movie`, {
        params: {
          api_key: '0b424004cc638a79ae8c6d443318e705',
          query: query
        },
      })
      this.upcoming = response.data.results.filter(movie => movie.release_date > new Date().toISOString())
    },
    async imageResource(id) {
      const response = await axios.get(`https://api.themoviedb.org/3/movie/${id}/images?api_key=0b424004cc638a79ae8c6d443318e705`, {
        params: {
          api_key: '0b424004cc638a79ae8c6d443318e705',
        }
      })
      this.imageResource = response.data
    } 
  },
})
