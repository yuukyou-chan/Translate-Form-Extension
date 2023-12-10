import { changeColor } from './modules/change-color';

changeColor();

// Assuming the HTML content you want to get is in the body
var htmlContent = document.body.innerHTML;
console.log('injectScriptHtmlContent', htmlContent);

// Send the HTML content back to the extension
chrome.runtime.sendMessage({ message: 'html_fetched', html: htmlContent });

// const { tip } = await chrome.runtime.sendMessage({ greeting: 'tip' });
// console.log('tips',tip)
