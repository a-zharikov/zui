---
title: 'Button'
description: 'Button фрейморка ZUI'
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

## Размеры

`large` - большая  
`middle` - средняя  
`small` - маленькая

## Цвета

<code class="line" style="background: #325FEB !important; color: #fff; border-color: #325FEB;">primary</code>&nbsp;
<code class="line" style="background: #F9AA34 !important; color: #333; border-color: #F9AA34;">secondary</code>&nbsp;
<code class="line" style="background: #202327 !important; color: #fff; border-color: #202327;">tertiary</code>&nbsp;
<code class="line" style="background: #52B530 !important; color: #fff; border-color: #52B530;">success</code>&nbsp;
<code class="line" style="background: #E85656 !important; color: #fff; border-color: #E85656;">danger</code>

`primary` - синий  
`secondary` - оранжевый  
`tertiary` - черный  
`success` - зеленый  
`danger` - красный

## Модификации

`outline` - обводка и фон  
`transparent` - текстовая кнопка  
`pressed ` - активная кнопка  
`loading` - показывает прелоадер и меняет текст кнопки  
`full` - на весь контейнер  
`fill` - на весь контейнер в flex блоке  
`disabled` - блокирует кнопку  
`mobile` - на весь контейнер только для телефонов  
`icn` - оставляет только иконку, становится круглой и прилипает к нижнему правому краю. Текст кнопки должен быть обернут в `span`  
`mini` - оставляет только иконку, становится круглой. Текст кнопки должен быть обернут в `span`

## Демонстрация

```html
<a class="button large primary">Кнопка</a>
```

<a class="button large primary">Кнопка</a>

```html
<a class="button large primary outline">Кнопка</a>
```

<a class="button large primary outline">Кнопка</a>

```html
<a class="button large primary transparent">Кнопка</a>
```

<a class="button large primary transparent">Кнопка</a>

```html
<a class="button large primary loading">Кнопка</a>
```

<a class="button large primary loading">Кнопка</a>

```html
<a class="button large primary disabled">Кнопка</a>
```

<a class="button large primary disabled">Кнопка</a>
