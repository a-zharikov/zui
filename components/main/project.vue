<template>
  <div class="project">
    <div class="project-title">Им пользуются пару <span>крутых</span> проектов</div>
    <div class="project-wrapper">
      <NuxtLink :href="item.link" target="_blank" v-for="item in reversedProjectItems" :key="item.id">
        <img :src="item.image" :alt="item.title">
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>
  import { computed } from 'vue';
  const projectItems = [
    {
      id: 1,
      title: 'Skycenter',
      image: 'logo/sc.svg',
      link: 'https://skycenter.su'
    },
    {
      id: 2,
      title: 'Авторевю',
      image: 'logo/ar.svg',
      link: 'http://autoreview.ru/'
    }
  ];
  const reversedProjectItems = computed(() => {
    return [...projectItems].reverse();
  });
</script>

<style lang="scss">
  @import '~/assets/scss/styles';

  .project {
    margin: $zui-80 0;

    @include mq(mobile) {
      margin: $zui-40 0;
    }

    &-title {
      text-align: center;
      margin-bottom: $zui-32;
      @include text($headline-x6);
      
      @include mq(mobile) {
        margin-bottom: $zui-24;
        @include text($headline-x4);
      }

      span {
        color: $primary;
      }
    }
    
    &-wrapper {
      @include flex($rw,$cr,$cr,$zui-40);

      img {
        height: $zui-56;
        opacity: .4;
        filter: grayscale(100%);
        @include transition;

        &:hover {
          opacity: 1;
          filter: grayscale(0);
        }
      }
    }
  }
</style>