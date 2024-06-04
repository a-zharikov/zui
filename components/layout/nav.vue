<template>
  <div class="container-wrapper__nav">
    <nav :class="{ active: isNavActive }">
      <ul>
        <li
          v-for="item in menuItems"
          :key="item.text"
          :class="{
            'menu-group': item.isGroup,
            active: item.isGroup ? item.isOpen : isActive(item.path),
          }"
          @click="toggleGroup(item)"
        >
          <NuxtLink v-if="!item.isGroup" :to="item.path">{{
            item.text
          }}</NuxtLink>
          <span v-else>
            {{ item.text }}
            <i class="icon">chevron_right</i>
          </span>
          <ul v-if="item.isGroup && item.isOpen">
            <li
              v-for="child in item.children"
              :key="child.text"
              :class="{ active: isActive(child.path) }"
            >
              <NuxtLink :to="child.path">{{ child.text }}</NuxtLink>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script setup>
import { ref, watch } from "vue";
import { useRoute } from "vue-router";

const isNavActive = ref(false);
const route = useRoute();

const menuItems = ref([
  { path: "/", text: "Начало работы", isGroup: false },
  {
    text: "Переменные",
    isGroup: true,
    isOpen: false,
    children: [
      { path: "/variables/colors", text: "Цвета" },
      { path: "/variables/fonts", text: "Шрифты" },
      { path: "/variables/sizes", text: "Размеры" },
    ],
  },
  {
    text: "Миксины",
    isGroup: true,
    isOpen: false,
    children: [
      { path: "/mixins/align", text: "Align" },
      { path: "/mixins/breakpoint", text: "Breakpoint" },
      { path: "/mixins/element", text: "Element" },
      { path: "/mixins/flex", text: "Flexbox" },
      { path: "/mixins/form", text: "Form" },
      { path: "/mixins/grid", text: "Grid" },
      { path: "/mixins/icons", text: "Icons" },
      { path: "/mixins/scrollbar", text: "Scrollbar" },
      { path: "/mixins/transition", text: "Transition" },
      { path: "/mixins/typography", text: "Typography" },
    ],
  },
  {
    text: "Элементы",
    isGroup: true,
    isOpen: false,
    children: [
      { path: "/elements/form", text: "Form" },
      { path: "/elements/input", text: "Input" },
      { path: "/elements/textarea", text: "Textarea" },
      { path: "/elements/checkbox", text: "Checkbox" },
      { path: "/elements/radio", text: "Radio" },
      { path: "/elements/toggle", text: "Toggle" },
      { path: "/elements/button", text: "Button" },
      { path: "/elements/chips", text: "Chips" },
      { path: "/elements/snackbar", text: "Snackbar" },
      { path: "/elements/label", text: "Label" },
      { path: "/elements/typography", text: "Typography" },
    ],
  },
]);

// Смотритель для автоматического управления состоянием isOpen
watch(
  () => route.path,
  (newPath) => {
    menuItems.value.forEach((group) => {
      if (group.isGroup) {
        group.isOpen = group.children.some((child) => child.path === newPath);
      }
    });
  },
);

function isActive(path) {
  return route.path === path;
}

function toggleGroup(item) {
  if (item.isGroup) {
    item.isOpen = !item.isOpen;
  }
}
</script>

<style lang="scss" scope>
@import "~/assets/scss/styles";

.container {
  &-wrapper {
    &__nav {
      position: relative;
      border-right: 1px solid $pages;
      padding-right: $zui-36;
      box-sizing: border-box;

      nav {
        position: sticky;
        top: $zui-64;

        ul {
          margin: 0;
          padding: 0;

          li {
            padding: 0;
            margin: 0;
            @include flex($cl, $fs, $fs, 0);

            a,
            span {
              cursor: pointer;
              text-decoration: none;
              @include text($normal-x5, $caption);

              &:hover {
                color: $primary;
              }

              &.router-link-active {
                color: $body;
              }
            }

            span {
              width: $zui-100p;
              @include flex($rw, $sb, $cr, 0);

              i {
                display: block;
                color: $primary;
              }
            }

            ul {
              margin-top: $zui-12;

              li {
                border-left: 1px solid $pages;
                padding: 0 0 $zui-8 $zui-12;
                box-sizing: border-box;
                margin: 0 0 0 $zui-4;

                &:last-child {
                  padding-bottom: 0;
                }

                a {
                  @include text($normal-x4, $caption);
                }
              }
            }

            &.active {
              i {
                transform: rotate(90deg);
              }
            }

            &::before {
              display: none;
            }
          }
        }
      }
    }
  }
}
</style>
