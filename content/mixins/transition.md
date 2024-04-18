---
title: 'Transition // ZUI'
description: 'Transition фрейморка ZUI'
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

## Плавное изменение
```scss
@mixin transition($time: 500) {
  -webkit-transition: all #{$time}ms ease-in-out;
  -moz-transition: all #{$time}ms ease-in-out;
  -o-transition: all #{$time}ms ease-in-out;
  -ms-transition: all #{$time}ms ease-in-out;
  transition: all #{$time}ms ease-in-out;
}
```

## Вызов
### SCSS
```scss
.block {
  @include transition;
}
```

### CSS
```css
.block {
  -webkit-transition: all 500ms ease-in-out;
  -moz-transition: all 500ms ease-in-out;
  -o-transition: all 500ms ease-in-out;
  -ms-transition: all 500ms ease-in-out;
  transition: all 500ms ease-in-out;
}
```

## Указать свой временный промежуток
### SCSS
```scss
.block {
  @include transition(250);
}
```

### CSS
```css
.block {
  -webkit-transition: all 250ms ease-in-out;
  -moz-transition: all 250ms ease-in-out;
  -o-transition: all 250ms ease-in-out;
  -ms-transition: all 250ms ease-in-out;
  transition: all 250ms ease-in-out;
}
```

## Плавное изменение с задержкой
```scss
@mixin transition-delay($time, $delay) {
  -webkit-transition: all #{$time}ms ease-in-out;
  -webkit-transition-delay: #{$delay}ms;
  -o-transition: all #{$time}ms ease-in-out;
  -o-transition-delay: #{$delay}ms;
  -moz-transition: all #{$time}ms ease-in-out;
  -moz-transition-delay: #{$delay}ms;
  transition: all #{$time}ms ease-in-out;
  transition-delay: #{$delay}ms;
}
```

## Вызов
### SCSS
```scss
.block {
  @include transition-delay(500,1000);
}
```

### CSS
```css
.block {
  -webkit-transition: all 500ms ease-in-out;
  -webkit-transition-delay: 1000ms;
  -o-transition: all 500ms ease-in-out;
  -o-transition-delay: 1000ms;
  -moz-transition: all 500ms ease-in-out;
  -moz-transition-delay: 1000ms;
  transition: all 500ms ease-in-out;
  transition-delay: 1000ms;
}
```