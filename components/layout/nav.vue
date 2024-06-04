<template>
<ContentNavigation v-slot="{ navigation }">
  <!-- <pre>{{ navigation }}</pre> -->
  <nav>
    <ul>
      <li v-for="link of navigation" :key="link._path">
        <p>{{ link.title }}</p>
        <!-- Добавляем ссылки на дочерние документы -->
        <ul v-if="link.children && link.children.length > 0">
          <li v-for="childLink of link.children" :key="childLink._path">
            <nuxt-link :to="childLink._path">{{ childLink.title }}</nuxt-link>
          </li>
        </ul>
      </li>
    </ul>
  </nav>
</ContentNavigation>
</template>
<style lang="scss" scoped>
  // @import '~/assets/scss/styles';
  // nav {
  //   border-right: 1px solid $pages;

  //   ul {
  //     padding: 0;
  //     margin: 0;
  //     position: sticky;
  //     top: 0;

  //     li {
  //       @include flex($cl,$fs,$fs);

  //       p {
  //         margin-bottom: $zui-8 !important;
  //         @include text($bold-x4,$body);
  //       }
        
  //       a {
  //         text-decoration: none;
  //         @include text($normal-x4,$caption);

  //         &:hover, &.router-link-active {
  //           color: $primary;
  //         }
          
  //         &.router-link-active {
  //           @include text($bold-x4,$primary);
  //         }
  //       }

  //       ul {
  //         margin-bottom: $zui-20;
  //         position: relative;

  //         li {
  //           margin-bottom: $zui-8 !important;

  //           &:first-child {
  //             display: block;
  //           }
  //         }

  //         &:last-child {
  //           margin-bottom: 0;
  //         }
  //       }
        
  //       &::before {
  //         display: none;
  //       }

  //       &:first-child {
  //         display: none;
  //       }
  //     }
  //   }
  // }
</style>