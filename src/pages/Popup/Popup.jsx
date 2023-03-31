import React from 'react';
import logo from '../../assets/img/logo.svg';
import './Popup.css';
import Greetings from '../../containers/Greetings/Greetings'
import { Button } from 'antd';
import { funaa } from './handle';
import checkPage from './checkPage'

const Popup = () => {
  // 注入脚本
  const insertScripts = () => {
   checkPage(funaa)
  }

  return (
    <div className="App">
      <p>这里是popup弹窗页</p>
      <img className='App-logo' src={logo} alt="图片" />
      <Greetings />
      <Button type='primary' onClick={insertScripts}>按钮</Button>
    </div>
  );
};

export default Popup;
