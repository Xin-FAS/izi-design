import { defineConfig } from 'dumi';

export default defineConfig({
  outputPath: 'docs-dist',
  base: '/izi-design/',
  publicPath: '/izi-design/',
  themeConfig: {
    name: 'izi-design',
    apiHeader: false,
    features: [
      {
        title: '暗色模式一键切换',
        link: '/guide/switch-theme',
        description:
          '我们基于 antd v5 cssinjs 动态主题配置与暗色主题算法封装了，为应用级场景提供易用的亮暗色主题切换能力，使用方式更加简单。',
        image:
          'https://mdn.alipayobjects.com/huamei_rqvucu/afts/img/A*8KE7T7l39J0AAAAAAAAAAAAADoN6AQ/original',
        imageType: 'primary',
      },
      {
        title: '复合样式 —— Stylish',
        description:
          'Ant Design Style 提供了复合样式的能力，我们称它为 Stylish。Stylish 可以通过组合多个原子 token 来组织形成复杂的交互样式，实现极高的复用度。<quotient> 感觉很熟悉？没错，它和 tailwindcss 的思想高度一致，但 stylish 将会具有更加明确的设计语义，维护也会更加轻松。</quotient>',
        link: '/guide/stylish',
        image:
          'https://mdn.alipayobjects.com/huamei_rqvucu/afts/img/A*_in2RLf5pY8AAAAAAAAAAAAADoN6AQ/original',
        imageType: 'primary',
        row: 9,
      },
      {
        title: 'less 平滑迁移',
        description:
          '旧项目需要迁移？使用 antd-style 可以将项目中的 less 较低成本地迁移到 CSS in JS，并获得更好的用户体验与开发体验。',
        link: '/guide/migrate-from-less',
        image:
          'https://mdn.alipayobjects.com/huamei_rqvucu/afts/img/A*5H2ySLO-X4cAAAAAAAAAAAAADoN6AQ/original',
        imageType: 'primary',
      },
      {
        title: '微应用良好兼容',
        description:
          'Ant Design Style 默认兼容 qiankun 微应用（但会牺牲一点性能）。同时并为不需要微应用的使用场景提供性能优化选项。',
        image:
          'https://mdn.alipayobjects.com/huamei_rqvucu/afts/img/A*tZNeQIUYx_4AAAAAAAAAAAAADoN6AQ/original',
        imageType: 'primary',
        row: 6,
      },
      {
        title: '应用案例',
        description:
          '展示使用 Ant Design Style 的组件、应用的各种案例，帮助开发者快速上手。<quotient> 本文档同样使用 Ant Design Style 构建样式，可以作为静态站点类的参考。</quotient>',
        link: '/case',
        image:
          'https://mdn.alipayobjects.com/huamei_rqvucu/afts/img/A*5H2ySLO-X4cAAAAAAAAAAAAADoN6AQ/original',
        imageType: 'soon',
        row: 8,
      },
      {
        title: '响应式轻松适配',
        description:
          'Ant Design Style 将为响应式应用提供便捷的工具函数，帮助开发者快速完成响应式主题开发。',
        image:
          'https://mdn.alipayobjects.com/huamei_rqvucu/afts/img/A*5H2ySLO-X4cAAAAAAAAAAAAADoN6AQ/original',
        row: 6,
      },
    ]
  },
  styles: [
      'h2:not(.dumi-antd-style-content > div:first-child > div:first-child > h2) { margin-top: 40px }',
      'h3:not(h2 + h3) { margin-top: 35px }',
      '.dumi-default-previewer-demo { padding: 35px 24px !important }',
      '.dumi-default-previewer { margin: 20px 0 20px !important }',
  ],
  resolve: {
    docDirs: ['nav'],
    atomDirs: [{ type: 'component', dir: 'docs' }],
  },
});
