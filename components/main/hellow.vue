<template>
  <div class="hellow">
    <div class="hellow-title">Zharikov</div>
    <div class="hellow-sub">User Interface</div>
    <div class="hellow-text">Простой и легкий SCSS фреймворк</div>
    <div class="hellow-size"><span>50kb</span></div>
    <!-- <div class="hellow-button">
      <NuxtLink class="button middle primary mobile" to="/start">Установка</NuxtLink>
      <NuxtLink class="button middle tertiary transparent mobile" to="/start">Как это работает?</NuxtLink>
    </div> -->
  </div>
</template>

<style lang="scss" scoped>
  @import '~/assets/scss/styles';

  .hellow {
    @include flex($cl,$cr,$cr,$zui-20);

    @include mq(mobile) {
      gap: $zui-12;
    }

    &-title {
      @include text($title-x12,$primary);
      
      @include mq(mobile) {
        @include text($headline-x8,$primary);
      }
    }
    
    &-sub {
      @include text($title-x14,$body);

      @include mq(mobile) {
        @include text($headline-x10,$body);
      }
    }

    &-text {
      @include text($normal-x5,$border);
      
      @include mq(mobile) {
        text-align: center;
        @include text($normal-x4,$border);
      }
    }

    &-size {

      span {
        background: $pages;
        border-radius: $zui-8;
        padding: $zui-4 $zui-8;
        box-sizing: border-box;
        @include text($bold-x4,$caption);
      }
    }

    &-button {
      @include flex($rw,$cr,$cr,$zui-12);

      @include mq(mobile) {
        margin-top: $zui-20;
        @include flex($cl,$cr,$cr,$zui-12);
      }
    }
  }
</style>