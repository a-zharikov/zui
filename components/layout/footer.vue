<template>
  <footer>
    <p>Copyright © {{ new Date().getFullYear() }} Zharikov User Interface</p>
    <div class="link">
      <NuxtLink to="https://www.npmjs.com/~alexander.zharikov" class="npm" target="_blank">
        <Icon name="cib:npm" size="26"/>
      </NuxtLink>
      <NuxtLink to="https://github.com/a-zharikov/ui" class="git" target="_blank">
        <Icon name="uil:github" size="22"/>
      </NuxtLink>
      <NuxtLink to="https://zharikov.design/" class="logo" target="_blank">
        <NuxtImg src="/logo.svg" height="20" />
      </NuxtLink>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
  @import '~/assets/scss/styles';

  footer {
    margin-top: $zui-40;
    padding: $zui-12 0;
    box-sizing: border-box;
    border-top: 1px solid $pages;
    position: relative;
    z-index: 1;
    @include flex($rw,$sb,$cr,0);
    
    @include screen(0,1023) {
      margin-top: $zui-20;
    }
    
    @include mq(mobile) {
      @include flex($cl,$sb,$cr,$zui-8);
    }

    p {
      @include text($normal-x3,$border);
    }

    .link {
      @include flex($rw,$fs,$cr,$zui-8);
      
      a {
        width: $zui-28;
        height: $zui-28;
        color: $border;
        @include flex($rw,$cr,$cr,0);
        @include transition;

        &.git {
          &:hover {
            color: $body;
          }
        }

        &.npm {
          &:hover {
            color: $npm;
          }
        }

        img {
          opacity: .6;
          filter: grayscale(100%);
          @include transition;

          &:hover {
            opacity: 1;
            filter: grayscale(0);
          }
        }
      }
    }
  }
</style>