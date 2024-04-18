---
title: 'Input // ZUI'
description: 'Input фрейморка ZUI'
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
Элемент `input` может быть как в форме так и отдельно от нее, для стилизации нужно добавить класс `input`.

## Простой input
```html
<form class="form" action="#">
  <div class="form-row">
    <label>Заголовок для input</label>
    <input class="input" placeholder="Простой Input" />
    <div class="error-text">Сообщение об ошибки</div>
  </div>
</form>
 ```

## Анимированный input с иконками
```html
<div class="form-row">
  <div class="input-placeholder">
    <i class="icon __left">search</i>
    <input class="input" type="text" placeholder="Имя" required>
    <label for="">
      Ваше имя
    </label>
    <i class="icon __right __hover">close</i>
  </div>
  <div class="error-text">Сообщение об ошибки</div>
</div>
```

## input number
```html
<div class="form-row">
  <div class="input-number">
    <button class="input-number__button" type="button" onclick="this.nextElementSibling.stepDown(); this.nextElementSibling.onchange();">remove</button>
    <input type="number" value="0">
    <button class="input-number__button" type="button" onclick="this.previousElementSibling.stepUp(); this.previousElementSibling.onchange();">add</button>
  </div>
</div>
```

## input file
```html
<div class="form-row">
  <input class="input-file" type="file">
</div>
```

## Демонстрация
<form class="form" action="#">
  <div class="form-row">
    <label>Простой Input</label>
    <input class="input" placeholder="Простой Input" />
    <div class="error-text">Сообщение об ошибки</div>
  </div>
  <div class="form-row error">
    <label>Простой Input с ошибкой</label>
    <input class="input" placeholder="Простой Input" />
    <div class="error-text">Сообщение об ошибки</div>
  </div>
  <div class="form-row">
    <label>Анимированный input с иконками</label>
    <div class="input-placeholder">
      <i class="icon __left">search</i>
      <input class="input" type="text" placeholder="Имя" required>
      <label for="">
        Ваше имя
      </label>
      <i class="icon __right __hover">close</i>
    </div>
    <div class="error-text">Сообщение об ошибки</div>
  </div>
  <div class="form-row error">
    <label>Анимированный input с иконками и ошибкой</label>
    <div class="input-placeholder">
      <i class="icon __left">search</i>
      <input class="input" type="text" placeholder="Имя" required>
      <label for="">
        Ваше имя
      </label>
      <i class="icon __right __hover">close</i>
    </div>
    <div class="error-text">Сообщение об ошибки</div>
  </div>
  <div class="form-row">
    <div class="input-number">
      <button class="input-number__button" type="button" onclick="this.nextElementSibling.stepDown(); this.nextElementSibling.onchange();">remove</button>
      <input type="number" value="0">
      <button class="input-number__button" type="button" onclick="this.previousElementSibling.stepUp(); this.previousElementSibling.onchange();">add</button>
    </div>
  </div>
  <div class="form-row">
    <input class="input-file" type="file">
  </div>
</form>
