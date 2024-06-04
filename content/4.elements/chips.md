---
title: 'Chips'
description: 'Chips фрейморка ZUI'
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
<label class="chips large">
  <input type="checkbox" name="chips">
  <div class="chips-control">
    <i class="icon">person</i>
    <span>Chips text</span>
    <i class="icon">close</i>
  </div>
</label>
```

## Описание
Чипсы состоят из элемента `label` с классом `.chips`.   
`input type="checkbox"` - так же можно использовать `radio`, нужен для активного состояния **чипса**.  
`chips-control` - сам чипс, в нем может содержатся текст и любые иконки из набора.  

### Размеры
`large` - большой.  
`middle` - средний.  
`small` - малый

### Модификации
Все модификации вешаются после указания размера `label.chips.large.__modification`.  
`__input` - отличается от остальных чипсов только состояниями `:active`, `:hover` и `focus`.  
`loader` - заменяет первую **любую** иконку в контейнере `.chips-control` на анимацию загрузки. Убрав этот класс, старая иконка вернется.  
`disable` - запрещает все действие с чипсом.  
`mobile` - растягивается на всю ширину блока у телефонов.

## Демонстрация
<label class="chips large">
  <input type="checkbox" name="chips">
  <div class="chips-control">
    <i class="icon">person</i>
    <span>Chips text</span>
    <i class="icon">close</i>
  </div>
</label>