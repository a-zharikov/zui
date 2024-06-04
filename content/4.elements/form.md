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
## Общий контенйнер
Контейнер для формы, содержит в себе основной элемент `<form>` с классом `form`.
```html
<form class="form" action="#">
```

## Контейнер для input
```html
<form class="form" action="#">
  <div class="form-row">
    <label>Заголовок для input</label>
  </div>
</form>
```

## Демонстрация
<form class="form" action="#">
  <div class="form-row">
    <label>Заголовок для input</label>
  </div>
</form>
<br>

## Вывод ошибки
Вешаем класс `error` на элемент `<div class="form-row">`
```html
<form class="form" action="#">
  <div class="form-row error">
    <label>Заголовок для input</label>
    <div class="error-text">Текст ошибки</div>
  </div>
</form>
```

## Демонстрация
<form class="form" action="#">
  <div class="form-row error">
    <label>Заголовок для input</label>
    <div class="error-text">Текст ошибки</div>
  </div>
</form>