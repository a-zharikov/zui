---
title: 'Form'
description: 'Form фрейморка ZUI'
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

Задает цвет для `input placeholder`.
```scss
@mixin placeholder($color) {
  &::-webkit-input-placeholder { /* WebKit, Blink, Edge */
    color: $color;
  }
  &:-moz-placeholder { /* Mozilla Firefox 4 to 18 */
    color: $color;
    opacity: 1;
  }
  &::-moz-placeholder { /* Mozilla Firefox 19+ */
    color: $color;
    opacity: 1;
  }
  &:-ms-input-placeholder { /* Internet Explorer 10-11 */
    color: $color;
  }
  &::-ms-input-placeholder { /* Microsoft Edge */
    color: $color;
  }
  &::placeholder { /* Most modern browsers support this now. */
    color: $color;
  }
}
```
## Вызов
### SCSS
```scss
input {
  @include placeholder($primary);
}
```

### CSS
```css
input::-webkit-input-placeholder {
  color: #0095FF;
}

input:-moz-placeholder {
  color: #0095FF;
  opacity: 1;
}

input::-moz-placeholder {
  color: #0095FF;
  opacity: 1;
}

input:-ms-input-placeholder {
  color: #0095FF;
}

input::-ms-input-placeholder {
  color: #0095FF;
}

input::placeholder {
  color: #0095FF;
}
```