<template>
    <section class="seriescontent" id="series">
        <div class="seriescontent_contenttitle">
            <h3 class="seriescontent_title">Series</h3>
            <div class="seriescontent_showmore">
                <NuxtLink to="/series" class="seriescontent_link"> 
                    <p class="seriescontent_p">View all</p>
                </NuxtLink>
            </div>
        </div>
        <div class="seriescontent_card">
            <PagesIndexHighCard :type="'series'"></PagesIndexHighCard>
        </div>
      </section>
</template>

<script setup></script>

<style scoped lang="scss">
.seriescontent {
    display: flex;
    padding-left: 1.25rem;
    flex-direction: column;
    align-items: flex-start;
    gap: 2.5rem;
    align-self: stretch;
    overflow: hidden;

    &_contenttitle {
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        align-self: stretch;
        align-items: center;
    }
    &_title {
        color: aliceblue;
        font-family: 'InterBold';
        font-size: 2rem;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
    }
    &_card {
        display: flex;
        flex-flow: row nowrap;
        align-items: flex-start;
        gap: 2rem;
        transition: transform 30s linear; /* Añade una transición suave */
        overflow-x: auto; /* Permite el desplazamiento horizontal */
        overflow-y: hidden;
    }
    &_card:hover {
        transform: translateX(-80%);
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
        color: aliceblue;
        font-family: 'InterBold';
        font-size: 1.25rem;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
        margin-right: 1rem;
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

@media screen and (max-width: 900px) {
    .seriescontent {
        &_p {
            font-family: 'InterBold';
            font-size: 1rem;
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
            width: 2rem;
            height: 2rem;
        }
    }

}
</style>