---
title: 'Zharikov User Interface'
description: 'Простой и легкий SCSS фреймворк'
link_nav: '1'
image: '/public/favicon.icn'
head:
  meta:
    - name: 'keywords'
      content: 'css, framework, scss, sass'
    - name: 'robots'
      content: 'index, follow'
    - name: 'author'
      content: 'Alexander Zharikov'
    - name: 'copyright'
      content: '© 2023 Zharikov.design'
---

# Zharikov

Короче работает **content** модуль

```html
<a href="#" class="button large">Button</a>
```

```scss
.content {
  gap: $gap-x3;
  @include flex(row,space-between,stretch);

  .title {
    @include title($headline-x10);
    
    @include mq(mobile) {
      @include title($headline-x6);
    }
  }

  .text {
    gap: $gap-x2;
    @include text($body-normal-x5,$body);
    @include flex(row,flex-start,center);

    i {
      color: $blue;
      font-size: $icon-x6;
      display: block;
      transform: rotate(180deg);
    }
  }
}
```