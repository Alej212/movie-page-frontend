<template>
    <div class="card" v-for="(value, key, index) in myObject" :key="index" :data="value">
        <div class="card_image"></div>
        <div class="card_info">
            <h5 class="card_h5">Title of movie</h5>
            <div class="card_date">
                <h6>12/02/2007</h6>
            </div>
            <div class="card_ranking">
                <Icon name="mdi:heart"></Icon>
                <h5 class="card_h5">80%</h5>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const myObject = ref({
  prop1: 'value1',
  prop2: 'value2',
  prop3: 'value3',
  prop4: 'value4',
  prop5: 'value5',
  prop6: 'value6',
  prop8: 'value8',
  prop9: 'value9',
  prop10: 'value10',
  prop11: 'value11',
  prop12: 'value11',
  prop13: 'value11',
  prop14: 'value11',
  prop15: 'value11',
  prop16: 'value11',
  prop17: 'value11',
  prop18: 'value11',
  prop19: 'value11',
  prop20: 'value11',
  prop21: 'value11',
});
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
        padding: 0.625rem;
        flex-direction: column;
        align-items: flex-end;
        gap: 0.625rem;
        align-self: stretch;
        background: url('../../assets/images/image1.png'), lightgray 50% / cover no-repeat;
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