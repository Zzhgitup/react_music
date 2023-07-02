import React, { Suspense, useEffect } from 'react';
import { useRoutes } from 'react-router-dom';
import routes from './router';
import AppHeader from './components/AppHeader';
import Appfooter from './components/Appfooter';
import Playbar from './views/playArea/Playbar';
import { usedispatch } from './store';
import { getsong } from './views/playArea/Playbar/store';
function App() {
  const dispatch = usedispatch();
  useEffect(() => {
    dispatch(getsong(488249475));
  }, []);
  return (
    <div className="App">
      <AppHeader />
      {/* 应急方案 */}
      <Suspense fallback="loading.......">{useRoutes(routes)}</Suspense>
      <Appfooter />
      <Playbar />
    </div>
  );
}
export default App;
