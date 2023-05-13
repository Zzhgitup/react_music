//配置所有路由
import React from 'react';
import { RouteObject, Navigate } from 'react-router-dom';
import {
  Discover,
  Download,
  Focus,
  Mymusic,
  AnchorRadioStation,
  Artist,
  Ranking,
  Recommend,
  Sing,
  NewSongitem
} from './modules/routes.js';
const routes: RouteObject[] = [
  {
    path: '/' /* 重定向 */,
    element: <Navigate to="/discover" />
  },
  {
    path: '/discover',
    element: <Discover />,
    children: [
      {
        path: 'discover/',
        element: <Navigate to="recommed" />
      },

      {
        path: 'recommed',
        element: <Recommend />
      },
      {
        path: 'ranking',
        element: <Ranking />
      },
      {
        path: 'sing',
        element: <Sing />
      },
      {
        path: 'anchorradiostation',
        element: <AnchorRadioStation />
      },
      {
        path: 'recommend',
        element: <Recommend />
      },
      {
        path: 'newsongitem',
        element: <NewSongitem />
      },
      {
        path: 'artist',
        element: <Artist />
      }
    ]
  },
  {
    path: '/download',
    element: <Download />
  },
  {
    path: '/focus',
    element: <Focus />
  },
  {
    path: '/mine',
    element: <Mymusic />
  }
];
export default routes;
