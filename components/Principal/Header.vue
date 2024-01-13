<template>
    <nav class="header">
        <Icon name="mingcute:menu-fill" class="header_iconXl"></Icon>
        <form action="" class="header_search">
            <input type="text" class="header_input">
            <button class="header_button">
                <Icon name="charm:search" class="header_iconsearch"></Icon>
            </button>
        </form>
        <ul class="header_ul">
            <li class="header_li">
                <Icon name="mingcute:user-4-fill" class="header_iconXl"></Icon>
            </li>
        </ul>
    </nav>
</template>

<script setup></script>

<style scoped lang="scss">
.header {
    display: flex;
    padding: 0.9375rem 1.875rem;
    justify-content: space-between;
    align-items: center;
    align-self: stretch;
    background: #000;

    &_icon {
        width: 1.50rem;
        height: 1.50rem;
        color: hsla(340, 100%, 30%, 1);
    }
    &_iconsearch {
        width: 1.40rem;
        height: 1.40rem;
        color: #000;
    }
    &_iconXl {
        width: 2.5rem;
        height: 2.5rem;
        color: hsla(340, 100%, 30%, 1);
    }
    &_search {
        display: flex;
        width: 29.9375rem;
        justify-content: center;
        align-items: center;
        align-self: stretch;
    }
    &_input {
        display: flex;
        align-items: center;
        flex: 1 0 0;
        align-self: stretch;
        padding-left: 1rem;
        border-radius: 0.625rem 0rem 0rem 0.625rem;
        background: #FFF;
    }
    &_button {
        display: flex;
        padding: 0rem 1.875rem;
        justify-content: center;
        align-items: center;
        align-self: stretch;
        border-radius: 0rem 0.625rem 0.625rem 0rem;
        background: var(--Foundation-Red-Normal, #980033);
    }
    &_ul {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 1.1875rem;
    }
}

@media screen and (max-width: 900px) {
    .header_search {
        display: none;
    }
}
</style>