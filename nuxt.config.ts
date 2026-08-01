export default defineNuxtConfig({
  extends: ['docus'],

  // 站点语言，影响 <html lang> 与 SEO
  app: {
    head: {
      htmlAttrs: { lang: 'zh-CN' },
    },
  },
})
