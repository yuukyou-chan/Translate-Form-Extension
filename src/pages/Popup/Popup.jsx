import React, { useEffect, useState } from 'react';
import './Popup.css';
import { Button, Divider } from 'antd';
import { getAllImage } from './handle';
import checkPage from './checkPage';
import ImgListShow from '../../containers/imgList/img-list';

const Popup = () => {
  // 保存图片链接
  const [imgList, setImgList] = useState([]);
  // 保存已经勾选了的图片
  const [checkedImg, setCheckImg] = useState([]);
  const [html, setHtml] = useState('6');

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
      'script[shield-web-config-inject=""]'
    );
    // let microConfig = window.__microConfig;

    let microConfig = microConfigScript.textContent;
    const reg = /window\.__microConfig\s*=\s*({[^{}]*})/s;
    let obj = microConfig.match(reg);
    // let extractedObject = JSON.parse(obj);
    console.log('document', microConfig, obj);

    return microConfig;
  };

  //获取当期勾选了的图片
  const getCheckedImg = (list) => {
    setCheckImg(list);
  };

  //下载图片
  const downLoadImg = () => {};

  useEffect(() => {
    insertScripts();
    // chrome.runtime.onMessage.addListener(function (
    //   request,
    //   sender,
    //   sendResponse
    // ) {
    //   if (request.message === 'html_fetched') {
    //     // Handle the HTML content sent from the background script
    //     console.log('HTML Content in Popup:', request.html);
    //     setHtml(request.html);
    //   }
    // });
  }, []);

  return (
    <div className="App">
      <div className="button-tool">
        <Button type="primary" onClick={getHtml}>
          获取图片
        </Button>
        <Button
          type="primary"
          disabled={checkedImg.length === 0}
          onClick={downLoadImg}
        >
          下载图片
        </Button>
      </div>
      {/* <Divider
        orientation="left"
        style={{ fontSize: '10px', fontWeight: 500, letterSpacing: '5px' }}
      >
        共{imgList.length}张图片，已勾选{checkedImg.length}张图片
      </Divider>

      <ImgListShow list={imgList} getChecked={getCheckedImg} /> */}
      <div>{html}</div>
    </div>
  );
};

export default Popup;
