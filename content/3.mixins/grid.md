---
title: 'Grid'
description: 'Grid фрейморка ZUI'
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
Миксин создает css `grid`.
#### SCSS
```scss
.block {
  @include grid(repeat(2,1fr),auto,$zui-4);
}
```
#### CSS
```css
.block {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: auto;
  gap: 4px;
}
```

## minmax
```
minmax(200px, 1fr)
minmax(400px, 50%)
minmax(30%, 300px)
minmax(100px, max-content)
minmax(min-content, 400px)
minmax(max-content, auto)
minmax(auto, 300px)
minmax(min-content, auto)
```

```scss
.block {
  @include grid(minmax(200px, 1fr) ,auto,$zui-4);
}
```