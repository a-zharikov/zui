---
title: 'Breakpoint // ZUI'
description: 'Breakpoint фрейморка ZUI'
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

## Основные поинты
```scss
@mixin mq($media) {
  @if $media == mobile {
    @media only screen and (max-width: 649px) {
      @content;
    }
  }
  @else if $media == tablet {
    @media only screen and (min-width: 650px) and (max-width: 1023px) {
      @content;
    }
  }
  @else if $media == laptop {
    @media only screen and (min-width: 1024px) and (max-width: 1239px) {
      @content;
    }
  }
  @else if $media == desktop {
    @media only screen and (min-width: 1240px) {
      @content;
    }
  }
}
```
## Вызов
### Телефон 
```scss
@include mq(mobile) {
  // Твои стили для элемента
}
```
### Планшет
```scss
@include mq(tablet) {
  // Твои стили для элемента
}
```
### Ноутбук
```scss
@include mq(laptop) {
  // Твои стили для элемента
}
```
### Компуктер
```scss
@include mq(desktop) {
  // Твои стили для элемента
}
```
### DeБагер
`.__mqDebag` - данный класс выводит блок с названием брекпоинта в блоке на который повешен этот класс.  
```html
<div class="container __mqDebag"></div>
```
## Плавающий поинт
Используется для точной подстройки элементов. При помощи него можно переключать сетку блоков в нужном месте.
```scss
@mixin screen($min-width: null, $max-width: null) {
  @if $min-width != null and $max-width != null {
    // Если указаны оба параметра min-width и max-width
    @media only screen and (min-width: #{$min-width}px) and (max-width: #{$max-width}px) {
      @content;
    }
  }
  @else if $min-width != null and $max-width == null {
    // Если указан только min-width
    @media only screen and (min-width: #{$min-width}px) {
      @content;
    }
  }
  @else if $min-width == null and $max-width != null {
    // Если указан только max-width
    @media only screen and (max-width: #{$max-width}px) {
      @content;
    }
  }
}
```
Имеет три состояния вызова для более точной настройки переходов:  
### Минимальное значение
Указывается одно значение.

#### SCSS
```scss
@include screen(100) {
  // Твои стили для элемента
}
```
#### CSS
```css
@media only screen and (min-width: 100px) {
  // Твои стили для элемента
}
```
### Максимальное значение
Первое значение **обязательно** должен быть `0`.
#### SCSS
```scss
@include screen(0,100) {
  // Твои стили для элемента
}
```
#### CSS
```css
@media only screen and (max-width: 100px) {
  // Твои стили для элемента
}
```
### Минимальное и максимальное значение
Указываются оба значения через запятую.
#### SCSS
```scss
@include screen(100,200) {
  // Твои стили для элемента
}
```
#### CSS
```css
@media only screen and (min-width: 100px) and (max-width: 200px) {
  // Твои стили для элемента
}
```