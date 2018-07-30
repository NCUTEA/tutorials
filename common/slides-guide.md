# 技协 Slides 指南

---

## revealjs markdown 技巧

* 使用 [&#45;-&#45;](javascript:) 分隔多张 Slide
* 使用 [&lt;!&ndash;separator-vertical&ndash;&gt;](javascript:) 垂直分隔 Slide
* 以 [Note:](javascript:) 开头可生成笔记
* 按 [ESC](javascript:) 键可打开 大纲模式
* 按 [S](javascript:) 键打开 演讲笔记窗口
* 在 URL 后加入 [?print-pdf](?print-pdf) 即可[打印](?print-pdf)
* 访问 /slides/?file=filename.md  即可加载自定义 markdown 文件
* docsify 中，记得设置 ':ignore' 属性
* 详细请参考 [本文件](https://) 与 [revealjs 文档](https://github.com/hakimel/reveal.js)

Note: 这是笔记。

---

## 语法测试

*斜体*  **粗体** ~~删除线~~ [链接](http://github.com)

> 文字引用

图片：![pic](https://www.baidu.com/img/bd_logo1.png)

<!--separator-vertical-->

`行内代码块`

```c
// 多行 C 代码块
#include <stdio.h>
int main(void){
    printf("Hello World\n");
    return 0; 
}
```

    四个缩进空格代码块
    

<!--separator-vertical-->

* 无序列表 1
* 无序列表 2
* 无序列表 3

1. 有序列表 1
2. 有序列表 2
3. 有序列表 3

---

## 已知问题

`行内代码块`与**粗体**不明显

临时方案：使用 [无目标链接](javascript:)

---

## 功能扩展

请参考 revealjs 文档

---
<section id="transitions">
	<h2>Transition Styles</h2>
	<p>
		You can select from different transitions, like: <br>
		<a href="?transition=none#/transitions">None</a> -
		<a href="?transition=fade#/transitions">Fade</a> -
		<a href="?transition=slide#/transitions">Slide</a> -
		<a href="?transition=convex#/transitions">Convex</a> -
		<a href="?transition=concave#/transitions">Concave</a> -
		<a href="?transition=zoom#/transitions">Zoom</a>
	</p>
</section>

---

<section data-background="#dddddd">
	<h2>Slide Backgrounds</h2>
	<p>
		Set <code>data-background="#dddddd"</code> on a slide to change the background color. All CSS color formats are supported.
	</p>
	<a href="#" class="navigate-down">
		<img width="178" height="238" data-src="https://s3.amazonaws.com/hakim-static/reveal-js/arrow.png" alt="Down arrow">
	</a>
</section>
<section data-background="https://s3.amazonaws.com/hakim-static/reveal-js/image-placeholder.png">
	<h2>Image Backgrounds</h2>
	<pre><code class="hljs">&lt;section data-background="image.png"&gt;</code></pre>
</section>
<section data-background="https://s3.amazonaws.com/hakim-static/reveal-js/image-placeholder.png" data-background-repeat="repeat" data-background-size="100px">
	<h2>Tiled Backgrounds</h2>
	<pre><code class="hljs" style="word-wrap: break-word;">&lt;section data-background="image.png" data-background-repeat="repeat" data-background-size="100px"&gt;</code></pre>
</section>
<section data-background-video="https://s3.amazonaws.com/static.slid.es/site/homepage/v1/homepage-video-editor.mp4,https://s3.amazonaws.com/static.slid.es/site/homepage/v1/homepage-video-editor.webm" data-background-color="#000000">
	<div style="background-color: rgba(0, 0, 0, 0.9); color: #fff; padding: 20px;">
		<h2>Video Backgrounds</h2>
		<pre><code class="hljs" style="word-wrap: break-word;">&lt;section data-background-video="video.mp4,video.webm"&gt;</code></pre>
	</div>
</section>
<section data-background="http://i.giphy.com/90F8aUepslB84.gif">
	<h2>... and GIFs!</h2>
</section>

