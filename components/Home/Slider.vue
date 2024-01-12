<template>
    <div class="imgtop">
        <div class="imgtop_content">
            <div class="imgtop_contentleft">
                <h1 class="imgtop_h1">TITLE MOVIE</h1>
                <h6 class="imgtop_h6">
                    is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </h6>
            </div>
            <div class="imgtop_contentrigth">
                <div class="imgtop_button">
                    <p class="imgtop_p">Show trailer</p>
                    <Icon name="material-symbols:slideshow-outline" class="imgtop_icon"></Icon>
                </div>
                <div class="imgtop_movie"></div>
            </div>
        </div>
        <div class="imgtop_circles">
            <div class="imgtop_circle"></div>
            <div class="imgtop_circle"></div>
            <div class="imgtop_circle"></div>
            <div class="imgtop_circle"></div>
        </div>
    </div>
</template>

<script setup></script>

<style scoped lang="scss">
.imgtop {
    display: flex;
    height: 45rem;
    flex-direction: column;
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.50) 0%, rgba(0, 0, 0, 0.50) 100%), url('../../assets/images/image1.png'), lightgray 50% / cover no-repeat;

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
        padding: 0.625rem;
        flex-direction: column;
        align-items: flex-end;
        gap: 0.625rem;
        background: url('../../assets/images/image1.png'), lightgray 50% / cover no-repeat;
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

@media screen and (max-width:1000px) {
    .imgtop {

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
            justify-content: flex-end;
            flex-flow: column-reverse;
            align-items: center;
            gap: 0.625rem;
            /* flex: 1 0 0; */
            align-self: stretch;
        }
    }
}
</style>