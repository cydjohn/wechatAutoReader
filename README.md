# 微信读书刷时长

微信读书自动翻页脚本，用于刷时长，支持全平台，有浏览器就行。

## 安装方法

需要 Chrome 或者 Firefox 以及 油猴脚本(Tampermonkey)。可以通过[谷歌Chrome商店](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo?hl=en)安装，或者自行百度安装方法。其他浏览器安装了Tampermonkey应该也可以，但是这里只测试过Chrom和Firefox。

在Tampermonkey的设置页面-> `Utilities`-> `Import from URL` 中添加
```
https://github.com/cydjohn/wechatAutoReader/blob/main/wechat-reader.js
```
即可


## 使用

在网页中打开[微信读书](https://weread.qq.com)，登陆，打开任意一本书即可。脚本每两分钟会点击一次下一章。建议选一本厚一点的书，比如XXX全集，一次可以刷十几个小时。

