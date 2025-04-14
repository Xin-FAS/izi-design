---
nav: Dev
title: 开发文档
---

## 🌴关于izi组件库开发

线上地址：https://xin-fas.github.io/izi-design

准备操作
1. 拉取[izi-design](https://github.com/Xin-FAS/izi-design)代码库
2. 使用`pnpm i & pnpm start`下载依赖并启动
3. 使用`npm login`登录npm

### 编写工具、组件、文档

1. 创建组件，建立组件`src/components/组件名/index.jsx`（可参考`src/Demo/index.jsx`）
2. 导出组件，在`src/components/index.jsx`中导出（导出就可以在文档中引入了）
3. 创建文档，在`docs`目录下创建`组件名.md`，将`docs/Demo.md`复制过去修改即可（可参考`docs/FAntdInput.md`）

> 注意事项：
> * 在markdown文档中使用 `import { 组件名 } from 'izid'`为本地组件
> * 开发工具函数也是一样的，可参考`src/utils/DemoLog`

### 😊提交并发布

发布到`npm`之前需要保证`commit`内容为空，否则会失败，步骤如下：

1. 使用`commit`提交到本地仓库
2. 使用`pnpm version-patch`自增版本号
3. 打包`pnpm build`
4. 发布`pnpm push`（请保证以上两步没有报错后发布）
5. 最后，`git push origin main`提交到`github`

> 🔔别忘了过几分钟到[npm](https://www.npmjs.com/izid)上看看版本号，有没有发布成功.

### 👏讨论
最后，欢迎您加入`izi`组件库的开发，为了以后的自己积累知识，为了以后的重复性业务代码而贡献吧（干完能摸鱼bushi😝），有其他问题请来找我吧。
