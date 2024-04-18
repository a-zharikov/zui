<template>
  <header>
    <NuxtLink to="/" class="logo" @click.prevent="toggleNav">
      <NuxtImg src="/logo.svg" height="28" />
      <div class="logo-text">ui</div>
    </NuxtLink>
    <nav :class="{ active: isNavActive }">
      <ul>
        <li v-for="item in menuItems" :key="item.text" :class="{ active: isActive(item.path) }">
          <NuxtLink :to="item.path">{{ item.text }}</NuxtLink>
        </li>
      </ul>
    </nav>
    <NuxtLink to="https://github.com/a-zharikov/ui" class="git" target="_blank">
      <Icon name="uil:github" size="24"/>
    </NuxtLink>
    <button @click.prevent="toggleNav" class="menu" :class="{ active: isNavActive }"></button>
  </header>
</template>

<script setup>
  import { ref } from 'vue';

  const isNavActive = ref(false);

  function toggleNav() {
    isNavActive.value = !isNavActive.value;
    // Добавление или удаление класса __screen в зависимости от состояния isNavActive
    document.documentElement.classList.toggle('__screen', isNavActive.value);
    document.body.classList.toggle('__screen', isNavActive.value);
  }

  function deactivateNav() {
    if (isNavActive.value) {
      isNavActive.value = false;
      // Удаление класса __screen, так как навигация деактивирована
      document.documentElement.classList.remove('__screen');
      document.body.classList.remove('__screen');
    }
  }

  // Menu
  import { useRoute } from 'vue-router'

  const route = useRoute()
  const menuItems = [
    { path: '/start', text: 'Документация' },
    // Добавьте другие пункты меню
  ]

  function isActive(path) {
    return route.path === path
  }
</script>

<style lang="scss" scoped>
  @import '~/assets/scss/styles';

  header {
    top: 0;
    position: sticky;
    background: $white;
    border-bottom: 1px solid $pages;
    box-sizing: border-box;
    margin-bottom: $zui-40;
    z-index: 3;
    @include flex($rw,$sb,$cr,0);
    
    @include screen(0,1023) {
      margin-bottom: $zui-20;
      padding: $zui-8 0;
    }
    
    nav {
      @include screen(0,1023) {
        width: $zui-100p;
        height: 100vh;
        position: absolute;
        top: $zui-48;
        left: 0;
        background: $white;
        box-sizing: border-box;
        display: none;
        pointer-events: none;
        border-top: 1px solid $pages;
        @include transition;
        
        &.active {
          display: block;
          pointer-events: all;
        }
      }
      
      ul {
        margin-bottom: 0;
        @include flex($rw,$sb,$cr,$zui-24);
        
        @include screen(0,1023) {
          @include flex($cl,$sb,$cr,0);
        }

        li {
          position: relative;
          margin-bottom: -1px !important;
          border-bottom: 2px solid $tr;
          @include transition;
          
          @include screen(0,1023) {
            width: $zui-100p;
            
            &:not(&:last-child) {
              border-bottom: 1px solid $pages;
            }
          }

          a {
            padding: $zui-12 0;
            text-decoration: none;
            display: block;
            @include text($normal-x5,$border);
            @include transition;

            @include screen(0,1023) {
              width: $zui-100p;
            }

            &:hover {
              color: $caption;
            }
          }

          &::before {
            display: none;
          }

          &:last-child {

            @include screen(0,1023) {
              border: 0 !important;
            }
          }

          &.active {
            border-bottom: 2px solid $primary;
            
            @include screen(0,1023) {
              border-color: $pages;
            }

            a {
              color: $primary;
              cursor: default;
            }
          }
        }
      }
    }

    .logo {
      text-decoration: none;
      @include flex($rw,$fs,$cr,$zui-8);

      &-text {
        text-transform: uppercase;
        @include text($bold-x5,$border);
      }
    }

    .git {
      color: $border;
      @include transition;

      @include screen(0,1023) {
        display: none;
      }

      &:hover {
        color: $body;
      }
    }

    .menu {
      width: $zui-32;
      height: $zui-32;
      color: $border;
      background: $tr;
      @include icon(28,$border);
      @include flex($rw,$cr,$cr,0);
      @include transition;

      &::before {
        content: 'menu';
      }

      &.active {
        &::before {
          content: 'close';
        }
      }
      
      @include screen(1024) {
        display: none;
      }

      &:hover {
        color: $body;
      }
    }
  }
</style>