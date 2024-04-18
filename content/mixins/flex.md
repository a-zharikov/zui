---
title: 'Flexbox // ZUI'
description: 'Flexbox фрейморка ZUI'
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

## Свойства
`$df` - flex;  
`$di` - inline-flex;  

`$rw` - row;  
`$rr` - row-reverse;  
`$cl` - column;  
`$clr` - column-reverse;  

`$fs` - flex-start;  
`$fe` - flex-end;  
`$cr` - center;  
`$sb` - space-between;  
`$sa` - space-around;  
`$bl` - baseline;  
`$sh` - stretch;  

#### SCSS
```scss
.block {
  @include flex($rw,$fs,$fs,$zui-4);
}
```
#### CSS
```css
.block {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 4px;
}
```
### inline-flex
#### SCSS
```scss
.block {
  @include flex($rw,$fs,$fs,$zui-4,$di);
}
```
#### CSS
```css
.block {
  display: inline-flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 4px;
}
```