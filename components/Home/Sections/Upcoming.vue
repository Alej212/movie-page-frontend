<template>
    <section class="popular" id="popularMovies">
        <div class="popular_contenttitle">
            <h3 class="popular_title">Upcoming</h3>
        </div>
        <div class="popular_card">
            <PagesIndexHighCard :type="'upcoming'"></PagesIndexHighCard>
        </div>
        <div class="popular_showmorecontent">
            <div class="popular_showmore">
                <p class="popular_p">More</p>
                <NuxtLink to="/upcoming" class="popular_link"> 
                    <Icon name="foundation:indent-more" class="popular_icon"></Icon>
                </NuxtLink>
            </div>
        </div>
    </section>
</template>

<script setup></script>

<style scoped lang="scss">
.popular {
    display: flex;
    padding: 3.125rem 0rem 3.125rem 1.25rem;
    flex-direction: column;
    align-items: flex-start;
    gap: 2.5rem;
    align-self: stretch;
    overflow: hidden;

    &_contenttitle {
        display: flex;
        align-items: flex-start;
        gap: 0.625rem;
        align-self: stretch;
    }
    &_title {
        color: #000;
        font-family: 'InterBold';
        font-size: 2rem;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
    }
    &_card {
        display: flex;
        align-items: flex-end;
        gap: 2.5rem;
    }
    &_showmorecontent {
        display: flex;
        padding-right: 1.875rem;
        flex-direction: column;
        justify-content: center;
        align-items: flex-end;
        gap: 0.625rem;
        align-self: stretch;
    }
    &_showmore {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 0.625rem;
    }
    &_p {
        color: #000;
        font-family: 'InterBold';
        font-size: 1.25rem;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
    }
    &_link {
        display: flex;
        padding: 0.3125rem;
        justify-content: center;
        align-items: center;
        gap: 0.625rem;
    }
    &_icon {
        width: 2.5rem;
        height: 2.5rem;
    }
}
</style>