import React, { useEffect, useState } from 'react';
import './Popup.css';
import { Button, Table } from 'antd';
import checkPage from './checkPage';

const Popup = () => {
  const [html, setHtml] = useState('6');
  const [microConfigObj, setMicroConfigObj] = useState({});
  const [dataSource, setDataSource] = useState([]);

  // 注入脚本
  const insertScripts = () => {
    checkPage(async (tab) => {
      //依赖注入
      const result = await chrome.scripting.executeScript({
        target: { tabId: tab.id },
        // func: getAllImage,
        func: getHtml,
      });
      setHtml(Object.toString(result));
    });
  };

  // 获取当前网页源代码
  const getHtml = () => {
    let microConfigScript = document.head.querySelector(
      'script[shield-web-config-inject]'
    );
    console.log('microConfigScript', microConfigScript, document.head);
    return microConfigScript;
  };

  useEffect(() => {
    console.log('microConfigObj', microConfigObj);
    if (microConfigObj) {
      const data = [];
      Object.keys(microConfigObj).forEach((key, index) => {
        console.log();
        data.push({
          app: key,
          version: microConfigObj[key].match(/(\d+\.\d+\.\d+)$/)[0],
        });
      });
      setDataSource(data);
      console.log('data', data);
    }
  }, [microConfigObj]);

  useEffect(() => {
    insertScripts();
    // chrome.runtime.onMessage.addListener(function (
    //   request,
    //   sender,
    //   sendResponse
    // ) {
    //   console.log('POPUP收到来自bg的消息', request);
    //   if (request.action === 'sendMicroConfigObjTobg') {
    //     setMicroConfigObj({ ...request.microConfigObj });
    //   }
    // });
    chrome.storage.sync.get(['microConfigObj'], function (data) {
      console.log('DOMContentLoadedStorage', data);
      setMicroConfigObj({ ...data.microConfigObj });
    });

    window.onload = () => {
      chrome.storage.sync.get(['microConfigObj'], function (data) {
        console.log('OnloadStorage', data);
        setMicroConfigObj({ ...data.microConfigObj });
      });
    };

    document.addEventListener('DOMContentLoaded', () => {
 
    });
  }, []);

  return (
    <div className="App">
      <div className="button-tool">
        <Table
          size="small"
          columns={[
            { title: '子应用名', dataIndex: 'app' },
            { title: '版本', dataIndex: 'version' },
            { title: '操作' },
          ]}
          dataSource={dataSource}
          pagination={false}
        ></Table>
      </div>
    </div>
  );
};

export default Popup;
