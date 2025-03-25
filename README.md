# 孕期管理工具 - Baby Growth Tracker

![界面预览](public/vite.svg)  
孕期管理工具帮助准父母记录和跟踪孕期重要日期，提供胎儿发育阶段信息查询和孕期进度可视化功能。

## 核心功能

👶 宝宝头像与名称设置  
📅 交互式孕期日历  
📈 实时孕周进度跟踪  
💡 胎儿发育阶段信息展示  
📱 响应式移动端适配

## 技术栈

- 前端框架: React 18 + TypeScript
- 构建工具: Vite 5
- UI组件库: Chakra UI 3
- 日期处理: Day.js 1.11
- 代码规范: ESLint + Prettier
- 容器化: Docker 20 + docker-compose

## 本地运行

### 环境要求
- Node.js 18+
- npm 9+

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 构建生产版本
npm run build
```

## Docker部署

```bash
# 构建镜像
docker-compose build

# 启动服务
docker-compose up -d

访问 http://localhost:8080
```

## 开发规范
1. 组件使用函数式组件+TypeScript
2. 样式优先使用Chakra UI原子化方案
3. 提交信息遵循Angular Commit Message规范
4. 主分支保护策略：开发通过feature分支提交PR

## 配置文件说明
- `.env` 环境变量配置
- `theme.ts` UI主题配置
- `fetalDevelopment.ts` 胎儿发育数据源

---

# React + TypeScript + Vite

（保留原始模板说明）
This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config({
  extends: [
    // Remove ...tseslint.configs.recommended and replace with this
    ...tseslint.configs.recommendedTypeChecked,
    // Alternatively, use this for stricter rules
    ...tseslint.configs.strictTypeChecked,
    // Optionally, add this for stylistic rules
    ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config({
  plugins: {
    // Add the react-x and react-dom plugins
    'react-x': reactX,
    'react-dom': reactDom,
  },
  rules: {
    // other rules...
    // Enable its recommended typescript rules
    ...reactX.configs['recommended-typescript'].rules,
    ...reactDom.configs.recommended.rules,
  },
})
```
