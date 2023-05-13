import React, { Suspense } from 'react';
import { useRoutes } from 'react-router-dom';
import routes from './router';
import AppHeader from './components/AppHeader';
import Appfooter from './components/Appfooter';
function App() {
  return (
    <div className="App">
      <AppHeader />
      {/* 应急方案 */}
      <Suspense fallback="loading.......">{useRoutes(routes)}</Suspense>
      <Appfooter />
    </div>
  );
}
export default App;
