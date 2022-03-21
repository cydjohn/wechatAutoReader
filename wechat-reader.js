// ==UserScript==
// @name         微信读书自动读书插件
// @namespace    cyd
// @version      0.1
// @description  自动读书
// @author       cyd
// @match        https://weread.qq.com/web/reader/*
// @grant        none
// ==/UserScript==

(function () {
    'use strict';
    // .click() 在这里用不了，所以创建一个鼠标点击事件
    let clickEvent = new MouseEvent("click", {
        bubbles: true,
        cancelable: true,
        clientX: 150,
        clientY: 150
    });
    // 每五分钟点击一次“下一章”按钮
    setInterval(function () {
        var nextPageButton = document.getElementsByClassName("readerFooter_button")[0];
        nextPageButton.dispatchEvent(clickEvent);
    }, 300000);
})();
