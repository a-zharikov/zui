<template>
  <div class="container">
    <LayoutHeader />
    <div class="container-wrapper">
      <LayoutNav />
      <ContentDoc class="container-wrapper__content" />
    </div>
    <LayoutFooter />
  </div>
</template>



<style lang="scss" scope>
@import '~/assets/scss/styles';

.container {

  &-wrapper {
    flex: 1 0 auto;
    @include grid(220px 1fr 200px,auto,$zui-40);

    &__content {
      overflow: hidden;
    }
  }
}
</style>