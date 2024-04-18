---
title: 'Checkbox // ZUI'
description: 'Checkbox фрейморка ZUI'
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

```html
<div class="checkbox">
  <label class="control">
    <input type="checkbox" name="checkbox" checked="">
    <div class="control-indicator"></div>
    <div class="control-wrapper">
      <div class="control-wrapper__title">List label</div>
      <div class="control-wrapper__text">List text</div>
    </div>
  </label>
  <label class="control">
    <input type="checkbox" name="checkbox">
    <div class="control-indicator"></div>
    <div class="control-wrapper">
      <div class="control-wrapper__title">List label</div>
    </div>
  </label>
  <label class="control">
    <input type="checkbox" name="checkbox" disabled>
    <div class="control-indicator"></div>
    <div class="control-wrapper">
      <div class="control-wrapper__title">List label</div>
      <div class="control-wrapper__text">List text</div>
    </div>
  </label>
</div>
```

## Демонстрация
<div class="checkbox">
  <label class="control">
    <input type="checkbox" name="checkbox" checked="">
    <div class="control-indicator"></div>
    <div class="control-wrapper">
      <div class="control-wrapper__title">List label</div>
      <div class="control-wrapper__text">List text</div>
    </div>
  </label>
  <label class="control">
    <input type="checkbox" name="checkbox">
    <div class="control-indicator"></div>
    <div class="control-wrapper">
      <div class="control-wrapper__title">List label</div>
    </div>
  </label>
  <label class="control">
    <input type="checkbox" name="checkbox" disabled>
    <div class="control-indicator"></div>
    <div class="control-wrapper">
      <div class="control-wrapper__title">List disabled</div>
      <div class="control-wrapper__text">Disabled text</div>
    </div>
  </label>
</div>