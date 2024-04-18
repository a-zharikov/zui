<template>
  <div class="what">
    <div class="what-item" v-for="item in reversedWhatItems" :key="item.id">
      <div class="what-item__image">
        <img :src="item.image" :alt="item.title">
      </div>
      <div class="what-item__text">
        <div class="title" v-html="item.title"></div>
        <div class="text">{{ item.text }}</div>
        <NuxtLink class="button middle primary mobile" :href="item.link">{{ item.button }}</NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>
  import { computed } from 'vue';
  const whatItems = [
    {
      id: 1,
      title: 'Адаптивные <span>элементы</span>',
      text: 'Комплект адаптивных элементов форм, кнопок, подсказок и снекбаров — каждый компонент настроен для идеального отображения на любом устройстве. Это гарантирует удобство использования, адаптируясь под любые размеры экранов и потребности пользователей.',
      button: 'Подробнее',
      image: 'image/img_3.jpg',
      link: '/'
    },
    {
      id: 2,
      title: 'Продвинутые <span>миксины</span>',
      text: 'Коллекция SCSS миксинов для эффективной адаптивной верстки. Включает миксины для медиа-запросов (брекпоинтов), управления флексбоксами, грид-систем, настройки шрифтов, иконок и типографики, обеспечивая быструю и гибкую настройку элементов под разные устройства.',
      button: 'Подробнее',
      image: 'image/img_2.jpg',
      link: '/'
    },
    {
      id: 3,
      title: 'Набор <span>переменных</span>',
      text: 'Включает в себя переменные для цветов, размеров текста, отступов и других часто используемых стилей, что позволяет разработчикам легко адаптировать интерфейс под различные требования, поддерживая при этом визуальную согласованность.',
      button: 'Подробнее',
      image: 'image/img_1.jpg',
      link: '/'
    },
  ];
  const reversedWhatItems = computed(() => {
    return [...whatItems].reverse();
  });
</script>

<style lang="scss">
  @import '~/assets/scss/styles';

  .what {
    @include flex($cl,$fs,$sh,$zui-40);

    &-item {
      @include grid(repeat(2,1fr),auto,$zui-80);
      
      @include mq(laptop) {
        gap: $zui-40;
      }

      @include mq(tablet) {
        @include flex($cl,$fs,$cr,$zui-20);
      }

      @include mq(mobile) {
        @include flex($cl,$fs,$cr,$zui-20);
      }

      &__image {

        img {
          max-width: 100%;
          object-fit: contain;
          display: block;
        }
      }

      &__text {
        @include flex($cl,$cr,$fs,$zui-20);

        .title {
          @include text($title-x12,$body);

          @include mq(laptop) {
            @include text($headline-x10,$body);
          }
          
          @include mq(mobile) {
            @include text($headline-x10,$body);
          }

          span {
            color: $primary;
          }
        }

        .text {
          @include text($normal-x5,$border);
        }
      }
      
      &:nth-of-type(even) {

        .what-item__image {
          grid-area: 1 / 2 / 2 / 3;
        }

        @include mq(mobile) {
          @include flex($cl,$fs,$cr,$zui-40);
        }
      }
    }
  }
</style>