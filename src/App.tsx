import React, { Suspense, useEffect } from 'react';
import { useLocation, useRoutes } from 'react-router-dom';
import routes from './router';
import AppHeader from './components/AppHeader';
import Appfooter from './components/Appfooter';
import Playbar from './views/playArea/Playbar';
import { usedispatch } from './store';
import { getsong } from './views/playArea/Playbar/store';
function App() {
  const location = useLocation();
  console.log(location);
  const dispatch = usedispatch();
  useEffect(() => {
    dispatch(getsong(488249475));
  }, []);
  return (
    <div className="App">
      {location.pathname == '/login' ? '' : <AppHeader />}
      {/* 应急方案 */}
      <Suspense fallback="loading.......">{useRoutes(routes)}</Suspense>
      {location.pathname == '/login' ? '' : <Appfooter />}
      {location.pathname == '/login' ? '' : <Playbar />}
    </div>
  );
}
export default App;
