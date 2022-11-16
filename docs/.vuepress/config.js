import { defineUserConfig } from 'vuepress'
import { defaultTheme } from '@vuepress/theme-default'

export default defineUserConfig({
    lang: 'en',
    title: 'Vue Next I18n',
    description: 'Lightweight internationalization plugin for @vuejs 3',
    base:'/vue-next-i18n/',
    head: [['link', { rel: 'icon', href: '/favicon.ico' }]],
    theme: defaultTheme({
      displayAllHeaders:true,
      logo: '/vue-i18n-logo.svg',
      navbar:  [
          { text: 'Guide', link: '/md/guide/' },
          { text: 'View on Github', link: 'https://github.com/aaronlamz/vue-next-i18n' },
      ],
      sidebar: {
          '/md/guide/': [
          {
            text: 'Introduction',
            collapsible:false,
            children: [
              '/md/guide/',
            ],
          }
        ],
      }
    }),
})

