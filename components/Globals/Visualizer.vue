<template>
    <div class="visualizer">
        <div class="visualizer_content">
            <div class="visualizer_screen">
                <Icon name="teenyicons:play-solid" class="visualizer_iconplay"></Icon>
            </div>
            <div class="visualizer_bar">
                <p class="visualizer_time"></p>
                <div class="visualizer_proguess">
                    <div class="visualizer_advance"></div>
                </div>
                <p class="visualizer_time"></p>
            </div>
            <div class="visualizer_options">
                <Icon name="mdi:heart" class="visualizer_icon"></Icon>
                <div class="visualizer_icons">
                    <Icon name="solar:double-alt-arrow-left-bold" class="visualizer_icon"></Icon>
                    <Icon name="ic:round-pause" class="visualizer_icon"></Icon>
                    <Icon name="teenyicons:play-solid" class="visualizer_icon"></Icon>
                    <Icon name="solar:double-alt-arrow-right-bold" class="visualizer_icon"></Icon>
                </div>
                <Icon name="icomoon-free:enlarge" class="visualizer_icon"></Icon>
            </div>
        </div>
    </div>
</template>

<script setup></script>

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
        background: linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%), url('../../assets/images/image1.png'), lightgray 50% / cover no-repeat;
    }
    &_iconplay {
        width: 5rem;
        height: 5rem;
    }
    &_bar {
        display: flex;
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
        display: flex;
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
</style>