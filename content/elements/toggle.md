---
title: 'Toggle // ZUI'
description: 'Toggle фрейморка ZUI'
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

## Простой toggle
```html
<div class="toggle">
  <label class="control">
    <input type="checkbox" name="checkbox">
  </label>
</div>
```

## Активный toggle
```html
<div class="toggle">
  <label class="control">
    <input type="checkbox" name="checkbox" checked>
  </label>
</div>
```

## Toggle с текстом
```html
<div class="toggle">
  <label class="control">
    <input type="checkbox" name="checkbox" checked>
    Label
  </label>
</div>
```

## Демонстрация
<div class="toggle">
  <label class="control">
    <input type="checkbox" name="checkbox">
  </label>
</div>
<div class="toggle">
  <label class="control">
    Выкл
    <input type="checkbox" name="checkbox" checked>
    Вкл
  </label>
</div>