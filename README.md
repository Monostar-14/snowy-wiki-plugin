# Snowy 插件文档

SnowyMC 自研 Minecraft 插件的官方文档站，基于 [Docus](https://docus.dev)（Nuxt Content + Nuxt UI）构建。

线上地址：待部署

## 已收录的插件

| 插件 | 说明 | 文档目录 |
| --- | --- | --- |
| **SnowyGems** | 宝石镶嵌系统。宝石镶到装备上获得属性、附魔与常驻 BUFF，支持主动技能；兼容 1.21.4 → 26.x | `content/1.snowygems/` |
| **Snow-Welcome** | 新人欢迎。新玩家首次进服全服广播可点击的欢迎消息，欢迎者获得奖励 | `content/2.snow-welcome/` |
| **Snow-EnchantSP** | 附魔剥离。把装备附魔摘成附魔书，支持金币/点券/经验三种支付组合 | `content/3.snow-enchantsp/` |
| **KBBSToper** | 论坛顶帖奖励。检测苦力怕论坛宣传帖顶帖记录并在游戏内发奖 | `content/4.kbbstoper/` |

以后新增插件时按下面的「添加新插件文档」一节操作即可。

## 本地开发

```bash
# 安装依赖（首次）
npm install

# 启动开发服务器，默认 http://localhost:3000
npm run dev

# 构建静态站点
npm run generate
```

> Windows 上若 `better-sqlite3` 安装失败，通常是缺少编译工具链，装一个 [Visual Studio Build Tools](https://visualstudio.microsoft.com/visual-cpp-build-tools/) 再重试。

## 目录结构

```
snowy-wiki-plugin/
├── app.config.ts            # 站点配置：标题、配色、导航、目录、社交链接
├── nuxt.config.ts           # Nuxt 配置（继承 docus 主题）
├── content/
│   ├── index.md             # 首页：Hero + 插件卡片 + 快速导航
│   ├── 1.snowygems/         # 一个插件 = 一个目录
│   │   ├── .navigation.yml  #   该插件在侧栏/标签栏的标题与图标
│   │   ├── 1.getting-started.md
│   │   ├── 2.gems.md
│   │   ├── ...
│   │   └── 11.changelog.md  #   每个插件最后一页是更新日志
│   ├── 2.snow-welcome/
│   ├── 3.snow-enchantsp/
│   └── 4.kbbstoper/
└── public/
    └── favicon.ico
```

每个插件目录都包含一页 `changelog.md`（更新日志），排在该插件文档的最后。发版时在其顶部追加新条目。

### 命名约定

- **目录与文件名的数字前缀决定排序**，不会出现在 URL 里。`1.snowygems/2.gems.md` → `/snowygems/gems`
- 每个插件目录下必须有 `.navigation.yml`，指定它在导航里显示的名字与图标：

  ```yaml
  title: SnowyGems
  icon: i-lucide-gem
  ```

- 每篇文档的 frontmatter 建议写全四项，缺 `navigation.icon` 会让侧栏参差不齐：

  ```yaml
  ---
  title: 宝石配置
  description: 一句话说明这页讲什么，会显示在搜索结果里。
  navigation:
    icon: i-lucide-gem
  seo:
    title: SnowyGems 宝石配置手册
    description: 给搜索引擎看的描述，可以比 description 更详细。
  ---
  ```

## 添加新插件文档

1. 在 `content/` 下新建目录，数字前缀接着排：`content/5.你的插件名/`
2. 放一个 `.navigation.yml` 写标题与图标（图标名从 [Lucide](https://lucide.dev/icons/) 里找，写成 `i-lucide-xxx`）
3. 按 `1.顺序.文件名.md` 添加文档页，**最后一页放 `changelog.md`**（更新日志）
4. 编辑 `content/index.md`，在「插件文档」一节新增一张卡片指向该插件首页
5. 更新本 README 顶部的「已收录的插件」表格

## 写作约定

这份文档站的内容有三条硬要求，新增文档请一并遵守：

1. **对照源码写**。每个配置字段都要确认代码真的会读取；写了不生效的字段必须显式标注出来。
2. **陷阱优先**。静默失效（不报错但没效果）比异常更难查，把已知原因按遇到频率排序并给出排查命令。
3. **示例可直接抄**。示例取自插件自带的默认配置，复制改数字就能用，不写伪代码。

常用的 Docus 组件：

~~~md
::alert{icon="i-lucide-info"}
补充说明。
::

::alert{type="warning" icon="i-lucide-triangle-alert"}
容易踩坑的地方。
::

::steps
### 第一步
### 第二步
::

::code-group
```yaml [config.yml]
Key: value
```
```yaml [lang.yml]
Key: value
```
::
~~~

## 站点配置在哪改

| 想改什么 | 改哪里 |
| --- | --- |
| 站点标题、SEO 描述 | `app.config.ts` 的 `seo` / `header` |
| 主题色 | `app.config.ts` 的 `ui.colors.primary` |
| 右侧目录标题与底部链接 | `app.config.ts` 的 `toc` |
| 「编辑此页」指向的仓库 | `app.config.ts` 的 `github` |
| 首页样式与文案 | `content/index.md` |

## 反馈

文档有错漏或想补充内容，欢迎提 [Issue](https://github.com/mincHR549/snowy-wiki-plugin/issues) 或直接 PR。
