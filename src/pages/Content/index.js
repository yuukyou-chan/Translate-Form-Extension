import { findMaxString, extractNestedBrackets } from './modules/utils ';

// 获取当前网页源代码中注入的微前端配置标签
let microConfigScript = document.head.querySelector(
  'script[shield-web-config-inject]'
);
console.log('injectScriptHtmlContent', microConfigScript.textContent);
const microScriptText = microConfigScript?.textContent;
const match = microScriptText.match(/remoteApps:\{.*?\}/g)[0].match(/\{.*?\}/g);
const microConfigObj = JSON.parse(match);
console.log('match', JSON.parse(match));

// 发送消息到 Background.js
chrome.runtime.sendMessage({
  action: 'sendMicroConfigObjTobg',
  microConfigObj,
});
