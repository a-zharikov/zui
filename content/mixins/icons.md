---
title: 'Icons // ZUI'
description: 'Icons фрейморка ZUI'
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

Набор иконок от Google [Material Symbols](https://fonts.google.com/icons).

## Вызов иконки в элементе 
Через класс `icon` и названием иконки взятом с сайта **Material Symbols**
```html
<i class="icon">search</i>
```

## Вызов иконки в mixin
```scss
.element {
  @include icon($zui-24,$primary);
}
```

## Вызов иконки в псевдоэлементах
```scss
.element {

  &::before {
    content: 'search';
    @include icon($zui-24,$primary);
  }

  &::after {
    content: 'close';
    @include icon($zui-24,$primary);
  }
}
```

`$zui-24` - размер иконки  
`$primary` - цвет иконки  
`search` - название иконки