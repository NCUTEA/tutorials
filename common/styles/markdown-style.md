# Markdown 规范

## 命名规范

超大资源文件请存**网盘**或者**图床**等外部存储，小文件存储目录结构如下：

```txt
├── res-post-demo
│   ├── 1.jpg
│   └── ...
└── post-demo.md
```

例子：`post-demo.md` 中

```markdown
![pic1](./res-post-demo/1.jpg)
```

## 内容规范

## 格式检查工具

### 工具

* [markdownlint-cli](https://github.com/igorshubovych/markdownlint-cli)
* [vscode-markdownlint](https://github.com/DavidAnson/vscode-markdownlint)

### 安装步骤

安装 `Node.js`

安装 `markdownlint-cli`

```bash
npm config set registry https://registry.npm.taobao.org # 设置国内镜像加速
npm install -g markdownlint-cli
```

设置检查配置文件

在根目录新建 `.markdownlint.json` ，内容如下

```json
  {
        "line-length": false,
        "no-inline-html": false
  }
```

运行检查命令

```bash
markdownlint -i node_modules -i "**/_*.md" .
```

安装 VS Code 插件 `vscode-markdownlint` 以实时检查代码

## 附加

中文书写格式参考 <https://github.com/sparanoid/chinese-copywriting-guidelines>

> 因目前使用检查工具 `pangu-cli` 与 `pangu-cli2` 功能不完善且格式化 Markdown 出现问题，暂时不使用
