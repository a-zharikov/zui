---
title: 'Шрифты'
description: 'Шрифты фрейморка ZUI'
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

## Font Family
`$ff: 'Montserrat', sans-serif;` - font-famaly шрифт

## Font weight
```scss
$th: 100;       // Thin
$el: 200;       // Extra Light
$li: 300;        // Light
$re: 400;      // Regular
$me: 500;    // Medium
$sb: 600;     // SemiBold
$bo: 700;    // Bold
$eb: 800;    // ExtraBold
$bl: 900;     // Black
```

## Fonts
Переменные для использование в миксинах
```scss
$title-x16: $bo #{$zui-64}/#{$zui-64} $ff;
$title-x14: $bo #{$zui-56}/#{$zui-56} $ff;
$title-x12: $bo #{$zui-48}/#{$zui-48} $ff;

$headline-x16: $bo #{$zui-40}/#{$zui-40} $ff;
$headline-x8: $bo #{$zui-32}/#{$zui-40} $ff;
$headline-x8: $bo #{$zui-32}/#{$zui-40} $ff;
$headline-x6: $bo #{$zui-24}/#{$zui-32} $ff;
$headline-x7: $bo #{$zui-20}/#{$zui-28} $ff;

$subline-x10: $re #{$zui-40}/#{$zui-40} $ff;
$subline-x8: $re #{$zui-32}/#{$zui-40} $ff;
$subline-x6: $re #{$zui-24}/#{$zui-32} $ff;
$subline-x5: $re #{$zui-20}/#{$zui-28} $ff;

$normal-x5: $re #{$zui-20}/#{$zui-28} $ff;
$bold-x5: $bo #{$zui-20}/#{$zui-28} $ff;
$normal-x4: $re #{$zui-16}/#{$zui-24} $ff;
$bold-x4: $bo #{$zui-16}/#{$zui-24} $ff;
$normal-x3: $re #{$zui-12}/#{$zui-16} $ff;
$bold-x3: $bo #{$zui-12}/#{$zui-16} $ff;

$large: $sb #{$zui-24}/#{$zui-24} $ff;
$middle: $sb #{$zui-20}/#{$zui-20} $ff;
$small: $me #{$zui-16}/#{$zui-16} $ff;
```