---
title: 'Textarea // ZUI'
description: 'Textarea фрейморка ZUI'
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

## Стандартный textarea
```html
<form class="form">
  <div class="form-row">
    <label for="">Сообщение</label>
    <textarea class="textarea" placeholder="Текс сообщения"></textarea>
    <div class="error-text">Сообщение об ошибки</div>
  </div>
</div>
```

## Textarea с ошибкой
```html
<form class="form">
  <div class="form-row error">
    <label for="">Сообщение</label>
    <textarea class="textarea" placeholder="Текс сообщения"></textarea>
    <div class="error-text">Сообщение об ошибки</div>
  </div>
</div>
```

## Демонстрация
<form class="form">
<div class="form-row">
  <label for="">Сообщение</label>
  <textarea class="textarea" placeholder="Текс сообщения"></textarea>
  <div class="error-text">Сообщение об ошибки</div>
</div>
<div class="form-row error">
  <label for="">Сообщение</label>
  <textarea class="textarea" placeholder="Текс сообщения"></textarea>
  <div class="error-text">Сообщение об ошибки</div>
</div>
</form>