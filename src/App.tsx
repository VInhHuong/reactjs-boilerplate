import './App.css';
import './App.less';

import { Button } from 'antd';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

import logo from './logo.svg';

function App() {
  const [count, setCount] = useState(0);
  const { t } = useTranslation();
  return (
    <div className="App">
      <header className="flex flex-col items-center w-full pt-8">
        <span className="w-24 animate-bounce">
          <img src={logo} alt="logo" />
        </span>
        <p className="text-primary">{t('title')}</p>
        <p>
          <Button onClick={() => setCount((count) => count + 1)} type="primary">
            count is: {count}
          </Button>
        </p>
        <p>
          Edit <code>App.tsx</code> and save to test HMR updates.
        </p>
        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {' | '}
          <a
            className="App-link"
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docs
          </a>
        </p>
      </header>
    </div>
  );
}

export default App;
