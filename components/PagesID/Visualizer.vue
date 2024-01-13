<template>
    <div class="visualizer">
        <div class="visualizer_content">
            <iframe :src="`https://www.youtube.com/embed/${movie}`" class="visualizer_screen" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <div class="visualizer_bar">
                <p class="visualizer_time"></p>
                <div class="visualizer_proguess">
                    <div class="visualizer_advance"></div>
                </div>
                <p class="visualizer_time"></p>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import axios from 'axios'

const route = useRoute()
const movie = ref(null)

onMounted(async () => {
  const id = route.params.id
  let response
  try {
    if (route.name === 'movies-id' || route.name === 'upcoming-id') {
      response = await axios.get(`https://api.themoviedb.org/3/movie/${id}/videos`, {
        params: {
          api_key: '0b424004cc638a79ae8c6d443318e705',
        },
      })
    } else if (route.name === 'series-id') {
      response = await axios.get(`https://api.themoviedb.org/3/tv/${id}/videos`, {
        params: {
          api_key: '0b424004cc638a79ae8c6d443318e705',
        },
      })
    }
    movie.value = response.data.results[0].key
  } catch (error) {
    console.log(error)
  }
})
</script>



<style scoped lang="scss">
.visualizer {
    display: flex;
    padding: 3.125rem;
    flex-direction: column;
    align-items: flex-start;
    gap: 0.625rem;
    align-self: stretch;

    &_content {
        display: flex;
        height: 39.6875rem;
        flex-direction: column;
        justify-content: flex-end;
        align-items: center;
        align-self: stretch;
        background: #D6D6D6;
    }
    &_screen {
        display: flex;
        justify-content: center;
        align-items: center;
        flex: 1 0 0;
        align-self: stretch;
    }
    &_iconplay {
        width: 5rem;
        height: 5rem;
    }
    &_bar {
        display: none;
        padding: 0.625rem;
        align-items: center;
        gap: 0.625rem;
        align-self: stretch;
        background: #000;
    }
    &_time {
        color: #FFF;
        font-family: 'InterBold';
        font-size: 0.75rem;
        font-style: normal;
        font-weight: 300;
        line-height: normal;
    }
    &_proguess {
        display: flex;
        height: 0.625rem;
        align-items: center;
        flex: 1 0 0;
        border-radius: 3.125rem;
        background: #FFF;
    }
    &_advance {
        display: flex;
        width: 8.25rem;
        align-items: center;
        align-self: stretch;
        border-radius: 3.125rem;
        background: var(--Foundation-Red-Normal, #980033);
    }
    &_options {
        display: none;
        padding: 0.3125rem 0.9375rem 0.625rem 0.9375rem;
        justify-content: space-between;
        align-items: center;
        align-self: stretch;
        background: #000;
    }
    &_icons {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 0.625rem;
    }
    &_icon {
        width: 1.25rem;
        height: 1.25rem;
        color: hsla(340, 100%, 30%, 1)
    }
}

@media screen and (max-width: 900px) {
  .visualizer {
    display: flex;
    padding: 1rem;
    flex-direction: column;
    align-items: flex-start;
    gap: 0.625rem;
    align-self: stretch;
    
    &_content {
      display: flex;
      height: 25rem;
      flex-direction: column;
      justify-content: flex-end;
      align-items: center;
      align-self: stretch;
      background: #D6D6D6;
    }
  }
}
</style>