---
title: 'Typography'
description: 'Typography фрейморка ZUI'
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

## Дефолтное
Значение, если не указывать цвет, то применится цвет по умолчанию.
#### SCSS
```scss
.block {
  @include text($normal-x5);
}
```
`$normal-x5` - переменная из [набора](/variables/fonts).
#### CSS
```css
.block {
  color: #202327;
  font: 400 20px/28px "Montserrat", sans-serif;
}
```
## Кастомный цвет
#### SCSS
```scss
.block {
  @include text($normal-x5,$caption);
}
```
#### CSS
```css
.block {
  color: #788394;
  font: 400 20px/28px "Montserrat", sans-serif;
}
```