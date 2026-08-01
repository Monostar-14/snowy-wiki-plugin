export default defineAppConfig({
  // ── Docus 基础行为 ──────────────────────────────────────
  docus: {
    // 站点语言：影响内置 UI 文案（搜索框、目录标题等）
    locale: 'zh-CN',
    // 留空 = 跟随系统偏好，并保留右上角的明暗切换按钮
    colorMode: '',
  },

  // ── 站点 SEO ────────────────────────────────────────────
  seo: {
    title: 'Snowy 插件文档',
    description: 'SnowyMC 出品的 Minecraft 插件官方文档。配置说明、命令与权限、排错指南，一处查齐。',
  },

  // ── 顶栏 ────────────────────────────────────────────────
  header: {
    title: 'Snowy 插件文档',
    logo: {
      alt: 'Snowy 插件文档',
      // 未提供图片 logo 时显示文字标题
      display: 'wordmark',
      favicon: '/favicon.ico',
    },
  },

  // ── 导航 ────────────────────────────────────────────────
  navigation: {
    // 顶栏下方显示二级标签栏，多个插件各占一个标签
    sub: 'header',
  },

  // ── 右侧目录 ────────────────────────────────────────────
  toc: {
    title: '本页目录',
    bottom: {
      title: '相关链接',
      links: [
        {
          icon: 'i-lucide-book-open',
          label: 'SnowyMC 主站',
          to: 'https://www.snowymc.top',
          target: '_blank',
        },
        {
          icon: 'i-simple-icons-github',
          label: '反馈问题 / 提交建议',
          to: 'https://github.com/mincHR549/snowy-wiki-plugin/issues',
          target: '_blank',
        },
      ],
    },
  },

  // ── 页面底部「编辑此页」指向的仓库 ───────────────────────
  github: {
    url: 'https://github.com/mincHR549/snowy-wiki-plugin',
    branch: 'main',
    rootDir: '',
  },

  // ── 社交链接（顶栏右侧图标）────────────────────────────
  socials: {
    github: 'https://github.com/SnowyMCT',
  },

  // ── 搜索 ────────────────────────────────────────────────
  search: {
    // 中文内容用默认的 Fuse.js 模糊搜索效果更好，
    // SQLite FTS5 对中文分词支持有限，保持 false
    fts: false,
  },

  // ── 配色与组件微调 ──────────────────────────────────────
  ui: {
    colors: {
      // 冰雪蓝，呼应 Snowy 品牌
      primary: 'sky',
      neutral: 'slate',
    },
    commandPalette: {
      slots: {
        item: 'items-center',
        input: '[&_.iconify]:size-4 [&_.iconify]:mx-0.5',
      },
      variants: {
        size: {
          md: {
            itemLeadingIcon: 'size-4 mx-0.5',
          },
        },
      },
    },
    contentNavigation: {
      slots: {
        linkLeadingIcon: 'size-4 mx-0.5',
        linkTrailing: 'hidden',
      },
    },
    pageLinks: {
      slots: {
        linkLeadingIcon: 'size-4',
        linkLabelExternalIcon: 'size-2.5',
      },
    },
  },
})
