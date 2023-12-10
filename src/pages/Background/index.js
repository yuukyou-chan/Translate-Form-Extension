// console.log('This is the background page.');
// console.log('Put the background scripts here.');

// chrome.runtime.onInstalled.addListener(function () {
//   // Handle onInstalled event if needed
// });

// // chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
// //   console.log('发送消息', request, sendResponse);
// //   if (request.message === 'fetch_html') {
// //     chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
// //       var activeTab = tabs[0];
// //       chrome.scripting.executeScript({
// //         target: { tabId: activeTab.id },
// //         function: injectScript,
// //       });
// //     });
// //   }
// // });

// function injectScript() {
//   // This function is executed in the context of the webpage
//   // You can use it to manipulate the DOM or perform other actions on the page
//   // Example:

//   // Assuming the HTML content you want to get is in the body
//   var htmlContent = document.body.innerHTML;
//   console.log('injectScriptHtmlContent', htmlContent);

//   // Send the HTML content back to the extension
//   chrome.runtime.sendMessage({ message: 'html_fetched', html: htmlContent });
// }

// const [tab] = chrome.tabs.query({
//   active: true,
//   lastFocusedWindow: true,
// });
// const response = await chrome.tabs.sendMessage(tab.id, { greeting: 'hello' });
// // do something with response here, not outside the function
// console.log(response);
