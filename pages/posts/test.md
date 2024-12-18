---
title: Valaxy Yun 主题测试
date: 2024-12-01
updated: 2024-12-01
password_hint: 密码是 test
cover: /images/default-cover.jpg
categories: [测试]
tags: [测试]
excerpt: 用于测试 valaxy-theme-yun 中的某些功能。
---

## Katex
- https://katex.org  
- [Supported Functions](https://katex.org/docs/supported.html)
- [Support Table](https://katex.org/docs/support_table.html)
```latex
$$ \color{#EE1C25} E = mc^2 $$
```
$$ \color{#EE1C25} E = mc^2 $$

## 页面加密
### 部分内容加密
```md
<!-- valaxy-encrypt-start:your_password -->
:::info 加密信息
{{ frontmatter.title }}
:::
<!-- valaxy-encrypt-end -->
```
<!-- valaxy-encrypt-start:test -->
:::info 加密信息
{{ frontmatter.title }}
:::
<!-- valaxy-encrypt-end -->

## 时间警告
time_warning 默认 180 天，即 15552000000 ms
