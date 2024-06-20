<template>
  <nav>
    <ul>
      <li>
        <p>Variables</p>
        <ul>
          <li><a href="/variables/colors">Цвета</a></li>
          <li><a href="/variables/fonts">Шрифты</a></li>
          <li><a href="/variables/sizes">Размеры</a></li>
        </ul>
      </li>
      <li>
        <p>Mixins</p>
        <ul>
          <li><a href="/mixins/align">Align</a></li>
          <li><a href="/mixins/breakpoint">Breakpoint</a></li>
          <li><a href="/mixins/element">Element</a></li>
          <li><a href="/mixins/flex">Flexbox</a></li>
          <li><a href="/mixins/form">Form</a></li>
          <li><a href="/mixins/grid">Grid</a></li>
          <li><a href="/mixins/icons">Icons</a></li>
          <li><a href="/mixins/scrollbar">Scrollbar</a></li>
          <li><a href="/mixins/transition">Transition</a></li>
          <li><a href="/mixins/typography">Typography</a></li>
        </ul>
      </li>
      <li>
        <p>Elements</p>
        <ul>
          <li><a href="/elements/button">Button</a></li>
          <li><a href="/elements/checkbox">Checkbox</a></li>
          <li><a href="/elements/chips">Chips</a></li>
          <li><a href="/elements/form">Form</a></li>
          <li><a href="/elements/input">Input</a></li>
          <li><a href="/elements/label">Label</a></li>
          <li><a href="/elements/radio">Radio</a></li>
          <li><a href="/elements/snackbar">Snackbar</a></li>
          <li><a href="/elements/textarea">Textarea</a></li>
          <li><a href="/elements/toggle">Toggle</a></li>
          <li><a href="/elements/typography">Typography</a></li>
        </ul>
      </li>
    </ul>
  </nav>
</template>

<!--
<ContentNavigation v-slot="{ navigation }">
  <pre>{{ navigation }}</pre>
  <nav>
    <ul>
      <li v-for="link of navigation" :key="link._path">
        <p>{{ link.title }}</p>
        <ul v-if="link.children && link.children.length > 0">
          <li v-for="childLink of link.children" :key="childLink._path">
            <nuxt-link :to="childLink._path">{{ childLink.title }}</nuxt-link>
          </li>
        </ul>
      </li>
    </ul>
  </nav>
</ContentNavigation>
-->