# 如何参与贡献

* Github Fork
* git clone 并 `cd` 到项目根目录
* 执行 `yarn` 安装依赖
* 执行 `yarn serve` 启动服务器
* 安装 VS Code 插件 [vscode-markdownlint](https://github.com/DavidAnson/vscode-markdownlint) ，使用 [VS Code](https://code.visualstudio.com/)打开项目以实时检查代码
* 执行 `yarn lint` 检查代码
* Git
  * Local Changes && Diff
  * Branch
  * Pull && Rebase
  * Commit
  * Pull Request

## 规范

文件命名使用小写字母、`-`分隔单词，如：`markdown-demo.md`。

大文件不适合使用 Git 管理，因此请存于外部。

图片可以使用CDN，大资源文件可以存于网盘并提供链接。

例子：`markdown-demo.md` 中，不常修改的小文件存储目录结构如下：

```c
int main(){
}
```

```txt
├── markdown-demo-res
│   ├── icon.svg
│   ├── demo.c
│   └── ...
└── markdown-demo.md
```

具体请查看 [markdown-demo](/_media/markdown-demo.md)

源文件如下：  

[](./_media/markdown-demo.md ':include :type=code markdown')

## 参考资料

* [GitHub - 对项目做出贡献](https://git-scm.com/book/zh/v2/GitHub-%E5%AF%B9%E9%A1%B9%E7%9B%AE%E5%81%9A%E5%87%BA%E8%B4%A1%E7%8C%AE)
* [Github Guides](https://guides.github.com/)
* [markdownlint-cli](https://github.com/igorshubovych/markdownlint-cli)
* 中文书写格式参考 <https://github.com/sparanoid/chinese-copywriting-guidelines>

> 因目前使用检查工具 `pangu-cli` 与 `pangu-cli2` 功能不完善且格式化 Markdown 出现问题，暂时不使用
