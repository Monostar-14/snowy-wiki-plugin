---
seo:
  title: Snowy 插件文档
  description: SnowyMC 出品的 Minecraft 插件官方文档。配置说明、命令与权限、排错指南，一处查齐。
---

<style>
/* ===== 主题色变量 ===== */
:root {
  --snow-bg-start: #eff6ff;
  --snow-bg-mid:   #f0f9ff;
  --snow-bg-end:   #ffffff;
}

.dark {
  --snow-bg-start: #0a1020;
  --snow-bg-mid:   #0d1526;
  --snow-bg-end:   #060810;
}

/* ===== Hero 渐变背景（缓慢流动）===== */
.snow-hero {
  position: relative;
  overflow: hidden;
  background:
    radial-gradient(620px circle at 28% 18%, rgba(56, 189, 248, .18), transparent 62%),
    radial-gradient(520px circle at 74% 42%, rgba(129, 140, 248, .13), transparent 62%),
    linear-gradient(120deg, var(--snow-bg-start), var(--snow-bg-mid), var(--snow-bg-end));
  background-size: 200% 200%;
  animation: snowFlow 40s ease-in-out infinite;
}

@keyframes snowFlow {
  0%   { background-position: 0% 50%; }
  50%  { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

/* 尊重「减少动态效果」的系统设置 */
@media (prefers-reduced-motion: reduce) {
  .snow-hero { animation: none; }
}

/* ===== 卡片：浅色玻璃拟态 ===== */
.snow-card {
  background: rgba(255, 255, 255, .72);
  backdrop-filter: blur(10px);
  border-radius: 16px;
  border: 1px solid rgba(0, 0, 0, .06);
  box-shadow:
    0 1px 2px rgba(0, 0, 0, .04),
    0 8px 24px rgba(0, 0, 0, .04);
  transition: transform .25s ease, box-shadow .25s ease;
}

.snow-card:hover {
  transform: translateY(-3px);
  box-shadow:
    0 6px 20px rgba(0, 0, 0, .08),
    0 16px 40px rgba(0, 0, 0, .06);
}

.dark .snow-card {
  background: rgba(17, 22, 38, .66);
  border: 1px solid rgba(255, 255, 255, .08);
  box-shadow:
    0 1px 2px rgba(0, 0, 0, .4),
    0 8px 30px rgba(0, 0, 0, .35);
}

/* ===== 「敬请期待」占位卡：虚线描边、低饱和 ===== */
.snow-card-soon {
  background: transparent;
  border: 1px dashed rgba(0, 0, 0, .14);
  border-radius: 16px;
  opacity: .72;
  transition: opacity .25s ease, border-color .25s ease;
}

.snow-card-soon:hover {
  opacity: 1;
  border-color: rgba(56, 189, 248, .5);
}

.dark .snow-card-soon {
  border-color: rgba(255, 255, 255, .16);
}
</style>

::u-page-hero
---
align: center
class: "snow-hero py-20 px-6 rounded-2xl ring-1 ring-black/5 dark:ring-white/10"
---
#title
Snowy 插件文档

#description
SnowyMC 自研 Minecraft 插件的官方文档站。每个插件都有完整的配置说明、命令与权限清单、以及从实际踩坑整理出的排错指南——所有内容都对照插件源码撰写，写什么就是代码里真正读什么。

#links
  :::u-button
  ---
  color: primary
  size: xl
  to: /snowygems/getting-started
  trailing-icon: i-lucide-arrow-right
  ---
  阅读 SnowyGems 文档
  :::

  :::u-button
  ---
  color: neutral
  icon: i-simple-icons-github
  size: xl
  to: https://github.com/SnowyMCT
  variant: outline
  ---
  在 GitHub 上关注我们
  :::
::

::u-page-section
---
title: 插件文档
description: 点击进入各插件的完整手册。
---
  :::u-page-grid
    ::::u-page-card
    ---
    class: "snow-card"
    icon: i-lucide-gem
    spotlight: true
    title: SnowyGems
    to: /snowygems/getting-started
    ---
    宝石镶嵌系统。把宝石镶到装备上获得属性、附魔与常驻 BUFF，宝石还能带主动技能。支持 1.21.4 → 26.x 全版本，同一份配置跨版本通用。
    ::::

    ::::u-page-card
    ---
    class: "snow-card-soon"
    icon: i-lucide-package-plus
    title: 更多插件
    ---
    SnowyMC 的其他插件文档正在整理中，会陆续加入本站。
    ::::
  :::
::

::u-page-section
---
title: SnowyGems 快速导航
description: 按你现在要做的事直接跳转。
---
  :::u-page-grid
    ::::u-page-card
    ---
    class: "snow-card"
    icon: i-lucide-rocket
    title: 安装与快速上手
    to: /snowygems/getting-started
    ---
    放入插件、认识目录结构、跑通第一次镶嵌。
    ::::

    ::::u-page-card
    ---
    class: "snow-card"
    icon: i-lucide-gem
    title: 宝石配置
    to: /snowygems/gems
    ---
    全部字段、Rewards 函数清单、Require 写法与实战示例。
    ::::

    ::::u-page-card
    ---
    class: "snow-card"
    icon: i-lucide-sparkles
    title: 技能与 BUFF
    to: /snowygems/skills
    ---
    技能行语法、触发标记、条件与概率、形态切换。
    ::::

    ::::u-page-card
    ---
    class: "snow-card"
    icon: i-lucide-layout-grid
    title: 菜单配置
    to: /snowygems/menus
    ---
    用字符网格自定义工作台，五种槽位类型。
    ::::

    ::::u-page-card
    ---
    class: "snow-card"
    icon: i-lucide-unplug
    title: 查看与拆卸宝石
    to: /snowygems/dismantle
    ---
    拆卸费用、损坏概率，以及拆卸时到底撤销了什么。
    ::::

    ::::u-page-card
    ---
    class: "snow-card"
    icon: i-lucide-shield-check
    title: 权限节点
    to: /snowygems/permissions
    ---
    全部节点清单、user/admin 伞节点、权限组示例。
    ::::

    ::::u-page-card
    ---
    class: "snow-card"
    icon: i-lucide-git-compare
    title: 多版本兼容
    to: /snowygems/compat
    ---
    为什么同一份配置能跨版本用，混服怎么配。
    ::::

    ::::u-page-card
    ---
    class: "snow-card"
    icon: i-lucide-wrench
    title: 排错与调试
    to: /snowygems/troubleshooting
    ---
    「宝石点了没反应」的排查路径与全部已知陷阱。
    ::::
  :::
::

::u-page-section
---
title: 这份文档的写法
description: 我们对文档质量的三条硬要求。
---
  :::u-page-grid
    ::::u-page-card
    ---
    class: "snow-card"
    icon: i-lucide-file-code-2
    title: 对照源码撰写
    ---
    每个配置字段都确认过代码真的会读取。写了不生效的字段会被明确标注出来，而不是让你试半天才发现。
    ::::

    ::::u-page-card
    ---
    class: "snow-card"
    icon: i-lucide-bug
    title: 陷阱优先
    ---
    静默失效比报错更难查。我们把「镶嵌成功但没效果」的全部已知原因按遇到频率排好序，配上排查命令。
    ::::

    ::::u-page-card
    ---
    class: "snow-card"
    icon: i-lucide-terminal
    title: 可直接抄用
    ---
    示例全部来自插件自带的默认配置，复制过去改数字就能用，不是伪代码。
    ::::
  :::
::
