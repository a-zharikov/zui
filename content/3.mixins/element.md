---
title: 'Element'
description: 'Element фрейморка ZUI'
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

## Border
`@include border` - создает бордер у элемента с полупрозрачным цветом.  
#### SCSS
```scss
.block {
  @include border(1,0,0,0,$primary,.3);
}
```
#### CSS
```css
.block {
  border-top: 1px solid #3C4EFA;
  border-right: 0px solid #3C4EFA;
  border-bottom: 0px solid #3C4EFA;
  border-left: 0px solid #3C4EFA;
  border-color: rgba(60, 78, 250, 0.3);
}
```
## Обрез текста в три точки
`@include text_count` - Ограничит текст с высотой строки и скроет его в три точки `...`
#### SCSS
```scss
.block {
  @include text_count(3, 1.5, false);
}
```
#### CSS
```css
.block {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  line-height: 1.5;
}
```
### Настройки
`3` - количество строк в блоке;  
`1.5` - межстрочное расстояние;  
`false` - без принудительного переноса слов;  
`true` - включит перенос слов.