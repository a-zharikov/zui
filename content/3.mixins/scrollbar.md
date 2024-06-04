---
title: 'Scrollbar'
description: 'scrollbar фрейморка ZUI'
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

Создает стиль для скролбара страницы или блока.

```scss
$scrollbarBg: $white;
$scrollbarThumb: $pages;
$scrollbarWidth: $zui-4;
$scrollbarBorder: 1px solid $scrollbarBg;
$scrollbarBorderRadius: $zui-8;

@mixin scrollbar {
  scrollbar-width: $scrollbarWidth;
  scrollbar-height: $scrollbarWidth;
  scrollbar-color: $scrollbarThumb $scrollbarBg;
  
  &::-webkit-scrollbar {
    width: $scrollbarWidth;
    height: $scrollbarWidth;
  }

  &::-webkit-scrollbar-track {
    background: $scrollbarBg;
    border-radius: $scrollbarBorderRadius;
  }

  &::-webkit-scrollbar-thumb {
    background-color: $scrollbarThumb;
    border-radius: $scrollbarBorderRadius;
    border: $scrollbarBorder;
  }
}
```

## Переменные
`$scrollbarBg: $white;` - основной цвет скролбара;  
`$scrollbarThumb: $pages;` - цвет ползунка;  
`$scrollbarWidth: $zui-4;` - размер скролбара (ширина/высота);  
`$scrollbarBorder: 1px solid $scrollbarBg;` - ширина ползунка;  
`$scrollbarBorderRadius: $zui-8;` - скругление углов.

## Вызов
```scss
body {
  @include scrollbar;
}
```

## Скрытие скролбара
Данный миксин скрывает скролбар но оставляет возможность скролить.
```scss
@mixin nosb {
  &::-webkit-scrollbar {
    width: 0;
    height: 0;
  }
}
```