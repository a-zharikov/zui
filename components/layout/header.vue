<template>
  <header>
    типа лого
    <nav>
      <ContentNavigation v-slot="{ navigation }">
        <pre>{{ navigation }}</pre>
        <ul>
          <li v-for="link of navigation" :key="link._path">
            <NuxtLink :to="link._path">{{ link.title }}</NuxtLink>
          </li>
        </ul>
      </ContentNavigation>
    </nav>
  </header>
</template>

<style lang="scss" scoped>
  @import '~/assets/scss/styles';

  header {
    background: $primary;
  }
</style>