# liko-game

这是一个由 Liko 编辑器创建的游戏项目，使用 AI 创建游戏逻辑

## 项目特点

- 基于 Liko 游戏引擎，使用编辑器可视化编辑
- 通过编辑器，创建的场景文件 public/assets/scenes 
- 使用 AI 扩展脚本，编写的游戏逻辑 src/scripts

## 开始使用

安装依赖
```bash
npm i
```

启动开发服务器：
```bash
npm run dev
```

### 构建

构建生产版本：
```bash
npm run build
```

## 项目结构

```
liko-game/
├── src/          # 源代码目录
│   └── scripts/  # 游戏逻辑脚本
├── public/       # 静态资源目录
│   ├── assets/   # 游戏资源文件（图片、音频等）
│   └── scenes/   # 游戏场景文件
├── index.html    # 入口 HTML 文件
└── package.json  # 项目配置和依赖
```
