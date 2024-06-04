---
title: 'Align // ZUI'
description: 'Align фрейморка ZUI'
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

Предназначен для абсолютного `position: absolute;` выравнивания элементов.
## Вызов
`@include center` - по центру;  
`@include top_center` - вверху по центру;  
`@include top_left` - вверху слево;  
`@include top_right` - вверху с право;  
`@include bottom_center` - снизу по центру;  
`@include bottom_left` - снизу слево;  
`@include bottom_right` - снизу справа;  
`@include center-l` - слева по центру;  
`@include right_center` - справа по центру.
### SCSS
```scss
.block {
  @include center;
}
```
### CSS
```css
.block {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
```