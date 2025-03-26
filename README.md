# 孕期管理工具 - Baby Growth Tracker

![界面预览](public/vite.svg)  
孕期管理工具帮助准父母记录和跟踪孕期重要日期，提供胎儿发育阶段信息查询和孕期进度可视化功能。

## 核心功能

👶 宝宝头像与名称设置  
📅 交互式孕期日历
- 可视化日期选择
- 孕期重要日期标记
- 灵活的日期导航

📈 实时孕周进度跟踪
- 精确的孕周计算
- 进度条可视化
- 剩余天数提醒

💡 胎儿发育阶段信息展示
- 每周胎儿大小和体重变化
- 详细的发育里程碑
- 分阶段发育特征说明

🏥 产检提醒功能
- 产检日程管理
- 检查项目提醒
- 重要日期标记

📚 孕期知识百科
- 营养知识指导
- 运动建议
- 生活方式调整
- 心理健康关注

📱 响应式移动端适配
- 支持多种设备访问
- 触摸友好的交互设计
- 自适应布局

## 技术栈

### 前端框架
- React 18 + TypeScript - 主框架
- Vite 5 - 构建工具
- Chakra UI 3 - UI组件库
- Day.js 1.11 - 日期处理

### 开发工具
- ESLint + Prettier - 代码规范
- TypeScript - 类型检查
- Docker + docker-compose - 容器化部署

## 本地开发

### 环境要求
- Node.js 18+
- npm 9+

### 安装步骤

1. 克隆项目
```bash
git clone <repository-url>
cd baby
```

2. 安装依赖
```bash
npm install
```

3. 启动开发服务器
```bash
npm run dev
```

4. 构建生产版本
```bash
npm run build
```

## Docker部署

1. 构建镜像
```bash
docker-compose build
```

2. 启动服务
```bash
docker-compose up -d
```

3. 访问应用
```
http://localhost:8080
```

## 项目结构

```
src/
  ├── components/     # React组件
  ├── data/          # 静态数据
  ├── assets/        # 静态资源
  ├── theme.ts       # 主题配置
  └── App.tsx        # 应用入口
```

## 贡献指南

1. Fork 项目
2. 创建特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 提交 Pull Request

## 开源协议

本项目采用 MIT 协议 - 详见 [LICENSE](LICENSE) 文件
