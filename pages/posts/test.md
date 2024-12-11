---
title: 测试
date: '2024-12-01'
updated: '2024-12-01'
password_hint: 密码是 test
cover: /img/default-cover.jpg
---

## Katex
- https://katex.org  
- [Supported Functions](https://katex.org/docs/supported.html)
- [Support Table](https://katex.org/docs/support_table.html)
---
```latex
$$ E = mc^2 $$
```
$$ E = mc^2 $$
---
```latex
$$\color{#ee1c25}y = ax^2 + bx + c$$
```
$$\color{#ee1c25}y = ax^2 + bx + c$$
---

## 页面加密

### 部分内容加密
```md
<!-- valaxy-encrypt-start:your_password -->
{{ frontmatter.title }}
<!-- valaxy-encrypt-end -->
```
<!-- valaxy-encrypt-start:test -->
{{ frontmatter.title }}
<!-- valaxy-encrypt-end -->

## time warning
默认 180 天，即 15552000000 ms
