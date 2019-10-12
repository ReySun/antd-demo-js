import React from 'react';
import logo from './logo.svg';
import './App.css';
import { alreadyUseFunction, notUseFunction } from './dynamic-import-test';
import { Button, Pagination } from 'antd';

alreadyUseFunction();
// notUseFunction(); // 生产环境打包之后 没有notUseFunction函数

function App() {
  return (
    <div className="App">
      <Button type="primary">Primary</Button>
      <Pagination defaultCurrent={1} total={50} />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
