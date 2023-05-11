import React, { Suspense } from 'react';
import { useRoutes, Link } from 'react-router-dom';
import routes from './router';
//导入自己签过名的类型，类似于加工过的useSelector
import { useAppselect } from './store';
import { changename } from './store/modules/count';
import { usedispatch, appshallowEqual } from './store';
function App() {
  const { name, age } = useAppselect(
    (state) => ({
      name: state.counter.name,
      age: state.counter.age
    }),
    appshallowEqual //浅层比较
  );
  //
  const dispatch = usedispatch();
  return (
    <div className="App">
      <h2>
        {name},{age}
      </h2>
      <div id="headernav">
        <button
          onClick={() => {
            dispatch(changename('123'));
          }}
        >
          更改
        </button>
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
