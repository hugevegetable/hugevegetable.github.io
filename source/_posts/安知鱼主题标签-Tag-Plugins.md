---
title: 安知鱼主题标签-Tag-Plugins
tags:
  - null
categories:
  - null
top_img: transparent
date: 2023-12-09 12:45:36
cover: https://s3.bmp.ovh/imgs/2023/12/10/60a8a218c94d9d54.png
description:
---

#### 行内文本样式
- 彩色文字
  在一段话中方便插入各种颜色的标签，包括：{% p red, 红色 %}、{% p yellow, 黄色 %}、{% p green, 绿色 %}、{% p cyan, 青色 %}、{% p blue, 蓝色 %}、{% p gray, 灰色 %}。
- 超大号文字
  文档「开始」页面中的标题部分就是超大号文字。
  {% p center logo large, Volantis %}
  {% p center small, A Wonderful Theme for Hexo %}






{% btns circle grid5 %}
{% cell xaoxuu, https://xaoxuu.com, https://bu.dusays.com/2023/06/01/64787e6a5816d.png %}
{% cell xaoxuu, https://xaoxuu.com, https://bu.dusays.com/2023/06/01/64787e6a5816d.png %}
{% cell xaoxuu, https://xaoxuu.com, https://bu.dusays.com/2023/06/01/64787e6a5816d.png %}
{% cell xaoxuu, https://xaoxuu.com, https://bu.dusays.com/2023/06/01/64787e6a5816d.png %}
{% cell xaoxuu, https://xaoxuu.com, https://bu.dusays.com/2023/06/01/64787e6a5816d.png %}
{% endbtns %}



{% sitegroup %}
{% site xaoxuu, url=https://xaoxuu.com, screenshot=https://bu.dusays.com/2023/06/01/6478965ce6557.webp, avatar=https://cdn1.tianli0.top/gh/xaoxuu/cdn-assets/avatar/avatar.png, description=简约风格 %}
{% site Colsrch, url=https://colsrch.top, screenshot=https://i.loli.net/2020/08/22/dFRWXm52OVu8qfK.png, avatar=https://cdn1.tianli0.top/gh/Colsrch/images/Colsrch/avatar.jpg, description=这是一段关于这个网站的描述文字 %}
{% site Linhk1606, url=https://linhk1606.github.io, screenshot=https://bu.dusays.com/2023/06/01/6478963584621.png, avatar=https://bu.dusays.com/2023/06/01/6478968743368.png, description=这是一段关于这个网站的描述文字 %}
{% endsitegroup %}


#### 行内文本样式
#### 分栏 tab
{% tabs test1 %}

<!-- tab -->

**This is Tab 1.**

<!-- endtab -->

<!-- tab -->

**This is Tab 2.**

<!-- endtab -->

<!-- tab -->

**This is Tab 3.**

<!-- endtab -->

{% endtabs %}


{% tabs test2, 3 %}

<!-- tab -->

**This is Tab 1.**

<!-- endtab -->

<!-- tab -->

**This is Tab 2.**

<!-- endtab -->

<!-- tab -->

**This is Tab 3.**

<!-- endtab -->

{% endtabs %}

{% tabs test4 %}

<!-- tab 第一个Tab -->

**tab 名字为第一个 Tab**

<!-- endtab -->

<!-- tab @fab fa-apple-pay -->

**只有图标 没有 Tab 名字**

<!-- endtab -->

<!-- tab 炸弹@fas fa-bomb -->

**名字+icon**

<!-- endtab -->

{% endtabs %}


#### 时间轴 timeline
{% timeline 时间轴样式,blue %}

<!-- timeline 2020-07-24 [2.6.6 -> 3.0](https://github.com/volantis-x/hexo-theme-volantis/releases) -->

1. 如果有 `hexo-lazyload-image` 插件，需要删除并重新安装最新版本，设置 `lazyload.isSPA: true`。
2. 2.x 版本的 css 和 js 不适用于 3.x 版本，如果使用了 `use_cdn: true` 则需要删除。
3. 2.x 版本的 fancybox 标签在 3.x 版本中被重命名为 gallery 。
4. 2.x 版本的置顶 `top: true` 改为了 `pin: true`，并且同样适用于 `layout: page` 的页面。
5. 如果使用了 `hexo-offline` 插件，建议卸载，3.0 版本默认开启了 pjax 服务。

<!-- endtimeline -->

<!-- timeline 2020-05-15 [2.6.3 -> 2.6.6](https://github.com/volantis-x/hexo-theme-volantis/releases/tag/2.6.6) -->

不需要额外处理。

<!-- endtimeline -->

<!-- timeline 2020-04-20 [2.6.2 -> 2.6.3](https://github.com/volantis-x/hexo-theme-volantis/releases/tag/2.6.3) -->

1. 全局搜索 `seotitle` 并替换为 `seo_title`。
2. group 组件的索引规则有变，使用 group 组件的文章内，`group: group_name` 对应的组件名必须是 `group_name`。
2. group 组件的列表名优先显示文章的 `short_title` 其次是 `title`。

<!-- endtimeline -->

{% endtimeline %}
