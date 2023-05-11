import React, { Suspense } from 'react';
import { useRoutes, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import routes from './router';
import type { RootState } from './store';
function App() {
  const { name } = useSelector((state: RootState) => ({
    name: state.counter.name
  }));
  return (
    <div className="App">
      <h2>{name}</h2>
      <div id="headernav">
        <Link to="/discover">发现音乐</Link>
        <Link to="/mine">我的音乐</Link>
        <Link to="/focus">关注</Link>
        <Link to="/download">下载</Link>
      </div>
      {/* 应急方案 */}
      <Suspense fallback="loading.......">{useRoutes(routes)}</Suspense>
    </div>
  );
}
export default App;
