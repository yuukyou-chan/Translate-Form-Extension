console.log('This is the background page.');
console.log('Put the background scripts here.');

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  console.log('BG 收到来自context 的消息', request);
  if (request.action === 'sendMicroConfigObjTobg') {
    const microConfigObj = request.microConfigObj;
    chrome.storage.sync.set({ microConfigObj });

    // chrome.runtime.sendMessage({
    //   action: 'updateMicroConfigObjTobg',
    //   microConfigObj,
    // });
  }
});
