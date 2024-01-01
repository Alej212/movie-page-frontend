<template>
    <div class="letter" v-for="(value, key, index) in myObject" :key="index" :data="value">
        <div class="letter_img"></div>
        <div class="letter_info">
            <h6 class="letter_h6">Title of chapter</h6>
            <div class="letter_ranking">
                <Icon name="mdi:heart" class="letter_icon"></Icon>
                <p class="letter_p">80%</p>
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
.letter {
    display: flex;
    width: 15.625rem;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-start;

    &_img {
        display: flex;
        height: 12.5rem;
        padding: 0.625rem;
        flex-direction: column;
        align-items: flex-end;
        gap: 0.625rem;
        align-self: stretch;
        background: url('../../assets/images/image1.png'), lightgray 50% / cover no-repeat;
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